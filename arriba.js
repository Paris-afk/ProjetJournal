$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body , html').animate({
            scrollTop: '0px'
        } ,300)
