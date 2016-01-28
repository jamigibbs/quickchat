angular.module('quickchatApp')

  .controller('homeCtrl', ['$scope', '$cookies', 'RoomsService', 'MessagesService', function($scope, $cookies, RoomsService, MessagesService){

    // Lists all of the available rooms
    $scope.rooms = RoomsService.allRooms;

    // Add a room to the list
    $scope.addRoom = RoomsService.create;

    // Default values. Updates when user clicks room from the list
    $scope.activeRoomId = null;
    $scope.activeRoom = false;
    $scope.activeUser = $cookies.get('quickchatCurrentUser');

    $scope.joinRoom = function(){

      // Update activeRoom vars
      $scope.activeRoom = this.room.name;
      $scope.activeRoomId = this.room.$id;

      $scope.messages = RoomsService.messages($scope.activeRoomId);

    };

    // Converts the server date so we can filter in the view
    $scope.convertDate = function(date){
      return new Date(date * 1000);
    };

    $scope.addMessage = function(message){
      MessagesService.add($scope.activeUser, message, $scope.activeRoomId, $scope.activeRoom);
      $scope.activeMessage = null;
    };

  }]);
