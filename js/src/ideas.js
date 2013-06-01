require(["main"], function(common) {
    require(["carousel", "navbar"], function(carousel, navbar) {
        // Render navbar
        navbar.addNavBar("ideas");
        return carousel.show(['ideasCarousel1']);
    });
});
