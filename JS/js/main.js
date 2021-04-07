
// menu toggle
$(function(){
    var trigger = $("#trigger");
    var menu = $(".gnb");

    $(trigger).on("click", function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    // width가 320px보다 크고 menu가 :hidden 상태일 때, style을 지움.
    // 이 부분이 없으면 토글 복귀시 width값이 커졌을 때 메뉴 복구가 안됨.
    $(window).resize(function(){
        var w = $(window).width();

        if(w > 320 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });
});

