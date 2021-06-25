function switchIn(event) {
    var pic1 = event.target.getAttribute("link-one")
    var pic2 = event.target.getAttribute("link-two")
    var displayedPicture = event.target
    displayedPicture.setAttribute('src', pic1);
    setTimeout(() => {
        var currentPictureSrc = event.target.getAttribute("src")
        if (currentPictureSrc === pic1) {
            displayedPicture.setAttribute('src', pic2);
        }
    }, 2000)

}

function switchOut(event) {
    var pic0 = event.target.getAttribute("link-zero")
    var displayedPicture = event.target
    displayedPicture.setAttribute('src', pic0);
}