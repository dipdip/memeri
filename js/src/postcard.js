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

        mapping = {
            "image/Peekaboo2S.jpg" : {
                "name" : "Peekaboo",
                "poem" : "I see you<br>Do you see me too?<br><p class='align-right'>~Toast</p>"
            },
            "image/scoop2S.jpg" : {
                "name" : "Scoop",
                "poem" : "One scoop<br>Two scoops<br>Three scoops<br>Forever more<br><p class='align-right'>~Toast</p>"
            },
            "image/shell-shock2S.jpg" : {
                "name" : "Shell Shock",
                "poem" : "Hey, you’re there, I’m here<br>We’re not that far apart<br>We look similar despite differences<br>Actually, I think we look quite good together<br>What do you say?<br><p class='align-right'>~D</p>"
            },
            "image/Snooze2S.jpg" : {
                "name" : "Snooze",
                "poem" : "Buzz<br>Snooze<br>Buzz<br>Snooze<br>Buzz<br>Is it summer yet?<br><p class='align-right'>~Toast</p>"
            },
            "image/Falling in time2S.jpg" : {
                "name" : "Falling in time",
                "poem" : "Time is precious<br>Time is money<br>Can I have more time?<br><p class='align-right'>~Toast</p>"
            },
            "image/BloomS.jpg" : {
                "name" : "Bloom",
                "poem" : "Roses are not red<br>Violets are not blue<br>I see a bud<br>Lookin' just like you<br><p class='align-right'>~Toast</p>"
            },
            "image/MakiEclipseS.jpg" : {
                "name" : "Maki Eclipse",
                "poem" : "All the pieces are put just right<br>Time to enjoy it with the eyes<br><br><p class='align-right'>~D</p>"
            },
            "image/Northpole2S.jpg" : {
                "name" : "North Pole",
                "poem" : "I see north<br>I see south<br>What you see is not what it seems<br>Then what is it that you see?<br><p class='align-right'>~Toast</p>"
            },
            "image/whatsoutthere2Small.jpg":{
                "name": "What's Out There",
                "poem": "\"There's much to be seen.<br>There's much to experience.<br>There's never enough time.<br> To know what's out there.\"<br><p class='align-right'>~Toast</p>"
            }
        }

        params.poem = mapping[params.img].poem
        params.img_name = mapping[params.img].name
        var text = "<h2>Hello {{rName}}!</h2><p>You've received a postcard from <b>{{sName}}</b>.  Hover over the postcard to reveal a special memeri.</p><p>{{sName}} has chosen to send you, <b>{{img_name}}</b>."
        var text2 = "<div id='postcard-inside' class='row-fluid'><div id='postcard-left' class='span6'><div id='postcard-msg'>{{rName}},<br>{{msg}}<br><p class='align-right'>-{{sName}}</p></div></div><div class='span6' id='postcard-right'><div class='row-fluid'><div class='span6 offset4' id='stamp'><img id='stamp-img' src='{{stamp}}'></div></div><div class='row-fluid'><div id='poem' class='span12'>{{{poem}}}</div></div></div></div>"
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
