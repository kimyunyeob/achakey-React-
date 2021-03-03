const apiUrl = "http://api-dev.achakey.net";
var ul_main = '<li><a href="javascript:void(0);"><span>아차키 설치<strong>가능 조회</strong></span></a></li><li><a href="javascript:void(0);"><span>아차키 앱<strong>사용안내</strong></span></a></li><li><a target="_blank" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB"><span>아차키<strong>구매하기</strong></span></a></li>';
var ul_autoq = '<li><a href="javascript:void(0);"><span>오토큐앱키<strong>설치 가능 차</strong></span></a></li><li><a href="javascript:void(0);"><span>오토큐앱키<strong>설치 가능 센터</strong></span></a></li>';
var ul_customer = '<li class="btn-email"><a href="javascript:void(0);"><span><strong>이메일</strong>문의하기</span></a></li><li><a target="_blank" href="https://pf.kakao.com/_yiCxij"><span><strong>카카오 알림톡</strong>문의하기</span></a></li>';
var popup_autoq = '<li><div class="place">서울 강남</div><div class="center">청담점</div><div class="address">서울특별시 강남구 삼성로148길 10 (청담동)</div><div class="tel">02-6241-8585</div></li><li><div class="place">서울 강남</div><div class="center">삼성점</div><div class="address">서울특별시 강남구 봉은사로 441 (삼성동)</div><div class="tel">02-515-8840</div></li><li><div class="place">서울 강동</div><div class="center">길동점</div><div class="address">서울특별시 강동구 양재대로 1523 (천호동)</div><div class="tel">02-474-8585</div></li><li><div class="place">서울 강북</div><div class="center">수유북부점</div><div class="address">서울특별시 강북구 인수봉로 296 (수유동)</div><div class="tel">02-992-1210</div></li><li><div class="place">서울 강서</div><div class="center">마곡종합서비스</div><div class="address">서울특별시 강서구 남부순환로 223-29, 31</div><div class="tel">02-3662-1371</div></li><li><div class="place">서울 강서</div><div class="center">가양점</div><div class="address">서울특별시 강서구 허준로 78 (가양동)</div><div class="tel">02-3661-8408</div></li><li><div class="place">서울 강서</div><div class="center">등촌점</div><div class="address">서울특별시 강서구 양천로 616 (등촌동)</div><div class="tel">02-3662-1374</div></li><li><div class="place">서울 관악</div><div class="center">봉천점</div><div class="address">서울특별시 관악구 봉천로 342 (봉천동)</div><div class="tel">02-889-8282</div></li><li><div class="place">서울 광진</div><div class="center">구의점</div><div class="address">서울특별시 광진구 광나루로 512 (구의동)</div><div class="tel">02-453-9998</div></li><li><div class="place">서울 광진</div><div class="center">자양점</div><div class="address">서울특별시 광진구 자양로46 (자양동)</div><div class="tel">02-3436-8585</div></li><li><div class="place">서울 구로</div><div class="center">오류점</div><div class="address">서울특별시 구로구 경린로 20 (오류동)</div><div class="tel">02-2683-1626</div></li><li><div class="place">서울 구로</div><div class="center">개봉점</div><div class="address">서울특별시 구로구 개봉로 11 (개봉동)</div><div class="tel">02-3666-3636</div></li><li><div class="place">서울 구로</div><div class="center">구로점</div><div class="address">서울특별시 구로구 구로중앙로40길 32(신도림동)</div><div class="tel">02-453-9998</div></li><li><div class="place">서울 금천</div><div class="center">㈜대성자동차정비</div><div class="address">서울특별시 금천구 벚꽃로150 (독산동)</div><div class="tel">02-853-0300</div></li><li><div class="place">서울 노원</div><div class="center">상계점</div><div class="address">서울특별시 노원구 노원로 472</div><div class="tel">02-937-8585</div></li><li><div class="place">서울 노원</div><div class="center">중계점</div><div class="address">서울특별시 노원구 덕릉로77길 6 (중계동)</div><div class="tel">02-933-0004</div></li><li><div class="place">서울 노원</div><div class="center">공릉점</div><div class="address">서울특별시 노원구 동일로 173가길 112 (공릉동)</div><div class="tel">02-978-2523</div></li><li><div class="place">서울 노원</div><div class="center">하계점</div><div class="address">서울특별시 노원구 공릉로62길 25 (하계동)</div><div class="tel">02-979-8581</div></li><li><div class="place">서울 도봉</div><div class="center">방학점㈜</div><div class="address">서울특별시 도봉구 방학로 35 (방학동)</div><div class="tel">02-955-3733</div></li><li><div class="place">서울 동대문</div><div class="center">청량리점</div><div class="address">서울특별시 동대문구 제기로 147(청량리동)</div><div class="tel">02-2213-1421</div></li><li><div class="place">서울 동작</div><div class="center">대방점</div><div class="address">서울특별시 동작구 상도로 19 (대방동)</div><div class="tel">02-824-8122</div></li><li><div class="place">서울 서초</div><div class="center">반포점</div><div class="address">서울특별시 서초구 사평대로 72 (반포동)</div><div class="tel">02-593-8204</div></li><li><div class="place">서울 서초</div><div class="center">현대강남자동차써비스㈜</div><div class="address">서울특별시 서초구 마방로 26 (양재동)</div><div class="tel">02-575-1900</div></li><li><div class="place">서울 성동</div><div class="center">성수남부점</div><div class="address">서울특별시 성동구 성수일로 57 (성수동1가)</div><div class="tel">02-462-3375</div></li><li><div class="place">서울 성북</div><div class="center">정릉점</div><div class="address">서울특별시 성북구 솔샘로 41 (정릉동)</div><div class="tel">02-918-2200</div></li><li><div class="place">서울 성북</div><div class="center">월곡점</div><div class="address">서울특별시 성북구 화랑로 180 (상월곡동)</div><div class="tel">02-969-8572</div></li><li><div class="place">서울 양천</div><div class="center">신월점</div><div class="address">서울특별시 양천구 남부순환로 420 (신월동)</div><div class="tel">02-2608-8588</div></li><li><div class="place">서울 양천</div><div class="center">신월남부점</div><div class="address">서울특별시 양천구 신월로 216 (신월동)</div><div class="tel">02-2694-1232</div></li><li><div class="place">서울 양천</div><div class="center">신정남부점</div><div class="address">서울특별시 양천구 신목로 41 (신정동)</div><div class="tel">02-2649-7778</div></li><li><div class="place">서울 영등포</div><div class="center">영등포점</div><div class="address">서울특별시 영등포구 국회대로 636 (영등포동7가 62-8)</div><div class="tel">02-2676-8581</div></li><li><div class="place">서울 영등포</div><div class="center">대림점</div><div class="address">서울특별시 영등포구 대림로 229 (대림동)</div><div class="tel">02-847-5008</div></li><li><div class="place">서울 용산</div><div class="center">서빙고점</div><div class="address">서울특별시 용산구 서빙고로 305(동빙고동)</div><div class="tel">02-749-8887</div></li><li><div class="place">서울 은평</div><div class="center">갈현점</div><div class="address">서울특별시 은평구 서오릉로 221</div><div class="tel">02-356-0652</div></li><li><div class="place">서울 종로</div><div class="center">독립문점</div><div class="address">서울특별시 종로구 통일로 272 (무악동)</div><div class="tel">02-722-4849</div></li><li><div class="place">서울 중랑</div><div class="center">면목남부점</div><div class="address">서울특별시 중랑구 동일로 604 (면목점)</div><div class="tel">02-496-2580</div></li>';
var location_path = window.location.pathname;
var agent = navigator.userAgent.toLowerCase();
var language_data;
//블로그, 유튜브, 페이스북 이동
$(document).on('click','.youtube',function(){
    window.open('https://www.youtube.com/channel/UCGSuDkzT9eHWLSgfIcV2eUw', '_blank'); 
});
$(document).on('click','.blog',function(){
    window.open('https://m.blog.naver.com/PostList.nhn?blogId=achakey', '_blank'); 
});
$(document).on('click','.facebook',function(){
    window.open('https://www.facebook.com/아차키-306151156749055/?epa=SEARCH_BOX', '_blank'); 
});
function close_popup(){
    $('.pop-close').on('click', function () {
        if(window.innerWidth < 961){
            $('body').css('overflow','visible').css('height','initial');
            $('#wrap').css('overflow','auto').css('height','auto');
        }
        $(this).parents('.layer-popup').hide();
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });
}
function close_popup_cutomer(){
    $('.pop-close').on('click', function () {
        $(this).parents('.layer-popup').hide();
    });
}
function close_popup_autoq(){
    $('.pop-close').on('click', function () {
        $('#popMenual02 ul').children('li').remove();
        $('#popMenual02 input').val('');
        $('#popMenual02 ul').append(popup_autoq);
    });
}
// 텍스트 모션 200924 추가
function motion() {
    setTimeout(function () {
        $("#section1").addClass("first");
        $("#fullpage .section").eq(0).addClass("first-active");
    }, 500);
}
function fullpage_main(){
    location_path='/';
    $('#fullpage').fullpage({
        //interlockedSlides: [1,3],
        //dragAndMove: true,
        // slidesNavigation: true,
        resetSliders:true,
        autoScrolling: true,
        navigation: false,
        showActiveTooltip: false,
        fitToSection: true,
        verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        //touchSensitivity: 10,
        scrollingSpeed: 1400,
        navigation: true,
        navigationTooltips: ['HOME', 'CAR KEY', 'SHARE', 'USE', 'BUY'],
        showActiveTooltip: true,
        scrollOverflow: false,
        onLeave: function (index, nextIndex, direction) {
            if (index == 5 && direction == 'down') {
                $('#fp-nav').show().css({
                    opacity: '0'
                }, 500);
                $('.nav-wrap').show().css({
                    opacity: '0'
                }, 500);
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom:'284px'});
                } else {
                    $('.btn-top').animate({bottom:'30px'});
                }
            }
            if (index == 6 && direction == 'up') {
                $('.nav-wrap').show().css({
                    opacity: '1'
                }, 500);
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom: '50px'});
                } else {
                    $('.btn-top').animate({bottom: '30px'});
                }
                $('#header').removeClass('white');
            }
        },
        afterLoad: function(anchorLink, index){
            if(index == 1){
                motion();
            }
            if(index == 5){
                $('#fp-nav').show().css({
                    opacity: '1'
                }, 100);
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom: '50px'});
                } else {
                     $('.btn-top').animate({bottom: '30px'});
                }
            }
            if(index == 6){
                $('#header').addClass('white');
            } else{
                $('#fp-nav').show();
                $('#header').removeClass('white');
                $('.nav-wrap').show();
            }
        },
        responsiveWidth: 960,
        afterResponsive: function(isResponsive){
           if(isResponsive){
               $.fn.fullpage.setAutoScrolling(false);
           }
           else{
               $.fn.fullpage.setAutoScrolling(true);
           }
        }
        
    });
}
function js_main(){
    $('#google-down').click(function(){
        window.open('https://play.google.com/store/apps/details?id=io.tuneit&hl=ko', '_blank'); 
    });
    $('#apple-down').click(function(){
        window.open('https://apps.apple.com/kr/app/%EC%95%84%EC%B0%A8%ED%82%A4/id1457930033', '_blank'); 
    });
    if($('#fp-nav').hasClass('black')){
        $('#fp-nav').removeClass('black');
    }
    language_data = $('#header').data('language');
    if(language_data=="en"){
        $('.nav-wrap .nav').children().eq(0).click(function(){
            if(window.innerWidth < 961){
                $('body').css('overflow','hidden').css('height','100%');
                $('#wrap').css('overflow','hidden').css('height','100%');
            }
            $('#popMenual').show();
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        })
    }else {
        $('.nav-wrap .nav').children().eq(0).click(function(){
            if(window.innerWidth < 961){
                $('body').css('overflow','hidden').css('height','100%');
                $('#wrap').css('overflow','hidden').css('height','100%');
            }
            $('#popSearch').show();
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        })
        $('.nav-wrap .nav').children().eq(1).click(function(){
            if(window.innerWidth < 961){
                $('body').css('overflow','hidden').css('height','100%');
                $('#wrap').css('overflow','hidden').css('height','100%');
            }
            $('#popMenual').show();
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        })
    }

    
    
    var images = ['object01', 'object02', 'object03'];
    var images02 = ['object01', 'object02'];
    var images03 = ['object01', 'object02'];
    var i = 0;
    var s = 0;
    var u = 0;

    var $slide01 = $('#object');
    var $slide02 = $('#object02');
    var $slide03 = $('#object04');
    setInterval(function () {
        $slide01.attr('class', images[++i % images.length]);
        $slide02.attr('class', images02[++s % images02.length]);
        $slide03.attr('class', images03[++u % images03.length]);
    }, 2000);

    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
    //팝업 조회
    $('#final-search').click(function(){
        var cateId;
        if(window.innerWidth > 960){
            if($('#pc-carName').prev().text()=='선택하세요'){
                alert('차명을 선택하세요.');
                return false;
            };
            cateId = $('#pc-carName').prev().attr('date-cateid'); 
        }else{
            if($('#mobile-carName').val()==null){
                alert('차명을 선택하세요.');
                return false;
            };
            cateId = $('#mobile-carName').val(); 
        }
        
        $.ajax({ 
            url: apiUrl+"/api/v1/achakey/install/model/"+cateId, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
            data: '', // HTTP 요청과 함께 서버로 보낼 데이터 
            method: "GET", // HTTP 요청 메소드(GET, POST 등) 
            dataType: "json", // 서버에서 보내줄 데이터의 타입 
            success: function(data){
                $('.popup-content .text').remove();
                if(data.data.canInstall == 'Y'){
                    $('.install-n').addClass('result-none');
                    $('.install-y').removeClass('result-none');
                }else{
                    $('.install-y').addClass('result-none');
                    $('.install-n').removeClass('result-none');
                }
            },
        });
    });

    // $('#ui-tabs').tabs({
    //     neighbors: {
    //         prev: $('.btn-prev'),
    //         next: $('.btn-next')
    //     }
    // });
    $('#ui-tabs ul li a').click(function(){
        $('#ui-tabs ul li a').removeClass('active');
        $('.main-tab').removeClass('active');
        var select_index = $(this).data('index');
        $('#ui-tabs ul li a').eq(select_index).addClass('active');
        $('.main-tab').eq(select_index).addClass('active');
    });

    $('.btn-next').click(function(){
        var select_val;
        if(window.innerWidth>960){
            var tabs = $('#ui-tabs ul li a');
            $.each(tabs,function(i,e){
                if($(this).hasClass('active')){
                    select_val = i;
                }
            })
        }else{
            select_val = Number($('#select-main-mb').val());
        }
        $('#ui-tabs ul li a').removeClass('active');
        $('.main-tab').removeClass('active');        
        var select_next = select_val+1;
        if(select_next > 6){select_next=0;}
        $('#select-main-mb').val(select_next);
        $('#ui-tabs ul li a').eq(select_next).addClass('active');
        $('.main-tab').eq(select_next).addClass('active');
    });
    $('.btn-prev').click(function(){
        var select_val;
        if(window.innerWidth>960){
            var tabs = $('#ui-tabs ul li a');
            $.each(tabs,function(i,e){
                if($(this).hasClass('active')){
                    select_val = i;
                }
            })
        }else{
            select_val = Number($('#select-main-mb').val());
        }
        $('#ui-tabs ul li a').removeClass('active');
        $('.main-tab').removeClass('active');
        var select_prev = select_val-1;
        if(select_prev < 0){select_prev=6;}
        $('#select-main-mb').val(select_prev);
        $('#ui-tabs ul li a').eq(select_prev).addClass('active');
        $('.main-tab').eq(select_prev).addClass('active');
    });
    $('#select-main-mb').change(function(){
        var select_val = $(this).val();
        console.log(select_val);
        $('.main-tab').removeClass('active');
        $('.main-tab').eq(select_val).addClass('active');
    });
}
function js_autoq(){
    location_path='/autoq';
    if($('#popMenual02').hasClass('active')){
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    };
    $('.nav-wrap .nav').children().eq(0).click(function(){
        $('#popMenual01').show();
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    });
    $('.nav-wrap .nav').children().eq(1).click(function(){
        $('#popMenual02').show();
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    });
    $('#search-area').click(function(){
        var serach_val = $('input[type="search"]').val();
        if(serach_val ==''){
            alert('지역 또는 지점명을 입력하세요.');
            $('input[type="search"]').focus();
            return false;
        }else{
            var data_array = [];
            $.ajax({ 
                url: apiUrl+"/api/v1/achakey/install/center?searchText="+serach_val, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                data: data_array, // HTTP 요청과 함께 서버로 보낼 데이터 
                method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                dataType: "json", // 서버에서 보내줄 데이터의 타입 
                success: function(data){
                    $('.search-list ul').children('li').remove();
                    data_array = data.data;
                    data_array.map(function(data){
                        var text = '<li><div class="place">'+data.area+'</div><div class="center">'+data.branchName+'</div><div class="address">'+data.address+'</div><div class="tel">'+data.telNo+'</div></li>';
                        $('.search-list ul').append(text);
                    });
                    
                },
            });
        }
    })
    $('#serach-input').keydown(function(key){
        var serach_val = $('input[type="search"]').val();
        if(key.keyCode == 13){
            if(serach_val ==''){
                alert('지역 또는 지점명을 입력하세요.');
                $('input[type="search"]').focus();
                return false;
            }else{
                var data_array = [];
                $.ajax({ 
                    url: apiUrl+"/api/v1/achakey/install/center?searchText="+serach_val, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                    data: data_array, // HTTP 요청과 함께 서버로 보낼 데이터 
                    method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                    dataType: "json", // 서버에서 보내줄 데이터의 타입 
                    success: function(data){
                        $('.search-list ul').children('li').remove();
                        data_array = data.data;
                        data_array.map(function(data){
                            var text = '<li><div class="place">'+data.area+'</div><div class="center">'+data.branchName+'</div><div class="address">'+data.address+'</div><div class="tel">'+data.telNo+'</div></li>';
                            $('.search-list ul').append(text);
                        });
                        
                    },
                });
            }
        }
    })
    
}
function js_customer(){
    $('.tab-wrap .faq-list .answer a').click(function(){
        window.open($(this).attr('href'));
    })
    $('body','html').css('overflow','auto').css('height','auto');
    $('.nav.type02').css('display','block');
    location_path='/customer';
    //nav click
    $('.sub.customer .nav').children('li').eq(0).click(function(){
        $('#popMenual').css('display','block');
        $('body, html, #wrap').css('height', '100% !important');
        $('body, html, #wrap').css('overflow', 'hidden !important');
    });
    $('.btn-email').click(function(){
        $('#popMenual').css('display','block');
        $('body, html, #wrap').css('height', '100% !important');
        $('body, html, #wrap').css('overflow', 'hidden !important');
    })
    $('.customer .tabs li a').each(function () {
        var this_href = $(this).attr('href');
        $(this).click(function (e) {
            e.preventDefault();
            //탭활성화
            $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            //타켓 디스플레이
            $(this_href).addClass('active').siblings('.tab-content').removeClass('active');    
        });
    }); 
    if ($(window).scrollTop() >= 50) {
        $('.customer #header').addClass('fixed');
    }
    else {
        $('.customer #header').removeClass('fixed');
    }
    // 201104 헤더 fixed 추가
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('.customer #header').addClass('fixed');
        }
        else {
            $('.customer #header').removeClass('fixed');
        }
    });

    // 이메일 문위하기 팝업 체크박스 클릭 시 200924 추가
    $('.pop-inquire .checkbox input').on('click', function(){
        if($(this).is(":checked") == true) {
            $(this).parents('.check-area').siblings('.btn-area').children('button').addClass('active');
            $(this).parents('.form-wrap').addClass('active');
        } else {
            $(this).parents('.check-area').siblings('.btn-area').children('button').removeClass('active');
            $(this).parents('.form-wrap').removeClass('active');
        }
    });
    
}
function fullpage_autoq(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        navigation: false,
        showActiveTooltip: false,
        fitToSection: true,
        verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        scrollingSpeed: 1400,
        navigation: true,
        navigationTooltips: ['HOME', 'KIA AUTO Q', 'ORDER'],
        showActiveTooltip: true,
        scrollOverflow: false,
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == 'down') { // 201013 추가
                $('.nav-wrap .nav').addClass('type02');
            }
            if (index == 2 && direction == 'up') { // 201013 추가
                $('.nav-wrap .nav').removeClass('type02');
            }
            if (index == 2 && direction == 'down') {
                $('#fp-nav').addClass('white');
                $('#fp-nav').removeClass('black');
            }
            if (index == 3 && direction == 'up') {
                $('#fp-nav').removeClass('white');
                $('#fp-nav').addClass('black');
            }
            if (index == 3 && direction == 'down') {
                $('#fp-nav').show().css({
                    opacity: '0'
                }, 500);
                // 20200921 추가
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom:'284px'});
                } else {
                    $('.btn-top').animate({bottom:'30px'});
                }
            }
            if (index == 4 && direction == 'up') {
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom: '50px'});
                } else {
                    $('.btn-top').animate({bottom: '30px'});
                }
            }
        },
        afterLoad: function(anchorLink, index){
            // 네비게이션 색상 변경
            $('#fp-nav').addClass('black');
    
            if(index == 1){
                $('#fp-nav').removeClass('white');
                $('.nav-wrap .nav').show();
                $('#header').removeClass('white');
                $('#header').removeClass('white-logo');
                motion(); // 200924 추가
            } if(index == 2){
                $('#fp-nav').removeClass('white');
                $('.nav-wrap .nav').show();
                $('#header').removeClass('white');
                $('#header').removeClass('white-logo');
            } if(index == 3){
                //$('#fp-nav').show();
                $('#fp-nav').show().css({
                    opacity: '1'
                }, 100);
                var screenWidth = $(window).innerWidth();
                if (screenWidth > 960 ) {
                    $('.btn-top').animate({bottom: '50px'});
                } else {
                     $('.btn-top').animate({bottom: '30px'});
                }
    
                $('#fp-nav').removeClass('black');
                $('.nav-wrap .nav').show();
                $('#header').addClass('white-logo');
                $('#header').removeClass('white');
            } if(index == 4){
                $('.nav-wrap .nav').hide();
                $('#header').addClass('white');
                $('#header').removeClass('white-logo');
            }
        },
        responsiveWidth: 960,
        afterResponsive: function(isResponsive){
           if(isResponsive){
               $.fn.fullpage.setAutoScrolling(false);
           }
           else{
               $.fn.fullpage.setAutoScrolling(true);
           }
        }
    });
}
$(document).on('click','.language-btn',function(){

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) { // IE 일 경우
        setTimeout(function(){
            language_data = $('#header').data('language');
            if(language_data=="en"){
                ul_main = '<li><a href="javascript:void(0);"><span><strong>Achakey <br>User Guide</strong></span></a></li><li><a target="_blank" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB"><span><strong>Buying Achakey</strong></span></a></li>';
                ul_autoq = '<li><a href="javascript:void(0);"><span>Check APP KEY Applicable Cars</span></a></li><li><a href="javascript:void(0);"><span>Find APP KEY installable centers</strong></span></a></li>';
                ul_customer = '<li class="btn-email"><a href="javascript:void(0);"><span><strong>Contact us <br>by e-mail</span></a></li><li><a target="_blank" href="https://pf.kakao.com/_yiCxij"><span><strong>Contact us by \'Kakao Talk\'</span></a></li>';
            }else {
                ul_main = '<li><a href="javascript:void(0);"><span>아차키 설치<strong>가능 조회</strong></span></a></li><li><a href="javascript:void(0);"><span>아차키 앱<strong>사용안내</strong></span></a></li><li><a target="_blank" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB"><span>아차키<strong>구매하기</strong></span></a></li>';
                ul_autoq = '<li><a href="javascript:void(0);"><span>오토큐앱키<strong>설치 가능 차</strong></span></a></li><li><a href="javascript:void(0);"><span>오토큐앱키<strong>설치 가능 센터</strong></span></a></li>';
                ul_customer = '<li class="btn-email"><a href="javascript:void(0);"><span><strong>이메일</strong>문의하기</span></a></li><li><a target="_blank" href="https://pf.kakao.com/_yiCxij"><span><strong>카카오 알림톡</strong>문의하기</span></a></li>';
            }
        }, 100);
    }else{
        language_data = $('#header').data('language');
    }
    $('body').removeAttr('class').addClass(language_data);
    if(language_data=="en"){
        ul_main = '<li><a href="javascript:void(0);"><span><strong>Achakey <br>User Guide</strong></span></a></li><li><a target="_blank" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB"><span><strong>Buying Achakey</strong></span></a></li>';
        ul_autoq = '<li><a href="javascript:void(0);"><span>Check APP KEY Applicable Cars</span></a></li><li><a href="javascript:void(0);"><span>Find APP KEY installable centers</strong></span></a></li>';
        ul_customer = '<li class="btn-email"><a href="javascript:void(0);"><span><strong>Contact us <br>by e-mail</span></a></li><li><a target="_blank" href="https://pf.kakao.com/_yiCxij"><span><strong>Contact us by \'Kakao Talk\'</span></a></li>';
    }else {
        ul_main = '<li><a href="javascript:void(0);"><span>아차키 설치<strong>가능 조회</strong></span></a></li><li><a href="javascript:void(0);"><span>아차키 앱<strong>사용안내</strong></span></a></li><li><a target="_blank" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB"><span>아차키<strong>구매하기</strong></span></a></li>';
        ul_autoq = '<li><a href="javascript:void(0);"><span>오토큐앱키<strong>설치 가능 차</strong></span></a></li><li><a href="javascript:void(0);"><span>오토큐앱키<strong>설치 가능 센터</strong></span></a></li>';
        ul_customer = '<li class="btn-email"><a href="javascript:void(0);"><span><strong>이메일</strong>문의하기</span></a></li><li><a target="_blank" href="https://pf.kakao.com/_yiCxij"><span><strong>카카오 알림톡</strong>문의하기</span></a></li>';
    }

})
$(document).on('click','.rule-catagory',function(){
    setTimeout(function() {
        js_customer();
        close_popup_cutomer();
    }, 100);
    $('.nav-wrap .nav').html('');
    $('#header').removeClass('white-logo');
    $('.nav-wrap .nav').prepend(ul_customer);
})
$(document).on('click','#header .gnb-wrap a,#mobileMenu .gnb a,.footer-a, #main-link, .language-btn',function(){
    current_location = location_path;
    location_path = window.location.pathname;
    $('.nav-wrap').show().css({
        opacity: '1'
    }, 500);
    $('#header').removeClass('moblie-on');
    
    var screenWidth = $(window).innerWidth();

    var pathname = $(this).data('href');
    $('.nav-wrap .nav').html('');
    if (current_location != '/customer' && current_location != '/rules'){
        $.fn.fullpage.destroy('all');
    }
    if(pathname.indexOf('main') != -1){
        $('#wrap').removeAttr('class').addClass('main');
    }else if(pathname.indexOf('autoq') != -1){
        $('#wrap').removeAttr('class').addClass('sub autoq');
    }else if(pathname.indexOf('customer') != -1){
        if(screenWidth<=960){
            $('html').css('overflow','auto').css('height','auto');
            $('body').css('overflow','visible').css('height','initial');
            $('#wrap').css('overflow','auto').css('height','auto');
        }
        $('#header').removeClass('white-logo');
        $('#wrap').removeAttr('class').addClass('sub customer');
    }
    $('#topMenu ul').children().removeClass('active');
    
    /* 20201202 modify */
    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) && pathname.indexOf('autoq') != -1 ) { // IE 일 경우
        setTimeout(function(){
            if(pathname.indexOf('autoq') != -1) {
                fullpage_autoq();
            }
        }, 100);
    }else if(pathname.indexOf('autoq') != -1){
        fullpage_autoq();
    }
    /* 20201202 modify */

    language_data = $('#header').data('language');

    setTimeout(function() {
        if(pathname.indexOf('main') != -1){
            $('.nav-wrap .nav').prepend(ul_main);
            $('#topMenu ul').children().eq(0).addClass('active');
            close_popup();
            fullpage_main();
            js_main();
        }else if(pathname.indexOf('autoq') != -1) {
            if(language_data == 'ko'){$('.nav-wrap .nav').prepend(ul_autoq);}
            $('#topMenu ul').children().eq(1).addClass('active');
            close_popup();
            close_popup_autoq();
            // fullpage_autoq();
            js_autoq();
        }else if(pathname.indexOf('customer') != -1){
            $('.nav-wrap .nav').prepend(ul_customer);
            $('#topMenu ul').children().eq(2).addClass('active');
            close_popup();
            setTimeout(function() {
                js_customer();
            }, 500);
        }else if(pathname.indexOf('rules') != -1){
            $('#header').removeClass('white-logo');
            $('.nav-wrap .nav').prepend(ul_customer);
            js_customer();
            close_popup_cutomer();
            // $('#topMenu ul').children().eq(2).addClass('active');
        }
        $('#fullpage').removeClass('time-none');
    }, 100);
});

