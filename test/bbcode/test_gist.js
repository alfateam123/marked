add_to_tests({
	description: "[gist]",
	tests: { 
		"secret gists":{
			md :"<https://gist.github.com/alfateam123/7cc354929eb3d8817857>",
			bb :"[gist]7cc354929eb3d8817857[/gist]" //"secret" gists
		},
		"public gists": {
			md: "<https://gist.github.com/alfateam123/8055226>",
			bb: "[gist]8055226[/gist]" //public gists
		},
		"gist.github, but not a gist": {
			md: "<https://gist.github.com/alfateam123>",
			bb: "[url]https://gist.github.com/alfateam123[/url]"
		}
	  }
});
