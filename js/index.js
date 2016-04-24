$(function(){
    //�ֲ�
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
    $('#team-control li a').click(function () {
        $('#team-list li').eq($(this).parent().index()).fadeIn(1500).siblings().hide();
        $(this).parent().addClass('cur').siblings().removeClass('cur');
    });

$(".case-list,.m-about .bd-txt").hover(function(){
    $(this).find(".list-info").addClass("act").fadeIn(700);
        $(this).find("a").addClass("act");
},
    function(){
        $(this).find(".list-info").removeClass("act").fadeOut(700);
        $(this).find("a").removeClass("act");
    }
)

    $(window).scroll(function(){
        var $this_top=$(this).scrollTop();
        console.log($this_top)
        if($this_top>0&&$this_top<=400){
            $(".nav-list li").eq(0).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>400&&$this_top<=1200){
            $(".nav-list li").eq(1).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>1200&&$this_top<=2000){
            $(".nav-list li").eq(2).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>2000&&$this_top<=2850){
            $(".nav-list li").eq(3).addClass('cur').siblings().removeClass('cur')
        }
        else if($this_top>2850&&$this_top<=3700){
            $(".nav-list li").eq(4).addClass('cur').siblings().removeClass('cur')
        }
        else if($this_top>3700&&$this_top<=4500){
            $(".nav-list li").eq(5).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>4500&&$this_top<=5000){
            $(".nav-list li").eq(6).addClass('cur').siblings().removeClass('cur');
            if($this_top>=4700){
                for(var i=0;i<4;i++){
                    $(".m-partner li").eq(i).addClass("pt-page-moveFromLeftFade")
                }
                for(var i=5;i<9;i++){
                    $(".m-partner li").eq(i).addClass("pt-page-moveFromRightFade")
                }
            }
        }else if($this_top>5000&&$this_top<=5464){
            $(".nav-list li").eq(7).addClass('cur').siblings().removeClass('cur')
        }

    })

//定位
    function locate(item,div){
        $(item).bind("click",function(){
            ot = $(div).offset().top;
            if($.browser.webkit){
                $("body").stop().animate({"scrollTop":ot},500);
            }
            else{
                $(document.documentElement || document.body).stop().animate({"scrollTop":ot},500);
            }
        });
    }
    locate("#j-step1","#j-banner");
    locate("#j-step2",".m-about");
    locate("#j-step3",".m-connect");
    locate("#j-step4",".m-window");
    locate("#j-step5",".m-team");
    locate("#j-step6",".m-case");
    locate("#j-step7",".m-partner");
    locate("#j-step8",".m-contact");



});
