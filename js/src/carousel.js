define(["jquery", "bootstrap", "mustache", "navbar", "dataProxy", "text!carouselTemplate"], function($, bootstrap, Mustache, navbar, dataProxy, carouselTemplate) {
    show = function(carousels) {

        var options = {
            async : false,
            method : "GET"
        };

        for (var i = 0; i < carousels.length; i++) {
            var fileIndex = i + 1;
            dataProxy.getData('data/' + carousels[i] + '.json', options, function(data) {
                data.carouselName = carousels[i];

                //Add id to each item
                for (var j = 0; j < data.images.length; j++) {
                    data.images[j].id = fileIndex.toString() + j;
                }

                var output = Mustache.to_html(carouselTemplate, data);
                $("#" + carousels[i]).html(output);
                // make the first one active
                $("#" + carousels[i] + " .item").first().addClass("active");
                // Generate indicator
                for (var j = 0; j < data.images.length; j++) {
                    $("#" + carousels[i] + " .carousel-indicators").append('<li data-target="#' + carousels[i] + '" data-slide-to="' + j + '"></li>');
                    if (j == 0) {
                        $("#" + carousels[i] + " .carousel-indicators li").first().addClass("active");
                    }
                }
                // Make it a carousel and move every 3s
                $(document).ready(function() {
                    $("#" + carousels[i]).carousel({
                        interval : 7000
                    });
                });
            });
        }

    };
    return {
        show : show
    };
});
