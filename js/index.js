$(function(){
    //轮播
    function boxsize() {
        var w = $(window).width() < 1170 && $(window).width()>767 ? 1170 : $(window).width();
        $('#j-banner, #banner-list li').width(w);
    }
    boxsize();
    $(window).resize(function () {
        boxsize();
    });
    ue.marquee({
        scrolltarget: "",
        target: '#banner-list',
        items: '#banner-list li', //滚动的详细列表
        gotobtn: '#j-banner .control li',
        hovergotobtn: true,//移动到当前缩略图时停止自动播放
        delay: 3000,//切换间隔时间
        speed: 900,//切换速度
        visiblenum: 1,
        scrollnum: 1,
        currentclass: "cur",
        autoplay: true,//是否自动播放
        trigger: "mouseover",
        beforeSlide: function () {
            var $ani=$("#banner-list li");
            $ani.find(".write,.line").removeClass("pt-page-line").fadeOut(200);
            $ani.find("h2").removeClass("pt-page-moveFromBottom,pt-page-moveFromLeftFade").fadeOut(200);
            $ani.find("h3").removeClass("pt-page-rotateUnfoldTop,pt-page-moveFromRightFade").fadeOut(200);
            $ani.find(".read-more").removeClass("pt-page-scaleUp,pt-page-moveFromBottom,pt-page-rotatePullTop").fadeOut(200);

        },//每滚动一个之前的回调函数
        afterSlide: function () {
            var $ani=$("#banner-list");
            $ani.find(".line").fadeIn(200);
            $ani.find(".write").show().addClass("pt-page-line");
            $ani.find(".b-bg1 h2,.b-bg2 h2,.b-bg3 .read-more").show().addClass("pt-page-moveFromBottom");
            $ani.find(".b-bg3 .read-more").show().addClass("pt-page-rotatePullTop");
            $ani.find(".b-bg1 h3").show().addClass("pt-page-rotateUnfoldTop");
            $ani.find(".b-bg1 .read-more").show().addClass("pt-page-scaleUp");
            $ani.find(".b-bg3 h2").show().addClass("pt-page-moveFromLeftFade");
            $ani.find(".b-bg3 h3").show().addClass("pt-page-moveFromRightFade");
        },//每滚动一个之前的回调函数
        mode: 1
    });
    var $ani=$(".b-bg1");
    $ani.find("h2").addClass("pt-page-moveFromBottom");
    $ani.find("h3").addClass("pt-page-rotateUnfoldTop");
    $ani.find(".read-more").addClass("pt-page-scaleUp");


    //tab切换
    $('#team-list li').eq(0).css("opacity",1);
    $('#team-control li a').click(function () {
        $('#team-list li').eq($(this).parent().index()).animate({"opacity":1},1500).siblings().animate({"opacity":0},1000);
        $(this).parent().addClass('cur').siblings().removeClass('cur');
    });


    /*动画*/
    if($(window).width()>767){
        //slide切换
        ue.marquee({
            target : '#slide',
            items : '#slide li',
            prevbtn : "#i-left",
            nextbtn : "#i-right",
            speed : 300,
            visiblenum : 1,
            scrollnum : 1,
            autoplay : false,
            loop : 1,
            mode : 1,
            direction : 0
        });

$(".case-list,.m-about .bd-txt").hover(function(){
    $(this).find(".list-info").addClass("act").stop().animate({"opacity":1},700);
        $(this).find("a").addClass("act");
},
    function(){
        $(this).find(".list-info").removeClass("act").stop().animate({"opacity":0},700);
        $(this).find("a").removeClass("act");
    }
);
    }

    /*导航*/
    var _wight=-window.screen.width;
    $("#wap-list").css("left",_wight);
    $("#nav-btn").on("click",function(){
        $("#wap-list").show().animate({"left":0},400);
    });
    $("#nav-close,#wap-list li a").on("click",function(){
        $("#wap-list").animate({"left":_wight},400);
    });

/*定位*/
    var pos0 = $(".m-about").offset().top;
    var pos1 = $(".m-connect").offset().top;
    var pos2 = $(".m-window").offset().top;
    var pos3 = $(".m-team").offset().top;
    var pos4 = $(".m-case").offset().top;
    var pos5 = $(".m-partner").offset().top;
    var pos6 = $(".m-contact").offset().top;
    if($(window).width()>767){
        $(".m-partner li,.m-window img,.m-window .m-gov,.m-window .m-ent,.m-connect .bd div,.m-connect .bd a").hide();
    }
    $(window).scroll(function(){
        var $this_top=$(document).scrollTop()+$(this).height()/1.5;
        if($this_top==$(this).height()/1.5){
            $(".nav-list li").eq(0).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos0&&$this_top<=pos1){
            $(".nav-list li").eq(1).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos1&&$this_top<=pos2){
            $(".nav-list li").eq(2).addClass('cur').siblings().removeClass('cur');
            if($(window).width()>767) {
                $(".m-connect li div,.m-connect li a").show().addClass("pt-page-moveFromBottom");
            }
        }else if($this_top>pos2&&$this_top<=pos3){
            $(".nav-list li").eq(3).addClass('cur').siblings().removeClass('cur');
            if($(window).width()>767) {
                $(".m-window").find("img").show().addClass("pt-page-scaleUp");
                $(".m-window .m-ent").show().addClass("pt-page-rotateCarouselLeftIn");
                $(".m-window .m-gov").show().addClass("pt-page-rotateCarouselRightIn");
            }
        }
        else if($this_top>pos3&&$this_top<=pos4){
            $(".nav-list li").eq(4).addClass('cur').siblings().removeClass('cur')
        }
        else if($this_top>pos4&&$this_top<=pos5){
            $(".nav-list li").eq(5).addClass('cur').siblings().removeClass('cur')
        }else if($this_top>pos5&&$this_top<=pos6){
            $(".nav-list li").eq(6).addClass('cur').siblings().removeClass('cur');
            if($this_top>=pos5){
                if($(window).width()<=767){
                    for(var i=0;i<9;i++){
                        $(".m-partner li").fadeIn().eq(i).addClass("pt-page-moveFromBottom");
                    }
                }else {
                for(var i=0;i<3;i++){
                    $(".m-partner li").fadeIn().eq(i).addClass("pt-page-moveFromLeftFade")
                }
                $(".m-partner li").fadeIn().eq(3).addClass("pt-page-fadeIn");
                for(var i=4;i<9;i++){
                    $(".m-partner li").fadeIn().eq(i).addClass("pt-page-moveFromRightFade")
                   }
                }

            }
        }else if($this_top>pos6){
            $(".nav-list li").eq(7).addClass('cur').siblings().removeClass('cur')
        }

    });

    locate(".j-step1","#j-banner");
    locate(".j-step2",".m-about");
    locate(".j-step3",".m-connect");
    locate(".j-step4",".m-window");
    locate(".j-step5",".m-team");
    locate(".j-step6",".m-case");
    locate(".j-step7",".m-partner");
    locate(".j-step8",".m-contact");

    function locate(item,div){
        $(item).bind("click",function(){
                ot = $(div).offset().top - 88;
            if($.browser.webkit){
                $("body").stop().animate({"scrollTop":ot},500);
            }
            else{
                $(document.documentElement || document.body).stop().animate({"scrollTop":ot},500);
            }
        });
    }
});
