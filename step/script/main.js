$(document).ready(function () {
    const serviceText = {
        web_design: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ex erat. Mauris in pulvinar leo. Aliquam tincidunt pulvinar efficitur. Nam aliquam lacinia commodo. Nulla faucibus vehicula mattis. Praesent at feugiat orci. Cras orci eros, scelerisque eget augue nec, venenatis lobortis mauris. Pellentesque venenatis, leo vel euismod euismod, lorem augue facilisis justo, ac faucibus orci nisl ac odio. Morbi vitae urna bibendum, rutrum ex eget, fringilla mi. Morbi cursus porttitor tortor sed luctus. Nullam hendrerit sem ut velit imperdiet mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        graphic_design: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum pulvinar condimentum. Nullam nulla sapien, volutpat id odio eu, volutpat finibus lectus. Nullam nec nunc quam. Pellentesque sed interdum mauris, a hendrerit libero. Praesent tincidunt facilisis commodo. Praesent eget lacus imperdiet, pharetra sem ut, euismod quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tortor lorem, tempus a pellentesque nec, euismod vel velit.",
        online_support: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam purus non leo ultricies pharetra. Donec sed lobortis metus, at rutrum nibh. Donec convallis orci commodo dui malesuada, ac aliquet ipsum dictum. Integer tincidunt sodales nulla, et varius lacus fermentum et. Integer vitae tempus purus. Fusce facilisis dapibus dui, pulvinar faucibus nulla hendrerit eget. Nulla mattis porta fermentum. Mauris finibus lorem et ante tempus semper. Suspendisse potenti. Donec id rhoncus ex. Aenean tempor, ante eu eleifend consectetur, arcu ligula scelerisque tellus, vel ultrices felis tortor eu quam. Fusce venenatis nunc justo, et convallis arcu commodo luctus. Suspendisse non molestie ante. Morbi aliquam aliquam magna id varius. Duis suscipit, erat sit amet tincidunt bibendum, dui nisl efficitur nulla, at eleifend lacus turpis sit amet arcu.",
        app_design: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu justo hendrerit, ultrices turpis ut, blandit diam. Duis dui purus, pulvinar eget gravida ut, venenatis eu neque. Donec auctor vel ipsum vel sollicitudin. Nulla pretium sapien eget justo volutpat auctor. Mauris eu aliquam lacus. Duis in ipsum porttitor, aliquam leo ut, faucibus mi. Cras et mi dapibus, ullamcorper augue id, egestas arcu. Phasellus rhoncus iaculis venenatis. Etiam id magna vel purus ullamcorper sodales sit amet quis dolor.",
        online_marketing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla est, volutpat sed ex accumsan, ullamcorper facilisis mauris. Vestibulum nec tristique quam, nec maximus mi. Cras eu orci dolor. Quisque id neque nec purus rutrum dignissim eu ut neque. Aenean lacinia turpis ut elit pellentesque, eget efficitur elit mattis. Aliquam erat volutpat. Etiam accumsan, leo egestas consectetur placerat, turpis sapien condimentum lectus, rutrum auctor urna lacus vitae augue. Maecenas scelerisque viverra elementum. Integer venenatis rhoncus consequat. Vestibulum ultrices, ante in accumsan pellentesque, tortor nisl ultrices eros, ut ullamcorper nisi ligula quis nisl. Ut consequat eleifend ante ac ultrices. Proin ante mauris, fringilla congue varius non, imperdiet eget diam. Donec non condimentum mauris. Donec condimentum lectus vitae posuere sollicitudin. Morbi aliquet, erat ac condimentum porta, est diam rutrum leo, non sollicitudin neque est vitae lectus.",
        seo_service: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, sem sit amet finibus cursus, sapien est feugiat diam, in auctor quam nisi id arcu. Vivamus tincidunt pharetra purus quis molestie. Nulla pulvinar ac eros eu ultricies. Vestibulum sagittis aliquet nulla. Duis pretium nisl suscipit libero facilisis, ac luctus dui mattis. Vestibulum malesuada a orci ultrices egestas. Nulla sagittis leo eget mauris lobortis porta."
    };
    $(".service-theme").click((e) => {
        $(".service-theme").removeClass("service-active");
        $(e.target).addClass("service-active");
        let themeKey = $('.service-active').attr('data-theme');
        let textKey = themeKey.split("-").join("_");
        $("#service-img").attr("src", `images/services/service-${themeKey}.jpg`);
        switch (true) {
            case themeKey == "web-design":
                $(".service-content>p").html(serviceText.web_design);
                break;
            case themeKey == "graphic-design":
                $(".service-content>p").html(serviceText.graphic_design);
                break;
            case themeKey == "online-support":
                $(".service-content>p").html(serviceText.online_support);
                break;
            case themeKey == "app-design":
                $(".service-content>p").html(serviceText.app_design);
                break;
            case themeKey == "online-marketing":
                $(".service-content>p").html(serviceText.online_marketing);
                break;
            case themeKey == "seo-service":
                $(".service-content>p").html(serviceText.seo_service);
                break;
        }
    });
    const graph = "graphic-design";
    const web = "web-design";
    const landing = "landing-pages";
    const wordpress = "wordpress";
    const portfolioHover = {
        graph: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>awesome design</p><p>graphic design</p></div></div>",
        web: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>creative design</p><p>web design</p></div></div>",
        land: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>variety of patterns</p><p>landing pages</p></div></div>",
        word: "<div class='portfolio-hover'> <div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class='portfolio-info'><p>functional</p><p>wordpress</p></div></div>"
    };
    for (let i = 1; i <= 4; i++) {
        $(".portfolio").append(`<div class='port-img ${graph}'><img src='images/portfolio/${graph}/${graph}${i}.jpg' alt='web'></div>`);
        $(".portfolio").append(`<div class='port-img ${web}'><img src='images/portfolio/${web}/${web}${i}.jpg' alt='web'></div>`);
        $(".portfolio").append(`<div class='port-img ${landing}'><img src='images/portfolio/${landing}/${landing}${i}.jpg' alt='web'></div>`);
        $(".portfolio").append(`<div class='port-img ${wordpress}'><img src='images/portfolio/${wordpress}/${wordpress}${i}.jpg' alt='web'></div>`);
    }
    getImgHover = () => {
        $(".graphic-design>img").before(portfolioHover.graph);
        $(".web-design>img").before(portfolioHover.web);
        $(".landing-pages>img").before(portfolioHover.land);
        $(".wordpress>img").before(portfolioHover.word);
    };


    let loadBtnStatus = false;
    let currentClass = false;
    $(".portfolio-theme").click((e) => {
        $(".portfolio-theme").removeClass("portfolio-active");
        $(e.target).addClass("portfolio-active");
        currentClass = $(e.target).attr('data-filter');
        if (currentClass != "all") {
            $(`.${currentClass}`).fadeIn("fast");
            $(".port-img").not(`.${currentClass}`).css("display", "none");
        } else {
            $(".port-img").css("display", "block");
        }
    });


    $(".portfolio-load").click(() => {
        $(".portfolio-block>.load-wrapp").css("display", "block");
        setTimeout(() => {
            $(".portfolio-block>.load-wrapp").css("display", "none");
            if (loadBtnStatus == false) {
                for (let j = 4; j <= 6; j++) {
                    $(".portfolio").append(`<div class='port-img ${graph}'><img src='images/portfolio/${graph}/${graph}${j}.jpg' alt='web'></div>`);
                    $(".portfolio").append(`<div class='port-img ${web}'><img src='images/portfolio/${web}/${web}${j}.jpg' alt='web'></div>`);
                    $(".portfolio").append(`<div class='port-img ${landing}'><img src='images/portfolio/${landing}/${landing}${j}.jpg' alt='web'></div>`);
                    $(".portfolio").append(`<div class='port-img ${wordpress}'><img src='images/portfolio/${wordpress}/${wordpress}${j}.jpg' alt='web'></div>`);
                    loadBtnStatus = true;
                }
            } else {
                for (let k = 7; k <= 9; k++) {
                    $(".portfolio").append(`<div class='port-img ${graph}'><img src='images/portfolio/${graph}/${graph}${k}.jpg' alt='web'></div>`);
                    $(".portfolio").append(`<div class='port-img ${web}'><img src='images/portfolio/${web}/${web}${k}.jpg' alt='web'></div>`);
                    $(".portfolio").append(`<div class='port-img ${landing}'><img src='images/portfolio/${landing}/${landing}${k}.jpg' alt='web'></div>`);
                    $(".portfolio").append(`<div class='port-img ${wordpress}'><img src='images/portfolio/${wordpress}/${wordpress}${k}.jpg' alt='web'></div>`);
                    $(".portfolio-load").hide();
                }
            }
            if (currentClass != "all" && currentClass != false) {
                $(`.${currentClass}`).css("display", "block");
                $(".port-img").not(`.${currentClass}`).css("display", "none");
            };
            getImgHover();
        }, 2000);
    });
    getImgHover();

    //SLICK SLIDER//
    $('.rev-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.rev-slider-nav',
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    });
    $('.rev-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.rev-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        cssEase: 'linear'
    });

    //MASONRY//
    $(".gallery-load").click(() => {

        $(".gallery-block>.load-wrapp").css("display", "block");
        setTimeout(() => {
            $(".gallery-block>.load-wrapp").css("display", "none");
            $(".gallery-load").remove();
            for (let i = 10; i < 17; i++) {
                $('.grid').append(`<div class="grid-item grid-hide"><div class="grid-hover"><a href="#"><i class="fas fa-search"></i></a><a href="#"><i class="fas fa-expand"></i></a></div><img src="images/gallery/gal${i}.png" alt=""></div>`)};
            $('.grid').masonry('reloadItems');
            $('.grid').masonry('layout');
            window.setTimeout(function () {
                $('.grid').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 25,
                    gutter: 10
                });
            }, 500);
        }, 2000);
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 25,
        gutter: 10
    });
});