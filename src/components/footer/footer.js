export default function footer() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', { // 'map' это твой id в разметке, куда ты хочешь засунуть карту
                center: [53.244097, 34.362873],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemarkWithContent = new ymaps.Placemark([53.245951, 34.357036], {
                hintContent: 'Boristom',
                balloonContent: 'Boristom',
            });

        myMap.geoObjects
            .add(myPlacemarkWithContent);
    });
}
