

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    $('.fadeUpTrigger').each(function(){ 
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        }else{
        $(this).removeClass('fadeUp');
        }
        });

        $('.fadeLeftTrigger').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');
            }else{
            $(this).removeClass('fadeLeft');
            }
            });
    }
    
    $(window).scroll(function (){
        fadeAnime();
        });


// 以下スマホのみでの表示設定

    function PageReserveAnime() {
            var scroll = $(window).scrollTop();
            if (scroll >= 700){//上から200pxスクロールしたら
                $('#buttum').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
                $('#buttum').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
            }else{
                if(
                    $('#buttum').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
                    $('#buttum').removeClass('LeftMove');//LeftMoveというクラス名を除き
                    $('#buttum').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
                }
            }
    }

    $(window).scroll(function (){
        PageReserveAnime();
        });


    $("#openbtn").click(function () {
            $('body').toggleClass('active');
        });
            
        

        $('.Info-title').on('click', function() {//タイトル要素をクリックしたら
            var findElm = $(this).next(".accordion");//直後のアコーディオンを行うエリアを取得し
            $(findElm).slideToggle();//アコーディオンの上下動作
        });


    $(function(){
        function sliderSetting(){
            var width = $(window).width();
            if(width <= 830){
                $('.Menu-slider').not('.slick-initialized').slick({
                    fade:true,//切り替えをフェードで行う。初期値はfalse。
                    autoplay: true,//自動的に動き出すか。初期値はfalse。
                    autoplaySpeed: 3500,//次のスライドに切り替わる待ち時間
                    speed:1000,//スライドの動きのスピード。初期値は300。
                    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
                    slidesToShow: 1,//スライドを画面に3枚見せる
                    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
                    arrows: false,//左右の矢印
                    dots: true,//下部ドットナビゲーションの表示
                    pauseOnFocus: false,//フォーカスで一時停止を無効
                    pauseOnHover: false,//マウスホバーで一時停止を無効
                    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
            });
        }else {
                $('.slide.slick-initialized').slick('unslick');
            }
        }
        sliderSetting();
        $(window).resize( function() {
            sliderSetting();
        });
            });

        $(window).on('resize', function() {
            if( 'none' == $('.title').css('pointer-events') ){
                $('.toggle').attr('style','');
            };
        });