import { wrapEl } from './helpers';
import './examples';

document.addEventListener('DOMContentLoaded', function () {
	Array.prototype.forEach.call(document.querySelectorAll('pre code[class^="lang"]'), function (code) {
		// set pre, wrap, opts, and get meta data from code
		var pre  = code.parentNode;
		var conf = {};
		var text = String(code.textContent || code.innerText || '');

		// get meta data from code class
		code.className.replace(/^lang-(\w+)(?::(\w+))?/, function ($0, $1, $2) {
			if ($2) return 'example:' + $2 + ',lang:' + $2;

			if ($1 === 'example') return 'example:html';

			return 'lang:' + $1;
		}).split(/\s*,\s*/).forEach(function (opt) {
			opt = opt.split(':');

			conf[opt.shift().trim()] = opt.join(':').trim();
		});

		code.removeAttribute('class');

		// conditionally create code examples
		if (conf.example in examples.lang) {
			examples.lang[conf.example](pre, text, conf);
		} else {
			var exampleCode = document.createElement('div');
			exampleCode.classList.add('example-code', 'clearfix');
			if(conf.lang === 'open') exampleCode.classList.add('example-code--is-visible');
			var codeExampleToggle = exampleCode.appendChild(document.createElement('div'));
			codeExampleToggle.classList.add('example-code__toggle');
			pre.className = 'example-code__pre';
			var exampleWrapper = wrapEl(pre, exampleCode);
		}
	});

	var exampleCode = document.querySelectorAll('.example-code');

	Array.prototype.map.call(exampleCode, function(el) {
		var toggler = el.querySelector('.example-code__toggle');
		toggler.addEventListener('click', function(){
			el.classList.toggle('example-code--is-visible');
		});
	});
});
