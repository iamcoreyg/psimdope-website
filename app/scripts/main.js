$(document).ready( function() {
    $(".move-circles").on('click', function(){
        return false
    })
    var navIsOpen = false
    $(".move-circles").on('click', function() {
        $(".circle").removeClass(".move-circles")
        $(".circle").removeClass("initial-circles", 1000, "easeInBack" )
        navIsOpen = true
    })

    $(".circle a").on('mouseenter', function() {
        if(navIsOpen)
            $("#nav-title").text( $(this).data("nav") )
    })

})
