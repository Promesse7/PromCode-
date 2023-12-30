let popup = document.getElementById('popup')
function openPopup() {
    setTimeout(() => {
        popup.classList.add('open-popup')
    }, 200);
    
}
function closePopup() {
    setTimeout(() => {
        popup.classList.remove('open-popup')
    }, 100);
    
}

