// script.js
document.getElementById('widgetButton').addEventListener('click', function() {
    var popupBox = document.getElementById('popupBox');
    this.classList.add('no-animation')
    popupBox.classList.toggle('active');
});
