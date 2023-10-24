/* Course: SENG 513 */
/* Date: OCT 23, 2023 */
/* Assignment 2 */
/* Name: Jiayi Teh */
/* UCID: 30142476 */

let health = 3;
let score = document.querySelector('.score'); // difference between health and score is health is how much youve got shot, then score is how many times youve shoot the virus
let timer = document.querySelector('.timer'); 
let InitialTime = 190; // let our initial time be 190 seconds
let InitialScore = 0;
let treatmentBoolean = false;

// constants for basic containers 
const GAME_CONTAINER = document.querySelector('.game-container');
const startButton = document.getElementsByClassName('.start-button-container')
// declare all costants for keyboard event values
// constants for movement
const KEY_SHOOT = 32; // to shoot bacteria -> spacebar
const KEY_UP = 48; // to move up
const KEY_DOWN = 49;  // to move left
const KEY_PAUSE = 80;

// constants for game mechanics 
const base_score = 30;


// ---------- GENERAL FUNCTIONS ---------

// SET INITIAL STATES OF PLAYER 
const PLAYER_STATE = {
    shoot : false, // player is not shooting
    up : false, // player is at rest
    down : false, // player is at rest
    pause : false, 
    cells : [], 
    player_position : 0,
    gameOver : false,
    wbc_state : false,
    virus_state : false,
}

// VISUAL ELEMENTS USING JAVASCRIPT : FALLING RED BLOOD CELLS
// METHOD FOR FALLING RED BLOOD CELLS (VISUAL ELEMENT)
function falling_rbc() {
    // initialize x to be number of rbc icons to append
    const x = 0;
    // display for rbc icon becomes visible
    // loop to create and append rbc icons
        // createElement of image
        // add class name of RBC
        // set image source
        // for each iteration, increase the margin of each red blood cell
        // calculate margin, and increase margin by 30px for each red blood cell icon
        // appendChild the red blood cell (RBC) icon to the game container
}

// DECLARE EVENTS FOR WHEN KEY IS BEING PRESSED
function onKey(event) {
    if(event.keyCode === KEY_UP) {
        PLAYER_STATE.up = true;
        movePlayer();
    } else if (event.keyCode === KEY_DOWN) {
        PLAYER_STATE.down = true;
        movePlayer();
    } else if (event.keyCode === KEY_SHOOT) {
        PLAYER_STATE.shoot = true;
    } else if (event.keyCode === KEY_PAUSE) {
        PLAYER_STATE.pause = true;
    } 
}

// DECLARE EVENTS FOR WHEN KEY IS LET GO 
function offKey(event) {
    if(event.keyCode === KEY_UP) {
        PLAYER_STATE.up = false;
    } else if (event.keyCode === KEY_DOWN) {
        PLAYER_STATE.down = false;
    } else if (event.keyCode === KEY_SHOOT) {
        PLAYER_STATE.shoot = false;
    } else if (event.keyCode === KEY_PAUSE) {
        PLAYER_STATE.pause = false;
    } 
}


// METHOD TO MOVE PLAYER UP AND DOWN 
function movePlayer() {
    const playerIcon = document.querySelector(".player-icon");
    // IF UP IS TRUE, PLAYER MOVES UP, IF DOWN IS TRUE, PLAYER MOVES DOWN
    // REPOSITION PLAYER ICON IN THE GAME CONTAINER BY REPOSITIONING THE MARGIN AND ADDING PX TO IT
    if (PLAYER_STATE.up === true) {
        PLAYER_STATE.player_position =+ 3;
        playerIcon.style.marginTop = PLAYER_STATE.player_position + "px";
    } else if (PLAYER_STATE.down === true) {
        PLAYER_STATE.player_position -= 3;
        playerIcon.style.marginTop = PLAYER_STATE.player_position + "px";
    }
}

// METHOD FOR SCORE
function set_score (collision) {
    // set initial score to be 0 from variable above
    // call function collision 
    // if collision from above function is true, increment score by 1
    // also call set_treatment, if treatmentBoolean is true, then increment score by 8
}

