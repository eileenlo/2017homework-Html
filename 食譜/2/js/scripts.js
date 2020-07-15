$(function(){
	var isOpen=false;
	var s1Open=false,	
	s2Open=false,	s3Open=false,	
	s4Open=false,	s5Open=false,	
	s6Open=false,	s7Open=false,	
	s8Open=false,	s9Open=false,	
	s10Open=false, s11Open=false;
	$('.step1 p, .step1 img').hide();
	$('.step2 p, .step2 img').hide();
	$('.step3 p, .step3 img').hide();
	$('.step4 p, .step4 img').hide();
	$('.step5 p, .step5 img').hide();
	$('.step6 p, .step6 img').hide();
	$('.step7 p, .step7 img').hide();
	$('.step8 p, .step8 img').hide();
	$('.step9 p, .step9 img').hide();
	$('.step10 p, .step10 img').hide();
	$('.step11 p, .step11 img').hide();
	//¡ô https://ianchen.thisistap.com/show-hide-toggle/
	
	//step-----------------------------------------------------------------------------
		$('.step1').mousedown(function(){
		if(s1Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step1 p, .step1 img').hide();
			$('.step1 h3').css("color","#FFC1AD");
			s1Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step1 p,.step1 img').show();
			$('.step1 h3').css("color","#FFE9AD");
			s1Open=true;
		}
	});
	
	$('.step2').mousedown(function(){
		if(s2Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step2 p, .step2 img').hide();
			$('.step2 h3').css("color","#FFC1AD");
			s2Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step2 p,.step2 img').show();
			$('.step2 h3').css("color","#FFE9AD");
			s2Open=true;
		}
	});
	$('.step3').mousedown(function(){
		if(s3Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step3 p, .step3 img').hide();
			$('.step3 h3').css("color","#FFC1AD");
			s3Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step3 p,.step3 img').show();
			$('.step3 h3').css("color","#FFE9AD");
			s3Open=true;
		}
	});
	$('.step4').mousedown(function(){
		if(s4Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step4 p, .step4 img').hide();
			$('.step4 h3').css("color","#FFC1AD");
			s4Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step4 p,.step4 img').show();
			$('.step4 h3').css("color","#FFE9AD");
			s4Open=true;
		}
	});
	$('.step5').mousedown(function(){
		if(s5Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step5 p, .step5 img').hide();
			$('.step5 h3').css("color","#FFC1AD");
			s5Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step5 p,.step5 img').show();
			$('.step5 h3').css("color","#FFE9AD");
			s5Open=true;
		}
	});
	$('.step6').mousedown(function(){
		if(s6Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step6 p, .step6 img').hide();
			$('.step6 h3').css("color","#FFC1AD");
			s6Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step6 p,.step6 img').show();
			$('.step6 h3').css("color","#FFE9AD");
			s6Open=true;
		}
	});
	$('.step7').mousedown(function(){
		if(s7Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step7 p, .step7 img').hide();
			$('.step7 h3').css("color","#FFC1AD");
			s7Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step7 p,.step7 img').show();
			$('.step7 h3').css("color","#FFE9AD");
			s7Open=true;
		}
	});
	$('.step8').mousedown(function(){
		if(s8Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step8 p, .step8 img').hide();
			$('.step8 h3').css("color","#FFC1AD");
			s8Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step8 p,.step8 img').show();
			$('.step8 h3').css("color","#FFE9AD");
			s8Open=true;
		}
	});
	$('.step9').mousedown(function(){
		if(s9Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step9 p, .step9 img').hide();
			$('.step9 h3').css("color","#FFC1AD");
			s9Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step9 p,.step9 img').show();
			$('.step9 h3').css("color","#FFE9AD");
			s9Open=true;
		}
	});
	$('.step10').mousedown(function(){
		if(s10Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step10 p, .step10 img').hide();
			$('.step10 h3').css("color","#FFC1AD");
			s10Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step10 h3').css("color","#FFE9AD");
			$('.step10 p,.step10 img').show();
			s10Open=true;
		}
	});
	$('.step11').mousedown(function(){
		if(s11Open){
			$(this).stop().animate({height:30},{duration:300,easing:'easeInOutBack'});
			$('.step11 p, .step11 img').hide();
			$('.step11 h3').css("color","#FFC1AD");
			s11Open=false;
		}else{
			$(this).stop().animate({height:370},{duration:500,easing:'easeInOutBack'});
			$('.step11 p,.step11 img').show();
			$('.step11 h3').css("color","#FFE9AD");
			s11Open=true;
		}
	});

	//step-----------------------------------------------------------------------------
	
	//------------------------------
	
	$('.navbar li').mouseenter(function(){
		$(this).stop().animate({marginTop:-5,fontSize:20},{duration:300,easing:'easeOutElastic'});
	});
	
	$('.navbar li').mouseleave(function(){
		$(this).stop().animate({marginTop:0,fontSize:17},{duration:300,easing:'easeOutElastic'});
	});
	
	//------------------------------
	
	$('.header .logo').mousedown(function(){
		
		if(isOpen){
			$(this).parent().stop().animate({marginTop:-80},{duration:600,easing:'easeOutCubic'});
			
			$(this).stop().rotate({angle: -180, animateTo:0, duration:600});
			isOpen=false;
		}
		else{
			$(this).parent().stop().animate({marginTop:0},{duration:600,easing:'easeOutCubic'});
			$(this).stop().rotate({angle: 0, animateTo:180, duration:600});
			isOpen=true;
		}
	});
	
	
});