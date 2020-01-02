export default function header() {
    const headerBurger = document.querySelector('.js-burger');
    const headerElem = document.querySelector('.js-header');

    headerBurger.addEventListener('click', function () {
        headerElem.classList.toggle('default');
        headerElem.classList.toggle('active');
    });
}
