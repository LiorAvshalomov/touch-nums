'use strict'




var gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var gCurrNum = 1
var gCells = 16
var elNextNum = document.querySelector('h2')



const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());


function initGame() {
    getNums()
    shuffle(gNums)
    gCurrNum = 1
    elNextNum.innerText = `Next number is: ${gCurrNum}`
    renderBoard()
}


function renderBoard() {
    var strHTML = ''
    var size = Math.sqrt(gNums.length)

    for (var i = 0; i < size; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < size; j++) {
            var num = gNums.pop()
            strHTML += `<td onclick="onCellClicked(this,${num})">${num}</td>`
        }
        strHTML += `</tr>\n`
    }

    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function onCellClicked(cell, num) {
    var gNums = getNums()
    // console.log(gNums);

    if (gCurrNum === gNums) {
        elNextNum.innerText = `Congratz you WON! \n Try again in harder board!`
    }

    if (num !== gCurrNum) return
    cell.style.backgroundColor = 'red'
    gCurrNum++

    if (gCurrNum > 1 && gCurrNum < gNums) {
        elNextNum.innerText = `Next number is: ${gCurrNum}`
    }

}

function getNums() {
    gNums = []

    for (var i = 0; i < gCells; i++) {
        gNums.push(i + 1)
    }
    return gNums.length
}

function changeBoard(cells) {
    gCells = cells
    initGame()
}



// timer
