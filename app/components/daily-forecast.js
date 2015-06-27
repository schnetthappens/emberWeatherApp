import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['weather-forecast'],

  init: function(){
      this._super();
    },

    actions: {
      toggleDailyWeather: function(){
        console.log('hello');
        $('.weather-forecast-daily').slideToggle('slow', function(){});
      }
    }

});
// $(this.el).closest('.menu-category').find('.category-list').slideToggle('slow', function(){});
// }
