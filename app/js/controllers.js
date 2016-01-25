angular.module('quickchatApp')

  .controller('homeCtrl', ['$scope', 'roomsService', function($scope, roomsService){

    $scope.rooms = roomsService.all;

  }]);
