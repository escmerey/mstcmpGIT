$(document).ready(function() {

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