function set_health () {
    // initial health will be 3;
    // if score is < 30  
    // decrease health by 1
    // remove the health icon everytime health decreases by 1
    // eventually if health = 0 , there will be no health icons
    // if health = 0, game over is true, call gameOver()
}

function set_treatment () {
    // add event listener for when antibiotics-button class is clicked
    // if it is clicked, treatmentBoolean is true, 
}
//  ------------------ PLAYER -----------------
// METHOD TO MOVE PLAYER UP AND DOWN 
function updatePlayer() {
    const playerIcon = document.querySelector(".player-icon");
    // IF UP IS TRUE, PLAYER MOVES UP, IF DOWN IS TRUE, PLAYER MOVES DOWN
    // REPOSITION PLAYER ICON IN THE GAME CONTAINER BY REPOSITIONING THE MARGIN AND ADDING PX TO IT
    if (PLAYER_STATE.up === true) {
        PLAYER_STATE.player_position =+ 3;
        playerIcon.style.marginTop = PLAYER_STATE.player_position + "px";
    } else if (PLAYER_STATE.down === true) {
        PLAYER_STATE.player_position -= 3;
        playerIcon.style.marginTop = PLAYER_STATE.player_position + "px";
    }
}

// BASIC METHOD TO BUILD WHITE BLOOD CELLS
function buildImmunity() {
    // create white blood cells based by creating elemt
    // declare src and class name of the white blood cells (already exists in css for part1 ,but will update in part 2)
    // append white blood cells to the game container 
    // set position for white blood cells

}

// BASIC METHOD TO UPDATE THE WHITE BLOOD CELLS BEING SHOT FROM THE PLAYER
function updateImmunity() {
    // create immunity bullets based on the state of the enemy
    // for loop and increment i 
    // set position of updated immunity bullets (following where the player moves)
    // if collision() is true, delete the wbite blood cell (container.removeChild)
}

// --------------- ENEMY -------------- 
// BASIC METHOD TO BUILD VIRUS CELLS
function buildVirus() {
    // create enemy virus based by creating elemt
    // declare src and class name of the virus (already exists in css for part1 ,but will update in part 2)
    // set position for virus
    // append virus to the game container 
}

// METHOD TO UPDATE VIRUS SHOTS COMING FROM INFECTION
function updateVirus() {
    // create enemy virus bullets based on the state of the enemy
    // for loop and increment i 
    // for every iteration, increment i 
    // set position of updated virus bullets (following where the enemy moves)
    // if collision() is true, delete the virus (container.removechild)
}

function deleteVirus(wbc_state, virus_state) {
    // takes on parameter of state of wbc and state of virus
    // removes child element of virus from the game container
}

// METHOD TO SHOOT WHITE BLOOD CELLS AT THE VIRUS
function checkCollision() {
    // get bounding dimension of white blood cells (basophil/neutrophil) and virus using .getBoundingClientRect()
    // check if bounding boxes intersect by comparing (whitebloodcellname).right/left/bottom/top 
    // with virus.(left/right/bottom/top)
    // if collision is detected, set collision to be 1
    // call upon deleteVirus to delete the viru
    // call upon score method by passing in initial score 
    // when score method is called and everytime a collision occurs, score will increase by 1

}

function updateEnemy() {
    // enemy should move up and down 50 px from top and bottom of the game container
}

function gameOver() {
    // if health is 0 , game is over, 
}


function update() {
    updatePlayer();
    updateEnemy();
    updateImmunity();
    updateVirus();

    // request animation frame
    // call upon gameOver(), if game over, text display of disease-start title changes to "game-over" and becomes visible
    // otherwise, text display of disease-start-title changes to "you survived the infection!"
}
// -------- INITIALIZATION OF THE GAME HERE ---------
// call upon buiidPlayer
// call upon buildVirus
startButton.addEventListener('click', startGame)
    
function startGame() {

    falling_rbc();
    window.addEventListener("keyUp", onKey);
    window.addEventListener("keyDown", offKey)
    update();
    
}

