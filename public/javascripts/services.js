angular.module('main')
.service('dataServices', function($http) {
  this.getData = function(callback) {
    $http.get('/data.json')
      .then(callback);  
  }
})