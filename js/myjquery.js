/* color scheme

lilac: #f9d5e5

very light brown: #eeac99

pink: #e06377

red: #c83349

*/

/* JQUERY FOR NAV BAR */

/* Change color of tab of current webpage from very light brown to lilac when Gallery tab is clicked on; change background color and color of text in listed items in dropdown menu under Gallery when hovered over; and change tab of current webpage back to very light brown when dropdown menu under Gallery is closed */
$(document).ready(function() {
    $('.navbar-default .navbar-collapse .navbar-nav > li > a').click(function(){
        $('.non-drop > a').css('background-color', '#f9d5e5');
        });
    
    $('.dropdown-menu > li > a').hover(function() {
        $(this).css({'background-color':'#e06377', 'color': '#f9d5e5'});
        },
        function(){
            $(this).css({'background-color': '#eeac99', 'color': '#c83349'});
        });
      
    $('.dropdown').on('hide.bs.dropdown',function(){
        $('.non-drop > a').css('background-color', '#eeac99');
    });
        
});

/* cause Home, Gallery, Slideshow, Miscellaneous, English and 日本語 to have the color of pink when hovered over */
$(document).ready(function() {
    $('.DDDD > a').hover(function() {
        $(this).css('color', '#e06377');
        },
        function(){
            $(this).css('color', '#c83349');
        });
});

/* toggle between a background color of very light brown and red for the hamburger icon on the collapsible menu and cause the Gallery dropdown menu to have a background color of very light brown and a text color of red when the hamburger icon is visible  */
var count = 1

function switchColorOfHamburgerIcon() {
  $('.navbar-toggle').click(function() {
    if (count % 2 == 1)  {
     
      $(this).css('background-color', '#eeac99');
      
      $('.dropdown-menu > li > a').css({'background-color': '#eeac99', 'color': '#c83349'});
     }
      
    else {
      
      $(this).css('background-color', '#c83349');
        
      $('.navbar-toggle').hover(function(){
        $(this).css('background-color', '#eeac99');
        }, 
        function(){
        $(this).css('background-color', '#c83349');
        });
    }
  
  count++;
  });
}
    
$(document).ready(switchColorOfHamburgerIcon);


/* JAVASCRIPT FOR GALLERIES */

/* activate Previous and Next buttons that appear in the modals */
$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});

/* JQUERY FOR MISCELLANEOUS PAGE */

function mySetupFunction1() {
    
     if ($(window).width() <= 576) {
        $('.AAA').removeAttr('target');
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');
        $('.box3').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box4').css('background-color', '#e06377');
        $('.box5').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box6').css({'background-color': '#e06377', 'overflow': 'auto'});
        $('.box7').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box8').css({'background-color': '#e06377', 'overflow': 'auto'});
        $('.box9').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box10').css('background-color', '#e06377');
        $('.box11').css({'background-color': '#eeac99', 'height': '200px', 'overflow': 'auto'});
        $('.box12').css('background-color', '#e06377');
        $('.misc-link-1, .misc-link-3, .misc-link-5, .misc-link-7, .misc-link-9, .misc-link-11').css('color', '#c83349');
        $('.misc-link-2, .misc-link-4, .misc-link-6, .misc-link-8, .misc-link-10').css('color', '#f9d5e5');
        
}
    
     else if ($(window).width() <= 767) {
        $('.AAA').removeAttr('target');
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');
        $('.box3').css('background-color', '#eeac99');
        $('.box4').css('background-color', '#e06377');
        $('.box5').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box6').css('background-color', '#e06377');
        $('.box7').css('background-color', '#eeac99');
        $('.box8').css({'background-color': '#e06377', 'overflow': 'auto'});
        $('.box9').css('background-color', '#eeac99');
        $('.box10').css('background-color', '#e06377');
        $('.box11').css({'background-color': '#eeac99', 'height': '200px', 'overflow': 'auto'});
        $('.box12').css('background-color', '#e06377');
        $('.misc-link-1, .misc-link-3, .misc-link-5, .misc-link-7, .misc-link-9, .misc-link-11').css('color', '#c83349');
        $('.misc-link-2, .misc-link-4, .misc-link-6, .misc-link-8, .misc-link-10').css('color', '#f9d5e5');
    }
      
    else if ($(window).width() <= 991){
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');
        $('.box3').css('background-color', '#e06377');
        $('.box4').css('background-color', '#eeac99');
        $('.box5').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box6').css('background-color', '#e06377');
        $('.box7').css('background-color', '#e06377');
        $('.box8').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box9').css('background-color', '#eeac99');
        $('.box10').css('background-color', '#e06377');
        $('.box11').css({'background-color': '#e06377', 'font-size': '94%', 'height': '310px'});
        $('.box12').css({'background-color': '#eeac99', 'height': '310px'});
        $('.misc-link-1, .misc-link-4, .misc-link-5, .misc-link-8, .misc-link-9').css('color', '#c83349');
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7, .misc-link-10, .misc-link-11').css('color', '#f9d5e5');
        
        }

    else {
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');
        $('.box3').css('background-color', '#e06377');
        $('.box4').css('background-color', '#eeac99');
        $('.box5').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box6').css('background-color', '#e06377');
        $('.box7').css('background-color', '#e06377');
        $('.box8').css({'background-color': '#eeac99', 'overflow': 'auto'});
        $('.box9').css('background-color', '#eeac99');
        $('.box10').css('background-color', '#e06377');
        $('.box11').css({'background-color': '#e06377', 'height': '330px'});
        $('.box12').css({'background-color': '#eeac99', 'height': '330px'});
        $('.misc-link-1, .misc-link-4, .misc-link-5, .misc-link-8, .misc-link-9').css('color', '#c83349');
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7, .misc-link-10, .misc-link-11').css('color', '#f9d5e5');
        $('.last2lines').css('margin', '10px');
        }

}

function mySetupFunction2() {
    if ($(window).width() >= 992){
        $('.last2lines').css('margin-left', '25px');    
    }

    else{
        $('.last2lines').css('margin-left', '0px');
    }
                 
}

$(document).ready(mySetupFunction1);
$(window).resize(mySetupFunction1);

$(document).ready(mySetupFunction2);
$(window).resize(mySetupFunction2);

/* JAVASCRIPT FOR MISCPHOTOS.HTML */

/* activate Previous and Next buttons that appear in the modals */
$("div[id^='photoModal']").each(function(){
  
  var currentModal = $(this);
  
  //click Next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='photoModal']").nextAll("div[id^='photoModal']").first().modal('show'); 
  });
  
  //click Prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='photoModal']").prevAll("div[id^='photoModal']").first().modal('show'); 
  });

});

/* change layout of cards depending on screen size */

function smpFunction() {
    
    const cards = document.querySelectorAll('.playingCard');
    
    const myElement1 = document.getElementById('playingCard1');
    const myElement2 = document.getElementById('playingCard2');
    const myElement3 = document.getElementById('playingCard3');

    if (window.matchMedia('(max-width: 992px)').matches) {
   
        cards.forEach(item => {
            item.style.width = '400px';
            item.style.height = '480px';
            item.style.display = 'block';
            item.style.marginLeft = 'auto';
            item.style.marginRight = 'auto';
        }); 
        
        myElement1.style.transform = 'rotate(-0deg)';
        myElement2.style.transform = 'rotate(0deg)';
        myElement3.style.transform = 'rotate(0deg)';
            
    }
    
    else {
        cards.forEach(item => {
            item.style.width = '300px';
            item.style.height = '480px';
            item.style.display = 'flex';
            //item.style.marginLeft = 'auto';
            //item.style.marginRight = 'auto';
        });
        
        
    }   
}

