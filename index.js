/* Course: SENG 513 */
/* Date: OCT 23, 2023 */
/* Assignment 2 */
/* Name: Jiayi Teh */
/* UCID: 30142476 */

// THINGS TO FIX : 
// timer 
// start game
// fix collision detection and when win happens
// fix the virus moving
// CHANGE BOUNDARY FOR VIRUS 
// FIX VIRUS
// DO SCORE COUNT
// DO LEVEL AND INCREASE 
let health = 3;
let timer = 3;
let score = document.querySelector('.score'); // difference between health and score is health is how much youve got shot, then score is how many times youve shoot the virus
let InitialTime = 190; // let our initial time be 190 seconds
let InitialScore = 0;
let treatmentBoolean = false;
let collisionCounter = 0;

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
    player_width : 150,
    timestamp : 0 // "TIMESTAMP SO CELLS DO NOT STICK TOGETHER"
}

const ENEMY_STATE = {
    x_position : 0,
    y_position : 0,
    enemy_width : 150,
    viruses : [],
    virus_shots : 100,
}

const CELL_STATE = {
    cell_width : 50
}

const VIRUS_STATE = {
    virus_width : 55,
    x_position : 0,

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
    // CHECK IF PLAYER IS SHOOTING CELLS, THEN CELLS WILL COME OUT OF THE PLAYER
    if (PLAYER_STATE.shoot === true &PLAYER_STATE.timestamp === 0){
         buildImmunity($container, PLAYER_STATE.x_position, PLAYER_STATE.y_position);
         PLAYER_STATE.timestamp = 30;
    }

    const $player = document.querySelector(".player");
    setElementPosition($player, PLAYER_STATE.x_position, limit(PLAYER_STATE.y_position));
    
    // CHECK THE "TIMESTAMP COUNTER"
    // NOTE THAT IS WAS QUITE A CHALLENGE, OUTLINE IT IN THE REFLECTION LATER AND CITE SOURCES
    if (PLAYER_STATE.timestamp > 0){
        PLAYER_STATE.timestamp -= 1;
    }
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
    const wbcell_xpos = x + 150 ;
    const wbcell = {$wbcell, x : wbcell_xpos, y};
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
    const viruses = ENEMY_STATE.viruses;

    for (let i = cells.length - 1; i >= 0; i--) {
        const cell = cells[i];
        cell.x += 3;

        // Check if the cell is outside the game container
        if (cell.x > WIDTH - 40) {
            // Remove the cell from the array
            cells.splice(i, 1);
            // Remove the cell element from the DOM
            GAME_CONTAINER.removeChild(cell.$wbcell);
        } 
        
        else {
            setElementPosition(cell.$wbcell, cell.x, cell.y);

            for (let j = viruses.length - 1; j >= 0; j--) {
                const virus = viruses[j];
                const cell_bound = cell.$wbcell.getBoundingClientRect();
                const virus_bound = virus.$virus.getBoundingClientRect();

                if (collisionDetection(virus_bound, cell_bound)) {
                    // Remove the cell from the array
                    cells.splice(i, 1);
                    // Remove the cell element from the DOM
                    GAME_CONTAINER.removeChild(cell.$wbcell);

                    // Remove the virus from the array
                    viruses.splice(j, 1);
                    // Remove the virus element from the DOM
                    GAME_CONTAINER.removeChild(virus.$virus);
                }
            }
        }
    }
}



// --------------- ENEMY -------------- 
function createEnemy($container) {

    
    const $enemy = document.createElement("img");
    $enemy.src = "assets/blue-demon.png"; // Make sure the path is correct
    $enemy.className = "enemy";
    
    // Adjust the initial position of the enemy
    // const enemyX = WIDTH - 100; // Adjust the initial X-position as needed
    // const enemyY = HEIGHT - 230; // Adjust the initial Y-position as needed
    
    ENEMY_STATE.x_position = WIDTH+100;
    ENEMY_STATE.y_position = HEIGHT - 230;
    setElementPosition($enemy, ENEMY_STATE.x_position, ENEMY_STATE.y_position);
    setElementSize($enemy, ENEMY_STATE.enemy_width); // Use the player_width or adjust it if needed
    
    // Append the enemy to the game container
    $container.appendChild($enemy);
    // ...
    // Call createEnemy with the game container    
}

function updateEnemy() {
    const rand = Math.random();
    const speed = 7;
    if (PLAYER_STATE.up === true) {
        ENEMY_STATE.y_position -= rand * speed;
    }
    if (PLAYER_STATE.down === true) {
        ENEMY_STATE.y_position += rand * speed;
    } 
   
    const $enemy = document.querySelector(".enemy");
    setElementPosition($enemy, ENEMY_STATE.x_position, enemy_limit(ENEMY_STATE.y_position));
}


// BASIC METHOD TO BUILD VIRUS CELLS
function buildVirus($container, x, y) {
    // create enemy virus based by creating elemt
    // declare src and class name of the virus (already exists in css for part1 ,but will update in part 2)
    // set position for virus
    // append virus to the game container 
    const $virus = document.createElement("img");
    $virus.src = "assets/small-virus.png"; 
    $virus.className = "virus";  

    // now append each white blood cell (wb cell) to the list created in the beginning
    $container.appendChild($virus);
    
    const virus_xpos = WIDTH;
    const virus = {$virus, x, y};
    // REMEMBER TO ADD WHAT YOU VISUALIZE ITS DOING HERE
    ENEMY_STATE.viruses.push(virus);
    
    setElementPosition($virus,x, y);
    setElementSize($virus, VIRUS_STATE.virus_width);
    
}

