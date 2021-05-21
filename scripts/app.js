/*
 * This is the main script used
 */

//Create a dynamic html table with JS
window.onload = function() {
    let gridContainer = document.getElementsByClassName('gridContainer')[0]
    let table = document.createElement('table')
    let tableBody = document.createElement('tbody')

    let gridX = 0
    let gridY = 10

    table.appendChild(tableBody)

    //let $table = $('<table/>');

    for (let i = 10; i > gridX; i--) {

        let tr = document.createElement('tr')
        tableBody.appendChild(tr)

        for (let j = 0; j < gridY ; j++) {
            let td = document.createElement('td')
            //td.classList.add("rover")
            td.setAttribute("id" , i.toString()+j.toString())
            tr.appendChild(td)
        }
    }

    gridContainer.appendChild(table)
}

//print initial coordinates of the rover in the first input
let inputs = document.getElementsByTagName("input")

//Initial positions of the rover
const initRoverX = parseInt(5)
const initRoverY = parseInt(5)

$('#initialCoordinates').val(initRoverX + ' ' + initRoverY)

//check orientation input & control input one by one
/*
function getFirstInputValue(){
    let inputValCard = document.getElementById("compassCardinal").value.toUpperCase()

    console.log(inputValCard)

    if (inputValCard.length == 1) {
        if (inputValCard == 'N' || inputValCard == 'S' || inputValCard == 'E' || inputValCard == 'O')
        {
            //console.log('vous avez bien choisi un point cardinal')
            document.getElementById("notif1Valide").innerHTML = `La valeur ${inputValCard} est bien un point cardinal`
        }
        else
        {
            //console.log('erreur cette lettre ne représente pas un point cardinal')
            document.getElementById("notif1Erreur").innerHTML = `La valeur ${inputValCard} n'est pas un point cardinal`
        }
    }
    else if (inputValCard.length == 0)
    {
        //console.log('Le champ est vide')
        document.getElementById("notif1Erreur").innerHTML = 'Le champ est vide'
    }
    else {
        //console.log('Vous avez écrit plus d\'une lettre')
        document.getElementById("notif1Erreur").innerHTML = 'Vous avez écrit plus d\'une lettre'
    }
}
*/

/*
function getSecondInputValue() {
    let inputValMove = document.getElementById("instructionMove").value.toUpperCase()

    console.log(inputValMove)

    for (let i = 0; i < inputValMove.length; i++) {
        if (inputValMove[i] !== 'R' && inputValMove[i] !== 'L' && inputValMove[i] !== 'M') {
            console.log('Le Rover ne bouge pas car des lettres ne sont pas autorisées')
            document.getElementById("notif2Erreur").innerHTML = `Le Rover ne bouge pas . La valeur ${inputValMove} contient des lettres non autorisées`
            return bool = false
        }
    }
    document.getElementById("notif2Valide").innerHTML = `Le Rover bouge`
    return bool = true
}
*/

//check orientation input and control input all together - the input receive a string and test it
function checkAllInputs()
{
    let inputValCard = document.getElementById("compassCardinal").value.toUpperCase()
    let inputValMove = document.getElementById("instructionMove").value.toUpperCase()

    if (inputValCard.length == 1)
    {
        if (inputValCard == 'N' || inputValCard == 'S' || inputValCard == 'E' || inputValCard == 'O')
        {
            document.getElementById("firstValidNotif").innerHTML = `La valeur ${inputValCard} est bien un point cardinal`

            for (let i = 0; i < inputValMove.length; i++) {
                if (inputValMove[i] != 'R' && inputValMove[i] != 'L' && inputValMove[i] != 'M')
                {
                    document.getElementById("secondErrorNotif").innerHTML = `Le Rover ne bouge pas . La valeur ${inputValMove} contient des lettres non autorisées`
                    return bool = false
                }
            }
            document.getElementById("secondValidNotif").innerHTML = `Le Rover bouge. Les valeurs sont autorisées.`
            return bool = true
        }
    }
    else if (inputValCard.length == 0)
    {
        document.getElementById("firstErrorNotif").innerHTML = `Le rover ne bouge pas. L'un des champs est vide`
        return bool = false
    }
    else {
        document.getElementById("firstErrorNotif").innerHTML = `Le rover ne bouge pas. Vous avez fait une erreur`
        return bool = false
    }
}

//reset all inputs
function resetInputsValues() {
    let inputValCard = document.getElementById("compassCardinal").value.toUpperCase()
    let inputValMove = document.getElementById("instructionMove").value.toUpperCase()

    if((inputValCard.length >= 1 || inputValCard.length == 0) && (inputValMove.length >=1 || inputValMove.length == 0)) {
        document.getElementById("compassCardinal").value = ' '
        document.getElementById("instructionMove").value = ' '
        document.getElementById("firstValidNotif").hidden = true
        document.getElementById("secondValidNotif").hidden = true
        document.getElementById("firstErrorNotif").hidden = true
        document.getElementById("secondErrorNotif").hidden = true

        location.reload();
    }
}

//add image of the rover on the initial position cell
function addImage() {
    const img = document.createElement("img")
    img.src = "img/roverA.png"
    const cell = document.getElementById("55")
    cell.appendChild(img)
}



/*
function turnRight(rover){

    switch (direction) {
        case 'N':
            rover.direction = 'E'
            break;
        case 'S':
            rover.direction = 'O'
            break;
        case 'E':
            rover.direction = 'S'
            break;
        case 'O':
            rover.direction = 'N'
            break;
    }

    console.log('the function was called ' + rover.direction)
}
*/
