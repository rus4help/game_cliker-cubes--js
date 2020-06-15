var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var score = 0;

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')

    renderBox()
}

function handleBoxClick(event) {
    if(event.target.dataset.box) {
        score++
        renderBox()
    }
}

function renderBox() {
    $game.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = '50px'
    box.style.left = '70px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}