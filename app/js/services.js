angular.module('quickchatApp')

  .factory('RoomsService', ['$firebaseArray', 'FIREBASE_URL',  function ($firebaseArray, FIREBASE_URL) {

    var firebaseRef = new Firebase(FIREBASE_URL);
    var roomsRef = $firebaseArray(firebaseRef.child('rooms'));

    // Get the messsages path
    var messagesRef = firebaseRef.child('messages');
    messagesRef = new Firebase(messagesRef.toString());

    return {

      allRooms: roomsRef,

      // Create rooms in Firebase
      create: function(){
        roomsRef.$add({
          name:     this.room,
          created:  Date.now()
        });

      },

      // Query the messages by active Room Id
      messages: function(roomId){
        return $firebaseArray(messagesRef.orderByChild('roomId').equalTo(roomId));
      }

    };

  }])

  .factory('MessagesService', ['$firebaseArray', 'FIREBASE_URL', function($firebaseArray, FIREBASE_URL){

    var firebaseRef = new Firebase(FIREBASE_URL);
    var messagesRef = $firebaseArray(firebaseRef.child('messages'));

    return {

        // Add the messages to Firebase
        add: function(user, message, roomId, roomName){
          messagesRef.$add({
            user: user,
            message:  message,
            roomId:   roomId,
            created:  Date.now()
          });

        }
    };

  }]);
