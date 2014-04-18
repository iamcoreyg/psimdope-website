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

    $(".circle a").hover(function() {
        var $navID =  $("#nav-id")
        if(navIsOpen) {
            $navID.text( $(this).data("nav") )
            $navID.toggleClass("show")
        }
    })

})
