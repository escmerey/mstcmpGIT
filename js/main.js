$(function() {

    // $("body").queryLoader2({
    //     barColor: "#b61a1a",
    //     backgroundColor: "#d9e1ff",
    //     percentage: true,
    //     barHeight: 10,
    // minimumTime: 100000,
    // });

    $('select.nice-select').niceSelect();
    $('.nice-select .list').perfectScrollbar();

    $('a[href*=#].anchor').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 700);
        e.preventDefault();
    });

    // Добавляем маску к вводу телефона
    $("input[type='tel']").each(function() {
        $(this).mask("+7 (999) 999-9999");
    });

    $(window).on("load resize scroll", function(e) {
        $('.second_header--inner').next().css('marginTop', $('.second_header--inner').outerHeight());
    });

    var swiper = new Swiper('.basic__slider', {
        pagination: '.basic__controls',
        paginationClickable: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 400,
        // effect: 'coverflow',
        effect: 'flip',
        // effect: 'fade',
        paginationBulletRender: function(swiper, index, className) {
            return '<span class="basic__control ' + className + ' link-line">' + $('.basic__slide').eq(index).data('text') + '</span>';
        }
    });

    var swiper = new Swiper('.idea__slider', {
        pagination: '.idea__control',
        paginationClickable: true,
        spaceBetween: 30,
        slidesPerView: 1,
        effect: 'flip',
        // effect: 'fade',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    var swiper = new Swiper('.camps__slider .swiper-container', {
        paginationClickable: true,
        spaceBetween: 90,
        slidesPerView: 2,
        nextButton: '.camps__control--next',
        prevButton: '.camps__control--prev',
        breakpoints: {
            1500: {
                spaceBetween: 30
            },
        }
    });

    $(window).on('load', function(event) {
        $('.reviews__col').perfectScrollbar({
            suppressScrollX: true
        });
    });

    $('.video-link').lightGallery({
        selector: 'this',
        download: false,
        loadYoutubeThumbnail: false,
        loadVimeoThumbnail: false
    });

    $(".jp-jplayer").each(function(index, el) {
        $(this).parent().find('.jp-audio').addClass('jp_container_' + (index + 1));
        $(this).jPlayer({
            ready: function(event) {
                $(this).jPlayer("setMedia", {
                    mp3: $(this).data('file'),
                });
            },
            supplied: "mp3, m4a, oga",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: false,
            toggleDuration: true,
            cssSelectorAncestor: ".jp_container_" + (index + 1),
        });
    });

    var swiper = new Swiper('.entry__day__slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    var swiper = new Swiper('.team__items', {
        pagination: '.team__control',
        paginationClickable: true,
        spaceBetween: 30,
        slidesPerView: 6,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    var swiper = new Swiper('.show__items', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 65,
        scrollbarDraggable: true,
        grabCursor: true
    });

    $('.questions__item').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });

    $('.compensation__tabs').tabs({
        hide: {
            effect: "fade",
            duration: 300
        },
        show: {
            effect: "fade",
            duration: 300
        },
    });

    if ($('#map_canvas').length) {
        mapInitialize();
    }
});

function mapInitialize() {

    var stylez = [{
        "elementType": "geometry",
        "stylers": [{
            "color": "#242f3e"
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#746855"
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#242f3e"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#d59563"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#d59563"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#263c3f"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#6b9a76"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "color": "#38414e"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#212a37"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#9ca5b3"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "color": "#746855"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#1f2835"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#f3d19c"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2f3948"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#d59563"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#17263c"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#515c6d"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#17263c"
        }]
    }];

    var brooklyn = {
        lat: 55.720923,
        lng: 37.650928,
    };

    var center = {
        lat: brooklyn.lat,
        lng: brooklyn.lng - 0.013
    }

    var mapOptions = {
        zoom: 16,
        center: center,
        mapTypeControl: false,
        scrollwheel: false,
        navigationControl: false,
        scaleControl: false,
        draggable: true,
    };

    if ($(window).width() <= 1180) {
        mapOptions.draggable = false;
    }

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var mapType = new google.maps.StyledMapType(stylez, {
        name: "Night"
    });
    map.mapTypes.set('tehgrayz', mapType);
    map.setMapTypeId('tehgrayz');

    marker = new google.maps.Marker({
        map: map,
        position: brooklyn,
        icon: '../images/ico/placeholder.png'
    });
}