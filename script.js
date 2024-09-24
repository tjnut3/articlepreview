statusCheck = false;

function Showsharebar() {
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
        }
    }
    if (window.innerWidth >= 768) {
        if (statusCheck == true) {
            sharebox.style.display = "flex";
            profile.style.display = "flex";
        }
        else {
            sharebox.style.display = "none";
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