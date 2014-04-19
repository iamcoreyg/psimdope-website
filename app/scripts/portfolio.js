$(window).load(function() {
    $.each( tumblr_api_read.posts, function( key, value ) {
        $("#"+value.tags[0]).append( "<div class='portfolio-piece col-sm-3' id=" + value.id +"></div>")
        var image = value['photo-url-250']
//                .replace('http://37.media.tumblr.com/', ''),
//            image = removeTumblr.replace('tumblr_', 'serve_')


        $("#"+value.id).attr('style', "background: url("+image+") center center")
            .append("<div class='caption'>" + value['photo-caption'] + "</div>")

    })


})
