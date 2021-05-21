## Main Info

### Folder tree structure

    Folder name
        File name                           Details

        Index.html                          main index webpage document

    img
        compass_bg.png                      logo of the compass
        pexels-tom-leishman-5259407.png     possible background image
        roverA.png                          image of the rover

    scripts
        app.js                              main js script used for the challenge
        tests.js                            a script file that contains all my attempts

    styles
        style.css                           main stylesheet

### The Challenge

    Implement a rover that can explore a plateau designed as a grid from cell to cell thanks to given coordinated and commands.
    A rover is positioned thanks to x (int) ; y(int) ; cardinalPoint (str)
    The main cardinal points are the following : North, South, East, West
    The main control commands are the following : Left Right and M (move forward)
    The lower coordinate is 0.0

### Explanations

    Create a function to implement a table dynamically.
    Add an input that contains the initial position of the rover
    Add an input that enables to choose the orientation
    Add an input that enables to choose the instructions of movement thanks to a string + analyse the string
    Set up the rover respecting the initial position facing the north

### Test Input
    5 5
    1 2 N
    LMLMLMLMM
    3 3 E
    MMRMMRMRRM

### Test Output expected
    1 3 N
    5 1 E
