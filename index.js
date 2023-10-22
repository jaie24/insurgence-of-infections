// DATE : 14 OCT 

// declare all costants 
// constants for movement
const key_float = 32; // to move up or to "float"
const key_right = 39; // to move right
const key_left = 37;  // to move left
const key_shoot = 13; // to shoot 

// constants for width and height of game window (TBD LATER)
const game_width;  
const game_height;

let health;
let score; // difference between health and score is health is how much youve got shot, then score is how many times youve shoot the virus
let timer; 
// const canvas = document.querySelector('canvas');

// const c = canvas.getContext('2d');
// const game = new Game(); // <-- will be swidth and height of the canvas, but in our context it will be side of the container
// SETTING CANVAS WIDTH AND HEIGHT 
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ------------- DEFENSE  ----------- //
// player icon
// SET PLAYER ICON WIDTH AND HEIGHT WITHIN THE CANVAS, PLAYER SHOULD BE 20% ABOVE THE BOTTOM OF THE SCREEN

let playerWidth = 
 
// ------------  OFFENSE ----------- //

// set 


c.fillRect(0, 0, canvas.width, canvas.height);

window.onload = function () {
    canvas =  document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // DRAW THE PLAYER ICON HERE
    context.fillStyle = "pink"; // CHANGE THIS LINE LATER
    context.fillRect() // CHANGE VAR, ADD PARAMETER

    // LOAD IMAGE
    defenseIcon = new Image();
    defenseIcon.src; // ADD LINK TO PLAYER ICON HERE
    // for image to load use .onload()
    defenseIcon.onload = function() {
        // DRAW IMAGE HERE
    }

    offenseIcon = new Image(); 
    offenseIcon.src; // ADD LINK TO ANGRY BACTERIA HERE
    requestAnimationFrame(update);

    // context.drawImage(playerIcon, ....) // add properties of image here 
}
 
// --------------------------------------------------
const player {
    // set attributes such as player width and height 
}


function update() {
    // redraw the player icon 
}


function projectile() {
    // method to shoot the cells at the bad bacteria
}

function buildCell() {
    // declare constant cell element using div for cell element
    const cell = document.createElement(); 
    // set attributes of cell 
    cell.setAttribute()
    return cell;
}

function buildVirus() {

}

function buildCells() {
    // loop through {
        
    //}
}
// NOT SURE IF THIS METHOD WORKS FOR THIS PART YET, TBD ////
function game(width, height) {
    // create the game 
    this.width = width;
    this.height = height; 

    // once the game lloads, update the player
    update(){

    }
    // draw the player onto the screen 
    draw() {
        // access draw method of player
    }
}