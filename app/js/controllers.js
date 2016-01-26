angular.module('quickchatApp')

  .controller('homeCtrl', ['$scope', 'roomsService', function($scope, roomsService){

    $scope.rooms = roomsService.all;

    $scope.addRoom = function() {

      roomsService.all.$add({
        name: this.room,
        created_at: Date.now()
      });

      // Reset the variable for the next room submission
      this.room = null;

    };

  }]);
