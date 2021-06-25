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


// Modal
function openModal(modalName) {
    var modal = document.getElementById(modalName);
    modal.style.display = "block";
}

function closeModal(modalName) {
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
}

document.onclick = function(event) {
    var prePreg = document.getElementById("prePreg");
    var mountainBoard = document.getElementById("mountainBoard");
    var milling = document.getElementById("milling");
    var moldflow = document.getElementById("moldflow");
    var printing = document.getElementById("printing");
    var modals = document.getElementsByClassName("modal");
    modals = [...modals]
    if (modals.includes(event.target)) {
        modals.forEach(m => closeModal(m.getAttribute('id')))
    }
}