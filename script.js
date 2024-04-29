"use strict"

import { UI } from "./js/ui.mjs"
import { GameWorld } from "./js/gameworld.mjs"
import { GameState } from "./js/gamestate.mjs"
import { Sprite } from "./js/sprite.mjs"
import { Input } from "./js/input.mjs"
import { gullConfig } from "./js/cfg/gull.cfg.js"

const ui = UI()
const input = Input()
const game = GameWorld("game-screen-canvas", 475, 270, ui, input)
const state = GameState(input, ui)


function logAction() {
    console.log(input.getAction())
}


ui.showUI("title")

// setInterval(logAction, 1000)
