// Declare variables below to save the different divs of your story.

const music = document.getElementById('bgMusic');

function startBackgroundMusic() {
    music.play().then(() => {
        // Remove the listener immediately so it doesn't fire on every single click
        window.removeEventListener('click', startBackgroundMusic);
    }).catch(err => console.log("Waiting for distinct interaction...", err));
}

// Listen for the first click on the window
window.addEventListener('click', startBackgroundMusic);



document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");

  // Wait 2000 milliseconds (2 seconds) then hide splash screen
  setTimeout(() => {
    splashScreen.classList.add("splash-hidden");
  }, 2000);
});




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });