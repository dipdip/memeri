require(["main"], function(common) {
    require(["navbar", "dataProxy"], function(navbar, dataProxy) {
        //navbar.addNavBar("hello");

        $("#hello-form").submit(function(e) {
            // Cancel the action
            e.preventDefault();
            // Rewrite our own query params
            $this = $(this);
            var data = $(this).serializeArray();
            var params = {};
            for (var i = 0; i < data.length; i++) {
                params[data[i].name] = data[i].value;
            }
            var options = {
                "method" : "POST",
                'params' : params
            }
            dataProxy.getData("/sendFeedback", options, function(data) {
                console.log(data);
                if (!data.error)
                    window.location.href = "/thanks.html";
                else
                    alert("Invalid captcha.  Please try again")
            });
        });
    });
});
