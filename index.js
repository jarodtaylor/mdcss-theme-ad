var ejs  = require('ejs');
var fs   = require('fs');
var path = require('path');
var ext = require('object-assign');

module.exports = function (themeopts) {
	// set theme options object
		themeopts = Object(themeopts);

		// set theme title
		themeopts.title = themeopts.title || 'Style Guide';

		// set theme css
		themeopts.css = themeopts.css || [];

		// set theme js
		themeopts.js = themeopts.js || [];

	  // set navigation links
		themeopts.nav = themeopts.nav || [];

		// set example conf
		themeopts.examples = ext({
			base:    '',
			target:  '_self',
			css:     ['style.css'],
			js:      [],
			bodyjs:  [],
			htmlcss: 'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:0;position:static;width:auto',
			bodycss: 'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:0;position:static;width:auto'
		}, themeopts.examples);

	// return theme
	return function (docs) {

		// set assets directory and template
		docs.assets   = path.join(__dirname, 'assets');
		docs.template = path.join(__dirname, 'template.ejs');

		// set theme options
		docs.themeopts = themeopts;

		// return promise
		return new Promise(function (resolve, reject) {
			// read template
			fs.readFile(docs.template, 'utf8', function (error, contents) {
				// throw if template could not be read
				if (error) reject(error);
				else {
					// set compiled template
					docs.template = ejs.compile(contents)(docs);

					// resolve docs
					resolve(docs);
				}
			});
		});
	};
};

module.exports.type = 'mdcss-theme';
