import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var newInputs = {
        title: this.get('title') ? this.get('title'): "",
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): "",
        answers: []
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', newInputs);
    }
  }
});
