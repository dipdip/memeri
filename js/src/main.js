require.config({
    paths : {
        // Third party dependencies
        jquery : '../3p/jquery-1.9.1.min',
        bootstrap : '../3p/bootstrap.min',
        mustache : '../3p/mustache',
        text : '../3p/text',
        // Our js
        carousel : '../src/carousel',
        navbar: '../src/navbar',
        dataProxy: '../src/dataProxy',
        // Templates
        carouselTemplate: '../../html/template/carousel.html',
        navbarTemplate: '../../html/template/navbar.html'
    },
    shim : {
        'bootstrap' : {
            deps : ['jquery'],
            exports : 'bootstrap'
        }
    }
});
