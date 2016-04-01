import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      questions: this.store.findRecord('question', params.question_id),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    updateQuestion(question, updateQInputs) {
      Object.keys(updateQInputs).forEach(function(key) {
        if(updateQInputs[key] !== undefined) {
          question.set(key, updateQInputs[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
      return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    }
  }
});
