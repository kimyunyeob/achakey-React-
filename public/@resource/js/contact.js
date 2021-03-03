$(document).ready(function(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        navigation: false,
        showActiveTooltip: false,
        fitToSection: true,
        verticalCentered: false,
        bigSectionsDestination: 'top',
        fixedElements: '',
        scrollingSpeed: 1200,
        navigation: true,
        navigationTooltips: ['MAP', 'CONTACT'],
        showActiveTooltip: true,
        scrollOverflow: true
    });

    //byte 체크
    $('.textarea').keyup(function(){
    bytesHandler(this);
    });
    function getTextLength(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
    if (escape(str.charAt(i)).length == 6) {
        len++;
    }
    len++;
    }
    return len;
    }
    function bytesHandler(obj){
    var text = $(obj).val();
    $('span.bytes').text(getTextLength(text));
    }

})
    