$(document).on('click','.href-rules',function(){
    $('.nav-wrap').show().css({
        opacity: '1'
    }, 500);
    $('#wrap').removeAttr('class');
    $('#header').removeAttr('class');
    $('#topMenu ul').children().removeClass('active');
    $('.btn-email').click(function(){
        $('#popMenual').css('display','block');
        $('body, html, #wrap').css('height', '100% !important');
        $('body, html, #wrap').css('overflow', 'hidden !important');
    })
    var current_path = $(this).data('current');
    if (current_path != '/customer' && current_path != '/rules' && window.innerWidth > 960){
        $.fn.fullpage.destroy('all');
    }
    $('.nav-wrap .nav').html('');
    $('#wrap').removeAttr('class').addClass('sub rules');
    close_popup_cutomer();
    setTimeout(function() {
        $('.nav-wrap .nav').prepend(ul_customer);
        // $('#topMenu ul').children().eq(2).addClass('active');
        setTimeout(function() {
            js_customer();
        }, 500);
    }, 100);
})


$(document).ready(function(){
    if(location_path == "/"){
        $('#topMenu ul').children().eq(0).addClass('active');
        $('.nav-wrap .nav').prepend(ul_main);
        close_popup();
        fullpage_main();
        js_main();
    }else if(location_path == "/autoq"){
        $('#topMenu ul').children().eq(1).addClass('active');
        $('.nav-wrap .nav').prepend(ul_autoq);
        close_popup();
        close_popup_autoq();
        fullpage_autoq();
        js_autoq();
    }else if(location_path == "/customer"){
        $('.nav-wrap .nav').prepend(ul_customer);
        $('#topMenu ul').children().eq(2).addClass('active');
        close_popup_cutomer();
        setTimeout(function() {
            js_customer();
        }, 1000);
    }else if(location_path == "/rules"){
        $('.nav-wrap .nav').prepend(ul_customer);
        // $('#topMenu ul').children().eq(2).addClass('active');
        close_popup_cutomer();
        setTimeout(function() {
            js_customer();
        }, 1000);
    }
    $('#fullpage').removeClass('time-none');
    
});

