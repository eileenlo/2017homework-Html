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
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step1 p, .step1 img').hide();
			s1Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step1 p,.step1 img').show();
			s1Open=true;
		}
	});
	
	$('.step2').mousedown(function(){
		if(s2Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step2 p, .step2 img').hide();
			s2Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step2 p,.step2 img').show();
			s2Open=true;
		}
	});
	$('.step3').mousedown(function(){
		if(s3Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step3 p, .step3 img').hide();
			s3Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step3 p,.step3 img').show();
			s3Open=true;
		}
	});
	$('.step4').mousedown(function(){
		if(s4Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step4 p, .step4 img').hide();
			s4Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step4 p,.step4 img').show();
			s4Open=true;
		}
	});
	$('.step5').mousedown(function(){
		if(s5Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step5 p, .step5 img').hide();
			s5Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step5 p,.step5 img').show();
			s5Open=true;
		}
	});
	$('.step6').mousedown(function(){
		if(s6Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step6 p, .step6 img').hide();
			s6Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step6 p,.step6 img').show();
			s6Open=true;
		}
	});
	$('.step7').mousedown(function(){
		if(s7Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step7 p, .step7 img').hide();
			s7Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step7 p,.step7 img').show();
			s7Open=true;
		}
	});
	$('.step8').mousedown(function(){
		if(s8Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step8 p, .step8 img').hide();
			s8Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step8 p,.step8 img').show();
			s8Open=true;
		}
	});
	$('.step9').mousedown(function(){
		if(s9Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step9 p, .step9 img').hide();
			s9Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step9 p,.step9 img').show();
			s9Open=true;
		}
	});
	$('.step10').mousedown(function(){
		if(s10Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step10 p, .step10 img').hide();
			s10Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step10 p,.step10 img').show();
			s10Open=true;
		}
	});
	$('.step11').mousedown(function(){
		if(s11Open){
			$(this).stop().animate({height:30},{duration:500,easing:'easeOutElastic'});
			$('.step11 p, .step11 img').hide();
			s11Open=false;
		}else{
			$(this).stop().animate({height:355},{duration:500,easing:'easeOutElastic'});
			$('.step11 p,.step11 img').show();
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