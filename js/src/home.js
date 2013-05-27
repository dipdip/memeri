require(["main"], function(common) {
    require(["carousel", "navbar"], function(carousel, navbar) {
        // Render navbar
        navbar.addNavBar("memeri");

        return carousel.show();
    });
});
