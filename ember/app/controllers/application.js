import Ember from 'ember';

export default Ember.Controller.extend({
	init() {
		// create particle system and save in Ember namespace
		Ember.ParticleSystem = new ParticleSystem();
	}
});
