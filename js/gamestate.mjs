// gamestate.js
"use strict"

export function GameState(inputInstance, uiInstance) {

    const input = inputInstance
    const ui = uiInstance

    init()

    function init() {

        console.log("GameState initialized")
        input.subscribe(handleActionChange)
    }

    function handleActionChange(action) {
        // console.log("handleaction running")
        console.log(action)
    }

    function switchState() {
        console.log(input.action)
    }

    return {

    }



}