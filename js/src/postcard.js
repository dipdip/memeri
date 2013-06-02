require(["main"], function(common) {
    require(["navbar", "utils", "jquery", "mustache"], function(navbar, utils, $, Mustache) {
        var params = utils.getUrlQueryParams();
        // Render navbar
        navbar.addNavBar("postcard");
        if (!params.rName) {
            params.rName = "Visitor";
            params.sName = "Memeri";
            params.msg = "Thanks for visiting."
        }
        var text = "<h2>Hello {{rName}},</h2><p>This is a message from {{sName}}.  {{msg}}</p>"
        var output = Mustache.to_html(text, params);

        $('#postcard-img').attr('src', params.img);
        $('#postcard-msg').html(output);

        $(document).ready(function() {
            // Makes the wells the same height
            boxes = $('.well');
            maxHeight = Math.max.apply(Math, boxes.map(function() {
                return $(this).height();
            }).get());
            boxes.height(maxHeight);
        });
    });
});
