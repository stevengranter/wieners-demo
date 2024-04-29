// gameworld.js
"use strict"

// public module: function to initialize canvas and manage updating
// and drawing sprites to the canvas
export function GameWorld(canvasElementId, width, height, uiInstance, inputInstance) {

    // Initiliaize the canvas elment
    let canvasElement = init(canvasElementId, width, height)
    let context = canvasElement.getContext("2d")

    // Add reference to ui and input
    let ui = uiInstance
    let input = inputInstance

    function init(canvasElementId, width, height) {
        const canvas = document.getElementById(canvasElementId)
        console.log()
        canvas.width = width
        canvas.height = height
        return canvas
    }

    return {
        // Use shorthand canvas and ctx 
        canvas: canvasElement,
        ctx: context,
        ui,
        input
    }



}