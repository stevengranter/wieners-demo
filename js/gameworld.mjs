// gameworld.js
"use strict"

// public module: function to initialize canvas and manage updating
// and drawing sprites to the canvas
export function GameWorld(canvasElementId, width, height, uiInstance, inputInstance) {

    // Initiliaize the canvas elment
    const canvas = init(canvasElementId, width, height)
    const context = canvas.getContext("2d")

    // Add reference to ui and input
    let ui = uiInstance
    let input = inputInstance

    // Initialize deltaTime and lastTime
    // We set them to avoid generating a NaN by dividing by undefined
    let deltaTime = 0.016
    let lastTime = 0


    // Initialize the canvas, set the width and height from
    // arguments passed when invoking the GameWorld function
    function init(canvasElementId, width, height) {
        const localCanvas = document.getElementById(canvasElementId)
        localCanvas.width = width
        localCanvas.height = height
        return localCanvas
    }

    // The main game loop
    function loop(timeStamp) {

        deltaTime = (timeStamp - lastTime) / 1000
        lastTime = timeStamp

        context.clearRect(0, 0, this.canvas.width, this.canvas.height)


        requestAnimationFrame(this.loop())

    }

    // return the canvasElement, context, ui and input as
    // as public properties
    return {
        canvas,
        context,
        ui,
        input,
        loop
    }



}