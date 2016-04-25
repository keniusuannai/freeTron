$(function(){
    var $window = $(document),window_width = $window.width();
    $('#j-banner, #j-banner li').width(window_width);
    new $.Tab({
        target: $('#j-banner li'),
        effect: 'slide3d',
        animateTime: 1000,
        stay: 3500,
        autoPlay: true,
        merge: true
    });

    //tab切换
    $('#team-list li').eq(0).css("opacity",1);
    $('#team-control li a').click(function () {
        $('#team-list li').eq($(this).parent().index()).animate({"opacity":1},1500).siblings().animate({"opacity":0},1000);
        $(this).parent().addClass('cur').siblings().removeClass('cur');
    });

    /*动画*/
$(".case-list,.m-about .bd-txt").hover(function(){
    $(this).find(".list-info").addClass("act").stop().animate({"opacity":1},700);
        $(this).find("a").addClass("act");
},
    function(){
        $(this).find(".list-info").removeClass("act").stop().animate({"opacity":0},700);
        $(this).find("a").removeClass("act");
    }
);
    var _index=$("#j-banner .control li.current").index();
    $("#banner-list li").eq(_index).addClass("animate").siblings().removeClass("animate");

/*定位*/
    var pos0 = $(".m-about").offset().top;
    var pos1 = $(".m-connect").offset().top;
    var pos2 = $(".m-window").offset().top;
    var pos3 = $(".m-team").offset().top;
    var pos4 = $(".m-case").offset().top;
    var pos5 = $(".m-partner").offset().top;
    var pos6 = $(".m-contact").offset().top;
    $(window).scroll(function(){
        var $this_top=$(document).scrollTop()+$(this).height()/1.5;
        if($this_top==$(this).height()/1.5){
            $(".nav-list li").eq(0).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos0&&$this_top<=pos1){
            $(".nav-list li").eq(1).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos1&&$this_top<=pos2){
            $(".nav-list li").eq(2).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos2&&$this_top<=pos3){
            $(".nav-list li").eq(3).addClass('cur').siblings().removeClass('cur')
        }
        else if($this_top>pos3&&$this_top<=pos4){
            $(".nav-list li").eq(4).addClass('cur').siblings().removeClass('cur')
        }
        else if($this_top>pos4&&$this_top<=pos5){
            $(".nav-list li").eq(5).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos5&&$this_top<=pos6){
            $(".nav-list li").eq(6).addClass('cur').siblings().removeClass('cur');
            if($this_top>=pos5){
                for(var i=0;i<3;i++){
                    $(".m-partner li").eq(i).addClass("pt-page-moveFromLeftFade")
                }
                for(var i=4;i<9;i++){
                    $(".m-partner li").eq(i).addClass("pt-page-moveFromRightFade")
                }
            }
        }else if($this_top>pos6){
            $(".nav-list li").eq(7).addClass('cur').siblings().removeClass('cur')
        }

    });

    locate("#j-step1","#j-banner");
    locate("#j-step2",".m-about");
    locate("#j-step3",".m-connect");
    locate("#j-step4",".m-window");
    locate("#j-step5",".m-team");
    locate("#j-step6",".m-case");
    locate("#j-step7",".m-partner");
    locate("#j-step8",".m-contact");

    function locate(item,div){
        $(item).bind("click",function(){
            ot = $(div).offset().top-88;
            if($.browser.webkit){
                $("body").stop().animate({scrollTop:ot},500);
                console.log(ot)
            }
            else{
                $("html,body").stop().animate({scrollTop:ot},500);
                console.log(ot)
            }
        });
    }
});
