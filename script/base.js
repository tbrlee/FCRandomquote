$(function() {
    $('#imgbutton').mousedown(function() {
         $(this).css('opacity', '0.8');
    });

        $('#imgbutton').mouseup(function() {
         $(this).css('opacity', '1.0');
    });



function randQuote() {
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.getJSON(url, function(data){
        $("#arthquote").html('"' + data.quoteText + '"');
        $("#author").html('-' + data.quoteAuthor);
    });

}

    $("#imgbutton").click(function() {
        randQuote();
    });

});
