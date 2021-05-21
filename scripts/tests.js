let rover

function turnRight() {
    switch(rovOrientation) {
        case 'N':
            rover.rovOrientation = 'E'
            break;
        case 'S':
            rover.rovOrientation = 'W'
            break;
        case 'E':
            rover.rovOrientation = 'S'
            break;
        case 'W':
            rover.rovOrientation = 'N'
            break;
        default:
            console.log("unknown orientation TR FCT")
    }
}

function turnLeft() {
    switch(rovOrientation) {
        case 'N':
            rover.rovOrientation = 'W'
            break;
        case 'S':
            rover.rovOrientation = 'E'
            break;
        case 'E':
            rover.rovOrientation = 'N'
            break;
        case 'W':
            rover.rovOrientation = 'S'
            break;
        default:
            console.log("unknown orientation TL FCT")
    }
}

function moveForward(){

    let y
    let x

    switch (rovOrientation) {
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