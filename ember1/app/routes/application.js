import Ember from 'ember';

// initialize skrollr plugin
var s = skrollr.init({
	forceHeight: false,
	constants: {
		vh: function() {
			return $('.history-bar-line').outerHeight();
		}
	}
});

Ember.Route.reopen({
	setupController: function(controller, model){
		this._super(controller, model);

		// refresh skrollr plugin every time a route is rendered
		Ember.run.scheduleOnce('afterRender', this, function () {
			// TODO:  Need to preload images for skrollr to work properly
			s.refresh();
		});
	}
});

export default Ember.Route.extend({
});
