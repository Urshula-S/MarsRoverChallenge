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