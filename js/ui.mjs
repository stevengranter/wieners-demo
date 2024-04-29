"use strict"

export function createUI() {

    let elements = []

    // function initState(state) {
    //     const elements = document.querySelectorAll(`[data-gamestate~="${state}"]`)
    //     console.log(elements)
    //     elements.forEach((element) => {
    //         console.log(element)
    //         hide(element)
    //     })
    // }

    function showElement(element) {
        element.style.visibility = "show"
        element.style.display = "block"
    }

    function hideElement(element) {
        element.style.visibility = "hidden"
        element.style.display = "none"
    }

    function showUI(state) {
        hideUI(state)
        const elements = document.querySelectorAll(`[data-gamestate~="${state}"]`)
        console.log(elements)
        elements.forEach((element) => {
            console.log(element)
            showElement(element)
        })

    }

    function hideUI(state) {
        // select all elements that have the data-gamestate attribute
        const allElements = document.querySelectorAll('[data-gamestate]')
        // Filter out elements that include state arg in their data-gamestate attribute
        const filteredElements = Array.from(allElements).filter(element => {
            const gameStates = element.getAttribute('data-gamestate').split(' ')
            return !gameStates.includes(state)
        })
        console.log(filteredElements)

        filteredElements.forEach((element) => {
            hideElement(element)
        })
    }

    return {
        show: showElement,
        hide: hideElement,
        showUI,
    }

}

