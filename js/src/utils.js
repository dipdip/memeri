define([], function() {
    getUrlQueryParams = function getUrlQueryParams() {
        var params = {};
        // decode it
        //var decoded = "?" + window.atob(window.location.search.substring(1))
        var decoded = window.location.search;
        decoded.replace(/[?&]+([^=&]+)=([^&]*)/g, function(str, key, value) {
            // // url decode it
            // var s = "name=Terence&sender=Doris&msg=Goodnight"
            // var me = window.btoa(s)
            // console.log(me)
            value = decodeURIComponent((value+'').replace(/\+/g, '%20'));
            return params[key] = value;
        });
        return params;
    };
    return {
        getUrlQueryParams : getUrlQueryParams
    };
});
