import Plyr from 'plyr';
export default function welcome() {
    const player = new Plyr('#player', {
        controls: ['mute', 'captions', 'pip', 'airplay', 'fullscreen']
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
}
