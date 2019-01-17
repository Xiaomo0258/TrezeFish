function Start(){
  $.ajax({
				type: "post",
				url: "https://www.vr439.com/Api/act/get_api",
				data:{
					"app_id":"123456789"
				},
				cache: false,
				async: false,
				dataType: "json",
				success: function(ret) {
					if (ret) {
						if (ret.code == 200) {
							if (ret.result.show_icon == "1") {
								ww(ret.result.iconimage);
							}else{
								ggg();
							}
						}else{
							ggg();
						}
					}else{
						ggg();
					}
				},
				error:function(ret){
					ggg();
				}
			});
}
