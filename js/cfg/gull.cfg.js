"use strict"
// Configuration object for the gull sprite.
// This is passed to the Sprite function (sprite.mjs) to create the sprite
export const gullConfig = {
    id: "gull",
    imageURL: "/images/sprites/sprite-seagull_flying_west.png",

    dx: 0,
    dy: 0,

    velocityX: -50,
    velocityY: 10,

    cropRectangle: {
        sourceX: 0,
        sourceY: 0,
        sourceWidth: 45,
        sourceHeight: 51,
    },

    animationStates: {
        flying: {
            cropRectangle: {
                topLeft: [0, 0],
                bottomRight: [45, 51],
            },
            frames: [0, 7],
        },
    },
}