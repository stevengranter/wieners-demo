// sprite.js
"use strict"

// public module: creates a sprite
export function Sprite(spriteConfig) {

    let config = spriteConfig

    let dx = spriteConfig.dx || 0
    let dy = spriteConfig.dy || 0
    let velocityX = spriteConfig.velocityX || 0
    let velocityY = spriteConfig.velocityY || 0

    init(spriteConfig)
    // let dx = spriteConfig.dx || 0
    // let dy = spriteConfig.dy || 0
    // let velocityX = spriteConfig

    function init(spriteConfig) {
        ({ dx, dy, velocityX, velocityY } = spriteConfig)
        console.log("Sprite initialized")
    }

    function draw(context) {

    }

    function update(deltaTime) {

    }

    return {
        config, dx, dy, velocityX, velocityY,
        init, draw, update
    }



}