function togglePopup() {
    var popupBox = document.getElementById('popupBox');

    document.getElementById('widgetButton').classList.add('no-animation');
    popupBox.classList.toggle('active');
}

// Attachement de la fonction comme gestionnaire d'événement aux deux boutons
document.getElementById('widgetButton').addEventListener('click', togglePopup);
document.getElementById('othherb').addEventListener('click', togglePopup);
document.getElementById('othhern').addEventListener('click', togglePopup);
