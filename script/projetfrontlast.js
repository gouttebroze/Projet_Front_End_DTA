var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
        $('div').text('Scrolling Down Scripts');
    } else {
         console.log('scrollUp');
         $('div').text('Scrolling Up Scripts');
    }
    position = scroll;
});