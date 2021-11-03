//
//  ocr.swift
//  LightApp
//
//  Created by Matt Atterholt on 9/20/21.
//  code example from url below
// https://github.com/JoeyEamigh/react-native-text-recognition/blob/ml-only/ios/TextRecognition.swift
//

import Foundation
import MLKit
import UIKit

import MLImage
import MLKitTextRecognition
import MLKitVision

extension String {
  func stripPrefix(_ prefix: String) -> String {
    guard hasPrefix(prefix) else { return self }
    return String(dropFirst(prefix.count))
  }
}

@objc(TextOCR)
class TextOCR: NSObject {
  @objc(recognize:withResolver:withRejecter:)

  // the function that will get called when an image will be processed
  func recognize(imgPath: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    guard !imgPath.isEmpty else { reject("ERR", "You must include the image path", nil); return }

    let formattedImgPath = imgPath.stripPrefix("file://")

    do {
      // STEP 2 -> Prepare the image, orientation and other
      let imgData = try Data(contentsOf: URL(fileURLWithPath: formattedImgPath))
      let image = UIImage(data: imgData)!

      let visionImage = VisionImage(image: image)
      visionImage.orientation = image.imageOrientation



      // STEP 1 -> Create an instance of TextRecognizer
      let textRecognizer = TextRecognizer.textRecognizer()


      // STEP 3 -> Process the image and return a block of text
      textRecognizer.process(visionImage) { result, error in

        guard error == nil, let result = result else { return }

        // debug
        let resultText = result.text
        print(resultText)

        var recognizedTextBlocks = [String]()

        for block in result.blocks {
          recognizedTextBlocks.append(block.text)
        }

        resolve(recognizedTextBlocks)
      }
    } catch {
      print(error)
      reject("ERR", error.localizedDescription, nil)
    }
    
    
    
  }
}
