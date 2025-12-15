const $btnUp = document.querySelector('.btn--up');
$btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});