$(window).load(function() {
    var tags
    $.each( tumblr_api_read.posts, function( key, value ) {
        tags = value.tags[0].replace('psimdope-', '')
        $("#"+tags).append( "<div class='portfolio-piece' id=" + value.id +"></div>")
        var image = value['photo-url-500']

        $("#"+value.id).attr('style', "background: url("+image+") center center no-repeat")
            .append("<div class='caption'>" + value['photo-caption'] + "</div>")

    })


})
