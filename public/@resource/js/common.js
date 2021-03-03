$(function () {
    $('#header .gnb-wrap .gnb > li').on('mouseenter', function () {
        $(this).addClass('onmouse').siblings('li').removeClass('onmouse');
        //$('header').addClass('active');
    }).on('mouseleave', function () {
        $(this).removeClass('onmouse');
        //$('header').removeClass('active');
    });

    $('#header .menu-open').on('click', function () {
        $('#header').addClass('moblie-on');
        $('#top').hide(); //201014 추가
        $('html,body').css({
            height: '100%',
            overflow: 'hidden'
        });
    });

    $('#mobileMenu .m-util li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    }); //201014추가

    // 언어 선택
    $('.language-area ul li a').on('click', function(){
        $(this).parents('li').parents('ul').toggleClass('active');
        return false;
    });

    $('#header .menu-close').on('click', function () {
        $('#header').removeClass('moblie-on');
        $('#top').show(); //201014 추가
        $('html,body').css({
            height: 'auto',
            overflow: 'visible'
        });
    });

    // 탑버튼 200924 추가
    $('.btn-top').click(function () {
        $.fn.fullpage.moveTo(1);
    });
    // 201029 jun 추가
    $(document).on('click','.more-btn',function(){
        $.fn.fullpage.moveTo(2);
    })
    
    // 팝업 닫기
    $('.pop-close').on('click', function () {
        $(this).parents('.layer-popup').hide();
        
        if( $(window).width() > 960 ) {
            $('html, body').css({height:'100%',overflow:'hidden'});
            $.fn.fullpage.setAllowScrolling(true); // 20200921 추가
        } else if ( $(window).width() < 960 ) {
            $('html, body').css({height:'initial',overflow:'visible'});
        }
    });
    
    // FAQ 201125 수정
    $('.faq-list li a').on('click', function (e) {
        if($(this).parent().parent('li').hasClass('active')){
            $(this).parent().parent('li').removeClass('active');
            $(this).parent('.question').siblings('.answer').slideUp();
        } else{
            $(this).parent('.question').siblings('.answer').slideDown();
            $(this).parent().parent('li').addClass('active');
            $(this).parent().parent('li').siblings('li').removeClass('active')
            $(this).parent().parent('li').siblings().children('.answer').slideUp();
        }
      return false;
    });
    
    
    $(window).resize(function () {
        gnbLine();
    });
    
});

// INPUT NUMBER MAXLENGTH 200924 추가
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }
}


// 텍스트 모션 200924 추가
function motion() {
    setTimeout(function () {
        $("#section1").addClass("first");
    }, 500);
}
