define(["jquery", "bootstrap", "mustache", "text!navbarTemplate"], function($, Bootstrap, Mustache, navbarTemplate) {
    addNavBar = function(activePageName) {
        var data = {
            "pages" : [{
                "url" : "planets.html",
                "title" : "planets"
            },            
            {
                "url": "ideas.html",
                "title": "ideas"
            },
			{
                "url": "hello.html",
                "title": "hello"
            },
			{
                "url": "toast.html",
                "title": "toast"
            },
            {
                "url": "createPostcard.html",
                "title": "postcard"
            }]
        };
        for (var i = 0; i < data.pages.length; i++){
            var title = data.pages[i].title.toLowerCase();
            if (title == activePageName.toLowerCase()){
                data.pages[i].active =  true;
                break;
            }
        }
        var output = Mustache.to_html(navbarTemplate, data);    
        $('body').prepend(output);
    };
    return {
        addNavBar : addNavBar
    };
});
