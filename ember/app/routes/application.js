import Ember from 'ember';

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
	var angle;
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { angle = 0; }
    //return (angle < 0) ? angle + 360 : angle;
     return angle;
}


// initialize skrollr plugin
var s = skrollr.init({
	forceHeight: false,
	constants: {
		shb_line: function() {
			return $('#skrollr-history-bar-line').outerHeight();
		}
	},
	render(options) {
		// get all pivot points so that their children, if they exist, can be counter-rotated
		var $moon = $('.hp-moon');
		$moon.each(function() {
			let $this = $(this);
			let $parent = $this.parent();
			let rotation = 0 - getRotationDegrees($parent);

			$this.css({
				'transform': 'rotate(' + rotation + 'deg)'
			});
		});
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
