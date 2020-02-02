export default function footer() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', { // 'map' это твой id в разметке, куда ты хочешь засунуть карту
                center: [55.529598, 37.588853],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemarkWithContent = new ymaps.Placemark([55.529598, 37.588853], {
                hintContent: 'Boristom',
                balloonContent: 'Стоматологическая клиника Boristom',
            });

        myMap.geoObjects
            .add(myPlacemarkWithContent);
    });
}
