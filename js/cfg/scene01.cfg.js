"use strict"

import { Layer } from "../layer.mjs"
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../constants.mjs"

export const getScene01Layer_BackgroundConfig = () => {
    return {
        id: "scene01Background",
        imageURL: "/images/scene01/scene01-background.webp",

        dx: 0,
        dy: 0,

        velocityX: 0,
        velocityY: 0,

        cropRectangle: {
            sourceX: 0,
            sourceY: 0,
            sourceWidth: 1024,
            sourceHeight: 585,
        },
    }
}

export const getScene01Layer_SpriteConfig = () => {
    return {
        // spriteSrc: "./images/garden-06.png",
        eventTimeline: [
            {
                startTime: 500,
                type: "spawner",
                objectType: "wiener",
                totalSpawnCount: 60,
                spawningDuration: 30,

            },
            {
                startTime: 5000,
                type: "spawner",
                objectType: "gull",
                totalSpawnCount: 30,
                spawningDuration: 50,

            },
            {
                startTime: 30000,
                type: "spawner",
                objectType: "wiener",
                totalSpawnCount: 100,
                spawningDuration: 25,
            }


        ],
        // floorHeight: 60,
        playerBounds: {
            topLeft: { x: 0, y: 0 },
            topRight: { x: CANVAS_WIDTH, y: 0 },
            bottomRight: { x: CANVAS_WIDTH, y: CANVAS_HEIGHT - 60 },
            bottomLeft: { x: 0, y: CANVAS_HEIGHT - 60 }
        },
        playerScrollFactor: 0,
        isPlayerLayer: true,
    }
}

const getScene01Layer_ForegroundConfig = () => {
    return {
        spriteSrc: "./images/scene01-foreground.webp",
        animationFrame: {},
        animations: {},
        location: { dx: 0, dy: 0 },
        direction: {
            velocityX: 0,
            velocityY: 0,
        },
        // spawners: [wienerSpawner, gullSpawner],
        timeline: {},
        playerScrollFactor: 0,
        isPlayerLayer: false
    }
}

const scene01Layer_Background = Layer(getScene01Layer_BackgroundConfig())

// console.log(scene01Layer_Background)
const scene01Layer_Sprite = Layer(getScene01Layer_SpriteConfig())
const scene01Layer_Foreground = Layer(getScene01Layer_ForegroundConfig())

export const scene01Config = {
    index: 0,
    name: "Garden",
    layers: [scene01Layer_Background, scene01Layer_Sprite, scene01Layer_Foreground],
    spriteLayerIndex: 1,
    music: ["./audio/music/alouette_55s.mp3"],
    sfx: [],
    goals: {
        gold: {
            type: "score",
            value: 5000
        },
        silver: {
            type: "score",
            value: 2500
        },
        bronze: {
            type: "score",
            value: 500
        }
    }

}


