var slider = tns({
    container: '.my-slider',
    gutter: 12,
    mouseDrag: true,
    loop: false,
    nav: false,
    controls: false,
    swipeAngle: false,
    speed: 400,
    responsive: {
        0: {
            items: 2.5
        },
        576: {
            items: 3.5
        },
        1200: {
            items: 4.5
        }
    }
    // responsive mob=2.5 tablet=3.5 desktop=4.5
});