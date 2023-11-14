In a file called reflect.md, Reflect on the implementation process using point form.

- Focus on what you learned,
- your challenges,
- how you managed the game's complexity,
- how the final product compares to your initial
  design.

- Throughout the game, I've learned that the creation of the game was overall pretty complex and required high-level organization of functions such that the game mechanics can be implemented accordingly and operate functionally.
- To eleboarate further, one of the main challenges was that several functions were overlooked in the beginning during stage 2, and not declared for the implementation in stage 3. As such, there were several functions that needed to be added in the third stage.
- For instance, initially, I had thought that the updateImmunity function only included simple implementations such that it only loops and positions the cell onto the screen, however did not take into account for when the game is outside of the game container and have to remove the DOM element from the game container. In addition to that, the implementation of removing the cell from the array cells was quite complicated as it involved an array and it was difficult to visualize which individual cell was being removed from the array as it exceeds the game container. As such, I had to use a trial and error when working with the value that was being compared to the x-coordinate of the cell in the following line of code in line 193: if(cell.x > WIDTH - 40)
- The second challenge was the implementation of the updateVirus function. This function basically mirrors what updateImmunity does, and includes similar implementation, but in reverse since the virus are moving from the right side of the game container towards the left. It also removes any virus using .splice if it exceeds the game container. Therefore, the biggest challenge I faced in this game creation stems from this function because the virus was moving from the right of the game container, however it exceeded the right of the game container. Thus, I had to include an additional if statement to check if the virus satisfies this condition in the code : else if (virus.x > WIDTH - temp) present in the updateImmunity function. Additionally, to manage this complexity, I had to manually "choose" a value such that the virus does not exceed the right side of the game container throughout the game. This value is 300 and declared in the beginning as "temp". Moreoever, I struggled with finding a more efficient way to solve the problem above because with different temp values, it resulted in less virus being displayed on the screen. Therefore, the only implementation that worked was by checking if the x-coordinate exceeded WIDTH - 300, and if it does, it removes it from the array viruses.
- Another challenge that I faced during this assigment was not taking into account the countdown function implementation
- Lastly, the (START OF THE GAME CAUSE VIRUS ELEMENTS WAS ALR MOVING WHEN THE GAME CONTAINER ELEMENTS HAVE LOADED WHEN PAGE IS REFRESHED. )

- add updateVirus
- add countdown
- HOW IT COMPARES TO FINAL PRODUCT
