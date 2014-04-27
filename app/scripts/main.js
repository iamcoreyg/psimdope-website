$(document).ready( function() {
    $('.full-screen').css('height', $(window).height())

    var navIsOpen = false

    $('.move-circles').on('click', function(){
        if(navIsOpen == false) {
            return false
        }
    })

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

    var category = null,
        numPiecesInCategory = 0,
        piece = 0

if(window.console) console.log("33 ;", piece);

    var loadPiece = function (category, piece) {
        var $categoryElement =  $('#' + category)
        numPiecesInCategory = $categoryElement.children().length
        if(piece >= 0 && piece < numPiecesInCategory) {
            $('.portfolio-piece-selected').removeClass('portfolio-piece-selected')
            $('#' + category).children().eq(piece).addClass('portfolio-piece-selected')
            if(window.console) console.log("40"+ piece);
        }
    }

    $('#categories a').on('click', function() {
        category = $(this).data('category')

        $("#pieces .row").removeClass('show')
        $("#" + category).addClass('show')
        $('#' + category).children().eq(0).addClass('portfolio-piece-selected')

        $('.category-circle').removeClass('category-circle-active')
        $(this).prev().addClass('category-circle-active')

        return false
    })

    $("#next").on('click', function() {

        if( piece >= 0 && piece < $('#' + category).children().length-1) {
            piece += 1
            loadPiece(category, piece)
        }
        return false
    })

    $("#prev").on('click', function() {

        if( piece > 0) {
            piece--
            loadPiece(category, piece)
        }
        return false
    })





})
