define(["jquery"], function($) {
    var getData;
    getData = function(url, options, callback) {
        if (options.params) {
            options.params = JSON.stringify(options.params)
        }
        return $.ajax({
            type : options.method,
            url : url,
            async : true,
            data : options.params,
            dataType : "json",
            contentType : "application/json",
            success : function(data) {
                if (callback) {
                    return callback(data);
                } else {
                    return data;
                }
            },
            error : function(xhr, ajaxOptions, thrownError) {
                console.log("error");
            }
        });
    };
    return {
        getData : getData
    };
});
