import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return new Ember.RSVP.Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position){
        resolve(position);
        console.log(position);
      });
    });
  }
});
