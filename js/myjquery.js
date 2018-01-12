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
    if ($(window).width() <= 767) {
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');  
        $('.box3').css('background-color', '#eeac99');
        $('.box4').css('background-color', '#e06377');
        $('.box5').css('background-color', '#eeac99');
        $('.box6').css('background-color', '#e06377');
        $('.box7').css({'background-color': '#eeac99', 'height': '200px', 'overflow': 'scroll'});
        $('.box8').css('background-color', '#e06377');
        $('.misc-link-1, .misc-link-3, .misc-link-5, .misc-link-7').css('color', '#c83349');
        $('.misc-link-2, .misc-link-4, .misc-link-6').css('color', '#f9d5e5');
    }
      
    else if ($(window).width() <= 991){
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');   
        $('.box3').css('background-color', '#e06377');
        $('.box4').css('background-color', '#eeac99');
        $('.box5').css('background-color', '#eeac99');
        $('.box6').css('background-color', '#e06377');
        $('.box7').css({'background-color': '#e06377', 'font-size': '94%', 'height': '200px'});
        $('.box8').css({'background-color': '#eeac99', 'font-size': '94%', 'height': '200px'});
        $('.misc-link-1, .misc-link-4, .misc-link-5').css('color', '#c83349');
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7').css('color', '#f9d5e5');
        
        }

    else {
        $('.box1').css('background-color', '#eeac99');
        $('.box2').css('background-color', '#e06377');   
        $('.box3').css('background-color', '#e06377');
        $('.box4').css('background-color', '#eeac99');
        $('.box5').css('background-color', '#eeac99');
        $('.box6').css('background-color', '#e06377');
        $('.box7').css({'background-color': '#e06377', 'height': '200px'});
        $('.box8').css({'background-color': '#eeac99', 'height': '200px'});
        $('.misc-link-1, .misc-link-4, .misc-link-5').css('color', '#c83349');
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7').css('color', '#f9d5e5');
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


/*  JQUERY FOR QUESTIONNAIRE */

function mySetupFunction3() {
    if ($(window).width() <= 500) {
        $('#sjButton > .card_front').html('Click');
        $('#sjButton > .card_back').html('here');
        $('#lmButton > .card_front').html('Click');
        $('#lmButton > .card_back').html('here');
    }
    
    else if ($(window).width() <= 660) {
        $('#sjButton > .card_front').html('Click here to see');
        $('#sjButton > .card_back').html('SJ\'s responses');
        $('#lmButton > .card_front').html('Click here to see');
        $('#lmButton > .card_back').html('LM\'s responses');
        
    }
    else if ($(window).width() > 660) {
        $('#sjButton > .card_front').html('Click here to see');
        $('#sjButton > .card_back').html('Sarah Jane\'s responses');
        $('#lmButton > .card_front').html('Click here to see');
        $('#lmButton > .card_back').html('Laurel Marie\'s responses');
    }
}
     
$(document).ready(mySetupFunction3);
$(window).resize(mySetupFunction3);

function mySetupFunction4() {
    if ($(window).width() <= 767){
        $(' #sjButton > .btn, #lmButton > .btn').css('font-size', '80%');
    }
    else {
        $(' #sjButton > .btn, #lmButton > .btn').css('font-size', '100%');
    }
}

$(document).ready(mySetupFunction4);
$(window).resize(mySetupFunction4);

$(document).ready(function(){
    
    $('#sjButton').one('click', function(){
        
	    $(this).css('background-color', '#e06377').html('Sarah Jane');
        $('#hiddenSJ-1').html('&nbspsoccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
        
        if ($(window).width() <=767) {
            $('#hiddenSJ-2').html('&nbspfootball/<br>&nbspwomen\'s<br>&nbspsoccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJ-4').html ('&nbspPitch<br>&nbspPerfect<br>&nbsp(10 times)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
            $('#hiddenSJ-8').html('&nbspmath or<br>&nbspwriting').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
        }
        
        else {
        $('#hiddenSJ-2').html('&nbspwomen\'s soccer/football').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
        $('#hiddenSJ-4').html('&nbspPitch Perfect (10X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
        $('#hiddenSJ-8').html('&nbspmath or writing').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
        }
        $('#hiddenSJ-3').html('&nbspI Am No. 4').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        
        $('#hiddenSJ-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenSJ-6').html('&nbsp21-30 y').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        $('#hiddenSJ-7').html('&nbsp3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        
        $('#hiddenSJ-9').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenSJ-10').html('&nbspyes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenSJ-11').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
        $('#hiddenSJ-12').html('&nbspindependent').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenSJ-13').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenSJ-14').html('&nbsp0').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenSJ-15').html('&nbspIreland').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenSJ-16').html('&nbspyes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenSJ-17').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        $('#hiddenSJ-18').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
        $('#hiddenSJ-19').html('&nbspyes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
        $('#hiddenSJ-20').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
        $('#hiddenSJ-21').html('&nbspb').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
    });
    
    $('#lmButton').one('click', function(){
        
        $(this).css('background-color', '#e06377').html('Laurel Marie');
        $('#hiddenLM-1').html('&nbspsoccer').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
        $('#hiddenLM-2').html('&nbspfootball').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
        $('#hiddenLM-3').html('&nbspAbduction').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        
        if ($(window).width() <=700) {
            $('#hiddenLM-4').html('&nbspHunger<br>&nbspGames (5X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
             $('#hiddenLM-7').html('&nbsp2 biological<br>&nbspand 2<br>&nbspadopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        }
        
        else {
            $('#hiddenLM-4').html('&nbspHunger Games (5X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
             $('#hiddenLM-7').html('&nbsp2 biological and 2 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        }
        
        $('#hiddenLM-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenLM-6').html('&nbsp21-30 y').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
       
        $('#hiddenLM-8').html('&nbspsports').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
        $('#hiddenLM-9').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenLM-10').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenLM-11').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
        $('#hiddenLM-12').html('&nbspindependent').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenLM-13').html('&nbspyes').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenLM-14').html('&nbsp0').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenLM-15').html('&nbspBrazil').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenLM-16').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenLM-17').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        $('#hiddenLM-18').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
        $('#hiddenLM-19').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
        $('#hiddenLM-20').html('&nbspno').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
        $('#hiddenLM-21').html('&nbspb').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
    });
     
});

function mySetupFunction5() {
     if ($(window).width() <=385) {
        $('.question21').html('&nbspRESENT/RESERVE<br> &nbspDo these words<br>&nbspa. have similar<br>&nbsp&nbsp&nbsp&nbsp&nbspmeanings?<br>&nbspb. have contradictory<br>&nbsp&nbsp&nbsp&nbsp&nbspmeanings?<br>&nbspc. mean neither the<br>&nbsp&nbsp&nbsp&nbsp&nbspsame nor the<br>&nbsp&nbsp&nbsp&nbsp opposite?');
        $('.question1').html('&nbspWhat is your favorite <br>&nbspsport to play?');
         $('.question2').html('&nbspWhat is your favorite <br>&nbspsport to watch?');
         $('.question3').html('&nbspWhat is your favorite <br>&nbspbook?');
         $('.question4').html('&nbspWhat movie have you<br>&nbspseen the most times<br>&nbsp(beginning to end)?');
         $('.question5').html('&nbspHow far from home will <br>&nbspyou go to college?');
         $('.question6').html('&nbspHow old will you be<br>&nbspwhen you first marry?');
         $('.question7').html('&nbspHow many children will<br>&nbspyou have?');
         $('.question8').html('&nbspWhat field will your<br>&nbspcareer be in?');
         $('.question9').html('&nbspWill you ever practice<br>&nbspyoga regularly?');
         $('.question10').html('&nbspWill you ever visit<br>&nbspAfrica?');
         $('.question11').html('&nbspWill you ever run for<br>&nbspoffice?');
         $('.question12').html('&nbspWill you be a registered<br>&nbspDemocrat, registered<br>&nbspRepublican or<br>&nbspindependent?&nbsp');
         $('.question13').html('&nbspWill you ever visit an<br>&nbsporphage?');
         $('.question14').html('&nbspHow many tattoos will<br>&nbspyou have?');
         $('.question15').html('&nbspWhat country would you<br>&nbspmost like to visit?');
         $('.question16').html('&nbspWill you ever trod the<br>&nbspboards?');
         $('.question17').html('&nbspWill you ever live in a<br>&nbspcity?');
         $('.question18').html('&nbspWill you ever work<br>&nbspabroad?');
         $('.question19').html('&nbspWill you ever go<br>&nbspparachuting?');
         $('.question20').html('&nbspWill you ever join a<br>&nbspchorus?');
        }
     
     else if ($(window).width() <=510) {
         $('.question1').html('&nbspWhat is your favorite <br>&nbspsport to play?');
         $('.question2').html('&nbspWhat is your favorite <br>&nbspsport to watch?');
         $('.question3').html('&nbspWhat is your favorite <br>&nbspbook?');
         $('.question4').html('&nbspWhat movie have you<br>&nbspseen the most times<br>&nbsp(beginning to end)?');
         $('.question5').html('&nbspHow far from home will <br>&nbspyou go to college?');
         $('.question6').html('&nbspHow old will you be<br>&nbspwhen you first marry?');
         $('.question7').html('&nbspHow many children will<br>&nbspyou have?');
         $('.question8').html('&nbspWhat field will your<br>&nbspcareer be in?');
         $('.question9').html('&nbspWill you ever practice<br>&nbspyoga regularly?');
         $('.question10').html('&nbspWill you ever visit<br>&nbspAfrica?');
         $('.question11').html('&nbspWill you ever run for<br>&nbspoffice?');
         $('.question12').html('&nbspWill you be a registered<br>&nbspDemocrat, registered<br>&nbspRepublican or<br>&nbspindependent?&nbsp');
         $('.question13').html('&nbspWill you ever visit an<br>&nbsporphage?');
         $('.question14').html('&nbspHow many tattoos will<br>&nbspyou have?');
         $('.question15').html('&nbspWhat country would you<br>&nbspmost like to visit?');
         $('.question16').html('&nbspWill you ever trod the<br>&nbspboards?');
         $('.question17').html('&nbspWill you ever live in a<br>&nbspcity?');
         $('.question18').html('&nbspWill you ever work<br>&nbspabroad?');
         $('.question19').html('&nbspWill you ever go<br>&nbspparachuting?');
         $('.question20').html('&nbspWill you ever join a<br>&nbspchorus?');
         $('.question21').html('&nbspRESENT/RESERVE<br> &nbspDo these words<br>&nbspa. have similar<br>&nbsp&nbsp&nbsp&nbsp&nbspmeanings?<br>&nbspb. have contradictory<br>&nbsp&nbsp&nbsp&nbsp&nbspmeanings?<br>&nbspc. mean neither the<br>&nbsp&nbsp&nbsp&nbsp&nbspsame nor the opposite?');
         }
    
     else if ($(window).width() <=635) {
        $('.question4').html('&nbspWhat movie have you seen the most<br>&nbsptimes (beginning to end)?');
        $('.question5').html('&nbspHow far from home will you go to<br>&nbspcollege?<br>&nbspa. less than 50 miles<br>&nbspb. more than 50 miles');
        $('.question6').html('&nbspHow old will you be when you first<br>&nbspmarry?<br>&nbspa. 15-20 y<br>&nbspb. 21-25 y<br>&nbspc. 26-30 y<br>&nbspd. over 30 y<br>');
        $('.question12').html('&nbspWill you be a registered Democrat,<br>&nbspregistered Republican or independent?&nbsp');
        $('.question15').html('&nbspWhat country would you most like to<br>&nbspvisit?');
        $('.question21').html('&nbspRESENT/RESERVE<br>&nbspDo these words<br>&nbspa. have similar meanings?<br>&nbspb. have contradictory meanings?<br>&nbspc. mean neither the same nor the<br>&nbsp&nbsp&nbsp&nbsp&nbspopposite?');
    }
        
    else if ($(window).width() <= 767) {
        $('.question4').html('&nbspWhat movie have you seen the most times<br>&nbsp(beginning to end)?');
        $('.question5').html('&nbspHow far from home will you go to college?<br>&nbspa. less than 50 miles<br>&nbspb. more than 50 miles');
        $('.question6').html('&nbspHow old will you be when you first marry?<br>&nbspa. 15-20 y<br>&nbspb. 21-25 y<br>&nbspc. 26-30 y<br>&nbspd. over 30 y<br>');
        $('.question12').html('&nbspWill you be a registered Democrat, registered<br>&nbspRepublican or independent?&nbsp');
        $('.question15').html('&nbspWhat country would you most like to visit?');
        $('.question21').html('&nbspRESENT/RESERVE<br>&nbspDo these words<br>&nbspa. have similar meanings?<br>&nbspb. have contradictory meanings?<br>&nbspc. mean neither the same nor the opposite?');
    }
    
    else if ($(window).width() <= 991) {
        $('.question4').html('&nbspWhat movie have you seen the most times (beginning&nbsp<br>&nbspto end)?');
        $('.question12').html('&nbspWill you be a registered Democrat, registered<br>&nbspRepublican or independent?&nbsp');
    }
    
    else if ($(window).width() <= 1199) {
        $('.question12').html('&nbspWill you be a registered Democrat, registered Republican or<br>&nbspindependent?&nbsp');
    }

    else {
        $('.question4').html('&nbspWhat movie have you seen the most times (beginning to end)?&nbsp');
        $('.question12').html('&nbspWill you be a registered Democrat, registered Republican or independent?&nbsp');
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
    
    else if ($(window).width() <= 660) {
        $('#sjButtonJap > .card_front').html('SJの答えは').css('text-align', 'center');
        $('#sjButtonJap > .card_back').html('ここをクリックして').css('text-align', 'center');
        $('#lmButtonJap > .card_front').html('LMの答えは').css('text-align', 'center');
        $('#lmButtonJap > .card_back').html('ここをクリックして').css('text-align', 'center');
    }
    
    else if ($(window).width() > 660) {
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
        
	    $(this).css('background-color', '#e06377').html('サラ・ジェーン');
        $('#hiddenSJJ-1').html('&nbspサッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
        
        if ($(window).width() <=767) {
            $('#hiddenSJJ-2').html('&nbsp女子サッカ<br>&nbspーとアメリ<br>&nbspカンフット<br>&nbspボール').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-4').html('&nbspPitch<br>&nbspPerfect<br>&nbsp(10回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp三人から四<br>&nbsp人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp理科系か書<br>&nbspくこと').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-15').html('&nbspアイルラン<br>&nbspド').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        }
        
        else {
            $('#hiddenSJJ-2').html('&nbsp女子サッカーとアメリカン<br>&nbspフットボール').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenSJJ-4').html('&nbspPitch Perfect (10回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenSJJ-7').html('&nbsp三人から四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
            $('#hiddenSJJ-8').html('&nbsp理科系か書くこと').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
            $('#hiddenSJJ-15').html('&nbspアイルランド').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        }
        
        $('#hiddenSJJ-3').html('&nbspI Am No. 4').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        
        $('#hiddenSJJ-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenSJJ-6').html('&nbsp21-30歳').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        
        $('#hiddenSJJ-9').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenSJJ-10').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenSJJ-11').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
        $('#hiddenSJJ-12').html('&nbsp無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenSJJ-13').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenSJJ-14').html('&nbsp0').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        
        $('#hiddenSJJ-16').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenSJJ-17').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        $('#hiddenSJJ-18').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
        $('#hiddenSJJ-19').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
        $('#hiddenSJJ-20').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
        $('#hiddenSJJ-21').html('&nbspb').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
    });
    
    $('#lmButtonJap').one('click', function(){
        
        $(this).css('background-color', '#e06377').html('ローレル・マリー');
        $('#hiddenLMJ-1').html('&nbspサッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
        
        if ($(window).width() <=767) {
            $('#hiddenLMJ-2').html('&nbspアメリカ<br>&nbspンフット<br>&nbspボール').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLMJ-4').html('&nbspHunger<br>&nbspGames (5<br>&nbsp回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLMJ-7').html('&nbsp実子二人<br>&nbspと養子二<br>&nbsp人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        }
        
        else {
            $('#hiddenLMJ-2').html('&nbspアメリカンフットボール').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
            $('#hiddenLMJ-4').html('&nbspHunger Games (5回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
            $('#hiddenLMJ-7').html('&nbsp実子二人と養子二人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        }
        
        $('#hiddenLMJ-3').html('&nbspAbduction').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        
        $('#hiddenLMJ-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenLMJ-6').html('&nbsp21-30歳').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        
        $('#hiddenLMJ-8').html('&nbspスポーツ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
        $('#hiddenLMJ-9').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenLMJ-10').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenLMJ-11').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
        $('#hiddenLMJ-12').html('&nbsp無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenLMJ-13').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenLMJ-14').html('&nbsp0').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenLMJ-15').html('&nbspブラジル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenLMJ-16').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenLMJ-17').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        $('#hiddenLMJ-18').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
        $('#hiddenLMJ-19').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
        $('#hiddenLMJ-20').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
        $('#hiddenLMJ-21').html('&nbspb').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
    });
});

function mySetupFunction7() {
    if ($(window).width() <=610) {
         $('.question12Jap').html('&nbsp将来、民主党か共和党または無党派<br>&nbspですか');
    }
    
    else if ($(window).width() <=660) {
        $('.question5Jap').html('&nbsp家から大学まで何マイルぐらいだと<br>&nbsp思いますか<br>&nbspa. 50マイル以下<br>&nbspb. 50マイル以上');
        $('.question12Jap').html('&nbsp将来、民主党か共和党または無党派ですか');
    }
        
    else {
        $('.question5Jap').html('&nbsp家から大学まで何マイルぐらいだと思いますか<br>&nbspa. 50マイル以下<br>&nbspb. 50マイル以上');
    }
}

$(document).ready(mySetupFunction7);
$(window).resize(mySetupFunction7);
