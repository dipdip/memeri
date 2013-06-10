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
        params.poem = "\"There's much to be seen.<br>There's much to experience.<br>There's never enough time.<br> To know what's out there.\"<br><p class='align-right'>~Toast</p>"
        var text = "<h2>Hello {{rName}}!</h2><p>You've received a postcard from <b>{{sName}}</b>.  Hover over the postcard to reveal a special memeri.</p><p>{{sName}} has chosen to send you, |art name|."
        //var text2 = "<div id='postcard-inside'><div id='center' class='column'>To: {{rName}}<br>From: {{sName}}</div><div id='left' class='column'>{{msg}}</div><div id='right' class='column'><img id='stamp' src='image/stamp1.png'></div></div>"
        //var text2 = "<div id='postcard-inside' class='row'><div id='left' class='span5'><br><br>{{msg}}<br><br>From: {{sName}}</div><div class='span2' id='right'><div class='row pull-right'><div class='span2 pull-right stamp-img'><img id='stamp' src='image/stampToast.png'></div></div><div class='pull-left span3' id='to-header'>To: {{rName}}</div></div></div>"
        var text2 = "<div id='postcard-inside' class='row-fluid'><div id='postcard-left' class='span6'><div id='postcard-msg'>{{rName}},<br>{{msg}}<br><p class='align-right'>-{{sName}}</p></div></div><div class='span6' id='postcard-right'><div class='row-fluid'><div class='span' id='stamp'><img id='stamp-img' src='{{stamp}}'></div></div><div class='row-fluid'><div id='poem' class='span12'>{{{poem}}}</div></div></div></div>"
        var output = Mustache.to_html(text, params);
        var output2 = Mustache.to_html(text2, params);

        $('#postcard-img').attr('src', params.img);
        $('#postcard-msg').html(output);
        $('#postcard-captions').html(output2);

        $(document).ready(function() {

            $("[rel='tooltip']").tooltip();

            $('#postcard .postcard-content').hover(function() {
                $('#postcard-captions').fadeIn(250);
                // add scroll bar only if overflows
                if ($('#postcard .postcard-content').prop('scrollHeight') - 2 > $('#postcard .postcard-content').prop('clientHeight')) {
                    $('#postcard .postcard-content').css('overflow', 'scroll');
                }

            }, function() {
                $('#postcard-captions').fadeOut(250);
                // remove scroll bars
                $('#postcard .postcard-content').css('overflow', 'hidden');
            });
        });
    });
});