// METHOD TO UPDATE VIRUS SHOTS COMING FROM INFECTION
function updateVirus($container) {
    // create enemy virus bullets based on the state of the enemy
    // for loop and increment i 
    // for every iteration, increment i 
    // set position of updated virus bullets (following where the enemy moves)
    // if collision() is true, delete the virus (container.removechild)
    const viruses = ENEMY_STATE.viruses;
    for (let i = 0; i  < viruses.length; i++){
        const virus = viruses[i];
        virus.x -= 0.8;

        // Check if the virus is outside the game container
        // RECHECK (MAKE DELETION OF CELLS RESPONSIVE LATER)
        if (virus.x < -600 ) {
            // Remove the cell from the array
            viruses.splice(i, 1);

            // Remove the cell element from the DOM
            GAME_CONTAINER.removeChild(virus.$virus);
        } else if (virus.x > WIDTH - 500){
            viruses.splice(i, 1);

            // Remove the cell element from the DOM
            GAME_CONTAINER.removeChild(virus.$virus);
        } 
        const virus_bound = virus.$virus.getBoundingClientRect();
        const cell_bound = document.querySelector(".player").getBoundingClientRect();
    
        
        setElementPosition(virus.$virus, virus.x, virus.y);
        
    }
}

function createViruses($container, viruses_count){
    for (let i = 0; i <= ENEMY_STATE.virus_shots/2; i++) {
        buildVirus($container, i*80, 20);
    }
    for (let i = 0; i <= ENEMY_STATE.virus_shots/2; i++) {
        buildVirus($container, i*90, 120);
    }
    for (let i = 0; i <= ENEMY_STATE.virus_shots/3; i++) {
        buildVirus($container, i*80, 220);
    }

    for (let i = 0; i <= ENEMY_STATE.virus_shots/2; i++) {
        buildVirus($container, i*90, 300);
    }
    for (let i = 0; i <= ENEMY_STATE.virus_shots/3; i++) {
        buildVirus($container, i*80, 420);
    }
     for (let i = 0; i <= ENEMY_STATE.virus_shots/2; i++) {
        buildVirus($container, i*95, 520);
    }
 
}

function limit(y){
    if (y >= WIDTH - PLAYER_STATE.player_width){
        PLAYER_STATE.y_position = WIDTH - PLAYER_STATE.player_width;
        return PLAYER_STATE.y_position;
    } if (y <= 0){
        PLAYER_STATE.y_position = 0;
        return PLAYER_STATE.y_position;
    } if (y >= 400){
        PLAYER_STATE.y_position = 400;
        return PLAYER_STATE.y_position;
    }
    else {
        // if between game window
        return y;
    }

    // Ensure the player stays within the top and bottom bounds
}

function enemy_limit(y){
    if (y >= WIDTH - ENEMY_STATE.player_width){
        ENEMY_STATE.y_position = WIDTH - ENEMY_STATE.player_width;
        return ENEMY_STATE.y_position;
    } if (y <= 0){
        ENEMY_STATE.y_position = 0;
        return ENEMY_STATE.y_position;
    } if (y >= 400){
        ENEMY_STATE.y_position = 400;
        return ENEMY_STATE.y_position;
    }
    else {
        // if between game window
        return y;
    }

    // Ensure the player stays within the top and bottom bounds
}
function collisionDetection(a, b){
    const collision = !(b.top > a.bottom || b.bottom < a.top || b.right < a.left || b.left > a.right);

    if (collision){
        collisionCounter++;
        console.log(`Collision detected! Count: ${collisionCounter}`);

    }

    return collision;
}
function gameOver() {
    // if health is 0 , game is over, 
}

function countdown(callback) {
    const countdownDisplay = document.querySelector(".countdown");

    // display the initial countdown value
    countdownDisplay.innerHTML = timer;

    function updateCountdown() {
        if (timer > 0) {
            timer -= 1;
            countdownDisplay.innerHTML = timer;

            // COUNTDOWN CHANGES EVERY 1 SECOND
            setTimeout(updateCountdown, 1000);
        } else {
            // Hide the countdown display
            countdownDisplay.style.display = "none";

            // Execute  callback function (
            if (callback) {
                callback();
            }
        }
    }

    // first update of the countdown here 
    setTimeout(updateCountdown, 1000);
}

function startGame() {
    const startButton = document.querySelector(".start-button");

    // on click the game starts
    startButton.addEventListener("click", function () {
        // Call the countdown function when the start button is clicked
        countdown(function () {
            // Call updateGame only when the countdown is complete
            updateGame();
        });
    });
}

// updating the game 
function updateGame() {
    updatePlayer();
    updateEnemy();
    updateImmunity($container);
    updateVirus($container);

    window.requestAnimationFrame(updateGame);

    if (ENEMY_STATE.viruses.length === 0) {
        document.querySelector(".player-win").style.display = "block";
    } else if (PLAYER_STATE.gameOver === true) {
        document.querySelector(".player-lost").style.display = "block";
    }
}

// -------- INITIALIZATION OF THE GAME HERE ---------
const $container = document.querySelector(".game-container");
createPlayer($container);
createEnemy($container);
createViruses($container);

window.addEventListener("keydown", onKey);
window.addEventListener("keyup", offKey);

startGame();
