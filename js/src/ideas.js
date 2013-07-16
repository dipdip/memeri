require(["main"], function(common) {
    require(["jquery", "navbar","carousel"], function($, navbar, carousel) {
        // Render navbar
        navbar.addNavBar("ideas");
        
        return carousel.show(["ideasCarousel1"]);
    });
});
