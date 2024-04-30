"use strict"

import { UI } from "./js/ui.mjs"
import { GameWorld } from "./js/gameworld.mjs"
import { Sprite } from "./js/sprite.mjs"
import { Input } from "./js/input.mjs"
import { Layer } from "./js/layer.mjs"


import { gullConfig } from "./js/cfg/gull.cfg.js"
import { getScene01Layer_BackgroundConfig, getScene01Layer_SpriteConfig } from "./js/cfg/scene01.cfg.js"

const ui = UI()
const input = Input()
const game = GameWorld("game-screen-canvas", 475, 270, ui, input)


// const gull = Sprite(gullConfig)
// function logAction() {
//     console.log(input.getAction())
// }

const scene01BackgroundLayer = Layer(getScene01Layer_BackgroundConfig())
const scene01SpriteLayer = Layer(getScene01Layer_SpriteConfig())
ui.showUI("title")



// setInterval(logAction, 1000)
