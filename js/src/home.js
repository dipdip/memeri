require(["main"], function(common) {
    require(["carousel", "navbar"], function(carousel, navbar) {
        // Render navbar
        navbar.addNavBar("home");
        return carousel.show();
    });
});
