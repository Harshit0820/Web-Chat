// Upload button

var textArea = document.getElementById("postArea");
var textButton = document.getElementById("uploadButton");

textArea.addEventListener("click",
function(){
    textButton.style.display = "block";
});

document.addEventListener("click",
function(){
    if(!textArea.contains(event.target)&&(!uploadButton.contains(event.target))){
        textButton.style.display = "none";
    }
});

// Dropdown settings menu

var settingsmenu = document.querySelector(".settings-menu");
function settingsmenutoggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

// Dark mode button

var darkBtn = document.getElementById("dark-btn");
var inputbox = document.getElementById("inputBox");
var profiledetails = document.getElementById("profileDetails");
var writepost = document.getElementById("writePost");
var inputbox = document.getElementById("inputBox");
var photopost = document.getElementsByClassName("photo-post-container");
var profileinfo = document.getElementsByClassName("profile-intro");
const openChatBtn = document.getElementById('open-chat-btn');
const closeChatBtn = document.getElementById('close-chat-btn');
const messagingContainer = document.getElementById('notification-container');


darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    settingsmenu.classList.toggle("dark-theme-settings-menu");
    inputbox.classList.toggle("dark-input-box");
    profiledetails.classList.toggle("dark-profile-details");
    writepost.classList.toggle("dark-write-post-container");
    textArea.classList.toggle("dark-textArea");
    messagingContainer.classList.toggle("dark-notification-container");

    for(var i=0; i<photopost.length; i++) {
        photopost[i].classList.toggle("dark-photo-post-container");
    }

    for(var i=0; i<profileinfo.length; i++) {
        profileinfo[i].classList.toggle("dark-profile-intro");
    }

    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }

}

// To save the mode and not change on refreshing the site

if(localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    settingsmenu.classList.remove("dark-theme-settings-menu");
    inputbox.classList.remove("dark-input-box");
    profiledetails.classList.remove("dark-profile-details");
    writepost.classList.remove("dark-write-post-container");
    textArea.classList.remove("dark-textArea");
    messagingContainer.classList.remove("dark-notification-container");


    for(var i=0; i<photopost.length; i++) {
        photopost[i].classList.remove("dark-photo-post-container");
    }

    for(var i=0; i<profileinfo.length; i++) {
        profileinfo[i].classList.remove("dark-profile-intro");
    }


}
else if(localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    settingsmenu.classList.add("dark-theme-settings-menu");
    inputbox.classList.add("dark-input-box");
    profiledetails.classList.add("dark-profile-details");
    writepost.classList.add("dark-write-post-container");
    textArea.classList.add("dark-textArea");
    messagingContainer.classList.add("dark-notification-container");


    for(var i=0; i<photopost.length; i++) {
        photopost[i].classList.add("dark-photo-post-container");
    }

    for(var i=0; i<profileinfo.length; i++) {
        profileinfo[i].classList.add("dark-profile-intro");
    }

}
else {
    localStorage.setItem("theme", "light"); // default value
}


openChatBtn.addEventListener('click', () => {
    messagingContainer.classList.add('open');
});
  
closeChatBtn.addEventListener('click', () => {
    messagingContainer.classList.remove('open');
});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}




