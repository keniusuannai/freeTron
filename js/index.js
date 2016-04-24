$(function(){
    //�ֲ�
    var $window = $(window),window_width = $window.width();
    $('#j-banner, #j-banner li').width(window_width);
    new $.Tab({
        target: $('#j-banner li'),
        effect: 'slide3d',
        animateTime: 1000,
        stay: 3500,
        autoPlay: true,
        merge: true,
    });








});
