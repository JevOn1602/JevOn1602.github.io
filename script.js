$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');

   
    var elemenTujuan = $(tujuan);

    console.log(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();
});

$('.reload-page').click(function() {
    location.reload();
});


$(window).scroll(function(){
    var wscroll = $(this).scrollTop();

    // Jumbotron

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wscroll/1.5 +'%)'
    });


    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wscroll/1.5 +'%)'
    });

    if(wscroll > $('.about').offset().top - 400){
        $('.go-up').fadeIn();
    }

    else {
        $('.go-up').fadeOut();
    }

    if(wscroll > $('.portfolio').offset().top - 400){
        $('.portfolio hr').addClass('show3')
    }
    if(wscroll > $('.portfolio').offset().top - 400){

        $('.portfolio .card').each(function(i){
            setTimeout(function(){
                $('.portfolio .card').eq(i).addClass('show1')
            },100 * (i+1));
        }); 
    }

    if(wscroll > $('.about').offset().top - 400){
        $('.about p').addClass('show3')
    }
    
});

$(window).on('load', function(){
        $('.header').addClass('slidekiri');  
});


