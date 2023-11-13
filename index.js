/* Course: SENG 513 */
/* Date: OCT 23, 2023 */
/* Assignment 2 */
/* Name: Jiayi Teh */
/* UCID: 30142476 */

// THINGS TO FIX : 
// ENEMY MOVING RANDOMLY
// CHANGE BOUNDARY FOR LOWER PART OF PLAYER

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
const KEY_UP = 38; // to move up
const KEY_DOWN = 40;  // to move left
const KEY_PAUSE = 80; // TO BE CHANGED


// constants for game container 
const WIDTH = 800;
const HEIGHT = 600;
// constants for game mechanics 
const base_score = 30;


// ---------- GENERAL FUNCTIONS ---------

// SET INITIAL STATES OF PLAYER 
const PLAYER_STATE = {
    x_position : 0,
    y_position : 0,
    shoot : false, // player is not shooting
    up : false, // player is at rest
    down : false, // player is at rest
    pause : false, 
    cells : [], 
    player_position : 0,
    gameOver : false,
    wbc_state : false,
    virus_state : false,
    player_width : 150
}

const ENEMY_STATE = {
    x_position : 0,
    y_position : 0,
    enemy_width : 150
}

const CELL_STATE = {
    cell_width : 50
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
//test commit here

// DECLARE EVENTS FOR WHEN KEY IS BEING PRESSED
function onKey(event) {
    if(event.code === "ArrowUp") {
        PLAYER_STATE.up = true;
        console.log("right key is pressed");
    } else if (event.code === "ArrowDown") {
        PLAYER_STATE.down = true;
        console.log("left key is pressed");
    } else if (event.code === "Space") {
        PLAYER_STATE.shoot = true;
    } else if (event.code === "KeyP") {
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


// SETTING UP BASIC FUNCTIONS FOR POSITION AND SIZE OF THE ELEMENTS
function setElementPosition($element, x, y){
    $element.style.transform = `translate(${x}px, ${y}px)`;
}

function setElementSize($element, width){
    $element.style.width = `${width}px`;
    $element.style.height = "auto";
}
//  ------------------ PLAYER -----------------

function createPlayer($container) {
    PLAYER_STATE.x_position = WIDTH / 10;
    PLAYER_STATE.y_position = HEIGHT - 250;
    const $player = document.createElement("img");
    $player.src = "assets/wbc-master.png"; // Corrected the file extension
    $player.className = "player";
    setElementPosition($player, PLAYER_STATE.x_position, PLAYER_STATE.y_position);
    setElementSize($player, PLAYER_STATE.player_width);
    
    // Append the player to the game container
    $container.appendChild($player);
}


// METHOD TO MOVE PLAYER UP AND DOWN 
function updatePlayer() {
    // IF UP IS TRUE, PLAYER MOVES UP, IF DOWN IS TRUE, PLAYER MOVES DOWN
    // REPOSITION PLAYER ICON IN THE GAME CONTAINER BY REPOSITIONING THE MARGIN AND ADDING PX TO IT
    // IF PLAYER PRESSES KEY TO GO UP, THE Y POSITION
    // CHECK MOVEMENT OF PLAYER
    if (PLAYER_STATE.up === true) {
        PLAYER_STATE.y_position -= 2;
    }
    if (PLAYER_STATE.down === true) {
        PLAYER_STATE.y_position += 2;
    } 
    // CHECK IF PLAYER IS SHOOTING CELLS
    if (PLAYER_STATE.shoot === true){
         
        buildImmunity($container, PLAYER_STATE.x_position, PLAYER_STATE.y_position);
    }

    const $player = document.querySelector(".player");
    setElementPosition($player, PLAYER_STATE.x_position, limit(PLAYER_STATE.y_position));
}

// BASIC METHOD TO BUILD WHITE BLOOD CELLS
/**
 * @param container : container of where white blood cells will be shown on screen
 * @param x : x-coordinate of white blood cell
 * @param y : y-coordinate of white blood cell
 */
function buildImmunity($container, x, y ) {
    // create white blood cells based by creating elemt
    // declare src and class name of the white blood cells (already exists in css for part1 ,but will update in part 2)
    // append white blood cells to the game container 
    // set position for white blood cells
    // code implementation will be similar to createplayer method
    const $wbcell = document.createElement("img");
    $wbcell.src = "assets/neutrophil.png"; 
    $wbcell.className = "wbcell";  

    // now append each white blood cell (wb cell) to the list created in the beginning
    $container.appendChild($wbcell);
    const wbcell = {$wbcell, x, y};
    // REMEMBER TO ADD WHAT YOU VISUALIZE ITS DOING HERE
    PLAYER_STATE.cells.push(wbcell);
    
    setElementPosition($wbcell, x, y);
    setElementSize($wbcell, CELL_STATE.cell_width);
    // setElementSize($player, PLAYER_STATE.player_width);
    
}

// BASIC METHOD TO UPDATE THE WHITE BLOOD CELLS BEING SHOT FROM THE PLAYER
function updateImmunity($container) {
    // create immunity bullets based on the state of the enemy
    // for loop and increment i 
    // set position of updated immunity bullets (following where the player moves)
    // if collision() is true, delete the wbite blood cell (container.removeChild)
    // create immunity bullets based on the state of the enemy
    // for loop and increment i 
    // set position of updated immunity bullets (following where the player moves)
    // if collision() is true, delete the wbite blood cell (container.removeChild)
    const cells = PLAYER_STATE.cells;
    for (let i = 0; i < cells.length; i++){
        const cell = cells[i];
        cell.x += 4;

        setElementPosition(cell.$wbcell, cell.x, cell.y);

    }
}

// --------------- ENEMY -------------- 
function createEnemy($container) {
  
    const $enemy = document.createElement("img");
    $enemy.src = "assets/blue-demon.png"; // Make sure the path is correct
    $enemy.className = "enemy";
    
    // Adjust the initial position of the enemy
    const enemyX = WIDTH - 100; // Adjust the initial X-position as needed
    const enemyY = HEIGHT - 230; // Adjust the initial Y-position as needed
    
    setElementPosition($enemy, enemyX, enemyY);
    setElementSize($enemy, ENEMY_STATE.enemy_width); // Use the player_width or adjust it if needed
    
    // Append the enemy to the game container
    $container.appendChild($enemy);
    // ...
    // Call createEnemy with the game container    
}

// function updateEnemy() {
//     if (PLAYER_STATE.up === true) {
//         ENEMY_STATE.y_position += 2;
//     } else if (PLAYER_STATE.down === true) {
//         ENEMY_STATE.y_position -= 2;
//     }
//     const $enemy = document.querySelector(".enemy");
//     setElementPosition($enemy, ENEMY_STATE.x_position, ENEMY_STATE.y_position);
// }

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

function limit(y){
    if (y >= WIDTH - PLAYER_STATE.player_width){
        PLAYER_STATE.y_position = WIDTH - PLAYER_STATE.player_width;
        return PLAYER_STATE.y_position;
    } if (y <= 0){
        PLAYER_STATE.y_position = 0;
        return PLAYER_STATE.y_position;
    } else {
        // if between game window
        return y;
    }

    // Ensure the player stays within the top and bottom bounds
}
function gameOver() {
    // if health is 0 , game is over, 
}


// function update() {
//     updatePlayer();
//     updateEnemy();
//     updateImmunity();
//     updateVirus();

    // request animation frame
    // call upon gameOver(), if game over, text display of disease-start title changes to "game-over" and becomes visible
    // otherwise, text display of disease-start-title changes to "you survived the infection!"


// updating the game 
function updateGame() {
    updatePlayer();
    updateImmunity($container);
    window.requestAnimationFrame(updateGame);
}
// -------- INITIALIZATION OF THE GAME HERE ---------
const $container = document.querySelector(".game-container")
createPlayer($container);
createEnemy($container);

window.addEventListener("keydown", onKey);
window.addEventListener("keyup", offKey);

updateGame();