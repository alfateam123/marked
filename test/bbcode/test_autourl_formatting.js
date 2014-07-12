add_to_tests([
{
	description: "autourl - formatting", 
	tests: {
		"HTTP urls are recognized and formatted correctly": {
		md: "<http://google.com>",
		bb: "[url]http://google.com[/url]"
	},
		"HTTPS urls are recognized and formatted correctly": {
 		md: "<https://wwwold.di.unipi.it>",
		bb: "[url]https://wwwold.di.unipi.it[/url]"
	},
		"# and @ into projects don't generate [project] and [user] tags": {
		md: "<http://google.com/test?user=@user&project=#project>",
		bb: "[url]http://google.com/test?user=@user&project=#project[/url]"
	},
		"random extensions": {
		md: "<http://lol.asd>",
		bb: "[url]http://lol.asd[/url]"
	},
		
		"urlencoded url": {
		md: "<http://nonchosbatta.omnivium.it/#/users/Qualcuno%20lo%20far%C3%A0/timer>",
		bb: "[url]http://nonchosbatta.omnivium.it/#/users/Qualcuno%20lo%20far%C3%A0/timer[/url]",
	},
		"& does not become &amp;": {
		md: "<http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=httpbin>",
		bb: "[url]http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=httpbin[/url]"
	}
  }
},
{
	description: "autourl - non-http urls are not recognized",
	tests: {
		"<asdf>": {
			md: "<asdf>",
			bb: "<asdf>"
		},
		"<http://nwa>": {
			md: "<http://nwa>",
			bb: "<http://nwa>"
		}
	}
},
{
	description: "autourl inside bbcode tags",
	tests:{
		"if inside urls, <autourl> must not be expanded": {
		    md: "<https://gist.github.com/alfateam123/7cc354929eb3d8817857> [url=http://nwa]<http://google.com>[/url]",
		    bb: "[gist]7cc354929eb3d8817857[/gist] [url=http://nwa]<http://google.com>[/url]", 
		},
		"if inside urls, <autourl> must not be expanded (2)":{
			md: "saafa _asdasd_\n[math]\\sqrt-1 * \\frac{5}{b*2*3}-q_ad[/math]_\n[cur]**asd**[/cur]\n[url=http://google.com]<http://alfateam123.niggazwithattitu.de>[/url]",
			bb: "saafa [cur]asdasd[/cur]\n[math]\\sqrt-1 * \\frac{5}{b*2*3}-q_ad[/math]_\n[cur][b]asd[/b][/cur]\n[url=http://google.com]<http://alfateam123.niggazwithattitu.de>[/url]"
		}
	}
},
{
	description: "if inside [code], <autourl> must not be expanded",
	tests: {
		"inside [code] tag":{
			md: "```perl\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n\n```sh\n[this](http://is.not.going.to.happen)\n```",
			bb: "[code=perl]\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n\n```sh\n[this](http://is.not.going.to.happen)\n[/code]",
		},
		"outside [code] tag":{
			md: "```perl\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n\n```\nsh\n[this](http://is.going.to.happen)\n```",
			bb: "[code=perl]\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n[/code]sh\n[url=http://is.going.to.happen]this[/url]\n```"
		}
	}
}
]);
