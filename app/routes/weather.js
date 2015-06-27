import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.ajax('https://api.forecast.io/forecast/01ad39e0ef141c8e3e01e954e0992d90/'+params.lat+','+params.lng,
     {dataType: 'jsonp'}).then(function(response){
       return(response);
    });
  },
});

// +params.lat+','+params.lng,