smpFunction();

  
  
  /*myElement2.style.transform = 'rotate(0deg)';
        myElement2.style.transform = 'translateY(-25px)';
        myElement2.style.transformOrigin = 'bottom';*/
        
  
  

    
    





/*  JQUERY FOR QUESTIONNAIRE */

function mySetupFunction3() {
    if ($(window).width() <= 500) {
        $('#sjButton > .card_front').html('Click');
        $('#sjButton > .card_back').html('here');
        $('#lmButton > .card_front').html('Click');
        $('#lmButton > .card_back').html('here');
    }
    
    else if ($(window).width() <= 640) {
        $('#sjButton > .card_front').html('Click here for');
        $('#sjButton > .card_back').html('SJ\'s responses').css('font-size', '92%');
        $('#lmButton > .card_front').html('Click here for');
        $('#lmButton > .card_back').html('LM\'s responses').css('font-size', '92%');
    }
    
    else if ($(window).width() <= 1000) {
        $('#sjButton > .card_front').html('Click here to see');
        $('#sjButton > .card_back').html('SJ\'s responses');
        $('#lmButton > .card_front').html('Click here to see');
        $('#lmButton > .card_back').html('LM\'s responses');
        
    }
    else if ($(window).width() > 1000) {
        $('#sjButton > .card_front').html('Click here to see');
        $('#sjButton > .card_back').html('Sarah Jane\'s responses');
        $('#lmButton > .card_front').html('Click here to see');
        $('#lmButton > .card_back').html('Laurel Marie\'s responses');
    }
}
     
$(document).ready(mySetupFunction3);
$(window).resize(mySetupFunction3);

/*function mySetupFunction4() {
    if ($(window).width() <= 385){
        $('#sjButton > .btn, #lmButton > .btn').css('font-size', '100%');
    }
    
    else if ($(window).width() <= 480){
        $('#sjButton > .btn, #lmButton > .btn').css('font-size', '100%');
    }
    
    else if ($(window).width() <= 635){
        $('#sjButton > .btn, #lmButton > .btn').css('font-size', '100%');
    }
    
    else if ($(window).width() <= 767){
        $('#sjButton > .btn, #lmButton > .btn').css('font-size', '100%');
    }
    
    else {
        $('#sjButton > .btn, #lmButton > .btn').css('font-size', '100%');
    }
}

$(document).ready(mySetupFunction4);
$(window).resize(mySetupFunction4);*/

