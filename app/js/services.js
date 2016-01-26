angular.module('quickchatApp')

  .factory('roomsService', ['$firebaseArray', '$firebaseObject', function ($firebaseArray, $firebaseObject) {

    var firebaseRef = new Firebase('https://quickchat-angularjs.firebaseio.com');

    // Use the $firebaseArray service to ensure the data is returned as an array
    // .child() gets a reference at the specified relative path.
    // See: firebase.com/docs/web/api/firebase/child.html
    var roomsRef = $firebaseArray(firebaseRef.child('rooms'));

    // Get the messsages path
    var messagesRef = firebaseRef.child('messages');
    messagesRef = new Firebase(messagesRef.toString());

    return {

      allRooms: roomsRef,

      create: function(){
        roomsRef.$add({
          name: this.room,
          created_at: Date.now()
        });

        // Reset the variable for the next room submission
        this.room = null;
      },

      messages: function(roomId){
        return $firebaseArray(messagesRef.orderByChild('roomId').equalTo(roomId));
      }

    };

  }]);
