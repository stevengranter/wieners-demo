
import { isObject, preloadImage } from "./utils.mjs"
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants.mjs"

//#region 👾 SPRITE
// 🟢 SPRITE //

// Function to create the sprite object from a configObject
export async function Sprite(configObject) {

    // 💂‍♀️ Guard Clauses 🎅

    //  if configObject passed isn't an object, log a warning and return
    if (!isObject(configObject)) {
        console.warn(`createSprite: configObject is not of type Object`)
        return
    }

    // if configObject.imageUrl is falsey, log with a warning and return
    if (!configObject.imageURL) {
        console.warn(`No image URL provided, or no imageURL property`)
        return
    }

    // END Guard Clauses
    // Declare a const newSprite object
    // store the current config under a config property
    //  and spread configObject props into it on the first level
    let newSprite = {}

    newSprite = { ...configObject }
    newSprite.config = { ...configObject }
    console.log(newSprite)

    // Creates and loads a spritesheet using the preloadImage() utility function, 
    // .then waits for the Promise to resolve,
    // and sets the spriteSheet property to the
    // resolved image element
    preloadImage(newSprite.imageURL)
        .then((imageElement) => {
            newSprite.spriteSheet = imageElement
            if (!newSprite.sourceWidth) {
                newSprite.sourceWidth = newSprite.spriteSheet.naturalWidth
            }
            if (!newSprite.sourceHeight) {
                newSprite.sourceHeight = newSprite.spriteSheet.naturalHeight
            }
            if (!newSprite.sourceX) {
                newSprite.sourceX = 0
            }
            if (!newSprite.sourceY) {
                newSprite.sourceY = 0
            }
            if (!newSprite.destHeight) {
                newSprite.destHeight = newSprite.sourceHeight
            }
            if (!newSprite.destWidth) {
                newSprite.destWidth = newSprite.sourceWidth
            }
            console.log(`sprite is loaded: ${newSprite.id} `)
        })

    // Deconstruct location, velocity and cropRectangle from newSprite.defaults
    const { location, velocity, cropRectangle } = newSprite.config

    // If the defaults property of newSprite contains location/velocity arrays,
    // copy these to the first level of the object as these values will change
    // frequently (only if not alreadestY set)
    // Keep the defaults property in case sprite needs to be reset
    // Set newSprite's location and velocity (or to defaults if none are provided)
    if (location !== undefined) {
        newSprite.destX = location[0]
        newSprite.destY = location[1]
    } else {
        newSprite.destX = Math.floor(CANVAS_WIDTH / 2) // approx center of canvas
        newSprite.destY = Math.floor(CANVAS_HEIGHT / 2) // approx middle of canvas
    }


    if (velocity && velocity.length >= 2) {
        newSprite.velocityX = velocity[0] || 0
        newSprite.velocityY = velocity[1] || 0
    }

    // Take the cropRectangle property from the newSprite.defaults property 
    // and assign its properties to the top level of the object
    if (cropRectangle) {
        Object.assign(newSprite, cropRectangle)
    }

    // the newSprite Promise is returned from the function
    return newSprite


}

// Function to draw sprite that accepts one required arguments, and 5 optional overrides
// @spriteObject : an object containing sprite configuration information
// @context: the canvas context the function should render to
// @destX : the destination x coordinate of the top left position of the sprite
// @destY : the destination y coordinate of the top left position of the sprite
// @destWidth : the width to render the sprite to the canvas
// @destHeight : the height to render the sprite to the canvas
function drawSprite(
    spriteObject, // required
    context = ctx, // optional
    destX = spriteObject.destX, // optional
    destY = spriteObject.destY, // optional
    destWidth = spriteObject.destWidth, // optional
    destHeight = spriteObject.destHeight  // optional
) {
    // Deconstruct the spriteSheet props from spriteObject
    const { spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight } = spriteObject

    // 💂‍♀️ Guard Clauses 🎅

    // if the context isn't valid, log an error
    if (!(context instanceof CanvasRenderingContext2D)) {
        console.error('Invalid canvas rendering context')
    }

    // if destX or destY aren't numbers or are NaN, log an error
    if (typeof destX !== 'number' && !Number.isNaN(destX) || typeof destY !== 'number' && !Number.isNaN(destY)) {
        console.error('destX and destY must be numbers')
    }

    // Because this game using pixel art and pixelated canvas,
    // all number values are rounded to integer values to avoid blur or distortion

    context.drawImage(
        spriteSheet,
        Math.floor(sourceX),
        Math.floor(sourceY),
        Math.floor(sourceWidth),
        Math.floor(sourceHeight),
        Math.floor(destX),
        Math.floor(destY),
        Math.floor(destWidth),
        Math.floor(destHeight)
    )




}

// Function to update the destX and destY values of a sprite. 
//
// To calculate the value we need, updateSprite() updates these values 
// from arguments passed to this function. Because we have to calculate 
// the relative position compared to the sprite's position in the previous frame,
// we assign a new value with +=
//
// The velocity for x and y is passed as an optional argument, or if these aren't
// provided, the values stored in spriteObject are used
//  
function updateSprite(
    spriteObject, // required
    deltaTime, // required
    velocityX = spriteObject.velocityX,  // optional
    velocityY = spriteObject.velocityY // optional
) {



    spriteObject.destX += velocityX * deltaTime
    spriteObject.destY += velocityY * deltaTime

}

function isOnGround(spriteObject) {
}






// SPRITE 🛑 //
//#endregion SPRITE 