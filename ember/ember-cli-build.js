/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		// fingerprint: {
		// 	enabled: false
		// },
		'ember-font-awesome': {
			useScss: true
		},
		sassOptions: {
	    	includePaths: [
				'app',
				'bower_components/breakpoint-sass/stylesheets'
			]
	    }
	});

	// Use `app.import` to add additional libraries to the generated
	// output files.
	//
	// If you need to use different assets in different
	// environments, specify an object as the first parameter. That
	// object's keys should be the environment name and the values
	// should be the asset to use in that environment.
	//
	// If the library that you are including contains AMD or ES6
	// modules that you would like to import into your application
	// please specify an object with the list of modules as keys
	// along with the exports of each module as its value.

	app.import({
		production: 'bower_components/skrollr/dist/skrollr.min.js',
		development: 'bower_components/skrollr/src/skrollr.js'
	});

	app.import('vendor/ParticleSystem.js');

	return app.toTree();
};
