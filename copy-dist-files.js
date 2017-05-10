var fs = require('fs');

var dest = 'dist';
var index_file = 'src/index.html';

process.argv.forEach((val, index) => {
  var vals = val.split('=');
  if (vals[0] == '--dest') {
    dest = vals[1];
  }
  else if (vals[0] == '--index') {
    index_file = 'src/index-'+ vals[1] +'.html'
  }
  console.log(`${index}: ${val}`);
});

if (!fs.existsSync(dest)){
    fs.mkdirSync(dest);
}

fs.createReadStream(index_file).pipe(fs.createWriteStream(dest + '/index.html'));

var resources = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js',
  'src/styles.css'
];
resources.map(function(f) {
  var path = f.split('/');
  var t = dest + '/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});
