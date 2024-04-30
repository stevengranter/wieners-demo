"use strict"

// public module function: Input handler for any input provided by the player
// Sets up event lis
export function Input() {

    let action = null // Initialized with a default value

    init()

    function init() {
        listenForKeys()
        listenForPointer()
    }

    // private function: listenForKeys adds an event listener 
    // to listen for when keys are pressed from a "keydown" event
    // and sends the event to the keyDownHandler() function
    function listenForKeys() {
        document.addEventListener("keydown", keydownHandler())
    }

    // private function: keydownHandler is called from the 
    //eventlistener on a "keydown" browser event
    function keydownHandler() {
        return (event) => {
            let currentAction = processKeys(event)
            console.log(currentAction)
            action = currentAction
            return currentAction
        }
    }

    // private function: listenForPointer adds an event listener 
    // to listen for when pointer are pressed from a "pointerdown" event
    // and sends the event to the pointerdownHandler() function
    function listenForPointer() {
        document.addEventListener("pointerdown", pointerdownHandler(processPointer))
    }

    // private function: pointerdownHandler is called from the 
    //eventlistener on a "pointerdown" browser event
    function pointerdownHandler(processPointer) {
        return (event) => {
            let currentAction = processPointer(event)
            console.log(currentAction)
            action = currentAction
            return currentAction
        }
    }

    // handles event from the keydownHandler function,
    // converts keypresses into string values representing
    // actions in the game
    function processKeys(event) {
        // console.log("processKeys")
        switch (event.code) {
            case "Space":
            case "ArrowUp":
            case "KeyW":
                return "jump"
            case "ArrowLeft":
            case "KeyA":
                return "move left"
            case "ArrowDown":
            case "KeyS":
                return "duck"
            case "ArrowRight":
            case "KeyD":
                return "move right"
            case "Escape":
                return "Escape"
            case "Enter":
                return "Enter"
            default:
                return "Other"
        }
    }

    // handles event from the pointerdownHandler function,
    // converts pointer events into string values representing
    // actions in the game
    function processPointer(event) {
        if (event.button !== 0) return

        const startButton = document.getElementById("start-button")

        if (event.target === startButton) {
            return "start"
        } else {
            return "other pointer event"
        }
    }

    // public: function to get the current action
    function getAction() {
        return action
    }

    // Clean up event handlers
    function destroy() {
        document.removeEventListener("keydown", keydownHandler)
        document.removeEventListener("pointerdown", pointerdownHandler)
    }

    return {
        getAction,
        destroy
    }
}


