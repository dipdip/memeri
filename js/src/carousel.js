define(["jquery", "bootstrap", "mustache", "navbar", "dataProxy", "text!carouselTemplate"], function($, bootstrap, Mustache, navbar, dataProxy, carouselTemplate) {
    show = function() {

        var options = {
            async : false,
            method : "GET"
        };

        var carousels = ['homeCarousel1', 'homeCarousel2', 'homeCarousel3'];

        for (var i = 0; i < carousels.length; i++) {
            fileIndex = i + 1;
            dataProxy.getData('data/carousel' + fileIndex + '.json', options, function(data) {
                data.carouselName = carousels[i];
                var output = Mustache.to_html(carouselTemplate, data);
                $("#" + carousels[i]).html(output);
                // make the first one active
                $("#" + carousels[i] + " .item").first().addClass("active");
                // Generate indicator
                for (var j = 0; j < data.images.length; j++) {
                    $("#" + carousels[i] + " .carousel-indicators").append('<li data-target="#' + carousels[i] + '" data-slide-to="' + j + '"></li>');
                    if (j == 0){
                        $("#" + carousels[i] + " .carousel-indicators li").first().addClass("active");
                    }
                }
                // Make it a carousel and move every 3s
                $(document).ready(function() {
                    $("#" + carousels[i]).carousel({
                        interval : 3000
                    });
                });
            });
        }

    };
    return {
        show : show
    };
});
