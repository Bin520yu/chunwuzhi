$(".iname").blur(function(){
	var teg=/^[\u4e00-\u9fa5a-zA-Z0-9\-]{3,15}$/;
	if(this.value==""){
			$(".ispan").eq(0).html("用户名不能为空");
		}else{
			if(teg.test(this.value)){
				$(".ispan").eq(0).html("用户名符合").css("color","green")
			}else{
				$(".ispan").eq(0).html("用户名必须在3-15个字符之间")
			}
		}
})
//用户名

$(".ipwd").blur(function(){
	var teg=/^[_0-9a-z]{6,16}$/;
	if(this.value==""){
			$(".ispan").eq(1).html("密码不能为空");
		}else{
			if(teg.test(this.value)){
				$(".ispan").eq(1).html("密码符合").css("color","green")
			}else{
				$(".ispan").eq(1).html("密码长度应在6-20个字符之间")
			}
		}
})
//密码

$(".icpwd").blur(function(){
		if(this.value==""){
			$(".ispan").eq(2).html("请再次输入密码");
		}else{
			if(this.value==$(".ipwd").val() ){
				$(".ispan").eq(2).html("密码一致").css("color","green");
			}else{
				$(".ispan").eq(2).html("密码不一致");
			}
		}
	})
//验证密码
$(".iemail").blur(function(){
	var teg=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	if(this.value==""){
			$(".ispan").eq(3).html("邮箱不能为空");
		}else{
			if(teg.test(this.value)){
				$(".ispan").eq(3).html("邮箱设置成功").css("color","green")
			}else{
				$(".ispan").eq(3).html("格式不正确")
			}
		}
})

//验证码
function showCode(){
	var str = "abcdefghijkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
	var l = str.length;
	var i1 = parseInt(Math.random()*l);
	var i2 = parseInt(Math.random()*l);
	var i3 = parseInt(Math.random()*l);
	var i4 = parseInt(Math.random()*l);
	return str[i1]+str[i2]+str[i3]+str[i4];
}
$(".iyan_tu").html(showCode());
$(".yspan").click(function(){
	$(".iyan_tu").html(showCode());
})


$(".iyan").blur(function(){
	var code1=$(".iyan").val();
	var code2=$(".iyan_tu").html();
	if(code1.toLowerCase()==code2.toLowerCase()){
		$(".ispan").eq(4).html("验证码一致").css("color","green");
	}else{
		$(".ispan").eq(4).html("验证码不一致");
	}
})



$(".btn").click(function(){
	var json={
		"uname":$(".iname").val(),
		"upwd":$(".ipwd").val(),
		"uemail":$(".iemail").val()
	}
	setCookie("userInfo",JSON.stringify(json),10);
//	return false;
	location.href="denglu.html"
})
/*	function rand(min,max){
		return Math.floor( Math.random()*(max-min+1) + min );
	}
	function randColor(){
		var str = "0123456789abcdef";
		var color = "#";
		for(var i= 0 ; i < 6 ; i++){
			color += str.charAt( rand(0,15) );
		}
		return color;
	}
	



class ChangeColor{
		rand(min,max){
			return Math.floor(Math.random()*(max-min+1) + min);
		}
		randomColor(){
			var str = "0123456789abcdef";
			var color = "#";
			for( var i = 0 ; i < 6 ; i++ ){
				color += str.charAt( this.rand(0,15) );
			}
			return color;
		}
		setColor(obj,color){
			if( color ){//如果颜色存在 就设置  否则就  获取颜色  
				obj.css("background-color",color);
			}
			return obj.css("background-color");
		}
	}
	
	module.exports = new ChangeColor();
})*/