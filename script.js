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
var leftsidebar = document.getElementById("leftSidebar");
var rightsidebar = document.getElementById("rightSidebar");
var writepost = document.getElementById("writePost");
var inputbox = document.getElementById("inputBox");
const openChatBtn = document.getElementById('open-chat-btn');
const closeChatBtn = document.getElementById('close-chat-btn');
const notificationContainer = document.getElementById('notification-container');

var photopost = document.getElementsByClassName("photo-post-container");

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    settingsmenu.classList.toggle("dark-theme-settings-menu");
    rightsidebar.classList.toggle("dark-right-sidebar");
    writepost.classList.toggle("dark-write-post-container");
    textArea.classList.toggle("dark-textArea");
    inputbox.classList.toggle("dark-input-box");
    notificationContainer.classList.toggle("dark-notification-container");

    for(var i=0; i<photopost.length; i++) {
        photopost[i].classList.toggle("dark-photo-post-container");
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
    rightsidebar.classList.remove("dark-right-sidebar");
    writepost.classList.remove("dark-write-post-container");
    inputbox.classList.remove("dark-input-box");
    textArea.classList.remove("dark-textArea");
    notificationContainer.classList.remove("dark-notification-container");

    for(var i=0; i<photopost.length; i++) {
        photopost[i].classList.remove("dark-photo-post-container");
    }
}
else if(localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    settingsmenu.classList.add("dark-theme-settings-menu");
    rightsidebar.classList.add("dark-right-sidebar");
    writepost.classList.add("dark-write-post-container");
    inputbox.classList.add("dark-input-box");
    textArea.classList.add("dark-textArea");
    notificationContainer.classList.add("dark-notification-container");


    for(var i=0; i<photopost.length; i++) {
        photopost[i].classList.add("dark-photo-post-container");
    }
}
else {
    localStorage.setItem("theme", "light"); // default value
}



openChatBtn.addEventListener('click', () => {
  notificationContainer.classList.add('open');
});

closeChatBtn.addEventListener('click', () => {
  notificationContainer.classList.remove('open');
});






