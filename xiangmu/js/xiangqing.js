$(function(){
	
$(".ul_01>li:has(ol)").mouseenter(function(){
	$(this).children("ol").css("display","block");
	$(this).children("i").css("transform","rotate(180reg)")
	$("ol li").mouseover(function(){
		$(this).css("background","lightgrey")
	})
	$("ol li").mouseout(function(){
		$(this).css("background","#fafafa")
	})
	
})
$(".ul_01>li:has(ol)").mouseleave(function(){
	$(this).children("ol").css("display","none");
})
$(".ul_01>li:has(div)").mouseenter(function(){
	$(this).children("div").css("display","block");
})
$(".ul_01>li:has(div)").mouseleave(function(){
	$(this).children("div").css("display","none")
})
//开头

//搜索
$(".click_01 li").click(function(){ 
	$(".click_01 li").css({"background":"white","color":"black"});//将所有标题的背景颜色清空默认色
	$(this).css({"background":"black","color":"white"}); //留下当前操作的li的背景颜色
	  
	$(".click_02 li").css( "display","none" ); //先将所有内容隐藏   
	$(".click_02 li").eq( $(this).index() ).css( "display","block" ); // 留下当前标题对应的内容  根据下标对应
})

//商城
$(".shop_txt").mouseenter(function(){
	$(".shopmenu").css("display","block");
})
$(".myshop").mouseleave(function(){
	$(".shopmenu").css("display","none");
})
//购物车
$(".car_txt").mouseenter(function(){
	$(".carmenu").css("display","block");
})
$(".mycar").mouseleave(function(){
	$(".carmenu").css("display","none");
})	
//导航栏
$(".nav_ul li").mouseenter(function(){
	$(this).css("background","black");
	$(this).children().css("color","white")
})
$(".nav_ul li").mouseleave(function(){
	$(this).css({"background":"#fafafa"});
	$(this).children().css("color","black");
})	
//划过菜单


$(".navmenu").mouseover(function(){
	$(this).next().show();
}).mouseout(function(){
	$(this).next().hide();
})
$(".n_m_ul").mouseover(function(){
	$(this).show();
}).mouseout(function(){
	$(this).hide()
})

//放大镜


//鼠标操作小图  记录当前操作的小图下标  
 	$("#bottom li").mouseenter(function(){
 		$(this).css("border","1px solid #555555")
 		var index = $(this).index();
 		//显示和小图对应的中图 和 大图
 		$("#small img").eq(index).show().siblings().hide();
 		//如果有遮罩层  在此处 设置mask的背景图片
 		$("#big img").eq(index).show().siblings().hide();
 	}).mouseleave(function(){
 		$(this).css("border","")
 	})
 	//鼠标移入到小图上 显示遮罩层和大图显示区
 	$("#small").mouseover(function(){
 		$("#big").show();
 		$("#mask").show();
 	})
 	$("#small").mouseout(function(){
 		$("#big").hide();
 		$("#mask").hide();
 	})
 	$("#small").mousemove(function(e){
 		var e = e || event;
 		var x = e.pageX - $("#mask").width()/2 - $(".show_left").offset().left;
 		var y = e.pageY - $("#mask").height()/2 - $(".show_left").offset().top;
 		var maxL = $(".show_left").width() - $("#mask").width();
 		var maxT = $(".show_left").height() - $("#mask").height();
 		x = Math.min( maxL, Math.max(0,x) );
 		y = Math.min( maxT, Math.max(0,y) );
 		$("#mask").css({
 			"left":x,
 			"top":y
 		})
 		//大图x和y
 		//比例关系 ：大图/小图 = bigx/x = 大图显示区/小图显示区
 		var bigImgx=x*$(".bigImage").width()/$("#mm").width();
 		var bigImgy=y*$(".bigImage").height()/$("#mm").height();
 		$(".bigImage").css({
 			"left":-bigImgx,
 			"top": -bigImgy
 		})
 	})


$(".arm_btn").mousedown(function(){
	$(this).css("background","#757575")
}).mouseup(function(){
	$(this).css("background","#f5f5f5")
})




$(".leg_ul span").css("list-style","none");
	
	

$(".leg_ul span").click(function(e){
	e.stopPropagation();
	if( $(".leg_ul li").children("ul").is(":hidden") ){ 
		$(this).css("innerHTML","+");
	}else{
		$(this).css("innerHTML","+");
	}
	$(".leg_ul li").children("ul").toggle(100);
})




//选项卡
$(".m_l_b_b_ul li").mouseenter(function(){ 
	$(".m_l_b_b_ul li").css({"background":"#f7f7f7"});
	$(this).css({"background":"white"});
	  
	$(".xuanxiang_ol>li").css( "display","none" );
	$(".xuanxiang_ol>li").eq( $(this).index() ).css( "display","block" ); 
})



$(".hand_page_ul li").mousemove(function(){
	$(this).css({"background":"black"})
}).mouseout(function(){
	$(this).css({"background":"#fafafa"})
})


$(".leg_page_ul li").mousemove(function(){
	$(this).css({"background":"black"})
}).mouseout(function(){
	$(this).css({"background":"#fafafa"})
})
//选项卡
$(".m_r_footer_ul li").click(function(){ 
	$(".m_r_footer_ul li").css({"background":"#d7d7d7"});//将所有标题的背景颜色清空默认色
	$(this).css({"background":"white"}); //留下当前操作的li的背景颜色
	  
	$(".m_r_footer_ol li").css( "display","none" ); //先将所有内容隐藏   
	$(".m_r_footer_ol li").eq( $(this).index() ).css( "display","block" ); // 留下当前标题对应的内容  根据下标对应
})


//jishuqi
var num=1
$("#jia").click(function(){
	num++;
	$(".jishuqi").val(num);
})
$("#jian").click(function(){
	num--;
	if(num<=1){
		num=1;
		$(".jishuqi").val(num);
	}else{
		$(".jishuqi").val(num);
	}
})

})