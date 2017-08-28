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

/* alternate to the above */

//$(document).ready(function() {
//    $('.navbar-default .navbar-collapse .navbar-nav > li > a').click(function(){
//        $('.non-drop > a').css('background-color', '#f9d5e5');
//    });
//
//    $('.dropdown-menu > li > a').hover(
//        function() {
//        $(this).css({'background-color':'#e06377', 'color': '#f9d5e5'});
//        },
//        function(){
//            $(this).css({'background-color': '#eeac99', 'color': '#c83349'});
//        }
//    )
//     
//    $('.dropdown').on('hide.bs.dropdown',function() {
//        $('.non-drop > a').css('background-color', '#eeac99');
//    });
//
//});

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
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});


/* JQUERY FOR MISCELLANEOUS PAGE */

function mySetupFunction1() {
    if ($(window).width() <= 540) {
        $('.box1').css('height', '100px');
    }
    
    else if ($(window).width() <= 768){	
		$('.box1').css('height', '70px');
        $('.box2').css('height', '70px');
        $('.box3').css({'background-color': '#eeac99', 'height': '70px'});
        $('.box4').css({'background-color': '#e06377', 'height': '70px'});
        $('.box5').css({'background-color': '#eeac99', 'height': '70px'});
        $('.box6').css({'background-color': '#e06377', 'height': '70px'});
        $('.box7').css({'background-color': '#eeac99', 'font-size': '94%', 'height': '200px'});
        $('.box8').css({'background-color': '#e06377', 'height': '60px'}).html('Photograph on home page taken in June 2009.<br>This website last updated in July 2017.');
        $('.misc-link-1, .misc-link-3, .misc-link-5, .misc-link-7').css('color', '#c83349');
        $('.misc-link-2, .misc-link-4, .misc-link-6').css('color', '#f9d5e5');
        
	}
    
    else{
        
        $('.box1').css('height', '100px');
        $('.box2').css('height', '100px');
        $('.box3').css({'background-color': '#e06377', 'height': '100px'});
        $('.box4').css({'background-color': '#eeac99', 'height': '100px'});
        $('.box5').css({'background-color': '#eeac99', 'height': '100px'});
        $('.box6').css({'background-color': '#e06377', 'height': '100px'});
        $('.box7').css({'background-color': '#e06377', 'height': '220px', 'font-size': '100%'});
        $('.box8').css({'background-color': '#eeac99',  'height': '220px'});
        $('.misc-link-1, .misc-link-4, .misc-link-5').css('color', '#c83349');
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7').css('color', '#f9d5e5');
        
        
        
        
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
    if ($(window).width() <= 660) {
        $('#sjButton > .card_back').html('SJ\'s responses');
        $('#lmButton > .card_back').html('LM\'s responses');
        
    }
    else if ($(window).width() > 660){
        $('#sjButton > .card_back').html('Sarah Jane\'s responses');
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
        $('#hiddenSJ-2').html('&nbspwomen\'s soccer/football').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
        $('#hiddenSJ-3').html('&nbspI Am No. 4').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        $('#hiddenSJ-4').html('&nbspPitch Perfect (10X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
        $('#hiddenSJ-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenSJ-6').html('&nbsp21-30y').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        $('#hiddenSJ-7').html('&nbsp3-4').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        $('#hiddenSJ-8').html('&nbspmath or writing').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
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
        $('#hiddenLM-4').html('&nbspHunger Games (5X)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
        $('#hiddenLM-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenLM-6').html('&nbsp21-30y').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        $('#hiddenLM-7').html('&nbsp2 biological and 2 adopted').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
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
     if ($(window).width() <=635) {
        $('.question4').html('&nbspWhat movie have you seen the most<br>&nbsptimes (beginning to end)?');
        $('.question5').html('&nbspHow far from home will you go to<br>&nbspcollege?');
        $('.question6').html('&nbspHow old will you be when you first<br>&nbspmarry?<br>&nbspa. less than 50 miles<br>&nbspb. more than 50 miles');
        $('.question12').html('&nbspWill you be a registered Democrat,<br>&nbspregistered Republican or independent?&nbsp');
        $('.question15').html('&nbspWhat country would you most like to<br>&nbspvisit?');
        $('.question21').html('&nbspRESENT/RESERVE<br>&nbspDo these words<br>&nbspa. have similar meanings?<br>&nbspb. have contradictory meanings?<br>&nbspc. mean neither the same nor the<br>&nbsp&nbsp&nbsp&nbsp&nbspopposite?');
    }
        
    else if ($(window).width() <= 767) {
        $('.question4').html('&nbspWhat movie have you seen the most times<br>&nbsp(beginning to end)?');
        $('.question5').html('&nbspHow far from home will you go to college?');
        $('.question6').html('&nbspHow old will you be when you first marry?<br>&nbspa. less than 50 miles<br>&nbspb. more than 50 miles');
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

$(document).ready(function(){
    
    $('#sjButtonJap').one('click', function(){
        
	    $(this).css('background-color', '#e06377').html('サラ・ジェーン');
        $('#hiddenSJ-1').html('&nbspサッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
        $('#hiddenSJ-2').html('&nbsp女子サッカーとアメリカンフットボール').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
        $('#hiddenSJ-3').html('&nbspI Am No. 4').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        $('#hiddenSJ-4').html('&nbspPitch Perfect (10回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
        $('#hiddenSJ-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenSJ-6').html('&nbsp21-30歳').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        $('#hiddenSJ-7').html('&nbsp三人から四人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        $('#hiddenSJ-8').html('&nbsp理科系か書くこと').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
        $('#hiddenSJ-9').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenSJ-10').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenSJ-11').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
        $('#hiddenSJ-12').html('&nbsp無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenSJ-13').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenSJ-14').html('&nbsp0').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenSJ-15').html('&nbspアイルランド').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenSJ-16').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenSJ-17').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        $('#hiddenSJ-18').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
        $('#hiddenSJ-19').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
        $('#hiddenSJ-20').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
        $('#hiddenSJ-21').html('&nbspb').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
    });
    
    $('#lmButtonJap').one('click', function(){
        
        $(this).css('background-color', '#e06377').html('ローレル・マリー');
        $('#hiddenLM-1').html('&nbspサッカー').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible', 'font-size': '1.0em', 'font-family': 'Arial'}).animate({opacity: 1}, 500, 'linear');
        $('#hiddenLM-2').html('&nbspアメリカンフットボール').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000, 'linear');
        $('#hiddenLM-3').html('&nbspAbduction').css({'background-color': '#e06377','opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500, 'linear');
        $('#hiddenLM-4').html('&nbspHunger Games (5回)').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000, 'linear');
        $('#hiddenLM-5').html ('&nbspa').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500, 'linear');
        $('#hiddenLM-6').html('&nbsp21-30歳').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000, 'linear');
        $('#hiddenLM-7').html('&nbsp実子二人と養子二人').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500, 'linear');
        $('#hiddenLM-8').html('&nbspスポーツ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000, 'linear');
        $('#hiddenLM-9').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500, 'linear');
        $('#hiddenLM-10').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000, 'linear');
        $('#hiddenLM-11').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 6000, 'linear');
        $('#hiddenLM-12').html('&nbsp無党派').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 5000);
        $('#hiddenLM-13').html('&nbspはい').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4500);
        $('#hiddenLM-14').html('&nbsp0').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 4000);
        $('#hiddenLM-15').html('&nbspブラジル').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3500);
        $('#hiddenLM-16').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 3000);
        $('#hiddenLM-17').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2500);
        $('#hiddenLM-18').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 2000);
        $('#hiddenLM-19').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1500);
        $('#hiddenLM-20').html('&nbspいいえ').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 1000);
        $('#hiddenLM-21').html('&nbspb').css({'background-color': '#e06377', 'opacity': '0.0', 'visibility': 'visible'}).animate({opacity: 1}, 500);
    });
     
});

function mySetupFunction6() {
    if ($(window).width() <=610) {
         $('.question12Jap').html('&nbsp将来、民主党か共和党または無党派<br>&nbspですか');
    }
    
    else if ($(window).width() <=660) {
        $('.question5Jap').html('&nbsp家から大学まで何マイルぐらいだと<br>&nbsp思いますか');
        $('.question12Jap').html('&nbsp将来、民主党か共和党または無党派ですか');
    }
        
    else {
        $('.question5Jap').html('&nbsp家から大学まで何マイルぐらいだと思いますか');
    }
}

$(document).ready(mySetupFunction6);
$(window).resize(mySetupFunction6);

