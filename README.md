Loader (for Oberd)
---

![gif](https://github.com/oberd/oberd-loader/raw/master/example/oberd-loader.gif)

### Bower
`bower install git@github.com:oberd/oberd-loader.git --save`

### UMD
Support coming...

### Usage
```
  var Loader = require('loader'); // loader defined in requirejs config
  var load = new Loader($('.container')); // attach loader to element

  load.hide(); // hide the loader
  load.show(); // show the loader
```

For more information, see example directory.

### Contribute

* `git clone git@github.com:oberd/oberd-loader.git`
* `npm install`
* `bower install`
