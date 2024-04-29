"use strict"

import { UI } from "./js/ui.mjs"
import { GameWorld } from "./js/gameworld.mjs"
import { Sprite } from "./js/sprite.mjs"
import { gullConfig } from "./js/cfg/gull.cfg.js"

const ui = UI()
const game = GameWorld("game-screen-canvas", 475, 270, ui)

const gull = Sprite(gullConfig)

console.log(gull)

ui.showUI("title")


console.log(`script.js loaded`)