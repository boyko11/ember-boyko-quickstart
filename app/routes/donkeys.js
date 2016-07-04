import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			donkeysList : ['Boyko\'s Donkey', 'Another Donkey', 'Super Donkey']
		}
	}
});
