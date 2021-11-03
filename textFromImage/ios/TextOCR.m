//
//  TextOCR.m
//  LightApp
//
//  Created by Matt Atterholt on 9/28/21.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(TextOCR, NSObject)

RCT_EXTERN_METHOD(recognize
                  : (NSString *)imgPath withResolver
                  : (RCTPromiseResolveBlock)resolve withRejecter
                  : (RCTPromiseRejectBlock)reject)

@end
