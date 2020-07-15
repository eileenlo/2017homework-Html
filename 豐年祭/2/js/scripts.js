var isOpened=true;
var SOpen=false,IOpen=false;
$(function(){	//等樹建好才做以下的事情
		
		$('.step p, .step img.left').hide();
		$('.imfor table, .imfor iframe').hide();
	
		$('.step').mousedown(function(){
			if(SOpen){
				$(this).stop().animate({height:35},{duration:300,easing:'easeInOutBack'});
				$('.step img.slogoL').rotate({angle: 360, animateTo:180});	
				$('.step img.slogoR').rotate({angle: 180, animateTo:360});
				$('.step p, .step img.left').hide();
				SOpen=false;
			}else{
				$(this).stop().animate({height:770},{duration:500,easing:'easeInOutBack'});
				$('.step img.slogoL').rotate({angle: 180, animateTo:0});	
				$('.step img.slogoR').rotate({angle: 0, animateTo:180});
				$('.step p,.step img.left').show();
				SOpen=true;
			}
		});	
		$('.imfor').mousedown(function(){
			if(IOpen){
				$(this).stop().animate({height:35},{duration:300,easing:'easeInOutBack'});
				$('.imfor table, .imfor iframe').hide();
				$('.imfor img.slogoL').rotate({angle: 360, animateTo:180});	
				$('.imfor img.slogoR').rotate({angle: 180, animateTo:360});
				IOpen=false;
			}else{
				$(this).stop().animate({height:770},{duration:500,easing:'easeInOutBack'});
				$('.imfor img.slogoL').rotate({angle: 180, animateTo:0});	
				$('.imfor img.slogoR').rotate({angle: 0, animateTo:180});
				$('.imfor table, .imfor iframe').show();
				IOpen=true;
			}
		});
	
    //-----------------
    // 如果圖示被點擊
    //-----------------
    $('.header .logo').mousedown(function(){
        if(isOpened){
            //將導覽列收回
            $(this).parent().stop().animate({marginTop:-80}, {duration:400, easing:'easeOutBounce'});
            $(this).stop().animate({top:40}, {duration:400, easing:'easeOutBounce'});	
						$(this).rotate({angle: 0, animateTo:180});	
            isOpened=false;
        }else{
            //將導覽列打開
            $(this).parent().stop().animate({marginTop:0}, {duration:400, easing:'easeOutBounce'});
            $(this).stop().animate({top:20}, {duration:400, easing:'easeOutBounce'});
						$(this).rotate({angle: 180, animateTo:360});
            isOpened=true;	
        }
    });
    //-----------------
    
    
    
    
    
    
    
    
});