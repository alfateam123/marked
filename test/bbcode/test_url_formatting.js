add_to_tests([
	{
		description: 'url - formatting',
		tests:{
			'no text': {
				md: '[](http://google.com)',
				bb: '[url]http://google.com[/url]',
			},
			'no text, deeper site': {
				md: '[](https://wwwold.di.unipi.it)',
				bb: '[url]https://wwwold.di.unipi.it[/url]',
			}, 
			'simple text':{
				md: '[googoru](http://google.com)',
				bb: '[url="http://google.com"]googoru[/url]'
			},
			'other text': {
				md: '[back to the nineties!](https://wwwold.di.unipi.it)',
				bb: '[url="https://wwwold.di.unipi.it"]back to the nineties![/url]'
			},
			'formatted text': {
				md: '[**got** _shit_](http://4chan.org)',
				bb: '[url="http://4chan.org"][b]got[/b] [i]shit[/i][/url]',
			},
			'do not encode html entitities':  {
				md: '[httpbintest](http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=httpbin)',
				bb: '[url="http://httpbin.org/response-headers?Content-Type=text/plain;%20charset=UTF-8&Server=httpbin"]httpbintest[/url]'
			}	
		}
},
{
	description: 'url - @s and #s does not break the URL creation',
	tests: {
		'@user': {
			md: '[@user](http://google.com)',
			bb: '[url="http://google.com"]@user[/url]',
		},
		'#project':{
					md: '[#project](https://wwwold.di.unipi.it)',
				bb: '[url="https://wwwold.di.unipi.it"]#project[/url]'
		},
		'@user + #project':{
					md: '[@user (#project)](http://nerdz.eu)',
				bb: '[url="http://nerdz.eu"]@user (#project)[/url]'
		},
		'formatted text with @user and #project': {
			md: '[**got** _shit_ by @user! saw into #project](http://4chan.org)',
			bb: '[url="http://4chan.org"][b]got[/b] [i]shit[/i] by @user! saw into #project[/url]'
		}
	}
}
]);
