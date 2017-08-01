function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset /*|| document.documentElement.scrollTop*/ ,
            shrinkOn = 100,
            logo = document.getElementById("logo"),
            mainNav = document.getElementById("mainNav"),
            logo2 = document.getElementById("logo-image2"),
            width = $(window).width();

        if (distanceY > shrinkOn ) {
            $('#logo').fadeTo(1, 1);
            $('#logo').css('width', '50%');
            $('.headerli').css('padding-bottom', '20px');
            $('.headerli').css('padding-top', '20px');
            $('.headerWrapper').css('background', 'rgba(0,0,0,0.7)');
        } else if (distanceY < shrinkOn) {
            $('#logo').fadeTo(1, 1);
            $('#logo').css('width', '100%');
            $('.headerli').css('padding-bottom', '48px');
            $('.headerli').css('padding-top', '48px');
            $('.headerWrapper').css('background', 'transparent');
        }
    });
}

window.onload = init();