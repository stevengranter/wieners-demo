//#region ⚙️ UTILS
// 🟢 //

export { isObject, preloadImage }

// function to determine if an object is actually an object
// because in JavaScript almost everything is an object, including null and arrays
function isObject(object) {
    return (typeof object === 'object' && object !== null && !Array.isArray(object))
}



async function preloadImage(imageFilePath) {
    let imageElement = new Image()

    // Return a Promise that will resolve when the image loads or reject if there's an error
    return new Promise((resolve, reject) => {
        // Set up onload handler
        imageElement.onload = () => {
            // console.log(`Image loaded: ${imageFilePath}`)
            resolve(imageElement) // Resolve the promise with the loaded image element
        }

        // Set up onerror handler
        imageElement.onerror = (errorEvent) => {
            console.warn("Image could not be loaded")
            reject(new Error(`Could not load image at path ${imageFilePath}`)) // Reject the promise with an error
        }

        // Start loading the image
        imageElement.src = imageFilePath
    })
}
// 🛑 // 
//#endregion UTILS