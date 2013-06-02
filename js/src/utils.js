define([], function() {
    getUrlQueryParams = function getUrlQueryParams() {
        var params = {};
        // decode it
        var decoded = "?" + window.atob(window.location.search.substring(1))
        decoded.replace(/[?&]+([^=&]+)=([^&]*)/g, function(str, key, value) {
            value = decodeURIComponent((value+'').replace(/\+/g, '%20'));
            return params[key] = value;
        });
        return params;
    };
    return {
        getUrlQueryParams : getUrlQueryParams
    };
});
