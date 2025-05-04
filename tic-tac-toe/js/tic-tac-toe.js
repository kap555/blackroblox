const getElement = (selector) => {
    return documents.querySelector(selector)
}

//cell = {
//    element: DOMElement
//}

const Field = {
    size: 3,
    cells: [[], [], [],],

    setListeners() {
        console.log('Listeners')
    },
    fill() {
        console.log("FILL")
    },
    reset() {
        console.log("reset")
    }
}

const Game = {
    containerEl: getElement('#tic-tac-toe'),
    buttonEl: getElement('#tic-tac-toe_btn'),
    isActive: false,
    field: Field,
    activePlayer: 0,
    players: [
        {
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
        }, 
        {
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>'
        }
    ],

    startGame() {
        console.log("Start!")
        console.log(this)
        this.isActive = true
    },
    
    stopGame() {
        console.log("Stopped")
        this.isActive = false
    },

    switchPlayer() {
        console.log("Player Switched")
        this.activePlayer = (++this.activePlayer) % 2
    },

    turn(cellEl) {
        console.log("Player goes")
    },
}

console.log(Game)
Game.startGame()

console.log(Game)
Game.stopGame()

console.log(Game)


//echo choto


//  utils