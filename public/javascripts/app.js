angular.module('main', ['ngRoute'])
.controller('MainController', function($scope, dataServices) {
  $scope.data = 'Here\'s the Bark';
  dataServices.getData(function(data) {
    $scope.moreData = data.data
  })
});