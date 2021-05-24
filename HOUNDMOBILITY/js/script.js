$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(function(){
    $('#nav-icon1').on('click', function (){
        $(this).toggleClass('open');
        // $('this').toggleClass('open');
    })
})

// var messageHeight = document.getElementById('msg1').offsetHeight
// document.getElementById('semiCirc').style.height = (messageHeight + 1) + "px"
// document.getElementById('semiCirc').style.width = messageHeight + 1 + "px"
// console.log(messageHeight, document.getElementById('semiCirc').offsetWidth)