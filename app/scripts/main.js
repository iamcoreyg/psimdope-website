$(document).ready( function() {
    $(".move-circles").on('mouseenter', function() {
        $(".circle").removeClass(".move-circles")
        $(".circle").removeClass("initial-circles", 1000, "easeInBack" )
    })
})
