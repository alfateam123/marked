add_to_tests({
	description: "quote - normal behaviour",
	tests: {
		"normal quote behaviour":{
			md: ">4chan\n>style\n>is triggered!\nnot in the quote",
			bb: "[quote]\n4chan\nstyle\nis triggered!\nnot in the quote\n[/quote]"
		},
		"formatting into quote": {
			md: ">one\ntwo\n>three\n>four\n_five_\n**six**",
			bb: "[quote]\none\ntwo\nthree\nfour\n[cur]five[/cur]\n[b]six[/b]\n[/quote]"
		}
	}
});