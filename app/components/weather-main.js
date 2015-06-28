import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['weather-main'],

  init: function(){
    this.sliceCurrentTemp();
    this.formatTime();
    this._super();
  },

  sliceCurrentTemp: function(){
    var temp = this.get('current.temperature');
    temp = temp.toString().slice(0,2);
    this.set('current.temperature', temp);
  },

  formatTime: function(){
    var time = this.get('current.time');
    time = moment().format('llll');
    this.set('current.time', time);
  }

});
