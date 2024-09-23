statusCheck = false;

function Showsharebar() {
    let sharecard = document.getElementById("sharecard");
    let profile = document.getElementById("profile");
    statusCheck = !statusCheck;
    if(window.innerWidth < 768) {
        if(statusCheck == true){
            sharecard.style.display = "flex";
            profile.style.display = "none";
        }
        else {
            sharecard.style.display = "none";
            profile.style.display = "flex";
        }
    }
    else {
        console.log("Next day na")
    }
}