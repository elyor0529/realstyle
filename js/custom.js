$(document).ready(function () {

    /***************** Navbar-Collapse ******************/

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /***************** Page Scroll ******************/

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /***************** Scroll Spy ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    /***************** Owl Carousel ******************/

    $("#owl-hero").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });


    /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#owl-hero .item').css('height', slideHeight);

    $(window).resize(function () {
        $('#owl-hero .item').css('height', slideHeight);
    });

    /***************** Google Map ******************/

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(41.290720, 69.204678),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.290720, 69.204678),
            map: map
        });
        showInfoWindow();

        google.maps.event.addListener(marker, 'click', function (e) {
            showInfoWindow();
        });

        function showInfoWindow() {
            infowindow.setContent("<b>OOO «REAL EXPERT PHARM»</b> <br/>" +
                " Ташкент обл.,Зангиатинский рай. <br/> г. Келес; ул.Окибат , дом-61 <br/>" +
                " Тел. +99895 144 29 80;+99897 737 29 80 <br>" +
                " <img src='img/office.jpg' />");
            infowindow.open(map, marker);
        }

    }

    google.maps.event.addDomListener(window, 'load', initialize);

    /***************** Wow.js ******************/

    new WOW().init();

    /***************** Preloader ******************/

    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });

    /***************** Portfolio ********************/
    $("#owl-portfolio").owlCarousel({

        // Most important owl features
        items: 10,

        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        //Pagination
        pagination: true,
        paginationNumbers: true,

        // Responsive
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,

        //Lazy load
        lazyLoad: true,
        lazyFollow: true,
        lazyEffect: "fade"

    });

})