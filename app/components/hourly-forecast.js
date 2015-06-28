import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['weather-hourly'],

  init: function(){
    this.getNextTwelveHours();
    // this.sliceHourlyTemp();
    this._super();
  },

  getNextTwelveHours: function() {
    var nextTwelveHours = this.get('hourly').slice(0, 12);
    this.set('hourly', nextTwelveHours);
    // console.log(this.hourly);
  },

  // sliceHourlyTemp: function(){
  //   var temp = this.get('hourly.temperature');
  //   temp = temp.toString().slice(0,2);
  //   this.set('hourly.temperature', temp);
  // },

  actions: {
    toggleHourlyWeather: function(){
      $('.weather-forecast-hourly').slideToggle('slow', function(){});
    }
  }


});
