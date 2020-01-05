export default function chat() {
    const options = {
        root: null,
        threshold: 0.5
    };

    const chatElem = document.querySelector('.chat__box');

    const chat = (entries, observer) => {
        entries.forEach(item => {
            if (item.isIntersecting) {
                console.log(true)
            }
        })
    };

    const blockObserver = new IntersectionObserver(chat, options);

    blockObserver.observe(chatElem);
}
