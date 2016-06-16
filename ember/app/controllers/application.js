import Ember from 'ember';

export default Ember.Controller.extend({
	init() {
		Ember.ParticleSystem = new ParticleSystem();
	}
});
