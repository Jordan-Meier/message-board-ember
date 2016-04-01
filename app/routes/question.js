import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      questions: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  // actions: {
  //   deleteQuestion
  // }
});
