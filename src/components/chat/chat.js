import Typed from 'typed.js';
import typed from "typed.js/src/typed";

export default function chat() {
    const options = {
        root: null,
        threshold: .8
    };

    const chatBox = document.querySelector('.chat__box');

    const chat = (entries, observer) => {
        entries.forEach(item => {
            if (item.isIntersecting) {
                typingAnimation();
                observer.unobserve(item.target);
            }
        })
    };

    const blockObserver = new IntersectionObserver(chat, options);

    blockObserver.observe(chatBox);

    const chatArr = [
        'Здравствуйте, у меня болит зуб, хочу записаться на приём',
        'Добрый день. В ближайшие даты есть свободные окошки для Вас 🦷',
        'В какую цену осмотр зуба?',
        'Осмотр зуба — бесплатно. Обсудим вместе лечение, ответим на все ваши вопросы',
        'А это больно?',
        'Наши современные анестезирующие средства заблокируют любые неприятные ощущения',
        'Супер 😊 Запишите меня, пожалуйста, на прием',
        'Ждем Вас по адресу: МО, Ленинский р-н, д. Дрожжино, ул. Новое шоссе д. 7 кор. 2, пом. 3'
    ];



    const chatTextElems = document.querySelectorAll('.chat__text');
    const chatBoxElems = document.querySelectorAll('.chat__box-item');

    chatBoxElems.forEach(item => {
        item.style.display = 'none';
    });

    function typingAnimation() {

        const speed = 20;

        for (let i = 0; i < chatBoxElems.length; i++) {
            if (i === 0) {
                chatBoxElems[i].style.display = 'flex';
                new Typed(chatTextElems[i], {
                    strings: [chatArr[i]],
                    typeSpeed: speed,
                })
            } else if (i === 1) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 4000);

            } else if (i === 2) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 8000);
            } else if (i === 3) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 11000);
            } else if (i === 4) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 15000);
            } else if (i === 5) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 18000);
            } else if (i === 6) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 21000);
            } else if (i === 6) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })
                }, 24000);
            } else if (i === 7) {
                setTimeout(function () {
                    chatBoxElems[i].previousElementSibling.querySelector('.typed-cursor').style.display = 'none';
                    chatBoxElems[i].style.display = 'flex';
                    new Typed(chatTextElems[i], {
                        strings: [chatArr[i]],
                        typeSpeed: speed,
                    })

                    chatBoxElems[i].querySelector('.typed-cursor').style.display = 'none';
                }, 26000);
            }

        }
    }



}
