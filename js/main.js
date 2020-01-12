//控制body的宽度
function getwWidth(){
		var wWidth = $(document).width()+'px';
		//console.log(wWidth)
		$("body").css({
			width:wWidth
		});
	}
//改变窗口大小时
$(window).resize(function(){
	 getwWidth();
	 var wWidth = $(document).width();
	 if(wWidth<1366){
		$('#product').css({
			height:'600px'
		});
		$('#product .item img').css({
			height:'600px'
		});
		$("#pay-way").css({
			top:'1507px'
		})
	}else{
		$('#product').css({
			height:'800px'
		})
		$('#product .item img').css({
			height:'800px'
		});
		$("#pay-way").css({
			top:'1706px'
		})
	}
	//console.log(111111111111)

})
//页面加载结束时
$(function(){
	getwWidth();
	var wWidth = $(document).width();
	if(wWidth<1366){
		$('#product').css({
			height:'600px'
		});
		$('#product .item img').css({
			height:'600px'
		});
		$("#pay-way").css({
			top:'1507px'
		})
	}else{
		$('#product').css({
			height:'800px'
		})
		$('#product .item img').css({
			height:'800px'
		});
		$("#pay-way").css({
			top:'1706px'
		})
	}

});

//点击logo图
$('#logo').on('click', function(){
	window.location.href="index.html"
})
//左移动按钮
$('.glyphicon-left').on('click', function(){
	var _ul = $('#images').find('ul');
	for(var i=0; i<_ul.length; i++){
		if(_ul.eq(i).hasClass('active')&&i>0){
			_ul.eq(i).removeClass('active').addClass('hide');
			_ul.eq(i-1).removeClass('hide').addClass('active');
			return;
		}
		if(_ul.eq(i).hasClass('active')&&i==0){
			_ul.eq(i).removeClass('active').addClass('hide');
			_ul.eq(_ul.length-1).removeClass('hide').addClass('active');
			return;
		}
	}
})
//右移动按钮
function runRight(){
	var _ul = $('#images').find('ul');
	for(var i=0; i<_ul.length; i++){
		if(_ul.eq(i).hasClass('active')&&i<_ul.length-1){
			_ul.eq(i).removeClass('active').addClass('hide');
			_ul.eq(i+1).removeClass('hide').addClass('active');
			return;
		}
		if(_ul.eq(i).hasClass('active')&&i==_ul.length-1){
			_ul.eq(i).removeClass('active').addClass('hide');
			_ul.eq(0).removeClass('hide').addClass('active');
			return;
		}
	}
}
$('.glyphicon-right').on('click',function(){
	runRight()
})
//setInterval(function(){
//	runRight()
//},3000)


//选择某种屏幕的机器
$("#btn-standard1").on('click',function(){
	$('.tbody1').removeClass('hide');
	$('.tbody2').addClass('hide');
	$(this).addClass('active');
	$('#btn-standard2').removeClass('active');
});
$("#btn-standard2").on('click',function(){
	$('.tbody2').removeClass('hide');
	$('.tbody1').addClass('hide');
	$(this).addClass('active');
	$('#btn-standard1').removeClass('active');
});


//查看款式
$('#style').on('click','li', function(){
	var _index = $(this).index();
	$(this).addClass('active')
	$(this).siblings().removeClass('active');
	var _img = $('.img-div').find('img');
	var _pp = $("#product-id").find('.div-pp');
	console.log(_pp)
	for(var i=0; i<_img.length; i++){
		if(_img.eq(i).index()==_index){
			_img.eq(i).addClass('active').removeClass('hide');
			_img.eq(i).siblings().addClass('hide').removeClass('active');
			_pp.eq(i).addClass('active').removeClass('hide');
			_pp.eq(i).siblings('.div-pp').addClass('hide').removeClass('active');

		}
	}
})
//左移动按钮1
$('.glyphicon-left1').on('click', function(){
	var _img = $('.img-div').find('img');
	var _pp = $("#product-id").find('.div-pp');
	for(var i=0; i<_img.length; i++){
		if(_img.eq(i).hasClass('active')&&i>0){
			_img.eq(i).removeClass('active').addClass('hide');
			_img.eq(i-1).removeClass('hide').addClass('active');
			_pp.eq(i).addClass('hide').removeClass('active');
			_pp.eq(i-1).removeClass('hide').addClass('active');
			$('#style li').eq(i-1).addClass('active').siblings().removeClass('active');
			return;
		}
		if(_img.eq(i).hasClass('active')&&i==0){
			_img.eq(i).removeClass('active').addClass('hide');
			_img.eq(_img.length-1).removeClass('hide').addClass('active');
			_pp.eq(i).removeClass('active').addClass('hide');
			_pp.eq(_pp.length-1).removeClass('hide').addClass('active');
			$('#style li').eq(i-1).addClass('active').siblings().removeClass('active');
			return;
		}
	}
})
//右移动按钮1
$('.glyphicon-right1').on('click', function(){
	var _img = $('.img-div').find('img');
	var _pp = $("#product-id").find('.div-pp');
	for(var i=0; i<_img.length; i++){
		if(_img.eq(i).hasClass('active')&&i<_img.length-1){
			_img.eq(i).removeClass('active').addClass('hide');
			_img.eq(i+1).removeClass('hide').addClass('active');
			_pp.eq(i).removeClass('active').addClass('hide');
			_pp.eq(i+1).removeClass('hide').addClass('active');
			$('#style li').eq(i+1).addClass('active').siblings().removeClass('active');
			return;
		}
		if(_img.eq(i).hasClass('active')&&i==_img.length-1){
			_img.eq(i).removeClass('active').addClass('hide');
			_img.eq(0).removeClass('hide').addClass('active');
			_pp.eq(i).removeClass('active').addClass('hide');
			_pp.eq(0).removeClass('hide').addClass('active');
			$('#style li').eq(0).addClass('active').siblings().removeClass('active');
			return;
		}
	}
})

//检查手机号
function checkMobile(){
    var _phone = $("#phone").val();
    if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(_phone))){
        alert("不是完整的11位手机号或者正确的手机号");
        //$("#phone").focus();
        return false;
    }
}
//交互
$("#submit").on('click', function(){
	var _phone = $("#phone").val();
    if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(_phone))){
        alert("不是完整的11位手机号或者正确的手机号");
        //$("#phone").focus();
        return false;
    }else{
    	var _username = $('#username').val();
		var _phone = $("#phone").val();
		var timestamp = (new Date()).valueOf();
		var _str = 'ffjsxDa13cDc8eff16F72F5dsSDF5Rtg5dDSG23HkIU34,'+_phone+','+timestamp;
		var signkey = md5(_str)
		var x= {
	        	  'signkey':signkey,
	        	  'timestamp':timestamp,
	              'resource':1,
	              'lmName':_username,
	              'lmPhone':_phone
	       };
	    var data = JSON.stringify(x);
		$.ajax({
	        type : "POST",  //提交方式
	        contentType: "application/json",
	        url : "https://www.huicoffee.com.cn/hkf/dealerSysteimInterface/dealerInfoEnter.action",//路径
	        data : data,//数据，这里使用的是Json格式进行传输
	        success : function(result) {//返回数据根据结果进行相应的处理
	            if (result.code==0) {
	                alert('发送成功！')
	            } else {
	               alert(result.msg)
	            }
	        }
	    });
   }
})
