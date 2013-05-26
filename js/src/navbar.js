define(["jquery", "mustache", "text!navbarTemplate"], function($, Mustache, navbarTemplate) {
    addNavBar = function(activePageName) {
        var data = {
            "pages" : [{
                "url" : "index.html",
                "title" : "Welcome"
            },
            {
                "url": "hello.html",
                "title": "Hello"
            }]
        };
        for (var i = 0; i < data.pages.length; i++){
            var title = data.pages[i].title.toLowerCase();
            if (title == activePageName.toLowerCase()){
                data.pages[i].active =  true;
            }
        }
        var output = Mustache.to_html(navbarTemplate, data);    
        $('body').prepend(output);
    };
    return {
        addNavBar : addNavBar
    };
});
