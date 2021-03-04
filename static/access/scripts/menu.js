mobile_menu.onclick = function() {
    console.log(1);
    if (document.getElementById("mobileMenu").style.display == "none") {
        return document.getElementById("mobileMenu").style.display = "block"
    } else {
        return document.getElementById("mobileMenu").style.display = "none"
    }
}