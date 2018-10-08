
//nav
$('.nav-pc-r ul li').click(function(){
     
	 $(this).addClass('click').siblings().removeClass('click')	
	
});

 $.event.add(window, "scroll", function() {
 	 rightnev()
	 nav_scroll()
 })
	
	rightnev()
	
    function rightnev(){
	   
	   	var StartPo = $(window).scrollTop();
	
		var FiexdHeight = 600-StartPo
	
		
		
		if(FiexdHeight >= 0){
			
			$('.pc-right-c-pub').css('top',FiexdHeight + 'px')
			
		 }else{
			 
			 
			$('.pc-right-c-pub').css('top',10 + 'px') 
			 
		 }
		
	}


nav_scroll()
function nav_scroll(){

	var StartP = $(window).scrollTop();

	if(StartP >= 620){

		$('.xwdt-nav').addClass('fixed')
		$('.rczp-nav').addClass('fixed')

	}else{

		$('.xwdt-nav').removeClass('fixed')
		$('.rczp-nav').removeClass('fixed')

	}
}














