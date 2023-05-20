const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const colorChange = document.querySelector('.color')
const loremText = document.querySelector('.text')

let fontSize = 20

function sizeAdjust(){
    loremText.style.fontSize = fontSize + 5 + 'px'
    fontSize +=5
}
function sizeRemove(){
    loremText.style.fontSize = fontSize - 5 + 'px'
    fontSize -=5
}

function changeColor(){
    loremText.classList.toggle('gold')
}

sizeUp.addEventListener('click', sizeAdjust)
sizeDown.addEventListener('click', sizeRemove)
colorChange.addEventListener('click', changeColor)