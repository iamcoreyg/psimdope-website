$(document).ready( function() {
    $('.full-screen').css('height', $(window).height())

    $('.move-circles').on('click', function(){
        return false
    })

    var navIsOpen = false

    var openNavigation = function() {
        $('.circle').removeClass('move-circles')
        $('.circle').removeClass('initial-circles', 1000, 'easeInBack' )
        navIsOpen = true
    }

    $('.move-circles').on('click', function() {
        openNavigation()
    })

    var $navID =  $('#nav-id')
    $('.circle a').hover(function() {
        if(navIsOpen) {
            $navID.text( $(this).data('nav') )
            $navID.toggleClass('show')
        }
    })

    $('#portfolio').waypoint(function() {
        if(navIsOpen == false) {
            openNavigation()
            $navID.removeClass('show')
        }
        $('.circle-wrap ').toggleClass('small-circle-wrap')
    }, { offset: '80%' });


})
