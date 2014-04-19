var fcVideo = function(div) {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        windowRatio = windowWidth/windowHeight,
        videoRatio = 1.7793594306,
        horizontalMargin = 0,
        maxRatioThreshold = 2.3

    var videoHeight = windowHeight + (windowHeight *.3),
        videoWidth = videoHeight*videoRatio

    horizontalMargin = ((videoWidth - windowWidth)/2)*-1

    if (windowRatio >= videoRatio && windowRatio < maxRatioThreshold) {
        horizontalMargin = ((videoWidth - windowWidth)/2)*-1
    }

    else if (windowRatio > maxRatioThreshold) {
        videoHeight = windowWidth/videoRatio
        videoWidth = windowWidth
    }

    if (horizontalMargin > 0) {
        horizontalMargin = 0
    }

    $(div+" iframe").css({'height': videoHeight,
        'width': videoWidth,
        'min-width': windowWidth,
        'margin-top': '-18.5%',
        'margin-left': horizontalMargin
    })
}
