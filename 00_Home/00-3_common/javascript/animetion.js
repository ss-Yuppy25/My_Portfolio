
function fadeRightAnime(){
    $('#coment').each(function(){
        var scroll = $(window).scrollTop();
        var mainH = $('#coment').outerHeight(true);

        if(scroll >= mainH){
            $('.reaf').removeClass('fadeRight');
            $('.reaf').addClass('move');
            $('whiteflower3','.whiteflower4','flower3').css({'transform':'rotate'}+ scroll);
        }else{
            $('.reaf').removeClass('move');
            }
        });
}
$(window).scroll(function(){
    fadeRightAnime();
});
