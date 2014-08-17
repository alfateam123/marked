# marked (BBCode)
Mardkown parser and compiler based on [chjj/marked](https://github.com/chjj/marked).

Member Lab #1: [alfateam123](https://github.com/alfateam123)  
Member Lab #2: [cenci0](https://github.com/cenci0)  
Future gadget current revision: v0.1 (Asagi)

![Asagi-san :3](http://img2.wikia.nocookie.net/__cb20131226123719/strike-the-blood/images/7/72/690723-asagi_op.png)

## Usage
Minimal usage:

```js
var marked = require('marked');
console.log(marked('I am using __markdown__.'));
// Outputs: I am using [b]markdown[/b].
```

## New options

### nerdz

Type: `boolean`
Default: `true`

Enable BBCode handling as it is done on [nerdz.eu](https://www.nerdz.eu).
Basically just some more tags support have been added (rg. `[spoiler]`, `[user]` and `[project]`) and other tags grammar has been slightly modified.


For more information and usage modes, refer to [chjj/marked/README.md](https://github.com/chjj/marked/blob/master/README.md).
