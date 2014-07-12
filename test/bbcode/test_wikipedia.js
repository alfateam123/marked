test("[wikipedia]",function(){
	var tests = {
		"wiki en turing": {
			md: "<http://en.wikipedia.org/wiki/Turing>",
			bb: "[wiki=en]Turing[/wiki]"
		},
		"wiki ita punti poker": {
			md:	"<http://it.wikipedia.org/wiki/Punti_del_poker>",
			bb:	"[wiki=it]Punti del poker[/wiki]"
		},
		"wiki no page" :{
			md:	"<http://www.wikipedia.org/>",
			bb:	"[url]http://www.wikipedia.org/[/url]",
		},
		"wiki japan (unicode recognition)": {
			md:	"<http://ja.wikipedia.org/wiki/ポケモン_(曖昧さ回避)>",
			bb:	"[wiki=ja]ポケモン (曖昧さ回避)[/wiki]",
		},
		"wiki wrong link => [url]":{
			md:	"<http://it.wikipedia.org/Punti_del_poker>",
			bb:	"[url]http://it.wikipedia.org/Punti_del_poker[/url]"
		}
	};
	for(testcase in tests){
		test_it({
			md: tests[testcase].md,
			bb: tests[testcase].bb,
			description: testcase
		})
	}
});