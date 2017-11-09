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
$(".nav_ul>li:not(:first)").mouseenter(function(){
	$(this).css("background","black");
	$(this).children().css("color","white")
})
$(".nav_ul>li:not(:first)").mouseleave(function(){
	$(this).css({"background":"#fafafa"});
	$(this).children().css("color","black");
})
//轮播图
var timer = setInterval(autoPlay,2000);
var $oli=$(".banner_ol li");
var $uli=$(".banner_ul li")
var index = 0;
function autoPlay(){
	index++;
	if(index==$oli.size()){
		index=0;
	}
	$oli.eq(index).addClass("current").siblings().removeClass("current");
	$uli.eq(index).fadeIn(1500).siblings().fadeOut(1500);
} 
$oli.mouseover(function(){
	clearInterval(timer);
	$(this).addClass("current").siblings().removeClass("current");
	$uli.eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
})
$oli.mouseout(function(){
	timer=setInterval(autoPlay,2000);
	index=$(this).index();
})



//banne菜单
$(".b_m_ul>li:has(ol)").mouseenter(function(){
	$(this).children("ol").css("display","block");
//	$(".b_m_li1").css("background","pink")
})
$(".b_m_ul>li:has(ol)").mouseleave(function(){
	$(this).children("ol").css("display","none")
//	$(".b_m_li1").css("background","#f4c8b4")
})

//1111111
$(".b_m_ul>li").mouseover(function(){
	$(this).css("background","whitesmoke");
})
$(".b_m_ul>li").mouseout(function(){
	$(this).css("background","#f4c8b4");
})

//tuijian!!!!!!!!!!!!!!!!!!!!
$.ajax({
	url : "json/shangpin.json",
	type:"get",
	success:function(json){
		var str="";
		for(var i=0;i<json.length;i++){
			str+=`
				<li class="down_li1">
					<a href="#"><img src="${json[i].src}" alt="" /></a>
					<a href="#">${json[i].name}</a>
					<p>商城价：<span>${json[i].price}</span></p>
				</li>
				`
		}
		$(".down_ol").html(str);
	}
})
//最新推荐

//1楼
$.ajax({
	url : "json/shangpin-1F.json",
	type:"get",
	success:function(json1){
		var str="";
		for(var i=0;i<json1.length;i++){
			str+=`
				<li class="center_li1">
					<a href="#"><img src="${json1[i].src}"/></a>
					<a href="#">${json1[i].name}</a>
					<p>${json1[i].price}</p><span>${json1[i].oprice}</span>
				</li>
				`
		}
		$(".floor_01_center_ul").html(str);
		
		$(".floor_01_center_ul li").mouseenter(function(){
			$(this).siblings().fadeTo(10,0.4).end().fadeTo(10,1)
		})
		$(".floor_01_center_ul li").mouseleave(function(){
//			$(this).siblings().fadeTo(10,0.4).end().fadeTo(0,1)
			$(".floor_01_center_ul li").fadeTo(10,1)
		})
	}
	
})
/*$(".floor_01_center_ol li").mouseover(function(){
	$(this).siblings().addClass("selectedaa")
	$(".floor_01_center_ul li").siblings().css("z-index","100")
}).mouseleave(function(){
	$(this).removeClass("selectedaa").siblings().removeClass("selectedaa")
})*/

//2楼
$.ajax({
	url : "json/shangpin-2F.json",
	type:"get",
	success:function(json2){
		var str="";
		for(var i=0;i<json2.length;i++){
			str+=`
				<li class="center_li2">
					<a href="#"><img src="${json2[i].src}"/></a>
					<a href="#">${json2[i].name}</a>
					<p>${json2[i].price}</p><span>${json2[i].oprice}</span>
				</li>
				`
		}
		$(".floor_02_center_ul").html(str);
		
		$(".floor_02_center_ul li").mouseenter(function(){
			$(this).siblings().fadeTo(10,0.4).end().fadeTo(10,1)
		})
		$(".floor_02_center_ul li").mouseleave(function(){
//			$(this).siblings().fadeTo(10,0.4).end().fadeTo(0,1)
			$(".floor_02_center_ul li").fadeTo(10,1)
		})
	}
	
})
/*$(".floor_02_center_ol li").mouseover(function(){
	$(this).siblings().addClass("selectedaa")
}).mouseleave(function(){
	$(this).removeClass("selectedaa").siblings().removeClass("selectedaa")
})*/
//3楼
$.ajax({
	url : "json/shangpin-3F.json",
	type:"get",
	success:function(json3){
		var str="";
		for(var i=0;i<json3.length;i++){
			str+=`
				<li class="center_li3">
					<a href="#">
						<img class="center_li3_img" src="${json3[i].src}"/>
					</a>
					<a href="#">${json3[i].name}</a>
					<p>${json3[i].price}</p><span>${json3[i].oprice}</span>
				</li>
				`
		}
		$(".floor_03_center_ul").html(str);	
		
		$(".floor_03_center_ul li").mouseenter(function(){
			$(this).siblings().fadeTo(10,0.4).end().fadeTo(10,1)
		})
		$(".floor_03_center_ul li").mouseleave(function(){
//			$(this).siblings().fadeTo(10,0.4).end().fadeTo(0,1)
			$(".floor_03_center_ul li").fadeTo(10,1)
		})
	}
	
})
/*$(".floor_03_center_ol li").mouseover(function(){
	$(this).siblings().addClass("selectedaa")
}).mouseleave(function(){
	$(this).removeClass("selectedaa").siblings().removeClass("selectedaa")
})*/



//遮罩层




















})