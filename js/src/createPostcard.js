require(["main"], function(common) {
    require(["navbar", "bootstrap", "jquery", "mustache"], function(navbar, Bootstrap, $, Mustache) {
        // // Render navbar
        navbar.addNavBar("postcard");
    });
});
