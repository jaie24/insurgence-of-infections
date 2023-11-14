Throughout the assignment, the three most complex parts of the code were the functions countdown(callback), updateVirus($container), and collisionDetection.

1.  function countdown(callback)

    The main purpose of this function is to change the current content present in the .countdown container that is already included in the HTML file. In this function, I had written most of the implementation but had it polished by ChatGPT in which it added the callback function.

    Firstly, in the outer function, countdown(callback), it takes in a parameter called countdown. In its implementation, is creates a constant variable named countdownDisplay and assigns it to a HTML element. This HTML element selected contains the class name countdown. Therefore, in this line of code, it references the variable "countdownDisplay" to the HTML element with the class "countdown".

    In the inner function, the updateCountdown() does not take in any parameters. This function checks if the initial timer is more than 0 (in this case, it is because it has already been declared as 3 in the HTML file). Additionally, it decrements timer by 1, thus updating the countdown display shown on the screen. In the setTimeout of the code that was written by ChatGPT, the code functions to schedule itself to be called again after 1 second using this particular setTimeout function. When the timer is less than 0, the line of code "countdownDisplay.style.display = "none";" hides the countdown display and then checks if the callback function was provided. It it was, then it is executed. Then, setTimeout(updateCountdown, 1000) triggers the update of the countdown.

2.  function updateVirus($container)

    In this function, the updateVirus takes in "$container" that will be passed in later during the initialization of the game when the game updates. This $container refers to the game container where the game happens. This is declared in line 498 in the index.js file.

    The function's main purpose is to update the virus shots coming from the enemy, and also it deletes the virus from the screen whenever a collision occurs. Firstly, it creates a constant variable "viruses" thats stores the reference to the array of viruses in the ENEMY_STATE object declared in the beginning of index.js. The purpose of this line of code is such that it will be easier to iterate through the array of viruses. Next, the line of code adjusts the x-coordinate of each virus by subtracting 0.8 from its initial value, such that it is moving from the right of the game container towards the left of the game container.

    In addition to that, this function was quite complex as it also checks if virus is outside the game container which basically is the reverse of what updateImmunity does. In the for loop, the variable i was declared to be 0, and it loops through the viruses length, incrementing it by 1 at each loop. In each iteration of the loop it checks and removes the viruses once it exceeds the left side of the game container in the following line of code :

    if (virus.x < -600 ) {
    // Remove the cell from the array
    viruses.splice(i, 1);

    In addition to that, it removes the element from the DOM if the virus is present outside the game container. Besides that, since the virus is moving from the right of the game container towards the left, it also checks if the virus exceeds the right side of the game container, and removes the element from the array and DOM as well, as shown in the following line of code :

        // Check if the virus is outside the game container
        if (virus.x < -600 ) {
            // Remove the cell from the array
            viruses.splice(i, 1);

            // Remove the cell element from the DOM
            GAME_CONTAINER.removeChild(virus.$virus);
        } else if (virus.x > WIDTH - temp){
            viruses.splice(i, 1);

            // Remove the cell element from the DOM
            GAME_CONTAINER.removeChild(virus.$virus);
        }

    Next, the setElementPosition is called, by passing in the DOM element associated with the virus, in which is the variable $virus that holds the reference to the DOM element. It also takes in the x-coordinate and y-coordinate of the virus to set the position of the virus on the screen in this line of code :

        setElementPosition(virus.$virus, virus.x, virus.y);

    Lastly, in the last section of this function, the function checks if the length of the array of viruses is equal to 0 AND if the value of the collision counter is less than 0. The main purpose of this section of the code is such that, when all the viruses have "disappeared" from the game container and when the player has stop shooting, the game is over. Therefore, if both of these conditions are true, such that there are no viruses left, the gameOver variable of PLAYER_STATE becomes true, indicating the game is over, and the DOM element that holds the class "player-lost" class is displayed onto the screen with the "block" property, indicating that the player has lost.

    if (viruses.length === 0 && collisionCounter < 20) {
    PLAYER_STATE.gameOver = true;
    document.querySelector(".player-lost").style.display = "block";
    }

3.  function collisionDetection(a,b)
    In this function, the complex part was checking whether the collision between the two "containers", a and b intersect, in which was the cells and virus. The most complex part includes the following line of the code that was written by ChatGPT:

        const collision = !(b.top > a.bottom || b.bottom < a.top || b.right < a.left || b.left > a.right);

    From my understanding, the containers a and b are defined by their bounding boxes with coordinates left, right, top and bottom. Therefore, a constant variable collision is declared, and stores the negtation of the expression, based on the boolean returned on the conditions. If any of the conditions are false, the collision will be true and vice versa. The conditions that are checked are :

    - b.top > a.bottom : if the top of b is below bottom of a
    - b.bottom < a.top : if the top of a is below the bottom of b
    - b.right < a.left : if the right of b is to the left of the left side of a.
    - b.left > a.right : if the left of b is to the right of right side of a.
