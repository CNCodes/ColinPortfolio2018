$(window).scroll(function () {
    var scrollLocation = $(window).scrollTop();
    if (scrollLocation <= 30) {
        $( '.bg-dark' ).each(function () {
            this.style.setProperty( 'background-color', 'transparent', 'important' );
        });

        $(".navbar-dark .navbar-nav .nav-link").hover(function() {
            $(this).css("background-color","#5e54ef");
        }, function(){
            $(this).css("background-color", 'transparent');
        });

        $(".navbar-dark .navbar-nav .nav-link").hover(function() {
            $(this).css("color","white");
        }, function(){
            $(this).css("color", '#5e54ef');
        });

        $('.navbar').css('border-bottom-color', 'transparent');
        $('.navbar-dark .navbar-nav .nav-link').css('background-color', 'transparent');
        $('.navbar-dark .navbar-nav .nav-link').css('color', '#5e54ef');
        $('.nav-link').css('border-color', 'transparent');



    } else if (scrollLocation > 30) {
        $( '.bg-dark' ).each(function () {
            this.style.setProperty( 'background-color', '#2c2e30', 'important' );
        });
        $(".navbar-dark .navbar-nav .nav-link").hover(function() {
            $(this).css("background-color","transparent")
        }, function(){
            $(this).css('background-color', '#5e54ef');
        });

        $(".navbar-dark .navbar-nav .nav-link").hover(function() {
            $(this).css("color","#5e54ef");
        }, function(){
            $(this).css('color', 'white');
        });


        $('.navbar').css('border-bottom-color', '#5e54ef');
        $('.navbar-dark .navbar-nav .nav-link').css('background-color', '#5e54ef');
        $('.navbar-dark .navbar-nav .nav-link').css('color', 'white');
        $('.nav-link').css('border-color', '#5e54ef');



    }
});

$(document).ready(function() {

    $('.acsaa-info-button').hover(function(){
        $('.acsaa-weblink').css('color', '#8a181a')
    })
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowSize = $window.width();
        console.log(windowSize);
        if (windowSize <= 700) {
            console.log('success')
            //if the window is greater than 440px wide then turn on jScrollPane..
            $('.right-side-scroll').attr('data-aos', 'fade-up');
            $('.left-side-scroll').attr('data-aos', 'fade-up');
            $('#portfolio').css('height', '100%');
            $('.portfolio-middle').removeClass('mx-5')
        } else {
            $('.right-side-scroll').attr('data-aos', 'fade-right');
            $('.left-side-scroll').attr('data-aos', 'fade-left');
            $('#portfolio').css('height: 400px');
            $('.portfolio-middle').addClass('mx-5');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

