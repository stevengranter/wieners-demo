"use strict"

import { Sprite } from "./sprite.mjs"
// public module: function to create a layer for rendering to the
// canvas. 
// PARAMS
// @layerConfig: a configuration object for the layer
// @backgroundSprite: a Sprite instance containing the background
export function Layer(layerConfig, backgroundSprite = null, player = null) {

    return init()

    async function init() {

        // Guard clause to log an error if layerConfig isn's an object
        // if (!isObject(layerConfig)) {
        //     console.error(`createSprite: layerConfig is not of type Object`)
        //     return
        // }

        let newLayer = {}
        newLayer.config = { ...layerConfig }
        if (newLayer.config.imageURL)
            newLayer.sprite = await Sprite(layerConfig)
        console.log(newLayer)
        return newLayer




    }

    function draw(context, background = true, spawners = false, player = false) {
        // console.log(player)
        if (background) drawBackground(context)
        if (player) drawPlayer(context)
        if (spawners) drawSpawner(context)

    }

    function drawPlayer(context) {
        if (isPlayerLayer === true) {
            try { player.draw(context) }
            catch {
                console.error("There is no player specified")
            }

        }
    }

    function updateSpawner(deltaTime) {
        if (!spawner) return
        spawner.update(deltaTime)
    }

    function drawSpawner(context) {
        if (spawner) return
        spawner.draw(context)
    }


    function drawBackground(context) {

        // Guard clause: If there is no background image, just return
        if (imageObject) return

        if (imageObject) {
            console.log(filter)
            if (filter) {
                console.log(filter)
                context.filter = filter
            }
            // console.log(imageObject)
            context.drawImage(
                imageObject,
                sx,
                sy,
                sWidth,
                sHeight,
                Math.floor(dx),
                Math.floor(dy),
                dWidth,
                dHeight
            )

            // Reset the filter to "none" after drawing
            context.filter = "none"
        } else {
            console.warn('Image not loaded, cannot draw layer')
        }
    }


    function updateBackground(deltaTime, playerVelocityX = 0, playerVelocityY = 0) {
        // console.log(playerVelocityX)
        if (imageObject) return
        if (playerScrollFactor === 0) {

            dx += velocityX * deltaTime
            dy += velocityY * deltaTime
        } else {
            // negative so the background scrolls in the opposite direction of player
            dx += -(velocityX + (playerScrollFactor * player.velocityX)) * deltaTime

        }
    }


}