require(["main"], function(common) {
    require(["navbar", "bootstrap", "jquery", "mustache"], function(navbar, Bootstrap, $, Mustache) {
        // // Render navbar
        navbar.addNavBar("postcard");

        $(document).ready(function() {
            $(".thumbnail-postcard").click(function(e) {
                var src = $(this).children("img").attr("src");
                // Change the selected postcard image
                $("#selected-postcard").attr("src", src);
                // Change the hidden element img src
                $("#hidden-img-postcard").attr("value", src);
            });
            $(".thumbnail-stamp").click(function(e) {
                var src = $(this).children("img").attr("src");
                // Change the selected postcard image
                $("#selected-stamp").attr("src", src);
                // Change the hidden element img src
                $("#hidden-img-stamp").attr("value", src);
            });

            $("#postcard-form").submit(function(e) {
                // Cancel the action
                e.preventDefault();
                // Rewrite our own query params
                $this = $(this);
                var img = $("#hidden-img-postcard").val();
                var stamp = $("#hidden-img-stamp").val();
                var sName = $("#sName").val();
                var rName = $("#rName").val();
                var sEmail = $("#sEmail").val();
                var rEmail = $("#rEmail").val();
                var msg = $("#msg").val();
                var query = "img=" + img + "&stamp=" + stamp + "&sName=" + sName + "&sEmail=" + sEmail + "&rName=" + rName + "&rEmail=" + rEmail + "&msg=" + msg;
                query = window.btoa(query);
                window.location.href = $this.attr("action") + "?" + query;
            });
        });
    });
});
