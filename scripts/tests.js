let rover

function turnRight() {
    switch (orientation) {
        case 'N':
            rover.orientation = 'E'
            break;
        case 'S':
            rover.orientation = 'W'
            break;
        case 'E':
            rover.orientation = 'S'
            break;
        case 'W':
            rover.orientation = 'N'
            break;
        default:
            console.log("unknown orientation TR FCT")
    }
}

function turnLeft() {
    switch(orientation) {
        case 'N':
            rover.orientation = 'W'
            break;
        case 'S':
            rover.orientation = 'E'
            break;
        case 'E':
            rover.orientation = 'N'
            break;
        case 'W':
            rover.orientation = 'S'
            break;
        default:
            console.log("unknown orientation TL FCT")
    }
}

function moveForward(){

    let y
    let x

    switch (orientation) {
        case 'N':
            y++
            break;
        case 'S':
            y--
            break;
        case 'E':
            x++
            break;
        case 'W':
            x--
            break;
        default:
            console.log("moving forward is enabled")
    }
}

function rotateMove() {

    let inputValMove = document.getElementById("instructionMove").value.toUpperCase()

    for (let i = 0; i < inputValMove.length; i++) {

        if (inputValMove[i] == 'R') {
            turnRight()

        } else if (inputValMove[i] == 'L') {
            turnLeft()

        } else if (inputValMove[i] == 'M') {
            moveForward()

        } else {
            console.log("only type the following letters L R M")
        }
    }

}





//les différentes positions


let rover = document.getElementById("roverImg")

function turnRight(rover){

    switch (direction) {
        case 'N':
            direction = 'E'
            break;
        case 'S':
            direction = 'O'
            break;
        case 'E':
            direction = 'S'
            break;
        case 'O':
            direction = 'N'
            break;
    }

    console.log('the function was called ' + rover.direction)
}

/*
function turnLeft() {

}


function moveForward() {

}


/*
function turnLeft() {

    switch (direction) {
        case 'N':
            direction = 'O'
            break;
        case 'S':
            direction = 'E'
            break;
        case 'E':
            direction = 'N'
            break;
        case 'O':
            direction = 'S'
            break;
    }
}

*/