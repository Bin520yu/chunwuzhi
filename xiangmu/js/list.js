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
	$(".nav_ul .nav_ul_01").mouseenter(function(){
		$(this).css("background","black");
		$(this).children().css("color","white")
	})
	$(".nav_ul .nav_ul_01").mouseleave(function(){
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



//jicaidan
	$(".jicaidan_bottom li:not( :has(ul) )").css("list-style","none");
	
	
	//为含有ul的li添加单击事件  
	$(".jicaidan_bottom li:has(ul)").click(function(e){
		e.stopPropagation();//解决冒泡问题
		// 单击时：如果ul是显示的  就隐藏+     如果是隐藏的就显示  - 
		//$(this).children("ul").css("display") == "none"
		if( $(this).children("ul").is(":hidden") ){ //is方法 表示判断某个元素是否是隐藏的
			$(this).css("list-style-image","url(img/-.gif)");
		}else{
			$(this).css("list-style-image","url(img/1.gif)");
		}
		$(this).children("ul").toggle(100);
	})


$.ajax({
	url : "json/list_json.json",
	type:"get",
	success:function(res){
		var str="";
		for(var i=0;i<res.length;i++){
			str+=`
				<li class="body_r_m_buy">
					<img src="${res[i].src}" />
					<div class="body_r_m_buy_txt"><a href="#">${res[i].name}</a></div>
					<div class="body_r_m_buy_price">
						<span class="body_price_span01">${res[i].price}</span>
						<span class="body_price_span02">${res[i].oprice}</span>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
					</div>
					<input type="button" value="□加入对比" class="b_price_btn"/>
				</li>
				`
		}
		$(".body_right_main").html(str);
		
		$(".body_r_m_buy").mouseenter(function(){
			$(this).siblings().fadeTo(10,0.4).end().fadeTo(10,1)
		})
		$(".body_r_m_buy").mouseleave(function(){
			$(".body_r_m_buy").fadeTo(10,1)
		})

	}
})






/*var deff = $.ajax({
		url : "json/list_json.json",
		type:"get"
	})
	deff.done(function(res){
		//总页数 ： 
		pageCount =Math.ceil( res.length / 4 ) ;
		//显示第一页的数据
		var html = "";
        var index = 1;
        for( var i = (index-1)*16 ; i < index*16 ; i++ ){
        	if( i < res.length ){
            	html += `
            	<li class="body_r_m_buy">
					<img src="${res[i].src}" />
					<div class="body_r_m_buy_txt"><a href="#">${res[i].name}</a></div>
					<div class="body_r_m_buy_price">
						<span class="body_price_span01">${res[i].price}</span>
						<span class="body_price_span02">${res[i].oprice}</span>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
						<img src="img/xianhushu/star-on.png"/>
					</div>
					<input type="button" value="□加入对比" class="b_price_btn"/>
				</li>`
        	}
        }
        $(".body_right_main").html(html);
        
        
        
        
        //分页请求
        $(".M-box").pagination({
			pageCount :pageCount,
			callback:function(api){
		        var data = {
		            page: api.getCurrent()//获取当前页
		        };
		        $.getJSON('json/list_json.json',function(res){
		            var html = "";
		            var index = data.page;
		            for( var i = (index-1)*16 ; i < index*16 ; i++ ){
		            	if( i < res.length ){
			            	html += `
			            	<li class="body_r_m_buy">
								<img src="${res[i].src}" />
								<div class="body_r_m_buy_txt"><a href="#">${res[i].name}</a></div>
								<div class="body_r_m_buy_price">
									<span class="body_price_span01">${res[i].price}</span>
									<span class="body_price_span02">${res[i].oprice}</span>
									<img src="img/xianhushu/star-on.png"/>
									<img src="img/xianhushu/star-on.png"/>
									<img src="img/xianhushu/star-on.png"/>
									<img src="img/xianhushu/star-on.png"/>
									<img src="img/xianhushu/star-on.png"/>
								</div>
								<input type="button" value="□加入对比" class="b_price_btn"/>
							</li>`
		            	}
		            }
		            $(".body_right_main").html(html);
		        });
		    }
		})
	})
	
	
*/









$(".main_page_ul li").mousemove(function(){
	$(this).css({"background":"black"})
//	$(".main_page_ul li a").css("color": "white";)
}).mouseout(function(){
	$(this).css({"background":"#fafafa"})
//	$(".main_page_ul li a").css("color": "cornflowerblue")
})




})