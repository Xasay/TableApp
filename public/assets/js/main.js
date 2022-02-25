$(document).ready(function(){

    $('.main_tr *').on('click',function(){
        $(this).find('.collapse_arrow i').toggleClass('rotate_arrow'); 
    });


});