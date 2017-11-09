$.fn.extend({
	msp:function(json){
		var w=json.width;
		var h=json.height;
		//var r=json.img;
		var r=$("#msp").attr("src");
		//设置div的属性
		$("#div1").css({"width":w,"height":h,"border":"1px solid #e6e6e6","position":"relative",});
		$("#msp").css({"width":w,"height":h,});
		$("#msp").attr({"src":r});
		/*//创建放小图的div
		if(json.pics){
			var div=$("<div class='pics'></div>");
			$("body").append(div);
			$(".pics").css({"width":w,"height":"50px",});
			for(var i in json.pics){
				var div=$("<div class='pics1'></div>");
				$(".pics").append(div);
				div.css({"width":"40px","height":"40px","border":"1px solid gray"})
				div.attr({"src",json.pics[i]});
			}
			
		}
		*/
		//进入div时创建镜子和放大的图片
		$("#div1").mouseenter(function(){
			var div=$("<div class='glass'></div>");
			$(this).append(div);
			div.css({"width":w/2,"height":h/2,"border":"1px solid #e6e6e6",
				"position":"absolute","left":0,"top":0,"background":"rgba(0,0,0,.2)",
			});
			
			var div=$("<div class='big'></div>");
			$(".center").append(div);
			div.css({"width":w,"height":h,"position":"absolute","left":w+20,"top":0,
					"border":"1px solid #e6e6e6","overflow":"hidden","z-index":"6"});
			var img=$("<img/>");
			div.append(img);
			img.attr("src",r);
			img.css({"width":w*2,"height":h*2,"position":"absolute"});
			
			$("#div1").mousemove(function(e){
				var x=e.clientX-$("#div1").offset().left;
				var y=e.clientY+$(document).scrollTop()-$("#div1").offset().top;
				x-=w/4;
				y-=h/4;
				if(x<0){x=0}
				if(y<0){y=0}
				if(x>(w-w/2)){x=(w-w/2)}
				if(y>(h-h/2)){y=(h-h/2)}
				$(".glass").css({"left":x+"px","top":y+"px",});
				img.css({"left":x*-2+"px","top":y*-2+"px",});
				$(".big").css({"margin-top":"10px"});
				$("#div1").mouseleave(function(){
					$(".glass").remove();
					$(".big").remove();
				})
			})
		})
	}
})
/*
//创建放小图的div
$.fn.extend({
	msp1:function(json){
		var w=json.width;
		var h=json.height;
		$("#div2").css({"width":w,"height":h,"background":"red","position":"relative",});
		var lt=$("<div class='lt'></div>");
		$("#div2").append(lt);
		$(".lt").html("<");
		$(".lt").css({"position":"absolute","width":"20px","height":"50px","padding":" 15px 0",
			"font-size":"50px","line-height":"50px","color":"ghostwhite",
		})
		var lt=$("<div class='gt'></div>");
		$("#div2").append(lt);
		$(".gt").html(">");
		$(".gt").css({"position":"absolute","width":"20px","height":"50px","padding":" 15px 0",
			"font-size":"50px","line-height":"50px","color":"ghostwhite","right":"15px",
		})
		for(var i in json.img){
			var div=$("<div></div>");
			$("#div2").append(div);
			div.css({"width":"60px","height":"60px","border":"1px solid gray","position":"absolute",
			"margin":"10px","left":"30px"})
			//div.attr({"src",json.img[i]});
		}
	}
})
*/