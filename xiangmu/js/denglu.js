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



//验证码


$(function(){
	if(document.cookie){
		var json=getCookie("userInfo");
		$(".iname").val(json.uname);
		$(".iyan").blur(function(){
			var code1=$(".iyan").val();
			var code2=$(".iyan_tu").html();
			if(code1.toLowerCase()==code2.toLowerCase()){
				$(".ispan").eq(2).html("验证码一致").css("color","green");
			
				
			}else{
				$(".ispan").eq(2).html("验证码不一致");
				}
		})
		$(".btn").click(function(){
			if($(".ipwd").val()==""){
				$(".ispan").eq(0).html("密码不能为空");
			}else{
				if($(".ipwd").val()==json.upwd){
					$(".ispan").eq(1).html("密码正确").css("color","green")
				}else{
					$(".ispan").eq(1).html("密码不正确")
				}
				location.href="shouye.html";
			}
		})
	}
})
