let center = [55.756817068979416,37.63230449999999]

function init(){
    let map =  new ymaps.Map('map', {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark( center, {

        balloonContent: `
        <div class="balloon">
            <div class="balloon__title">Аптека Гелиос</div>
            <div class="balloon__address">Москва, Лубянский пр. 15 стр 2</div>
            <div class="balloon__working">Круглосуточно</div>
            <button class="balloon_btn">Выбрать</button>
            <!-- <img class="balloon_img" src="./src/img/ic-close-input.svg" alt="" />-->
        </div>
    `

    }, {
        iconLayout: 'default#image',
        iconImageHref: './src/img/point-big_map.svg',
        iconImageSize: [64, 64],
        iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.geoObjects.add(placemark);
}

ymaps.ready(init);