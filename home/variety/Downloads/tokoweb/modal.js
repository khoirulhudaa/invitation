let modalDisplayed = false;

window.addEventListener('scroll', function () {
    if (!modalDisplayed && window.scrollY >= 1000) {
        document.getElementById('modalBrosur').style.display = 'flex';
        modalDisplayed = true;
    }
});

document.getElementById('modalBrosurClose').addEventListener('click', function () {
    document.getElementById('modalBrosur').style.display = 'none';
});
