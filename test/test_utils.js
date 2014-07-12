var test_it = function(test_obj){
	for(var ti=0; ti<test_obj.length; ti++){
		//console.log(test_obj);
		test_it(test_obj[ti]);
	}

	t_function = test_obj.func || strictEqual;

	t_function(
	    marked(test_obj.md),
	    test_obj.bb,
	    test_obj.description
	);
}

//var alotoftests=[]; //are here

var add_to_tests = function(test_container){
	for(var ti=0; ti<test_container.length; ti++){
		//console.log(test_container);
		add_to_tests(test_container[ti]);
	}
//	alotoftests.push(test_container);
	run_tests(test_container);
}

var run_tests = function(muhtest){
	//for(var ti=0; ti<alotoftests.length; ti++){
		//var muhtest = alotoftests[ti];
		test(muhtest.description, function(){
			for(testcase in muhtest.tests){
				test_it({
					md: muhtest.tests[testcase].md,
					bb: muhtest.tests[testcase].bb,
					description: testcase,
					func: muhtest.tests[testcase].func
				})
			}
		});
	//}
}