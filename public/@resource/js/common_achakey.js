$(function () {
    $(document).on('mouseenter', '#header .gnb-wrap .gnb > li',function () {
        $(this).addClass('onmouse').siblings('li').removeClass('onmouse');
        //$('header').addClass('active');
    }).on('mouseleave','#header .gnb-wrap .gnb > li', function () {
        $(this).removeClass('onmouse');
        //$('header').removeClass('active');
    });

    $(document).on('click','#header .menu-open',function () {
        $('#header').addClass('moblie-on');
        $('#top').hide(); //201014 추가
        $('html,body').css({
            height: '100%',
            overflow: 'hidden'
        });
    });

    $(document).on('click', '#header .menu-close',function () {
        $('#header').removeClass('moblie-on');
        $('#top').show(); //201014 추가
        $('html,body').css({
            height: 'auto',
            overflow: 'visible'
        });
    });

    $(document).on('click', '#mobileMenu .m-util li',function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    }); //201014추가


    // 언어 선택
    $(document).on('click','.language-area > a', function(){
        $(this).siblings('ul').toggleClass('active');
        return false;
    });

    // NAV
    $(document).on('click', '.btn-nav',function(){
        if($(this).hasClass('nav-close')){
            $(this).removeClass('nav-close');
            $('.nav-wrap').removeClass('active');
        } else{
            $(this).addClass('nav-close');
            $('.nav-wrap').addClass('active');

        }
    })

    // SELECT
    $(document).on('click','div.select a',function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents(".select-inner").removeClass('active');
        } else{
            $(this).addClass('active');
            $(this).parents(".select-inner").addClass('active');
        }
        // return false;
    });

    // FAQ 201125 수정
    $(document).on('click','.faq-list li a', function (e) {
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
    
    //메인pc
    $(document).on('click','div.select ul > li',function() {
        $('.install-y,.install-n').addClass('result-none');
        $(this).parent().parent().removeClass('active');
        $(this).parents(".select-inner").children("a").text($(this).text()).removeClass('active');
        $(this).prependTo($(this).parent());

        //분류 선택
        if($(this).parent().attr('id') == 'pc-country'){
            $('#pc-company').prev().text('선택하세요');
            $('#mobile-company').prev().text('선택하세요');
            $('#pc-carName').prev().text('선택하세요');
            $('#mobile-carName').prev().text('선택하세요');
            if($('#pc-country').children().eq(0).text() == "국산차"){
                $.ajax({ 
                    url: "https://dev.achakey.net/api/v1/achakey/install/division?level=2&parentCateId=1", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                    data: '', // HTTP 요청과 함께 서버로 보낼 데이터 
                    method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                    dataType: "json", // 서버에서 보내줄 데이터의 타입 
                    success: function(data){
                        $('#pc-company').children().remove();
                        $('#mobile-company').children().remove();
                        var result_array = [];
                        result_array = data.data;
                        $.each(result_array, function(index, item){
                            $('#pc-company').append('<li data-cateid='+item.cateId+'>'+item.cateName+'</li>')
                            $('#mobile-company').append('<option value='+item.cateId+'>'+item.cateName+'</option>');
                        })
                    },
                });
            }else{
                $.ajax({ 
                    url: "https://dev.achakey.net/api/v1/achakey/install/division?level=2&parentCateId=2", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                    data: '', // HTTP 요청과 함께 서버로 보낼 데이터 
                    method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                    dataType: "json", // 서버에서 보내줄 데이터의 타입 
                    success: function(data){
                        $('#pc-company').children().remove();
                        $('#mobile-company').children().remove();
                        var result_array = [];
                        result_array = data.data;
                        $.each(result_array, function(index, item){
                            $('#pc-company').append('<li data-cateid='+item.cateId+'>'+item.cateName+'</li>')
                            $('#mobile-company').append('<option value='+item.cateId+'>'+item.cateName+'</option>');
                        })
                    },
                });
            }
        }
        //제조사 선택
        if($(this).parent().attr("id") == 'pc-company'){
            $('#pc-carName').prev().text('선택하세요');
            $.ajax({ 
                url: "https://dev.achakey.net/api/v1/achakey/install/division?level=3&parentCateId="+$(this).data('cateid'), // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
                data: '', // HTTP 요청과 함께 서버로 보낼 데이터 
                method: "GET", // HTTP 요청 메소드(GET, POST 등) 
                dataType: "json", // 서버에서 보내줄 데이터의 타입 
                success: function(data){
                    $('#pc-carName').children().remove();
                    $('#mobile-carName').children().remove();
                    var result_array = [];
                    result_array = data.data;
                    $.each(result_array, function(index, item){
                        $('#pc-carName').append('<li data-cateid='+item.cateId+'>'+item.cateName+'</li>')
                        $('#mobile-carName').append('<option value='+item.cateId+'>'+item.cateName+'</option>');
                    })
                },
            });  
        }
        //차명 선택
        if($(this).parent().attr('id') == 'pc-carName'){
            $('#pc-carName').prev().attr('date-cateid',$(this).attr('data-cateid'));
        }
    });

    //메인mobile
    $(document).on('change','#mobile-country',function(){
        var country_val = $(this).val();
        $.ajax({ 
            url: "https://dev.achakey.net/api/v1/achakey/install/division?level=2&parentCateId="+country_val, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
            data: '', // HTTP 요청과 함께 서버로 보낼 데이터 
            method: "GET", // HTTP 요청 메소드(GET, POST 등) 
            dataType: "json", // 서버에서 보내줄 데이터의 타입 
            success: function(data){
                $('#mobile-company').children().remove();
                $('#mobile-carName').children().remove();
                var result_array = [];
                result_array = data.data;
                $.each(result_array, function(index, item){
                    $('#mobile-company').append('<option value='+item.cateId+'>'+item.cateName+'</option>');
                })
            },
        });
    });
    $(document).on('change','#mobile-company',function(){
        var company_val = $(this).val();
        $.ajax({ 
            url: "https://dev.achakey.net/api/v1/achakey/install/division?level=3&parentCateId="+company_val, // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
            data: '', // HTTP 요청과 함께 서버로 보낼 데이터 
            method: "GET", // HTTP 요청 메소드(GET, POST 등) 
            dataType: "json", // 서버에서 보내줄 데이터의 타입 
            success: function(data){
                $('#mobile-carName').children().remove();
                var result_array = [];
                result_array = data.data;
                $.each(result_array, function(index, item){
                    $('#mobile-carName').append('<option value='+item.cateId+'>'+item.cateName+'</option>');
                })
            },
        });
    });
    
    $('body').on('click', function(){
        $('.select a,.select .select-inner').removeClass('active');
    });


    // 팝업 닫기
    $('.pop-close').on('click', function () {
        $(this).parents('.layer-popup').hide();
    });

    $(document).on('click','.btn-top',function () {
        $.fn.fullpage.moveTo(1);
    });
    // 201029 jun 추가
    $(document).on('click','.more-btn',function(){
        $.fn.fullpage.moveTo(2);
    })
    
    // 이메일 보내기
    $(document).on('click','#email-submit',function(){
       
        if($('.email-email').val()==''){
            alert('답변 받을 이메일 주소를 입력하세요.');
            $('.email-email').focus();
            return false;
        }
        if(window.innerWidth > 960){
            var select_text = $('.email-select-pc').text();
            if(select_text == '문의할 내용의 분류를 선택하세요.'){
                alert('문의할 내용의 분류를 선택하세요.');
                $('.email-select-pc').focus();
                return false;
            }
            var select_val;
            var option_val = $('.select.for-pc ul li');
            $.each(option_val, function(index, item){
                if($(this).text()==select_text){
                    select_val = $(this).data('value');
                }
            });
        }else{
            var select_text;
            var select_val = $('.email-select-mb').val();
            var option_val = $('.email-select-mb option');
            $.each(option_val, function(index, item){
                if($(this).val()==select_val){
                    select_text = $(this).data('text');
                }
            });
        }
        if($('.email-contents').val()==''){
            alert('문의할 내용을 선택하세요.');
            $('.email-contents').focus();
            return false;
        }
        if($('#termAgree').is(":checked")==false){
            alert('개인정보처리방침에 동의해주세요.');
            $('#termAgree').focus();
            return false;
        }
        var post_data;
        
        if(window.innerWidth > 960){
            post_data = {
                email : $('.email-email').val(),
                telNo : $('.email-number').val(),
                questionTypeCd : select_val,
                questionTypeName : select_text,
                contents : $('.email-contents').val(),
                isAgree : "Y",
            };
        }else{
            post_data = {
                email : $('.email-email').val(),
                telNo : $('.email-number').val(),
                questionTypeCd : select_val,
                questionTypeName : select_text,
                contents : $('.email-contents').val(),
                isAgree : "Y",
            };
        }
        $.ajax({ 
            url: "https://dev.achakey.net/api/v1/achakey/contactus", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소 
            data: post_data, // HTTP 요청과 함께 서버로 보낼 데이터 
            method: "POST", // HTTP 요청 메소드(GET, POST 등) 
            dataType: "json", // 서버에서 보내줄 데이터의 타입 
            success: function(data){
                alert('문의가 되었습니다');
                $('.email-email').val('');
                $('.email-number').val('');
                $('.email-select-pc').text('문의할 내용의 분류를 선택하세요.');
                $('.email-select-mb').val(413);
                $('.email-contents').val('');
                $('#termAgree').prop("checked",false);
            }
        });
    })
    
});
