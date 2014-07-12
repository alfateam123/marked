add_to_tests({
	description: "github code: don't recognize @users and #projects inside code",
	tests: {
		"no @user outside": {
			md: "```perl\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n\n```",
			bb: "[code=perl]\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n[/code]",
		},
		"@user outside [code] is still recognized": {
			md:	"```perl\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n\n```\n\n@alfateam123", 
			bb: "[code=perl]\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n[/code]\n[user]alfateam123[/user]"
		}
	}
});/*
test("github code: don't recognize word formattings inside code", function(){
	var starting_text= [
					"```perl\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n**lol**\n```",
					"```perl\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n```\n**lol**"
					],
	expected= [
				"[code=perl]\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n**lol**\n[/code]",
				"[code=perl]\nuse Data::Dumper;\nprint Dumper($val);\nfor my $lol (@unrecognized){\n  #thenopeproject\n}\nprint **lolololol**\nprint \"do you wanna use ` ?\";\nprint `find .`;\n[/code][b]lol[/b]"
			  ];
	var conv = new Showdown.converter();
	for(var i = 0; i<starting_text.length; i++){
		deepEqual(
			expected[i],
			conv.makeBBCode(starting_text[i])
			//starting_text+" => "+expected
			);
	}
});

	var conv = new Showdown.converter();
	for(var i = 0; i<starting_text.length; i++){
		deepEqual(
			expected[i],
			conv.makeBBCode(starting_text[i])
			//starting_text+" => "+expected
			);
	}
});
*/