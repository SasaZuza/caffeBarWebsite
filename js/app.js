class UI {

    // Hide preloader when window loads method
    hidePreloader() {
        document.querySelector('.preloader').style.display = "none";
    }

    // Show-hide menu on button click method
    showNav() {
        document.querySelector('.nav').classList.toggle('nav--show')
    }

    // ON/OFF switch for video method
    videoControls() {
        let btn = document.querySelector('.video__switch-btn');
        if (!btn.classList.contains('btnSlide')) {
            btn.classList.add('btnSlide')
            document.querySelector('.video__item').pause()
        } else {
            btn.classList.remove('btnSlide')
            document.querySelector('.video__item').play()
        }
    }

}

//////////////////////////////////////////////////////////////////////////////

function eventListeners() {

    const ui = new UI();

    // Hide preloader when window loads - calling of method
    window.addEventListener('load', () => ui.hidePreloader())

    // Nav button funcionality (show-hide menu on button click) - calling of method
    document.querySelector('.navBtn').addEventListener('click', () => ui.showNav())

    // Switch button ON/OFF effect
    document.querySelector('.video__switch').addEventListener('click', () => ui.videoControls())

}
// Calling of function
eventListeners();

//////////////////////////////////////////////////////////////////////////////



