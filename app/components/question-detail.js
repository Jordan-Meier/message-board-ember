import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      if (confirm('Are you sure that you would like to delete this question?')) {
        this.sendAction("deleteQuestion", question);
      }
    }
  }
});
