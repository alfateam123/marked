add_to_tests({
	description: "automated linking",
	tests: {
		"autolink does not create a [gist]": {
			md: "https://gist.github.com/alfateam123/7cc354929eb3d8817857",
			bb: "[url]https://gist.github.com/alfateam123/7cc354929eb3d8817857[/url]",
		},
		"simple url with http://": {
			md: "http://nerdz.eu",
			bb: "[url]http://nerdz.eu[/url]",
		},
		"nerdz.eu without http://": {
			md: "nerdz.eu",
			bb: "nerdz.eu",

		},
		"links with parameters":{
			md: "http://google.com/test.pl?test=5",
			bb: "[url]http://google.com/test.pl?test=5[/url]",
		},
		"inside text":{
			md: "in a http://rubular.com test",
			bb: "in a [url]http://rubular.com[/url] test",
		},
		"not converting if into [url] tags":{
			md: "test [url=http://google.com]http://google.com[/url]",
			bb: "test [url=http://google.com]http://google.com[/url]",	
		},
		"no [project] inside links": {
			md: "https://alfa.nwa#test",
			bb: "[url]https://alfa.nwa#test[/url]",	
		},
		"no [user] inside links": {
			md: "https://alfa.nwa@test",
			bb: "[url]https://alfa.nwa@test[/url]",	
		},
		"complex url": {
			md: "http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=httpbin",
			bb: "[url]http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=httpbin[/url]"
		},
		"no autourl inside [code]": {
			md: "[code=perl]my newurl = \"http://google.com\"[/code]",
			bb: "[code=perl]my newurl = \"http://google.com\"[/code]",
		},
		"htt:p//": {
			md: "htt:p//google.com",
			bb: "htt:p//google.com"
		},
		"do not expand links inside [url] tags": {
			md: "[url]http://google.com[/url]",
			bb: "[url]http://google.com[/url]"
		}
	}
});