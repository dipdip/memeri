require(["main"], function(common) {
    require(["carousel", "navbar"], function(carousel, navbar) {
        // Render navbar
        navbar.addNavBar("planets");
        return carousel.show(['homeCarousel1', 'homeCarousel2', 'homeCarousel3']);
    });
});
