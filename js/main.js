/**
 * Обработка при загрузке страницы
 */
$(function() {

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

    $('.fullpage').fullpage({
        sectionSelector: 'section',
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1200,
        onLeave: function(index, nextIndex, direction) {
            if ($($(this)[0].offsetParent).find('section').eq(nextIndex - 1).hasClass('dark')) {
                $('#fp-nav').removeClass('dark');
            } else {
                $('#fp-nav').addClass('dark');
            };
            if (nextIndex == 1) {
                $('#fp-nav, .second_header').addClass('hidden');
            } else {
                $('#fp-nav, .second_header').removeClass('hidden');
            }
        },
        afterLoad: function(anchorLink, index) {
            //screen1 animate
            TweenMax.set($('.fullpage > section:not(.active) .basic__backbg'), {
                opacity: 0
            });
            TweenMax.set($('.fullpage > section:not(.active) .basic__title'), {
                opacity: 0,
                y: -20
            });
            TweenMax.set($('.fullpage > section:not(.active) .basic__desc'), {
                opacity: 0,
                y: -20
            });
            TweenMax.set($('.fullpage > section:not(.active) .basic__left .btn'), {
                opacity: 0,
                x: -20
            });
            TweenMax.set($('.fullpage > section:not(.active) .basic__right'), {
                opacity: 0,
                right: '-100%'
            });
            TweenMax.to($('.fullpage > section.active .basic__title'), 0.5, {
                opacity: 1,
                y: 0
            });
            TweenMax.to($('.fullpage > section.active .basic__desc'), 0.5, {
                opacity: 1,
                y: 0
            }).delay(0.3);
            TweenMax.to($('.fullpage > section.active .basic__left .btn'), 0.5, {
                opacity: 1,
                x: 0
            }).delay(0.6);
            TweenMax.set($('.fullpage > section.active .basic__backbg'), {
                opacity: 1
            });
            TweenMax.staggerFrom($('.fullpage > section.active .basic__backbg img'), 1, {
                left: -5000,
                ease: Power2.easeOut
            }, 0.1);
            TweenMax.set($('.fullpage > section.active .basic__right'), {
                opacity: 1
            });
            TweenMax.to($('.fullpage > section.active .basic__right'), 1, {
                right: '0%',
                ease: Back.easeOut.config(1.7)
            }, 0.1);

            //screen2 animate
            TweenMax.set($('.fullpage > section:not(.active) .about__backbg'), {
                opacity: 0
            });
            TweenMax.set($('.fullpage > section:not(.active) .about__left'), {
                x: '-100%'
            });
            TweenMax.set($('.fullpage > section:not(.active) .about__right > *'), {
                y: -20,
                opacity: 0
            });
            TweenMax.staggerTo($('.fullpage > section.active .about__right > *'), 0.5, {
                y: 0,
                opacity: 1
            }, 0.2);
            TweenMax.to($('.fullpage > section.active .about__left'), 1, {
                x: '0%',
                ease: Back.easeOut.config(1.7)
            });
            TweenMax.set($('.fullpage > section.active .about__backbg'), {
                opacity: 1
            });
            TweenMax.staggerFrom($('.fullpage > section.active .about__backbg img'), 1, {
                left: 5000,
                ease: Power2.easeOut
            }, 0.1);

            //screen3 animate
            TweenMax.set($('.fullpage > section:not(.active) .idea__backbg'), {
                opacity: 0
            });
            TweenMax.set($('.fullpage > section.active .idea__backbg'), {
                opacity: 1
            });
            TweenMax.fromTo($('.fullpage > section.active .idea__backbg img'), 1, {
                scale: 0,
                ease: Power2.easeOut
            }, {
                scale: 1,
                ease: Power2.easeOut
            }, 0.2);
            TweenMax.set($('.fullpage > section:not(.active) .idea__left'), {
                x: '-100%'
            });
            TweenMax.to($('.fullpage > section.active .idea__left'), 1, {
                x: '0%',
                ease: Back.easeOut.config(1.7)
            });
            TweenMax.set($('.fullpage > section:not(.active) .idea__right > *'), {
                y: -20,
                opacity: 0
            });
            TweenMax.staggerTo($('.fullpage > section.active .idea__right > *'), 0.5, {
                y: 0,
                opacity: 1
            });

            //screen4 animate
            TweenMax.set($('.fullpage > section:not(.active) .camps__backbg'), {
                opacity: 0
            });
            TweenMax.set($('.fullpage > section.active .camps__backbg'), {
                opacity: 1
            });
            TweenMax.staggerFrom($('.fullpage > section.active .camps__backbg img'), 1, {
                left: '50%',
                top: '40%',
                ease: Power2.easeOut
            }, 0.1);

            //screen4 animate
            TweenMax.set($('.fullpage > section:not(.active) .success__title'), {
                opacity: 0,
                y: -20
            });
            TweenMax.set($('.fullpage > section:not(.active) .success__sub_title'), {
                opacity: 0,
                y: -20
            });
            TweenMax.to($('.fullpage > section.active .success__title'), 0.5, {
                opacity: 1,
                y: 0
            });
            TweenMax.to($('.fullpage > section.active .success__sub_title'), 0.5, {
                opacity: 1,
                y: 0
            }).delay(0.3);
            TweenMax.set($('.fullpage > section:not(.active) .success__item:nth-child(odd)'), {
                x: -5000
            });
            TweenMax.set($('.fullpage > section:not(.active) .success__item:nth-child(even)'), {
                x: 5000
            });
            TweenMax.to($('.fullpage > section.active .success__item:nth-child(odd)'), 1, {
                x: 0
            });
            TweenMax.to($('.fullpage > section.active .success__item:nth-child(even)'), 1, {
                x: 0
            });

            //screen5 animate
            TweenMax.set($('.fullpage > section:not(.active) .camps__top'), {
                transformPerspective: 600,
                transformOrigin: '50% 100%',
                rotationX: 25,
                y: -100,
                opacity: 0
            });
            TweenMax.to($('.fullpage > section.active .camps__top'), 0.5, {
                opacity: 1,
                rotationX: 0,
                y: 0
            });
            TweenMax.set($('.fullpage > section:not(.active) .camps__slide'), {
                transformPerspective: 600,
                rotationY: 25,
                opacity: 0,
                x: -50
            });
            TweenMax.staggerTo($('.fullpage > section.active .camps__slide'), 0.5, {
                opacity: 1,
                rotationY: 0,
                x: 0
            }, 0.3);

            //screen6 animate
            TweenMax.set($('.fullpage > section:not(.active).reviews .h2'), {
                opacity: 0,
                y: -20
            });
            TweenMax.set($('.fullpage > section:not(.active).reviews .sub_title'), {
                opacity: 0,
                y: -20
            });
            TweenMax.to($('.fullpage > section.active.reviews .h2'), 0.5, {
                opacity: 1,
                y: 0
            });
            TweenMax.to($('.fullpage > section.active.reviews .sub_title'), 0.5, {
                opacity: 1,
                y: 0
            }).delay(0.3);
            TweenMax.set($('.fullpage > section:not(.active) .reviews__col'), {
                transformPerspective: 600,
                rotationY: 35,
                opacity: 0,
                x: -50
            });
            TweenMax.staggerTo($('.fullpage > section.active .reviews__col'), 0.5, {
                opacity: 1,
                rotationY: 0,
                x: 0
            }, 0.5);

            //screen7 animate
            TweenMax.set($('.fullpage > section:not(.active) .contacts__item'), {
                opacity: 0,
                x: -100
            });
            TweenMax.staggerTo($('.fullpage > section.active .contacts__item'), 0.5, {
                opacity: 1,
                x: 0,
                ease: Back.easeOut.config(1.7)
            }, 0.5);
            TweenMax.set($('.fullpage > section:not(.active) .contacts__information__row'), {
                opacity: 0,
                y: -20
            });
            setTimeout(function () {
                TweenMax.staggerTo($('.fullpage > section.active .contacts__information__row'), 0.5, {
                    y: 0,
                    opacity: 1
                }, 0.2);
            },1500);
            TweenMax.set($('.fullpage > section:not(.active) .contacts__form'), {
                opacity: 0,
                x: -100
            });
            TweenMax.to($('.fullpage > section.active .contacts__form'), 1, {
                opacity: 1,
                x: 0
            }).delay(1);
        }
    });

    $('#fp-nav').addClass('hidden');

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

    // mapInitialize();
});

function mapInitialize() {

    var brooklyn = new google.maps.LatLng(59.92860856, 30.30128850);

    var stylez = [{
        featureType: "all",
        elementType: "all",
        //  stylers: [
        // { saturation: -100 } // <-- THIS
        //  ]
    }];

    var mapOptions = {
        zoom: 16,
        center: brooklyn,
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

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: brooklyn,
        title: "Мы находимся тут!"
    });
}