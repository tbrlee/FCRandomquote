$(function() {
    $('#imgbutton').mousedown(function() {
         $(this).css('opacity', '0.8');
    });

        $('#imgbutton').mouseup(function() {
         $(this).css('opacity', '1.0');
    });

var quoteapi = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback";

});
