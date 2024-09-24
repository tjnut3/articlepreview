statusCheck = false;

function Showsharebar() {
    let replyimg = document.getElementById("replyimg");
    let replyBtn = document.getElementById("replyBtn");
    let sharecard = document.getElementById("sharecard");
    let sharebox = document.getElementById("sharebox");
    let profile = document.getElementById("profile");
    statusCheck = !statusCheck;
    if(window.innerWidth < 768) {
        if (statusCheck == true) {
            sharecard.style.display = "flex";
            profile.style.display = "none";
        }
        else {                                          
            sharecard.style.display = "none";
            profile.style.display = "flex";
            replyBtn.style.backgroundColor = "#ecf2f8"
            replyimg.style.filter = "none";
        }
    }
    if (window.innerWidth >= 768) {
        if (statusCheck == true) {
            replyBtn.style.backgroundColor = "#48556a"
            replyimg.style.filter = "grayscale(100%) brightness(1000%)";
            sharebox.style.display = "flex";
            profile.style.display = "flex";
        }
        else {
            sharebox.style.display = "none";
            replyBtn.style.backgroundColor = "#ecf2f8"
            replyimg.style.filter = "none";
        }
    }
}

window.addEventListener("resize", function() {
    console.log('The screen size has changed.');
    if (window.innerWidth >= 768) {
        if (statusCheck == true) {
            profile.style.display = "flex";
            sharebox.style.display = "flex";
            sharecard.style.display = "none";
            replyBtn.style.backgroundColor = "#48556a"
            replyimg.style.filter = "grayscale(100%) brightness(1000%)";
        }
    }
    else {
        if (statusCheck == true) {
            profile.style.display = "none";
            sharebox.style.display = "none";
            sharecard.style.display = "flex";
        }
    }
});