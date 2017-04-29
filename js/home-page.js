$(function() {

    $('.fullpage').fullpage({
        sectionSelector: 'section',
        navigation: true,
        navigationPosition: 'right',
        // responsiveWidth: 1200,
        responsiveSlides: true,
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
            setTimeout(function() {
                TweenMax.staggerTo($('.fullpage > section.active .contacts__information__row'), 0.5, {
                    y: 0,
                    opacity: 1
                }, 0.2);
            }, 1500);
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

    //screen1 animate
    $('.basic__backbg img').each(function(index, el) {
        TweenMax.to($(this), 3, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 10,
                    y: 10,
                }, {
                    x: 0,
                    y: 20,
                }, {
                    x: -10,
                    y: 10,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.basic__backbg img:nth-child(4n+1)').each(function(index, el) {
        TweenMax.to($(this), 2.5, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: -10,
                    y: 10,
                }, {
                    x: 0,
                    y: 20,
                }, {
                    x: 10,
                    y: 10,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.basic__backbg img:nth-child(3n+1)').each(function(index, el) {
        TweenMax.to($(this), 1.5, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 5,
                    y: 5,
                }, {
                    x: 0,
                    y: 10,
                }, {
                    x: -5,
                    y: 5,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.basic__backbg img:nth-child(2n+1)').each(function(index, el) {
        TweenMax.to($(this), 2, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: -5,
                    y: 5,
                }, {
                    x: 0,
                    y: 10,
                }, {
                    x: 5,
                    y: 5,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });

    //screen2 animate
    $('.about__backbg img').each(function(index, el) {
        TweenMax.to($(this), 3, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 10,
                    y: 10,
                }, {
                    x: 0,
                    y: 20,
                }, {
                    x: -10,
                    y: 10,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.about__backbg img:nth-child(4n+1)').each(function(index, el) {
        TweenMax.to($(this), 2.5, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 10,
                    y: 10,
                }, {
                    x: 0,
                    y: 20,
                }, {
                    x: -10,
                    y: 10,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.about__backbg img:nth-child(3n+1)').each(function(index, el) {
        TweenMax.to($(this), 1.5, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 5,
                    y: 5,
                }, {
                    x: 0,
                    y: 10,
                }, {
                    x: -5,
                    y: 5,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.about__backbg img:nth-child(2n+1)').each(function(index, el) {
        TweenMax.to($(this), 2, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 5,
                    y: 5,
                }, {
                    x: 0,
                    y: 10,
                }, {
                    x: -5,
                    y: 5,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });

    //screen3 animate
    $('.idea__backbg img').each(function(index, el) {
        TweenMax.to($(this), 3, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 10,
                    y: 10,
                }, {
                    x: 0,
                    y: 20,
                }, {
                    x: -10,
                    y: 10,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.idea__backbg img:nth-child(4n+1)').each(function(index, el) {
        TweenMax.to($(this), 2.5, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 10,
                    y: 10,
                }, {
                    x: 0,
                    y: 20,
                }, {
                    x: -10,
                    y: 10,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.idea__backbg img:nth-child(3n+1)').each(function(index, el) {
        TweenMax.to($(this), 1.5, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: -5,
                    y: 5,
                }, {
                    x: 0,
                    y: 10,
                }, {
                    x: 5,
                    y: 5,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });
    $('.idea__backbg img:nth-child(2n+1)').each(function(index, el) {
        TweenMax.to($(this), 2, {
            bezier: {
                curviness: 1.25,
                values: [{
                    x: 5,
                    y: 5,
                }, {
                    x: 0,
                    y: 10,
                }, {
                    x: -5,
                    y: 5,
                }, {
                    x: 0,
                    y: 0,
                }, ],
            },
            ease: Power0.easeNone
        }).repeat(-1);
    });

    //screen4 animate
    tl = new TimelineMax();
    tl.to($('.success'), 1.5, {
        backgroundSize: '115% 115%',
        ease: Back.easeOut.config(1.7)
    }).to($('.success'), 1.5, {
        backgroundSize: '110% 110%',
        ease: Back.easeOut.config(1.7)
    }).repeat(-1);


    //screen5 animate
    $('.camps__backbg img:nth-child(2n+1)').each(function(index, el) {
        tl = new TimelineMax();
        tl.to($(this), 2, {
            scale: 0.5,
            ease: Power2.easeOut
        }).to($(this), 2, {
            scale: 1,
            ease: Power2.easeOut
        }).repeat(-1);
    });

    $('.camps__backbg img:nth-child(2n+2)').each(function(index, el) {
        tl = new TimelineMax();
        tl.to($(this), 1.3, {
            scale: 0.5,
            ease: Power2.easeOut
        }).to($(this), 1.3, {
            scale: 1,
            ease: Power2.easeOut
        }).repeat(-1);
    });

    $('.camps__backbg img:nth-child(2n+3)').each(function(index, el) {
        tl = new TimelineMax();
        tl.to($(this), 2, {
            scale: 0.5,
            ease: Power2.easeOut
        }).to($(this), 2, {
            scale: 1,
            ease: Power2.easeOut
        }).repeat(-1);
    });

    $(document).on('mousemove', function(e) {
        var psRight = e.clientX;
        var psTop = e.clientY;
        TweenMax.to($('.about__backbg img:nth-child(4n+1)'), 1, {
            x: psRight / 50,
            y: psTop / 50,
            ease: Power2.easeOut
        });
        TweenMax.to($('.about__backbg img:nth-child(3n+1)'), 1, {
            x: psRight / 20,
            y: psTop / 20,
            ease: Power2.easeOut
        });
        TweenMax.to($('.camps__backbg img:nth-child(4n+1)'), 1, {
            x: psRight / 50,
            y: psTop / 50,
            ease: Power2.easeOut
        });
        TweenMax.to($('.camps__backbg img:nth-child(3n+1)'), 1, {
            x: psRight / 20,
            y: psTop / 20,
            ease: Power2.easeOut
        });
        TweenMax.to($('.camps__backbg img:nth-child(2n+1)'), 1, {
            x: psRight / 80,
            y: psTop / 80,
            ease: Power2.easeOut
        });
    });

    //screen5 animate
    tl = new TimelineMax();
    tl.staggerTo($('.reviews__backbg img:nth-child(n):nth-child(-n+5)'), 1, {
        x: '+=50px',
        ease: Power2.easeOut
    }, 0.2).staggerTo($('.reviews__backbg img:nth-child(n):nth-child(-n+5)'), 1, {
        x: '-=50px',
        ease: Power2.easeOut
    }, 0.2).repeat(-1);

    tl = new TimelineMax();
    tl.staggerTo($('.reviews__backbg img:nth-child(n+6):nth-child(-n+7)'), 1, {
        y: '+=50px',
        ease: Power2.easeOut
    }, 0.2).staggerTo($('.reviews__backbg img:nth-child(n+6):nth-child(-n+7)'), 1, {
        y: '-=50px',
        ease: Power2.easeOut
    }, 0.2).repeat(-1);

    tl = new TimelineMax();
    tl.staggerTo($('.reviews__backbg img:nth-child(n+8):nth-child(-n+12)'), 1, {
        x: '-=50px',
        ease: Power2.easeOut
    }, 0.2).staggerTo($('.reviews__backbg img:nth-child(n+8):nth-child(-n+12)'), 1, {
        x: '+=50px',
        ease: Power2.easeOut
    }, 0.2).repeat(-1);

    tl = new TimelineMax();
    tl.staggerTo($('.reviews__backbg img:nth-child(n+13):nth-child(-n+14)'), 1, {
        y: '-=50px',
        ease: Power2.easeOut
    }, 0.2).staggerTo($('.reviews__backbg img:nth-child(n+13):nth-child(-n+14)'), 1, {
        y: '+=50px',
        ease: Power2.easeOut
    }, 0.2).repeat(-1);

});