//뒤로가기
window.addEventListener('popstate', function(e) {
    
    $('#topMenu ul').children().removeClass('active');
    $('.nav-wrap .nav').html('');
    if (location_path != '/customer' && location_path != '/rules'){
        $.fn.fullpage.destroy('all');
    }
    location_path = window.location.pathname;
    if($('#wrap').hasClass('main')){
        $('body').css('background-color','#000');
    };
    if(location_path == "/"){
        $('#wrap').removeAttr('class').addClass('main achakey');
        $('#topMenu ul').children().eq(0).addClass('active');
        $('.nav-wrap .nav').prepend(ul_main);
        close_popup();
        fullpage_main();
        js_main();
    }else if(location_path == "/autoq"){
        $('#wrap').removeAttr('class').addClass('sub autoq');
        $('#topMenu ul').children().eq(1).addClass('active');
        $('.nav-wrap .nav').prepend(ul_autoq);
        close_popup();
        close_popup_autoq();
        fullpage_autoq();
        js_autoq();
    }else if(location_path == "/customer"){
        $('#wrap').removeAttr('class').addClass('sub customer');
        $('.nav-wrap .nav').prepend(ul_customer);
        $('#topMenu ul').children().eq(2).addClass('active');
        close_popup_cutomer();
        setTimeout(function() {
            js_customer();
        }, 1000);
    }else if(location_path == "/rules"){
        $('#wrap').removeAttr('class').addClass('sub rules');
        $('.nav-wrap .nav').prepend(ul_customer);
        close_popup_cutomer();
        setTimeout(function() {
            js_customer();
        }, 1000);
    }
    $('#fullpage').removeClass('time-none');
});