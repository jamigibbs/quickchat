angular.module('quickchatApp')

  .controller('homeCtrl', ['$scope', 'roomsService', function($scope, roomsService){

    // Lists all of the available rooms
    $scope.rooms = roomsService.allRooms;

    // Add a room to the list
    $scope.addRoom = roomsService.create;

    // Default value. Updates when user clicks room from the list
    $scope.activeRoom = false;

    $scope.joinRoom = function(){

      // Update activeRoom var name
      $scope.activeRoom = this.room.name;

      // Pass and get the desired room's id to messages service
      $scope.messages = roomsService.messages(this.room.$id);

    };

    // Converts the server date so we can filter in the view
    $scope.convertDate = function(date){
      return new Date(date * 1000);
    };


  }]);
