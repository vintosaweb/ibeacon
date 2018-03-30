$(document).ready(function () {
	var obj = $(".working_obj");
	var phone = $(".working_phone");
	obj.click(function (e) {
		obj.removeClass("active-obj");
		for (var i = 0; i < obj.length; i++) {
			if (e.target == obj[i]) {
				$(e.target).addClass("active-obj");
				for (var j = 0; j < phone.length; j++) {
					if (i == j) {
						phone.removeClass("active-phone");
						$(phone[j]).addClass("active-phone");
					}
				}
			}
		}
	});
});