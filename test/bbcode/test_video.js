add_to_tests({
	description: "url building - video tags",
	tests : {
		"youtube full link": {
			md: "<http://www.youtube.com/watch?v=r4qmUpAE9o8>",
			bb: "[video]http://www.youtube.com/watch?v=r4qmUpAE9o8[/video]"
		},
		"youtube short link": {
			md: "<http://youtu.be/_ynuMmB91qM>",
			bb: "[video]http://youtu.be/_ynuMmB91qM[/video]"
		},
		"dailymotion":{
			md: "<http://www.dailymotion.com/video/x1hfdxk>",
			bb: "[video]http://www.dailymotion.com/video/x1hfdxk[/video]"
		},
		"vimeo": {
			md: "<http://vimeo.com/85752647>",
			bb: "[video]http://vimeo.com/85752647[/video]"
		},
		"facebook video": {
			md: "<https://www.facebook.com/photo.php?v=242255399300798>",
			bb: "[video]https://www.facebook.com/photo.php?v=242255399300798[/video]"
		}
	}
});