const aload = require('aload')
const animateOnWindowOnload = document.querySelector('#animate-on-window-onload')

window.onload = function() {
    if (animateOnWindowOnload) {
        animateOnWindowOnload.classList.add('js-fade-in-down-trigger')
    }

    aload()
}
