require(["main"], function(common) {
    require(["jquery", "carousel", "navbar"], function($, carousel, navbar) {
        // Render navbar
        navbar.addNavBar("ideas");
        
        return carousel.show(["ideasCarousel1"]);
    });
});
