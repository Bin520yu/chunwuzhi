$(".last").click(function(){
	flag=false;
	$("body,html").animate({"scrollTop":0},500,function(){
		flag=true;
		$(".louti li:not(:last)").find("span").removeClass("active");
	});
})
//置顶
var flag=true;
$(".louti li:not(:last)").click(function(){ 
	flag=false;
	$(this).find("span")
		   .addClass("active")
		   .end()
		   .siblings()
		   .find("span")
		   .removeClass("active");
	var _top=$(".louti_01").eq($(this).index()).offset().top;
	$("body,html").animate({ "scrollTop":_top},500,function(){
		flag=true;
	});
})
//点击触发跳转
/*$(window).scroll(function(){
	if(flag){
		var sTop=$(document).scrollTop();
		$floor=$(".louti_01").filter(function(){
			return  Math.abs($(this).offset().top-sTop<$(this)).height()/2;
		})
		var index=$floor.index();
		if( index!=-1){
			$(".louti li:not(:last)").eq(index)
										.find("span")
										.addClass("active")
										.end()
										.siblings()
										.find("span")
										.removeClass("active");
		}
	}
	
})*/
//跟着走

