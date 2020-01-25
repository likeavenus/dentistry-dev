export default function personal() {
    const slider = $(".personal__slider");

    slider.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000
    })
}
