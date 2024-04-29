"use strict"

export function Input() {
    let action = null // Initialized with a default value
    const callbacks = []

    function init() {
        listenForKeys()
        listenForPointer()
    }

    function notify(newAction) {
        if (action !== newAction) {
            action = newAction
            // console.log("action changed")
            callbacks.forEach(callback => {
                if (typeof callback === 'function') {
                    // console.log(callback)
                    callback(action)
                } else {
                    throw new Error('Callback is not a function')
                }
            })
        }
    }

    function subscribe(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Subscribe requires a function as a callback')
        }
        callbacks.push(callback)
        console.log(callbacks)
    }

    const keydownHandler = (event) => {
        let currentAction = processKeys(event)
        // console.log(action)
        notify(currentAction)
    }

    const pointerdownHandler = (event) => {
        let currentAction = processPointer(event)
        // console.log(action)
        notify(currentAction)
    }

    function listenForKeys() {
        document.addEventListener("keydown", keydownHandler)
    }

    function listenForPointer() {
        document.addEventListener("pointerdown", pointerdownHandler)
    }

    function processKeys(event) {
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
        subscribe,
        destroy
    }
}
