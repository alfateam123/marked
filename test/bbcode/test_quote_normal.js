add_to_tests({
	description: "quote - normal behaviour",
	tests: {
		"normal quote behaviour":{
			md: ">4chan\n>style\n>is triggered!\nnot in the quote",
			bb: "[quote]4chan\nstyle\nis triggered!\nnot in the quote[/quote]\n"
		},
		"formatting into quote": {
			md: ">one\ntwo\n>three\n>four\n_five_\n**six**",
			bb: "[quote]one\ntwo\nthree\nfour\n[i]five[/i]\n[b]six[/b][/quote]\n"
		}
	}
});