import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var updateQInputs = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.set("updateQuestionForm", false);
      this.sendAction ('updateQuestion', question, updateQInputs);
    }
  }
});
