import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		rendered: function() {
			this.$ship = $('.hp-ship-001');
			this.ship_height = this.$ship.outerHeight();

			this.MyParticleEmitter = Ember.ParticleSystem.addEmitter({
				id: 'ship-engine--stars',
				max_particles: 100,
				emit_delay: 10,
				element: this.$ship.find('.hp-engine'),
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
			this.scroll_amt = 0;
			$(document).on('scroll', () => {
				this.emitParticlesOnScroll();
			});
		},

		remove: function() {
			$(document).off('scroll', this.emitParticlesOnScroll);
			this.MyParticleEmitter.remove();
		}
	},

	emitParticlesOnScroll() {
		console.log('scrolling...');
		var scroll = $(document).scrollTop();
		var offset = this.$ship.offset();

		var ship_pos_on_screen = offset.top - scroll;
		if (scroll > this.scroll_amt && ship_pos_on_screen <= screen.height && ship_pos_on_screen >= 0 - this.ship_height) {
			this.MyParticleEmitter.trigger(30);
		}

		this.scroll_amt = scroll;
	}
});
