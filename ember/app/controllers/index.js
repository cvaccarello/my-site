import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
		this._super();

		Ember.run.schedule('afterRender',this,function() {
			this.send('foo');
		});
	},

	actions: {
		foo: function() {
			var $ship = $('.hp-ship-001');
			var height = $ship.outerHeight();

			var MyParticleEmitter = Ember.ParticleSystem.addEmitter({
				id: 'ship-engine--stars',
				max_particles: 100,
				emit_delay: 10,
				element: $ship.find('.hp-engine'),
				direction: { min: 240, max: 300 },
				particle: {
					append_to: $('body > div'),
					template: '<div class="hp-star-001"></div>',
					time_to_live: 1000,
					speed: 200
				}
			});

			// only want to ignite engines when moving upwards (downward scroll)
			// also only ignite engins when the ship is in view
			var scroll_amt = 0;
			$(document).on('scroll', function() {
				var scroll = $(document).scrollTop();
				var offset = $ship.offset();

				var ship_pos_on_screen = offset.top - scroll;
				if (scroll > scroll_amt && ship_pos_on_screen <= screen.height && ship_pos_on_screen >= 0 - height) {
					MyParticleEmitter.trigger(30);
				}

				scroll_amt = scroll;
			});
		}
	}
});
