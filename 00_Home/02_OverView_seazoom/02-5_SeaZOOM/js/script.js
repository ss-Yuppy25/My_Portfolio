

function fadeAnime(){

        $('.fadeUpTrigger').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
                }
            else{
            $(this).removeClass('fadeUp');
            }
            });

            $('.blur2Trigger').each(function(){ 
                var elemPos = $(this).offset().top-50;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                $(this).addClass('blur2');
                    }
                });

            $('.fadeRightTrigger').each(function(){ 
                var elemPos = $(this).offset().top-30;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                $(this).addClass('fadeRight');
                }else{
                    $(this).removeClass('fadeRight');
                }
                });

    }


    $(window).on('scroll', function () {
    fadeAnime();

    });
    $(window).on('load', function(){
        fadeAnime();
        });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        $('.image').css({
            transform: 'scale('+(100 + scroll/12)/100+')',
            top: -(scroll/50)  + "%",
        });
    });

        
        // $(window).scroll(function(){
        //     var scroll2 = $(this).scrollTop();
        //     var img = $('.pick-up-img').offset().top;
        //     var imgscroll = $('.pick-up-img').scrollTop();

        //     if( scroll2 >= img) {
        //         $('.pick-up-img').css({
        //             transform: 'scale('+(100 + imgscroll/10)/100+')',
        //             top: -(imgscroll/50) + "%",
        //         });
        //     }
        // });
