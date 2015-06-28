import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['weather-main'],

  init: function(){
    this.sliceCurrentTemp();
    this.formatTime();
    this.renderRainChances();
    this._super();
  },

  sliceCurrentTemp: function(){
    var temp = this.get('current.temperature');
    temp = temp.toString().slice(0,2);
    this.set('current.temperature', temp);
  },

  formatTime: function(){
    var time = this.get('current.time');
    time = moment().format('LL');
    this.set('current.time', time);
  },

  renderRainChances: function() {
    var rainChances = this.get('current.precipProbability');
      if(rainChances <= 30) {
        rainChances = 'No threat of rain right now';
        this.set('current.precipProbability', rainChances);
      } else if (rainChances <= 50) {
        rainChances= 'Rain in the area';
        this.set('current.precipProbability', rainChances);
      }else if (rainChances <= 70) {
        rainChances = 'Rain likely';
      }
  }

    // } else if (Number(this.get('current.precipProbability'))  >= 30 {
    //   return 'Keep an umbrella handy';
    //
    // } else if (Number(this.get('current.precipProbability'))  >= 50 {
    //   return 'Rain is likely';
    // }

});
