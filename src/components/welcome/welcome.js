import Plyr from 'plyr';
export default function welcome() {
    document.addEventListener('DOMContentLoaded', function () {
        const player = new Plyr('#player', {
            controls: ['mute', 'captions'],
            fullscreen: false,
            autoplay: true,
            loop: {
                active: true
            }
        });

        const playButton = document.querySelector('.js-play-video');
        const videoWrap = document.querySelector('.js-video-wrap');

        playButton.addEventListener('click', function(e) {
            e.stopPropagation();
            player.play();

            this.classList.add('active');
        });

        videoWrap.addEventListener('click', () => {
            playButton.classList.remove('active');
            player.pause();
        })
    })



    const openPopupBtn = document.querySelector('.button__sig-up');
    const popupElem = document.querySelector('.popup');

    const closePopupBtn = document.querySelector('.popup__close');


    openPopupBtn.addEventListener('click', function (e) {
        e.preventDefault();
        popupElem.classList.add('popup--active');
    })

    closePopupBtn.addEventListener('click', function () {
        popupElem.classList.remove('popup--active');
    })

}
