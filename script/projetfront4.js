$(document).ready(function(){

    $('.p2').hide();
    $('.p1').mouseenter(function(){
        $('.p2').show();
    });
    $('.p1').mouseleave(function(){
        $('.p2').hide();
    });

    
});