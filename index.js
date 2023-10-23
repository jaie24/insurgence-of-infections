// DATE : 14 OCT 

let health;
let score; // difference between health and score is health is how much youve got shot, then score is how many times youve shoot the virus
let timer; 

// declare all costants for keyboard event values
// constants for movement
const KEY_SHOOT = 32; // to shoot bacteria -> spacebar
const KEY_UP = 38; // to move up
const KEY_DOWN = 40;  // to move left
const KEY_PAUSE = 80;

// constants for width and height of game window (TBD LATER)
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;



// INITIALIZE THE GAME
const $container = document.querySelector(".player-container");

// ------------- DEFENSE  ----------- //
// player icon
// SET PLAYER ICON WIDTH AND HEIGHT WITHIN THE CANVAS, PLAYER SHOULD BE 20% ABOVE THE BOTTOM OF THE SCREEN

function setPlayerPosition($element, width){
    $element.style.width = '${width}px';
    $element.style.height = 'auto'; 
}


function createPlayer ($container) {
    const player_width = 50; 
    const $player = document.createElement("img");
    $player.src = "assets/wbc-master.png";
    $player.className = "player";
    $container.appendChild($player);
    setPlayerSize($player, player_width);
}
// ------------  OFFENSE ----------- //


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


createPlayer($container);