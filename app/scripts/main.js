$(document).ready( function() {
    $(".move-circles").on('click', function(){
        return false
    })
    $(".move-circles").on('click', function() {
        $(".circle").removeClass(".move-circles")
        $(".circle").removeClass("initial-circles", 1000, "easeInBack" )
    })
})
