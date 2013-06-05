require(["main"], function(common) {
    require(["navbar", "utils", "jquery", "mustache", "bootstrap"], function(navbar, utils, $, Mustache, Bootstrap) {
        var params = utils.getUrlQueryParams();
        // Render navbar
        navbar.addNavBar("postcard");
        if (!params.rName) {
            params.rName = "Visitor";
            params.sName = "Memeri";
            params.msg = "Thanks for visiting."
        }
        var text = "<h2>Hello {{rName}}!</h2><p>You've received a postcard from <b>{{sName}}</b>.  Hover over the postcard to reveal a special memeri.</p><p>{{sName}} has chosen to send you, |art name|."
        var text2 = "<div id='postcard-inside'><h3>From: {{sName}}</h3><br><br><div align='center'><h3>To: {{rName}}<br>{{msg}}</h3></div></div>"
        var output = Mustache.to_html(text, params);
        var output2 = Mustache.to_html(text2, params);

        $('#postcard-img').attr('src', params.img);
        $('#postcard-msg').html(output);
        $('#postcard-captions').html(output2);

        $(document).ready(function() {
            // TOOD not beign used
            // Makes the wells the same height
            boxes = $('.well');
            maxHeight = Math.max.apply(Math, boxes.map(function() {
                return $(this).height();
            }).get());
            boxes.height(maxHeight);

            $("[rel='tooltip']").tooltip();

            $('#postcard .postcard-content').hover(function() {
                $('#postcard-captions').fadeIn(250);
            }, function() {
                $('#postcard-captions').fadeOut(205);
            });
        });
    });
});