$(document).ready(function(){
    
    $('#sjButton').one('click', function(){
        if ($(window).width() <=385) {
            $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '90%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football <br>&nbsp;and<br>&nbsp;women\'s <br>&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html ('&nbsp;Pitch <br>&nbsp;Perfect <br>&nbsp;(10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry <br>&nbsp;Potter<br>&nbsp;movies <br>&nbsp;(18X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;< 50 m<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;> 50 m').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will<br>&nbsp;not marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 <br>&nbsp;adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or <br>&nbsp;writing<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;political <br>&nbsp;science').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;indepen.<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;indepen. <br>&nbsp;or Dem.').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        
        }
        
        else if ($(window).width() <=480) {
            $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '95%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football and <br>&nbsp;women\'s <br>&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html ('&nbsp;Pitch <br>&nbsp;Perfect <br>&nbsp;(10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry Potter<br>&nbsp;movies <br>&nbsp;(18X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;<50 miles<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;>50 miles').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will<br>&nbsp;not marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp;3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 <br>&nbsp;adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or <br>&nbsp;writing<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;political <br>&nbsp;science').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;independ.<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;indepen. <br>&nbsp;or Dem.').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        else if ($(window).width() <=635) {
            $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '100%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football and&nbsp;<br>&nbsp;women\'s soccer <br><span style=color:#f9d5e5>&nbsp;/&nbsp;</span>ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html ('&nbsp;Pitch Perfect&nbsp;<br>&nbsp;(10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Harry <br>&nbsp;Potter movies <br>&nbsp;(18X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will not <br>&nbsp;marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp;3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or writing<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;political science').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;independent or <br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question not  <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        else if ($(window).width() <=767) {
             $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '100%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football and&nbsp;<br>&nbsp;women\'s soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html ('&nbsp;Pitch Perfect (10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry Potter movies <br>&nbsp;(18X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will not <br>&nbsp;marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or writing<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;political science').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;independent or <br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question not  <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        else if ($(window).width() <=991) {
            $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '100%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football and women\'s <br>&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html ('&nbsp;Pitch Perfect (10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry Potter movies (18X)&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will not marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp;3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or writing<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;political science').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>independent&nbsp; <br>&nbsp;or Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        
        }
        
        else if ($(window).width() <=1199) {
            $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '100%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football and women\'s soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html ('&nbsp;Pitch Perfect (10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry Potter movies (18X)&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will not marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp;3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or writing<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>political science&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>independent or <br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        
        }
        
        else {
            $(this).css('background-color', '#e06377').html('Sarah Jane').css('font-size', '100%');
            $('#hiddenSJ-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJ-2').html('&nbsp;football and women\'s soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>ice skating').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-3').html('&nbsp;I Am No. 4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJ-4').html('&nbsp;Pitch Perfect (10X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Harry Potter movies&nbsp;<br>&nbsp;(18X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJ-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>will not marry').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJ-7').html('&nbsp;3-4<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>6 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJ-8').html('&nbsp;math or writing <span style=color:#f9d5e5>&nbsp;/&nbsp;</span>political science').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJ-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>independent or Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJ-15').html('&nbsp;Ireland<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Spain').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJ-22').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJ-23').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJ-24').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJ-25').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        
        }
        
        $('#hiddenSJ-9').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenSJ-10').html('&nbsp;yes<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenSJ-11').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
        $('#hiddenSJ-13').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
        $('#hiddenSJ-14').html('&nbsp;0<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>3').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
        $('#hiddenSJ-16').html('&nbsp;yes<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenSJ-17').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenSJ-18').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenSJ-19').html('&nbsp;yes<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenSJ-20').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenSJ-21').html('&nbsp;b<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        
        
    });
    
    $('#lmButton').one('click', function(){
        
        
        if ($(window).width() <=385) {
            $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '90%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction <br><span style=color:#f9d5e5>&nbsp;/&nbsp;</span><q>I don\'t <br>&nbsp;read <br>&nbsp;books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenLM-4').html('&nbsp;Hunger<br>&nbsp;Games<br>&nbsp;(5x)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;The <br>&nbsp;Princess <br>&nbsp;and the <br>&nbsp;Pauper <br>&nbsp;(20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;< 50 m<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;> 50 m').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp26-30 y').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenLM-7').html('&nbsp;2 <br>&nbsp;biological<br>&nbsp;and 2<br>&nbsp;adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLM-12').html('&nbsp;indepen.<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
             $('#hiddenLM-22').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        else if ($(window).width() <=480) {
            $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '95%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbspsoccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;<q>I don\'t <br>&nbsp;read <br>&nbsp;books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenLM-4').html('&nbsp;Hunger<br>&nbsp;Games<br>&nbsp;(5X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>The <br>&nbsp;Princess <br>&nbsp;and the <br>&nbsp;Pauper <br>&nbsp;(20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;< 50 miles<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;> 50 miles').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;26-30 y').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenLM-7').html('&nbsp;2 biological<br>&nbsp;and 2<br>&nbsp;adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLM-12').html('&nbsp;independ.<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
             $('#hiddenLM-22').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question <br>&nbsp;not posed <br>&nbsp;in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
            
        }
        
         else if ($(window).width() <=635) {
             $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '100%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
             $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;<q>I don\'t read<br>&nbsp;books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLM-4').html('&nbsp;Hunger<br>&nbsp;Games (5X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;The Princess <br>&nbsp;and the <br>&nbsp;Pauper (20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenLM-7').html('&nbsp;2 biological<br>&nbsp;and 2<br>&nbsp;adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
             $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
             $('#hiddenLM-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
              $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
             $('#hiddenLM-22').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
         }
        
        else if ($(window).width() <=767) {
            $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '100%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
             $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><q>I don\'t&nbsp;<br>&nbsp;read books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenLM-4').html('&nbsp;Hunger Games<br>&nbsp;(5X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>The Princess<br>&nbsp;and the Pauper<br>&nbsp;(20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
             $('#hiddenLM-7').html('&nbsp;2 biological and<br>&nbsp;2 adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
             $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
             $('#hiddenLM-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
             $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
             $('#hiddenLM-22').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question not <br>&nbsp;posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        }
        
        
        else if ($(window).width() <=991) {
             $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '100%');
            $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '100%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
             $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><q>I don\'t read <br>&nbsp;books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenLM-4').html('&nbsp;Hunger Games (5X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;The Princess and the <br>&nbsp;Pauper (20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenLM-7').html('&nbsp;2 biological and 2 <br>&nbsp;adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLM-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLM-22').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question not posed in <br>&nbsp;2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        else if ($(window).width() <=1199) {
             $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '100%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
             $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><q>I don\'t read books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenLM-4').html('&nbsp;Hunger Games (5X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;The Princess and the <br>&nbsp;Pauper (20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenLM-7').html('&nbsp;2 biological and 2 adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLM-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLM-22').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbspquestion not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
         
         
        else {
             $(this).css('background-color', '#e06377').html('Laurel Marie').css('font-size', '100%');
            $('#hiddenLM-1').html('&nbsp;soccer<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLM-2').html('&nbsp;football<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>soccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLM-3').html('&nbsp;Abduction<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><q>I don\'t read books</q>').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenLM-4').html('&nbsp;Hunger Games (5X)<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>The Princesss<br>&nbsp;and the Pauper (20X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLM-5').html ('&nbsp;a<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>b').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenLM-6').html('&nbsp;21-30 y<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenLM-7').html('&nbsp;2 biological and 2 adopted<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLM-8').html('&nbsp;sports<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>medicine').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLM-12').html('&nbsp;independent<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Democrat').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLM-15').html('&nbsp;Brazil<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>England').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLM-22').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLM-23').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>Laurel').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLM-24').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLM-25').html('&nbsp;question not posed in 2013<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
             
        }
        
        $('#hiddenLM-9').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenLM-10').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenLM-11').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
        $('#hiddenLM-13').html('&nbsp;yes<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>yes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
        $('#hiddenLM-14').html('&nbsp;0<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>1').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
        $('#hiddenLM-16').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenLM-17').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenLM-18').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenLM-19').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenLM-20').html('&nbsp;no<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>no').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenLM-21').html('&nbsp;b<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>c').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        
    });
     
});

function mySetupFunction5() {
     if ($(window).width() <=385) {
         $('.question1').html('&nbsp;What is your favorite<br>&nbsp;sport to play?&nbsp;');
         $('.question2').html('&nbsp;What is your favorite <br>&nbsp;sport to watch?&nbsp;');
         $('.question3').html('&nbsp;What is your favorite <br>&nbsp;book?&nbsp;');
         $('.question4').html('&nbsp;What movie have <br>&nbsp;you seen the most <br>&nbsp;times (beginning <br>&nbsp;to end)?&nbsp;');
         $('.question5').html('&nbsp;How far from home&nbsp;<br>&nbsp;will you go to&nbsp;<br>&nbsp;college?&nbsp;');
         $('.question6').html('&nbsp;How old will you be<br>&nbsp;when you first <br>&nbsp;marry?&nbsp;');
         $('.question7').html('&nbsp;How many children&nbsp;<br>&nbsp;will you have?&nbsp;');
         $('.question8').html('&nbsp;What field will your<br>&nbsp;career be in?&nbsp;');
         $('.question9').html('&nbsp;Will you ever <br>&nbsp;practice yoga <br>&nbsp;regularly?&nbsp;');
         $('.question10').html('&nbsp;Will you ever visit<br>&nbsp;Africa?&nbsp;');
         $('.question11').html('&nbsp;Will you ever run for<br>&nbsp;office?&nbsp;');
         $('.question12').html('&nbsp;Will you be a&nbsp;<br>&nbsp;registered  Dem.,<br>&nbsp;registered  Rep. <br>&nbsp;or indepen.?&nbsp;');
         $('.question13').html('&nbsp;Will you ever visit an<br>&nbsp;orphanage?&nbsp;');
         $('.question14').html('&nbsp;How many tattoos&nbsp;<br>&nbsp;will you have?&nbsp;');
         $('.question15').html('&nbsp;What country would&nbsp;<br>&nbsp;you most like to&nbsp;<br>&nbsp;visit?&nbsp;');
         $('.question16').html('&nbsp;Will you ever trod&nbsp;<br>&nbsp;the boards?&nbsp;');
         $('.question17').html('&nbsp;Will you ever live in&nbsp;<br>&nbsp;a city?&nbsp;');
         $('.question18').html('&nbsp;Will you ever work&nbsp;<br>&nbsp;abroad?&nbsp;');
         $('.question19').html('&nbsp;Will you ever go&nbsp;<br>&nbsp;parachuting?&nbsp;');
         $('.question20').html('&nbsp;Will you ever join a&nbsp;<br>&nbsp;chorus?&nbsp;');
         $('.question21').html('&nbsp;RESENT/RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?<br>&nbsp;b. have <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contradictory <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?<br>&nbsp;c. mean neither the<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;same nor the<br>&nbsp;&nbsp;&nbsp;&nbsp; opposite?');
         $('.question22').html('&nbsp;Who among your&nbsp;<br>&nbsp;siblings will marry&nbsp;<br>&nbsp;first?');
         $('.question23').html('&nbsp;Who among your&nbsp;<br>&nbsp;siblings will marry&nbsp;<br>&nbsp;last?');
         $('.question24').html('&nbsp;What percentage of&nbsp;<br>&nbsp;your DNA is&nbsp;<br>&nbsp;Panamanian?&nbsp;<br>&nbsp;(Correct answer is&nbsp;<br>&nbsp;6.25% or 1/16.)');
         $('.question25').html('&nbsp;Will you ever read&nbsp;<br>&nbsp;a play by&nbsp;<br>&nbsp;Shakespeare&nbsp;<br>&nbsp;in its entirety?&nbsp;');
        }
     
     else if ($(window).width() <=480) {
         $('.question1').html('&nbsp;What is your favorite&nbsp;<br>&nbsp;sport to play?&nbsp;');
         $('.question2').html('&nbsp;What is your favorite&nbsp;<br>&nbsp;sport to watch?&nbsp;');
         $('.question3').html('&nbsp;What is your favorite&nbsp;<br>&nbsp;book?');
         $('.question4').html('&nbsp;What movie have you&nbsp;<br>&nbsp;seen the most times&nbsp;<br>&nbsp;(beginning to end)?&nbsp;');
         $('.question5').html('&nbsp;How far from home will&nbsp;<br>&nbsp;you go to college?&nbsp;');
         $('.question6').html('&nbsp;How old will you be&nbsp;<br>&nbsp;when you first marry?&nbsp;');
         $('.question7').html('&nbsp;How many children will&nbsp;<br>&nbsp;you have?&nbsp;');
         $('.question8').html('&nbsp;What field will your&nbsp;<br>&nbsp;career be in?&nbsp;');
         $('.question9').html('&nbsp;Will you ever practice&nbsp;<br>&nbsp;yoga regularly?&nbsp;');
         $('.question10').html('&nbsp;Will you ever visit&nbsp;<br>&nbsp;Africa?&nbsp;');
         $('.question11').html('&nbsp;Will you ever run for&nbsp;<br>&nbsp;office?&nbsp;');
         $('.question12').html('&nbsp;Will you be a registered&nbsp;<br>&nbsp;Democrat, registered&nbsp;<br>&nbsp;Republican or&nbsp;<br>&nbsp;independent?&nbsp;');
         $('.question13').html('&nbsp;Will you ever visit an&nbsp;<br>&nbsp;orphanage?&nbsp;');
         $('.question14').html('&nbsp;How many tattoos will&nbsp;<br>&nbsp;you have?&nbsp;');
         $('.question15').html('&nbsp;What country would you&nbsp;<br>&nbsp;most like to visit?&nbsp;');
         $('.question16').html('&nbsp;Will you ever trod the&nbsp;<br>&nbsp;boards?&nbsp;');
         $('.question17').html('&nbsp;Will you ever live in a&nbsp;<br>&nbsp;city?&nbsp;');
         $('.question18').html('&nbsp;Will you ever work&nbsp;<br>&nbsp;abroad?&nbsp;');
         $('.question19').html('&nbsp;Will you ever go&nbsp;<br>&nbsp;parachuting?&nbsp;');
         $('.question20').html('&nbsp;Will you ever join a&nbsp;<br>&nbsp;chorus?&nbsp;');
         $('.question21').html('&nbsp;RESENT/RESERVE&nbsp;<br>&nbsp;Do these words&nbsp;<br>&nbsp;a. have similar&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?&nbsp;<br>&nbsp;b. have contradictory&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?&nbsp;<br>&nbsp;c. mean neither the&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;same nor the&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opposite?&nbsp;');
         $('.question22').html('&nbsp;Who among your siblings&nbsp;<br>&nbsp;will marry first?&nbsp;');
         $('.question23').html('&nbsp;Who among your siblings&nbsp;<br>&nbsp;will marry last?&nbsp;');
         $('.question24').html('&nbsp;What percentage of your&nbsp;<br>&nbsp;DNA is Panamanian?&nbsp;<br>&nbsp;(Correct answer is 6.25%&nbsp;<br>&nbsp;or 1/16.)&nbsp;');
          $('.question25').html('&nbsp;Will you ever read a play&nbsp;<br>&nbsp;by Shakespeare in its&nbsp;<br>&nbsp;entirety?&nbsp;');
         }
    
     else if ($(window).width() <=635) {
         $('.question1').html('&nbsp;What is your favorite sport to<br>&nbsp;play?&nbsp;');
         $('.question2').html('&nbsp;What is your favorite sport to<br>&nbsp;watch?&nbsp;');
         $('.question3').html('&nbsp;What is your favorite book?');
        $('.question4').html('&nbsp;What movie have you seen the<br>&nbsp;most times (beginning to end)?');
        $('.question5').html('&nbsp;How far from home will you go to<br>&nbsp;college?<br>&nbsp;a. less than 50 miles<br>&nbsp;b. more than 50 miles');
        $('.question6').html('&nbsp;How old will you be when you first<br>&nbsp;marry?<br>&nbsp;a. 15-20 y<br>&nbsp;b. 21-25 y<br>&nbsp;c. 26-30 y<br>&nbsp;d. over 30 y<br>');
         $('.question7').html('&nbsp;How many children will you<br>&nbsp;have?&nbsp;');
         $('.question9').html('&nbsp;Will you ever practice yoga<br>&nbsp;regularly?&nbsp;');
        $('.question12').html('&nbsp;Will you be a registered&nbsp;<br>&nbsp;Democrat, registered Republican&nbsp;<br>&nbsp;or independent?&nbsp;');
        $('.question15').html('&nbsp;What country would you most<br>&nbsp;like to visit?');
        $('.question21').html('&nbsp;RESENT/RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory meanings?<br>&nbsp;c. mean neither the same nor the<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opposite?');
        $('.question22').html('&nbsp;Who among your siblings will&nbsp;<br>&nbsp;marry first?');
         $('.question23').html('&nbsp;Who among your siblings will&nbsp;<br>&nbsp;marry last?');
        $('.question24').html('&nbsp;What percentage of your DNA is&nbsp;<br>&nbsp;Panamanian? (Correct answer is&nbsp;<br>&nbsp;6.25% or 1/16.)');
        $('.question25').html('&nbsp;Will you ever read a play by&nbsp;<br>&nbsp;Shakespeare in its entirety?&nbsp;');
        
    }
        
    else if ($(window).width() <= 767) {
        $('.question4').html('&nbsp;What movie have you seen the most<br>&nbsp;times (beginning to end)?');
        $('.question12').html('&nbsp;Will you be a registered Democrat,<br>&nbsp;registered Republican or independent?&nbsp;');
        $('.question15').html('&nbsp;What country would you most like to visit?');
        $('.question21').html('&nbsp;RESENT/RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory meanings?<br>&nbsp;c. mean neither the same nor the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opposite?');
       $('.question24').html('&nbsp;What percentage of your DNA is&nbsp;<br>&nbsp;Panamanian? (Correct answer is 6.25%&nbsp;<br>&nbsp;or 1/16.)');
        $('.question25').html('&nbsp;Will you ever read a play by Shakespeare<br>&nbsp;in its entirety?&nbsp;');
    }
    
    else if ($(window).width() <= 991) {
        $('.question4').html('&nbsp;What movie have you seen the most times (beginning&nbsp;<br>&nbsp;to end)?');
        $('.question12').html('&nbsp;Will you be a registered Democrat, registered<br>&nbsp;Republican or independent?&nbsp;');
        $('.question24').html('&nbsp;What percentage of your DNA is Panamanian?&nbsp;<br>&nbsp;(Correct answer is 6.25% or 1/16.)');
        $('.question25').html('&nbsp;Will you ever read a play by Shakespeare in its&nbsp;<br>&nbsp;entirety?&nbsp;');
    }
    
    else if ($(window).width() <= 1199) {
        $('.question12').html('&nbsp;Will you be a registered Democrat, registered Republican or<br>&nbsp;independent?&nbsp;');
        $('.question24').html('&nbsp;What percentage of your DNA is Panamanian? (Correct&nbsp;<br>&nbsp;answer is 6.25% or 1/16.)');
        $('.question25').html('&nbsp;Will you ever read a play by Shakespeare in its entirety?&nbsp;');
    }

    else {
        $('.question4').html('&nbsp;What movie have you seen the most times (beginning to end)?&nbsp;');
        $('.question12').html('&nbsp;Will you be a registered Democrat, registered Republican or independent?&nbsp;');
        $('.question24').html('&nbsp;What percentage of your DNA is Panamanian? (Correct answer is 6.25% or&nbsp;<br>&nbsp;1/16.)');
    }
}

$(document).ready(mySetupFunction5);
$(window).resize(mySetupFunction5);


/*  JQUERY FOR QUESTIONNAIRE-JAP */

function mySetupFunction6() {
    if ($(window).width() <= 500) {
        $('#sjButtonJap > .card_front').html('ここを').css('text-align', 'center');
        $('#sjButtonJap > .card_back').html('クリックして').css('text-align', 'center');
        $('#lmButtonJap > .card_front').html('ここを').css('text-align', 'center');
        $('#lmButtonJap > .card_back').html('クリックして').css('text-align', 'center');
    }
    
    else if ($(window).width() <= 780) {
        $('#sjButtonJap > .card_front').html('SJの答えは').css('text-align', 'center');
        $('#sjButtonJap > .card_back').html('ここをクリックして').css('text-align', 'center');
        $('#lmButtonJap > .card_front').html('LMの答えは').css('text-align', 'center');
        $('#lmButtonJap > .card_back').html('ここをクリックして').css('text-align', 'center');
    }
    
    else if ($(window).width() > 780) {
        $('#sjButtonJap > .card_front').html('サラ・ジェーンの答えは').css('text-align', 'center');
        $('#sjButtonJap > .card_back').html('ここをクリックして下さい').css('text-align', 'center');
        $('#lmButtonJap > .card_front').html('ローレル・マリーの答えは').css('text-align', 'center');
        $('#lmButtonJap > .card_back').html('ここをクリックして下さい').css('text-align', 'center');
    }
}
     
$(document).ready(mySetupFunction6);
$(window).resize(mySetupFunction6);

$(document).ready(function(){
    
    $('#sjButtonJap').one('click', function(){
        
	    if ($(window).width() <=385) {
            $(this).css('background-color', '#e06377').html('サラ・<br>ジェーン');
            $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenSJJ-2').html('&nbsp;女子サッカ<br>&nbsp;ーとアメリ<br>&nbsp;カンフット<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;アイススケ<br>&nbsp;ーティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch<br>&nbsp;Perfect&nbsp;<br>&nbsp;(10回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry Potter<br>&nbsp;movies<br>&nbsp;(18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-5').html ('&nbsp;< 50&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;> 50').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書<br>&nbspくこと&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;民主党か&nbsp;<br>&nbsp;無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJJ-13').html('&nbspいいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
            $('#hiddenSJJ-15').html('&nbsp;アイルラン&nbsp;<br>&nbsp;ド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenSJJ-22').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        }
        
        
        
         else if ($(window).width() <=480) {
             $(this).css('background-color', '#e06377').html('サラ・<br>ジェーン');
             $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear'); 
            $('#hiddenSJJ-2').html('&nbsp;女子サッカ<br>&nbsp;ーとアメリ<br>&nbsp;カンフット<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;アイススケ<br>&nbsp;ーティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch<br>&nbsp;Perfect&nbsp;<br>&nbsp;(10回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Harry Potter<br>&nbsp;movies<br>&nbsp;(18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-5').html ('&nbsp;< 50&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;> 50').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書<br>&nbsp;くこと&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;民主党か&nbsp;<br>&nbsp;無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
             $('#hiddenSJJ-13').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
            $('#hiddenSJJ-15').html('&nbsp;アイルラン&nbsp;<br>&nbsp;ド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenSJJ-22').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
         }
         
        else if ($(window).width() <=635) {
            $(this).css('background-color', '#e06377').html('サラ・ジェーン');
             $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear'); 
            $('#hiddenSJJ-2').html('&nbsp;女子サッカー<br>&nbsp;とアメリカン<br>&nbsp;フットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;アイススケー<br>&nbsp;ティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch<br>&nbsp;Perfect&nbsp;(10回)&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;Harry Potter<br>&nbsp;movies (18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書く<br>&nbspこと&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主&nbsp;<br>&nbsp;党か無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJJ-13').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
             $('#hiddenSJJ-15').html('&nbsp;アイルランド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenSJJ-22').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
             
         }
        
        
        else if ($(window).width() <=767) {
            $(this).css('background-color', '#e06377').html('サラ・ジェーン');
             $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;&nbsp;サッカー&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear'); 
            $('#hiddenSJJ-2').html('&nbsp;女子サッカー<br>&nbsp;とアメリカン<br>&nbsp;フットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;アイススケー<br>&nbsp;ティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch Perfect (10回)<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;Harry Potter<br>&nbsp;movies (18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書くこと<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党か&nbsp;<br>&nbsp;無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJJ-13').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
            $('#hiddenSJJ-15').html('&nbsp;アイルランド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenSJJ-22').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        
        else if ($(window).width() <=991) {
            $(this).css('background-color', '#e06377').html('サラ・ジェーン');
             $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear'); 
            $('#hiddenSJJ-2').html('&nbsp;女子サッカーとアメリ<br>&nbsp;カンフットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;アイススケーティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch Perfect (10回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;Harry Potter movies<br>&nbsp;(18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書くこと&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党か&nbsp;<br>&nbsp;無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJJ-13').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
            $('#hiddenSJJ-15').html('&nbsp;アイルランド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000); 
            $('#hiddenSJJ-22').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
             
             
         }
         
         else if ($(window).width() <=1199) {
             $(this).css('background-color', '#e06377').html('サラ・ジェーン');
             $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear'); 
            $('#hiddenSJJ-2').html('&nbsp;女子サッカーとアメリ<br>&nbsp;カンフットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;アイススケーティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch Perfect (10回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;Harry Potter movies<br>&nbsp;(18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書くこと&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
             $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党か&nbsp;<br>&nbsp;無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJJ-13').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
            $('#hiddenSJJ-15').html('&nbsp;アイルランド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000); $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000); 
            $('#hiddenSJJ-22').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
         }
        
        else {
            $(this).css('background-color', '#e06377').html('サラ・ジェーン');
            $('#hiddenSJJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear'); 
            $('#hiddenSJJ-2').html('&nbsp女子サッカーとアメリカンフット<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;アイススケーティング').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-3').html('&nbsp;I Am No. 4&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;Frankenstein').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
            $('#hiddenSJJ-4').html('&nbsp;Pitch Perfect (10回)&nbsp;<span style=color:#f9d5e5>&nbsp/&nbsp</span>&nbsp;Harry Potter&nbsp;<br>&nbsp;movies&nbsp;(18回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
             $('#hiddenSJJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;未婚主義').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp;三人か四人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;養子六人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp;理科系か書くこと&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;政治学').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
             $('#hiddenSJJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenSJJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
            $('#hiddenSJJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党か無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenSJJ-13').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
            $('#hiddenSJJ-15').html('&nbsp;アイルランド&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;スペイン').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenSJJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenSJJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
             $('#hiddenSJJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000); 
            $('#hiddenSJJ-22').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenSJJ-23').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenSJJ-24').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;1/16').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenSJJ-25').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        }
        
        
      
        $('#hiddenSJJ-10').html('&nbsp;はい&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenSJJ-14').html('&nbsp;無し&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;&nbsp;三').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
        $('#hiddenSJJ-16').html('&nbsp;はい&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenSJJ-19').html('&nbsp;はい&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenSJJ-21').html('&nbsp;い&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
          
    });
    
    $('#lmButtonJap').one('click', function(){
        
        if ($(window).width() <=385) {
            $(this).css('background-color', '#e06377').html('ローレル・<br>マリー');
            $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカン<br>&nbsp;フット&nbsp;<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;"本を読ま&nbsp;<br>&nbsp;ない"').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLMJ-4').html('&nbsp;Hunger<br>&nbsp;Games (5<br>&nbsp;回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;The&nbsp;<br>&nbsp;Princess&nbsp;<br>&nbsp;and the&nbsp;<br>&nbsp;Pauper&nbsp;<br>&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
             $('#hiddenLMJ-5').html ('&nbsp;< 50&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;> 50').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
             $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;26-30歳').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
             $('#hiddenLMJ-7').html('&nbsp;実子二人と<br>&nbsp;養子二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;医療関係&nbsp;<br>&nbsp;の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
            $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
            $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenLMJ-22').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が&nbsp;<br>&nbsp;聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
        
            
        }
        
        
        else if ($(window).width() <=480) {
            $(this).css('background-color', '#e06377').html('ローレル・<br>マリー');
            $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカン<br>&nbsp;フット&nbsp;<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;"本を読ま&nbsp;<br>&nbsp;ない"').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLMJ-4').html('&nbsp;Hunger<br>&nbsp;Games (5<br>&nbsp;回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;The&nbsp;<br>&nbsp;Princess&nbsp;<br>&nbsp;and the&nbsp;<br>&nbsp;Pauper&nbsp;<br>&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
             $('#hiddenLMJ-5').html ('&nbsp;< 50&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;> 50').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
              $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;26-30歳').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
             $('#hiddenLMJ-7').html('&nbsp;実子二人と<br>&nbsp;養子二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;医療関係&nbsp;<br>&nbsp;の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
            $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
            $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenLMJ-22').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に&nbsp;<br>&nbsp;質問が聞&nbsp;<br>&nbsp;かなかった&nbsp;<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        
        else if ($(window).width() <=635) {
            $(this).css('background-color', '#e06377').html('ローレル・<br>マリー');
            $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカン<br>&nbsp;フット&nbsp;<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;"本を読まない"&nbsp;').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLMJ-4').html('&nbsp;Hunger<br>&nbsp;Games (5回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;The&nbsp;Princess&nbsp;<br>&nbsp;and the&nbsp;<br>&nbsp;Pauper&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
              $('#hiddenLMJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
              $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
             $('#hiddenLMJ-7').html('&nbsp;実子二人と<br>&nbsp;養子二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;医療関係&nbsp;<br>&nbsp;の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
            $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
             $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
            $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenLMJ-22').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に質問&nbsp;<br>&nbsp;が聞かなかった<br>&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
            
             
        }
        
        else if ($(window).width() <=767) {
            $(this).css('background-color', '#e06377').html('ローレル・マリー');
             $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカン<br>&nbsp;フットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;"本を読まない"&nbsp;').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLMJ-4').html('&nbsp;Hunger Games <br>&nbsp;(5回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;The&nbsp;Princess&nbsp;<br>&nbsp;and the Pauper&nbsp;<br>&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
              $('#hiddenLMJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
              $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
              $('#hiddenLMJ-7').html('&nbsp;実子二人と養子<br>&nbsp;二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;医療関係の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
            $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
             $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
             $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
            $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenLMJ-22').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に質問が&nbsp;<br>&nbsp;聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
            
        }
        
        else if ($(window).width() <=991) {
            $(this).css('background-color', '#e06377').html('ローレル・マリー');
            $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカン<br>&nbsp;フットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span><br>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;"本を読まない"&nbsp;').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
              $('#hiddenLMJ-4').html('&nbsp;Hunger Games (5回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;The&nbsp;Princess and the&nbsp;<br>&nbsp;Pauper&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
              $('#hiddenLMJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
              $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
              $('#hiddenLMJ-7').html('&nbsp;実子二人と養子二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
                $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;医療関係の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
                $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
                $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
             $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
             $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
            $('#hiddenLMJ-22').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に質問が聞か&nbsp;<br>&nbsp;なかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
            
            
        }
        
        else if ($(window).width() <=1199) {
            $(this).css('background-color', '#e06377').html('ローレル・マリー');
            $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカンフット<br>&nbsp;ボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;"本を読&nbsp;<br>&nbsp;読まない"&nbsp;').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLMJ-4').html('&nbsp;Hunger Games (5回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;The&nbsp;Princess and the&nbsp;<br>&nbsp;Pauper&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
              $('#hiddenLMJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
              $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
              $('#hiddenLMJ-7').html('&nbsp;実子二人と養子二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
                $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;医療関係&nbsp;<br>&nbsp;の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
                $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
             $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
             $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
             $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
             $('#hiddenLMJ-22').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に質問が聞かな&nbsp;<br>&nbsp;かった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
            
        }
        
        else {
            $(this).css('background-color', '#e06377').html('ローレル・マリー');
             $('#hiddenLMJ-1').html('&nbsp;サッカー<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
            $('#hiddenLMJ-2').html('&nbsp;アメリカンフットボール&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;サッカー&nbsp;').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
             $('#hiddenLMJ-3').html('&nbsp;Abduction&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;"本を読まない"&nbsp;').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
             $('#hiddenLMJ-4').html('&nbsp;Hunger Games (5回)&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;&nbsp;The&nbsp;Princess&nbsp;<br>&nbsp;and the&nbsp;Pauper&nbsp;(20回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
              $('#hiddenLMJ-5').html ('&nbsp;あ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;い').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
              $('#hiddenLMJ-6').html('&nbsp;21-30歳&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
              $('#hiddenLMJ-7').html('&nbsp;実子二人と養子二人&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;三人か四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
                $('#hiddenLMJ-8').html('&nbsp;スポーツ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;医療関係&の仕事').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
                $('#hiddenLMJ-9').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
                $('#hiddenLMJ-10').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
             $('#hiddenLMJ-11').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500, 'linear');
            $('#hiddenLMJ-12').html('&nbsp;無党派&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;民主党').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
            $('#hiddenLMJ-15').html('&nbsp;ブラジル&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;イギリス').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5500);
            $('#hiddenLMJ-16').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
            $('#hiddenLMJ-17').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
            $('#hiddenLMJ-18').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
            $('#hiddenLMJ-19').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
             $('#hiddenLMJ-20').html('&nbsp;いいえ&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;いいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
             $('#hiddenLMJ-22').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
            $('#hiddenLMJ-23').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;ローレル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
            $('#hiddenLMJ-24').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;7%').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
            $('#hiddenLMJ-25').html('&nbsp;2013年に質問が聞かなかった&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;<br>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
              
              
              
            
        }
        
       
        
        
        $('#hiddenLMJ-13').html('&nbsp;はい&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;はい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6500);
        $('#hiddenLMJ-14').html('&nbsp;無し&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;&nbsp;一').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000);
        $('#hiddenLMJ-21').html('&nbsp;い&nbsp;<span style=color:#f9d5e5>&nbsp;/&nbsp;</span>&nbsp;う').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        
    });
});

function mySetupFunction7() {
    if ($(window).width() <=385) {
         $('.question1Jap').html('&nbsp;一番したいスポーツ<br>&nbsp;は何ですか？');
         $('.question2Jap').html('&nbsp;一番見たいスポーツ<br>&nbsp;は何ですか？');
         $('.question3Jap').html('&nbsp;一番好きな本は何<br>&nbsp;ですか？');
         $('.question4Jap').html('&nbsp;今まで何度も見た<br>&nbsp;映画は何ですか？');
         $('.question5Jap').html('&nbsp;家から大学まで何<br>&nbsp;マイルぐらいだと<br>&nbsp;思いますか？');
         $('.question6Jap').html('&nbsp;初めて結婚する時は<br>&nbsp;何歳ですか？');
         $('.question7Jap').html('&nbsp;将来、何人子供が<br>&nbsp;いますか？');
         $('.question8Jap').html('&nbsp;将来、どのキャリア<br>&nbsp;につくつもりです<br>&nbsp;か？');
         $('.question9Jap').html('&nbsp;将来、ヨガをする<br>&nbsp;つもりですか？');
         $('.question10Jap').html('&nbsp;将来、アフリカに<br>&nbsp;行くつもりですか？');
         $('.question11Jap').html('&nbsp;将来、政治家に<br>&nbsp;なりますか？');
         $('.question12Jap').html('&nbsp;将来、民主党か<br>&nbsp;共和党または<br>&nbsp;無党派ですか？');
         $('.question13Jap').html('&nbsp;将来、孤児院を<br>&nbsp;訪ねますか？');
         $('.question14Jap').html('&nbsp;将来、入れ墨を<br>&nbsp;いくつ入れますか？');
         $('.question15Jap').html('&nbsp;どの外国に一番<br>&nbsp;行きたいですか？');
         $('.question16Jap').html('&nbsp;将来、演劇の舞台に<br>&nbsp;立ちますか？');
         $('.question17Jap').html('&nbsp;将来、都会に住み<br>&nbsp;ますか？');
         $('.question18Jap').html('&nbsp;将来、外国で働き<br>&nbsp;ますか？');
         $('.question19Jap').html('&nbsp;将来、スカイダイビ<br>&nbsp;ングをしますか？');
         $('.question20Jap').html('&nbsp;将来、合唱団に入り<br>&nbsp;ますか？');
         $('.question21Jap').html('&nbsp;RESENT/RESERVE<br>&nbsp;この言葉に<br>&nbsp;あ。同義語があり<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ますか？<br>&nbsp;い。反対語があり<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ますか？<br>&nbsp;う。同義語も反対語<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;もありません<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;か？');
         $('.question22Jap').html('&nbsp;兄妹の中で誰が一番<br>&nbsp;先に結婚するか？');
         $('.question23Jap').html('&nbsp;兄妹の中で誰が一最<br>&nbsp;後結婚するか？');
         $('.question24Jap').html('&nbsp;あなたのパナマの遺<br>&nbsp;伝子は何パーセント<br>&nbsp;ですか？(正しい<br>&nbsp;答えは6.25%か<br>&nbsp;1/16。)');
         $('.question25Jap').html('&nbsp;いつかシェイクスピ<br>&nbsp;アの本を完読します<br>&nbsp;か？');
         
    }
    
    
    else if ($(window).width() <=480) {
        $('.question1Jap').html('&nbsp;一番したいスポーツは何<br>&nbsp;ですか？');
         $('.question2Jap').html('&nbsp;一番見たいスポーツは何<br>&nbsp;ですか？');
         $('.question3Jap').html('&nbsp;一番好きな本は何<br>&nbsp;ですか？');
         $('.question4Jap').html('&nbsp;今まで何度も見た映画は<br>&nbsp;何ですか？');
         $('.question5Jap').html('&nbsp;家から大学まで何マイル<br>&nbsp;ぐらいだと思いますか？');
         $('.question6Jap').html('&nbsp;初めて結婚する時は<br>&nbsp;何歳ですか？');
         $('.question7Jap').html('&nbsp;将来、何人子供が<br>&nbsp;いますか？');
         $('.question8Jap').html('&nbsp;将来、どのキャリア<br>&nbsp;につくつもりですか？');
         $('.question9Jap').html('&nbsp;将来、ヨガをするつもり<br>&nbsp;ですか？');
         $('.question10Jap').html('&nbsp;将来、アフリカに行く<br>&nbsp;つもりですか？');
         $('.question11Jap').html('&nbsp;将来、政治家に<br>&nbsp;なりますか？');
         $('.question12Jap').html('&nbsp;将来、民主党か共和党<br>&nbsp;または無党派ですか？');
         $('.question13Jap').html('&nbsp;将来、孤児院を訪ね<br>&nbsp;ますか？')
         $('.question14Jap').html('&nbsp;将来、入れ墨をいくつ<br>&nbsp;入れますか？');
         $('.question15Jap').html('&nbsp;どの外国に一番行き<br>&nbsp;たいですか？');
         $('.question16Jap').html('&nbsp;将来、演劇の舞台に<br>&nbsp;立ちますか？');
         $('.question17Jap').html('&nbsp;将来、都会に住み<br>&nbsp;ますか？');
         $('.question18Jap').html('&nbsp;将来、外国で働き<br>&nbsp;ますか？');
         $('.question19Jap').html('&nbsp;将来、スカイダイビン<br>&nbsp;グをしますか？');
         $('.question20Jap').html('&nbsp;将来、合唱団に入り<br>&nbsp;ますか？');
         $('.question21Jap').html('&nbsp;RESENT/RESERVE<br>&nbsp;この言葉に<br>&nbsp;あ。同義語があり<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ますか？<br>&nbsp;い。反対語があり<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ますか？<br>&nbsp;う。同義語も反対語<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;もありませんか？');
         $('.question22Jap').html('&nbsp;兄妹の中で誰が一番先<br>&nbsp;に結婚するか？');
         $('.question23Jap').html('&nbsp;兄妹の中で誰が一最後<br>&nbsp;結婚するか？');
         $('.question24Jap').html('&nbsp;あなたのパナマの遺伝子<br>&nbsp;は何パーセントですか？<br>&nbsp;(正しい答えは6.25%か<br>&nbsp;1/16。)');
         $('.question25Jap').html('&nbsp;いつかシェイクスピア<br>&nbsp;の本を完読しますか？');
         
    }  
    
    else if ($(window).width() <=635) {
         $('.question4Jap').html('&nbsp;今まで何度も見た映画は何です<br>&nbsp;か？');
         $('.question5Jap').html('&nbsp;家から大学まで何マイル<br>&nbsp;ぐらいだと思いますか？<br>&nbsp;あ。50マイル以下<br>&nbsp;い。50マイル以上');
         $('.question8Jap').html('&nbsp;将来、どのキャリアにつくつもり<br>&nbsp;ですか？');
          $('.question10Jap').html('&nbsp;将来、アフリカに行くつもりです<br>&nbsp;か？');
          $('.question12Jap').html('&nbsp;将来、民主党か共和党または<br>&nbsp;無党派ですか？');
           $('.question14Jap').html('&nbsp;将来、入れ墨をいくつ入れます<br>&nbsp;か？');
           $('.question19Jap').html('&nbsp;将来、スカイダイビングをします<br>&nbsp;か？');
           $('.question21Jap').html('&nbsp;RESENT/RESERVE<br>&nbsp;この言葉に<br>&nbsp;あ。 同義語がありますか？<br>&nbsp;い。 反対語がありますか？<br>&nbsp;う。 同義語も反対語もありませ<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;んか？');
           $('.question22Jap').html('&nbsp;兄妹の中で誰が一番先に結婚する<br>&nbsp;か？');
         $('.question23Jap').html('&nbsp;兄妹の中で誰が一最後結婚する<br>&nbsp;か？');
         $('.question24Jap').html('&nbsp;あなたのパナマの遺伝子は何<br>&nbsp;パーセントですか？(正しい<br>&nbsp;答えは6.25%か1/16。)');
         $('.question25Jap').html('&nbsp;いつかシェイクスピアの本を<br>&nbsp;完読しますか？');
    }
    
    else if ($(window).width() <=767){
         $('.question5Jap').html('&nbsp;家から大学まで何マイルぐらい<br>&nbsp;だと思いますか？<br>&nbsp;あ。50マイル以下<br>&nbsp;い。50マイル以上');
         $('.question8Jap').html('&nbsp;将来、どのキャリアにつくつもり<br>&nbsp;ですか？');
          $('.question10Jap').html('&nbsp;将来、アフリカに行くつもりですか？');
          $('.question12Jap').html('&nbsp;将来、民主党か共和党または<br>&nbsp;無党派ですか？');
           $('.question14Jap').html('&nbsp;将来、入れ墨をいくつ入れますか？');
           $('.question19Jap').html('&nbsp;将来、スカイダイビングをしますか？');
           $('.question21Jap').html('&nbsp;RESENT/RESERVE<br>&nbsp;この言葉に<br>&nbsp;あ。同義語がありますか？<br>&nbsp;い。反対語がありますか？<br>&nbsp;う。同義語も反対語もありませんか？');
           $('.question22Jap').html('&nbsp;兄妹の中で誰が一番先に結婚するか？');
         $('.question23Jap').html('&nbsp;兄妹の中で誰が一最後結婚するか？');
         $('.question24Jap').html('&nbsp;あなたのパナマの遺伝子は何<br>&nbsp;パーセントですか？(正しい<br>&nbsp;答えは6.25%か1/16。)');
         $('.question25Jap').html('&nbsp;いつかシェイクスピアの本を<br>&nbsp;完読しますか？');
           
    }
    
     
    
    
    
}

$(document).ready(mySetupFunction7);
$(window).resize(mySetupFunction7);


/* JAVASCRIPT FOR MEMENTOS */

function flip1() {
  var x = document.getElementById("front1");
  var y = document.getElementById("back1-1");
  x.style.display = "none";
  y.style.display = "block";
}

function flipAgain1() {
  var x = document.getElementById("back1-2");
  var y = document.getElementById("back1-1");
  x.style.display = "block";
  y.style.display = "none";
}

function unFlip1() {
  var x = document.getElementById("front1");
  var y = document.getElementById("back1-2");
  x.style.display = "block";
  y.style.display = "none";
}

function flip2() {
  var x = document.getElementById("front2");
  var y = document.getElementById("back2");
  x.style.display = "none";
  y.style.display = "block";
}

function unFlip2() {
  var x = document.getElementById("front2");
  var y = document.getElementById("back2");
  x.style.display = "block";
  y.style.display = "none";
}


function flip3() {
  var x = document.getElementById("front3");
  var y = document.getElementById("back3-1");
  x.style.display = "none";
  y.style.display = "block";
}

function flipAgain3() {
  var x = document.getElementById("back3-2");
  var y = document.getElementById("back3-1");
  x.style.display = "block";
  y.style.display = "none";
}

function unFlip3() {
  var x = document.getElementById("front3");
  var y = document.getElementById("back3-2");
  x.style.display = "block";
  y.style.display = "none";
}

function flip4() {
  var x = document.getElementById("front4");
  var y = document.getElementById("back4");
  x.style.display = "none";
  y.style.display = "block";
}

function unFlip4() {
  var x = document.getElementById("front4");
  var y = document.getElementById("back4");
  x.style.display = "block";
  y.style.display = "none";
}

function flip5() {
  var x = document.getElementById("front5");
  var y = document.getElementById("back5");
  x.style.display = "none";
  y.style.display = "block";
}

function unFlip5() {
  var x = document.getElementById("front5");
  var y = document.getElementById("back5");
  x.style.display = "block";
  y.style.display = "none";
}

function flip6() {
  var x = document.getElementById("front6");
  var y = document.getElementById("back6");
  x.style.display = "none";
  y.style.display = "block";
}

function unFlip6() {
  var x = document.getElementById("front6");
  var y = document.getElementById("back6");
  x.style.display = "block";
  y.style.display = "none";
}

function flip7() {
  var x = document.getElementById("front7");
  var y = document.getElementById("back7-1");
  x.style.display = "none";
  y.style.display = "block";
}

function flipAgain7() {
  var x = document.getElementById("back7-2");
  var y = document.getElementById("back7-1");
  x.style.display = "block";
  y.style.display = "none";
}

function flipThirdTime7() {
  var x = document.getElementById("back7-3");
  var y = document.getElementById("back7-2");
  x.style.display = "block";
  y.style.display = "none";
}

function unFlip7() {
  var x = document.getElementById("front7");
  var y = document.getElementById("back7-3");
  x.style.display = "block";
  y.style.display = "none";
}

function flip8() {
  var x = document.getElementById("front8");
  var y = document.getElementById("back8");
  x.style.display = "none";
  y.style.display = "block";
}

function unFlip8() {
  var x = document.getElementById("front8");
  var y = document.getElementById("back8");
  x.style.display = "block";
  y.style.display = "none";
}

function flip10() {
  var x = document.getElementById("front10");
  var y = document.getElementById("back10-1");
  x.style.display = "none";
  y.style.display = "block";
}

function flipAgain10() {
  var x = document.getElementById("back10-2");
  var y = document.getElementById("back10-1");
  x.style.display = "block";
  y.style.display = "none";
}

function flipThirdTime10() {
  var x = document.getElementById("back10-3");
  var y = document.getElementById("back10-2");
  x.style.display = "block";
  y.style.display = "none";
}

function flipFourthTime10() {
  var x = document.getElementById("back10-4");
  var y = document.getElementById("back10-3");
  x.style.display = "block";
  y.style.display = "none";
}

function flipFifthTime10() {
  var x = document.getElementById("back10-5");
  var y = document.getElementById("back10-4");
  x.style.display = "block";
  y.style.display = "none";
}

function unFlip10() {
  var x = document.getElementById("front10");
  var y = document.getElementById("back10-5");
  x.style.display = "block";
  y.style.display = "none";
}

function flip12() {
  var x = document.getElementById("front12");
  var y = document.getElementById("back12");
  x.style.display = "none";
  y.style.display = "block";
  var z = document.getElementById("front13");
  var a = document.getElementById("back13");
  z.style.display = "none";
  a.style.display = "block";
}

function unFlip12() {
  var x = document.getElementById("front12");
  var y = document.getElementById("back12");
  x.style.display = "block";
  y.style.display = "none";
  var z = document.getElementById("front13");
  var a = document.getElementById("back13");
  z.style.display = "block";
  a.style.display = "none";
}

function flip13() {
  var x = document.getElementById("front13");
  var y = document.getElementById("back13");
  x.style.display = "none";
  y.style.display = "block";
  var z = document.getElementById("front12");
  var a = document.getElementById("back12");
  z.style.display = "none";
  a.style.display = "block";
}

function unFlip13() {
  var x = document.getElementById("front13");
  var y = document.getElementById("back13");
  x.style.display = "block";
  y.style.display = "none";
  var z = document.getElementById("front12");
  var a = document.getElementById("back12");
  z.style.display = "block";
  a.style.display = "none";
}

function flip14() {
  var x = document.getElementById("front14");
  var y = document.getElementById("back14");
  x.style.display = "none";
  y.style.display = "block";
}

function unFlip14() {
  var x = document.getElementById("front14");
  var y = document.getElementById("back14");
  x.style.display = "block";
  y.style.display = "none";
}

/* JAVASCRIPT FOR HOME PAGE */

function jumboFunction() {
    
    if (window.matchMedia('(max-width: 767px)').matches) {
        document.getElementById('coverpageHeading').style.fontSize = '120%';
    }
    
    else {
        document.getElementById('coverpageHeading').style.fontSize = 'normal';
    }
    
}

jumboFunction();