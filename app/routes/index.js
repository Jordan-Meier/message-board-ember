import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(newInputs) {
      var newQuestion = this.store.createRecord('question', newInputs);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
