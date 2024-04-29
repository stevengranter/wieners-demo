"use strict"

export function Input() {
    let action = null // Initialized with a default value


    init()

    function init() {
        listenForKeys()
        listenForPointer()
    }

    // adding an event listenr to listen for when keys are pressed,
    // sending the event to the processKeys() function
    function listenForKeys() {
        document.addEventListener("keydown", keydownHandler())
    }

    function keydownHandler() {
        return (event) => {
            let currentAction = processKeys(event)
            console.log(currentAction)
            return currentAction
        }
    }

    // adding a pointer listener to listen for when pointer events occur,
    // sending the event to the pointerHandler() function
    function listenForPointer() {
        document.addEventListener("pointerdown", pointerDownHandler(processPointer))
    }

    function pointerDownHandler(processPointer) {
        return (event) => {
            let currentAction = processPointer(event)
            console.log(currentAction)
            return currentAction
        }
    }

    // handles event from the listenForKeys function,
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


    // handles event from the listenForPointer function,
    // converts keypresses into string values representing
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


