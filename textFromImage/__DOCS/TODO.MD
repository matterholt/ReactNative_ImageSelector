# App Items

## THOUGHTS

- first navitageted to the the album screen and the user would have to click on "ADD IMAGE" to then activate the album library. This is if user wants to add another image while in the album screen or camera screen.

- Second ideas was to cick on album access button at the home screen and select images then navitagate to the album "results" page. The issue with this is that once the image is selected the "Home" screen is is displayed and then switches to the album results screen. not very fluid

- Third I want to navigate to the album screen and inital is a loading screen, letting the user now that the programin is working on accesing library. Then when ready the album will be able to be accessed, and switching the status to loading, selecting image. then processing the image for words.

## TODOS

11-08-2021

- [ ] update style on OCR results list

11-04-2021

- [ x ] Update the state of array of words, make an array of objects. {id,word,isToxic}

- [ X ] Evaluate the words before the get toss in to state.

- [ X ] Handle when Images or process has an error. Most likely would be selected images, or OCR has error. Just starte from home, or select image again

- [ X ] Loading results , Show image selected but have a loading component when image is being tossed through the OCR and object that is being created

- [ x ] Component displayed for when no words are found in the image. "select a anoter image"

- [ x ] for flatlist when ingredient is "Toxic" have some style to it,

## Later Items

- [ ] Set up image permissions for android. react-native-image-crop-picker
