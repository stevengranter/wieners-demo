// ui.js
"use strict"

// Creates UI, returns object with public methods: show, hide and showUI
// (hideUI is called by showUI)
export function UI() {

    let elements = []

    // public: set element to show by setting visibility and display properties
    function showElement(element) {
        element.style.visibility = "show"
        element.style.display = "block"
    }

    // public: set element to hide by setting visibility and display properties
    function hideElement(element) {
        element.style.visibility = "hidden"
        element.style.display = "none"
    }

    // public: Shows UI by state argument passed to function, 
    // first calls hideUI() to hide all elements that do *not* have that state
    function showUI(state) {
        hideUI(state)
        const elements = document.querySelectorAll(`[data-gamestate~="${state}"]`)
        elements.forEach((element) => {
            showElement(element)
        })

    }

    // private: Hides UI elements that do not have the state passed
    // viu the argument by iterating over all data-gamestate elements
    // and filtering 
    function hideUI(state) {
        // select all elements that have the data-gamestate attribute
        const allElements = document.querySelectorAll('[data-gamestate]')
        // Filter out elements that include state arg in their data-gamestate attribute
        const filteredElements = Array.from(allElements).filter(element => {
            const gameStates = element.getAttribute('data-gamestate').split(' ')
            return !gameStates.includes(state)
        })

        filteredElements.forEach((element) => {
            hideElement(element)
        })
    }

    // 
    return {
        show: showElement,
        hide: hideElement,
        showUI,
    }

}

