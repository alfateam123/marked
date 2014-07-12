test("urls - non-http urls are not recognized",function(){
	var tests = {
		"missing [":{
			md:	"lol]()",
			bb:	"lol]()"
		},
		"ok but not a link":{
			md: "[test](asdf)",
			bb:	"[test](asdf)"
		},
		"http but no first-level domain": {
			md:	"[](http://nwa)",
			bb:	"[](http://nwa)",
		},
		"ok, http": {
			md:	"[twitter account!](http://twitter.com/alfateam123)",
			bb:	"[url=\"http://twitter.com/alfateam123\"]twitter account![/url]"
		},
		"ok, https": {
			md:	"[twitter account!](https://twitter.com/alfateam123)",
			bb:	"[url=\"https://twitter.com/alfateam123\"]twitter account![/url]",
		},
		"missing ()": {
			md:	"[asdada]asdadsad",
			bb:	"[asdada]asdadsad",
		},
		"missing []": {
			md:	"(lol)",
			bb:	"(lol)"
		},
		"ok but steam (no https?/ftp)": {
			md:	"[launch this game!](steam://this.game/)",
			bb:	"[launch this game!](steam://this.game/)"
		}
	}
	for(testcase in tests){
		test_it({
			md: tests[testcase].md,
			bb: tests[testcase].bb,
			description: testcase
		})
	}
});