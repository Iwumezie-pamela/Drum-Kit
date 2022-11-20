//DETECTING BUTTON PRESSED
const drumSet=document.querySelector('.set');

const buttons=document.querySelectorAll('.drum');



for (let button of buttons) {
  button.addEventListener('click',function(){
    //HOW DO WE KNOW WHEN A SPECIFIC BUTTON IS PRESSED AND HOW CAN WE MAKE IT PLAY ITS DESIRED SOUND AND WE CAN FIGURE THE IDENTITY BY TAPPING INTO SOMETHING CALLED THIS.
let buttonInnerHTML=this.innerHTML//helps us know the exact button that was pressed

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);  //this would enable the animation to show when the  button is pressed
    // this.style.color = "white";   //change the color of the button that got clicked to white

  })
}

//DETECTING KEYBOARD PRESSED

//USING THE KEYBOARD KEYS

drumSet.addEventListener('keydown',function(event){
makeSound(event.key);

buttonAnimation(event.key);  //this would enable the animation to show when the current key is pressed
// console.log(event.key);
});
//HOW DO WE FIGURE OUT THE KEY PRESSED


function makeSound(key){   //create a function and call it back in our keydown event and also the innerHTML part.
  switch (key) {    //this contains the exact key pressed
    case 'w':
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
    break;

    case 'a':
       let kickbass = new Audio('sounds/kick-bass.mp3');
       kickbass.play();
    break;

    case 's':
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case 'd':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case 'j':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case 'k':
      let tom3 =new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case 'l':
       let tom4 =new Audio('sounds/tom-4.mp3');
       tom4.play();
      break;
    default:
}
}

//LETS SAY WE WANT OUR BUTTON TO FLASH OR SHOW AN ANIMATION WHEN THE KEY OR BUTTON IS PRESSED,WE DO THIS (WE WOULD CREATE A FUNCTION WITH THE NAME BUTTON ANIMATION AND ALSO TO MAKE SOUND)
function buttonAnimation(currentKey){

let activeButton=document.querySelector("." + currentKey);//THIS IS THE BUTTON WHOSE STYLE WOULD BE CHANGED
activeButton.classList.add("pressed"); //this adds the pressed class stated in our css to the button when pressed either with the keyboard or button.

setTimeout(function(currentKey){
  activeButton.classList.remove("pressed");
},100);
}
