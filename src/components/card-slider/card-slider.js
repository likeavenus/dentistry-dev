export default function cardSlider() {
    const slider = $('.cards');

    slider.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true
    })
}
