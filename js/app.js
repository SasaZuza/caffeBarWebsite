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

// Save to database free drinks winners
// Creating variables that targets the elements in DOM
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var eMail = document.getElementById("eMail");
var submitBtn = document.getElementById("submitBtn");

// OnClick event function
function submitClick() {
    // referencing the database to store data
    var firebaseRef = firebase.database().ref("Winners");
    // What is entered in input field beeing stored in database
    var first_Name = fName.value;
    var last_Name = lName.value;
    var e_Mail = eMail.value;
    firebaseRef.push().set({ first_Name, last_Name, e_Mail });
}

// Retrive from database and show free drink winners


// Retriving multiple data from Database

// referencing the database to store data - in this case child "Users"
var rootRef = firebase.database().ref().child("Winners");

// Retriving name and username from database
rootRef.on("child_added", snap => {

    var fName = snap.child("first_Name").val();
    var lName = snap.child("last_Name").val();

    $("#list_body").append("<li>" + fName + " " + lName + "</li>");

});