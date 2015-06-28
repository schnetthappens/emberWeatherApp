import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['weather-hourly'],

  init: function(){
    this.getNextTwelveHours();
    this._super();
  },

  getNextTwelveHours: function() {
    var nextTwelveHours = this.get('hourly').slice(0, 12);
    this.set('hourly', nextTwelveHours);
    // console.log(this.hourly);
  }

});
