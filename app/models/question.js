import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); } }),
  content: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
