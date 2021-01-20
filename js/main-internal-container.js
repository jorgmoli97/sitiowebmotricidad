$(document).ready(function(){
    $('ul.nav-container li a:first').addClass('active');
    $('.main-internal-container section').addClass('main-internal-home-container');
    $('.main-internal-container section').hide();
    $('.main-internal-container section:first').show();

    $('ul.nav-container li a').click(function(){
        $('ul.nav-container li a').removeClass('active');
        $(this).addClass('active');
        $('.main-internal-container section').hide();
        
        var activeTab = $(this).attr('href');
         $(activeTab).show();
/* 
         if(activeTab.localeCompare('login.html')==0)
         {
         
            location.href =activeTab;
         } */
      $(window).scroll(function(){
         scroll = $(window).scrollTop();
         if (scroll >= 192) $('.main-internal-home-container').css({position: 'fixed'});
         else $('.main-internal-home-container').css({position: 'relative'});
         });   
        return false; 
     }); 
});