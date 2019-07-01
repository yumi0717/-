$(function(){
    $('.pra').on('focus',function(){
        $('.pra').css({
            backgroundColor:'yellow'
        });
    });
    $('.pra').on('blur',function(){
        $('.pra').css({
            backgroundColor:'white'
        });
    });
});

$(function(){
    $('.pra1').on('focus',function(){
        $('.pra1').css({
            backgroundColor:'yellow'
        });
    });
    $('.pra1').on('blur',function(){
        $('.pra1').css({
            backgroundColor:'white'
        });
    });
});

$(function(){
    $('.button').on('mouseover',function(){
        $('.button').css({
            color:'yellow',
            backgroundColor:'black'
        });
    });
    $('.button').on('mouseout',function(){
        $('.button').css({
            color: 'white',
            backgroundColor: '#dc143c'
        });
    });
});
$(function(){
    $('.submit').on('mouseover',function(){
        $('.submit').css({
            color:'yellow',
            backgroundColor:'black'
        });
    });
    $('.submit').on('mouseout',function(){
        $('.submit').css({
            color: 'white',
            backgroundColor: '#dc143c'
        });
    });
});