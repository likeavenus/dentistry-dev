import Plyr from 'plyr';
export default function welcome() {
    document.addEventListener('DOMContentLoaded', function () {
        const player = new Plyr('#player', {
            controls: ['mute', 'captions'],
            settings: ['loop'],
            fullscreen: false,
            autoplay: true,
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





}
