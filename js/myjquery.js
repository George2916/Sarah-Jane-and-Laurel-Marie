$(window).resize(function(){
	if ($(window).width() <= 768){	
		$('.box2').hide();
        $('.box3').hide();
        $('.box4').css('background-color', '#e06377');
        $('.box6').hide();
        $('.box7').hide();
        $('.box8').css('background-color', '#e06377');
        $('.box8').css('font-size', '94%');
        $('.box8').css('height', '200px');
        
	}
    
    else{
        
        $('.box2').show();
        $('.box3').show();
        $('.box4').css('background-color', '#eeac99');
        $('.box6').show();
        $('.box7').show();
        $('.box7').css('height', '220px');
        $('.box8').css({'background-color': '#eeac99', 'font-size': '100%', 'height': '220px'});
        
        
    }
});

$(window).resize(function(){
    if ($(window).width() >= 992){
        $('.last2lines').css('margin-left', '25px');    
    }

    else{
        $('.last2lines').css('margin-left', '0px');
    }
                 
});

/*
    $(window).resize(function(){
    if ($(window).width() >= 1047){
        $('.box8').css('height', '200px');    
    }
    
    if ($(window).width() >= 768{
        $(.'box8').css('height', '210px');
        
        }

    else{
        $('box8').css('height', '200px');
    }
                 
});

*/

















    

