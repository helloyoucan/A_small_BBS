$(function(){
	loginAndSign();
});
function loginAndSign() {
	$.validator.addMethod("checkpassword", function(value, element, param) {
		var passworkrule = /[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/;
		return this.optional(element) || (passworkrule.test(value));
	}, "需包含数字和字母两种字符");
	$("#login-from").validate({
		rules: {
			email: { //input标签的name
				required: true,
				email: true,
			},
			password: {
				required: true,
				rangelength: [6, 18]
			}
		},
		messages: {
			email: {
				required: "必须填写邮箱",
				email: "请填写正确的邮箱地址"
			},
			password: {
				required: "必须填写密码",
				rangelength: "密码长度为6~18位"
			}
		},
		errorPlacement: function(error, element) { //错误信息位置设置方法
			error.appendTo(element.next()); //这里的element是录入数据的对象
		},
		submitHandler: function(form) { //提交到后台
			/***************/

			$("#login-failed").show();
			setTimeout(function() {
				$("#login-failed").slideUp(5000);
			}, 1000);

		}
	})
	$("#sign-form").validate({
			rules: {
				username: {
					required: true,
					rangelength: [1, 8]
				},
				email: { //input标签的name
					required: true,
					email: true,
				},
				password: {
					required: true,
					rangelength: [6, 18],
					checkpassword: true,
				}
			},
			messages: {
				username: {
					required: "请输入昵称",
					rangelength: "昵称太长了"
				},
				email: {
					required: "必须填写邮箱",
					email: "请填写正确的邮箱地址"
				},
				password: {
					required: "必须填写密码",
					rangelength: "密码长度为6~18",
				}
			},
			errorPlacement: function(error, element) { //错误信息位置设置方法
				error.appendTo(element.next()); //这里的element是录入数据的对象
			},
			submitHandler: function(form) { //提交到后台
				if(true) {
					$("#sign-success").show();
					setTimeout(function() {
						$("#sign-success").slideUp(5000);
					}, 1000);
				} else {
					$("#sign-failed").show();
					setTimeout(function() {
						$("#sign-failed").slideUp(5000);
					}, 1000);
				}
			}
		})
		//登录注册面板相关
	$("#nav-login").click(function() {
		$('#myModal').modal('show');
	});
	$("#ul-tap li:first-child").click(function() {
		$("#ul-tap li:last-child").removeClass('active');
		$(this).addClass("active");
		$('#tap-sign_in').hide();
		$('#tap-login').show();
	});
	$("#ul-tap li:last-child").click(function() {
		$("#ul-tap li:first-child").removeClass('active');
		$(this).addClass("active");
		$('#tap-login').hide();
		$('#tap-sign_in').show();

	});
	
	$("#cancel").click(function(){
		alert("注销登录");
	})
}