angular.module('quickchatApp')

  .controller('homeCtrl', ['$scope', '$cookies', '$location', 'RoomsService', 'MessagesService', 'AuthService',  'FIREBASE_URL', function($scope, $cookies, $location, RoomsService, MessagesService, AuthService, FIREBASE_URL){

    // Lists all of the available rooms
    $scope.rooms = RoomsService.allRooms;

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

    // Add a room to the list
    $scope.addRoom = function(){
      RoomsService.create(this.room);
    };

    // Converts the server date so we can filter in the view
    $scope.convertDate = function(date){
      return new Date(date * 1000);
    };

    // Get the new message and add it to the database
    $scope.addMessage = function(message){
      MessagesService.add($scope.activeUser, message, $scope.activeRoomId, $scope.activeRoom);
    };

    // Set our username cookie variable
    var usernameCookie = $cookies.get('quickchatCurrentUser');

    // Initiate Twitter oAuth when login button is clicked
    $scope.twitterLogin = function(){
      AuthService.twitterLogin();
    };

  }]);
