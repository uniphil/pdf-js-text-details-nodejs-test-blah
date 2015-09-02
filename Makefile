index.browser.js: index.js pdf.js
	node_modules/.bin/browserify $< > $@
