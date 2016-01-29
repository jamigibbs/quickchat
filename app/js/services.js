angular.module('quickchatApp')

  .factory('AuthService', ['$cookies', '$firebaseArray', 'FIREBASE_URL', function($cookies, $firebaseArray, FIREBASE_URL){

    var firebaseRef = new Firebase(FIREBASE_URL);

    // Get the users path as an array
    var usersRef = $firebaseArray(firebaseRef.child('users'));
    var username = null;
    var redirect = false;

    return {

      twitterLogin: function(){

        // Initiate Twitter Authentication
        firebaseRef.authWithOAuthPopup("twitter", function(error, authData) {

          // Log error details in console and alert user as well
          if (error) {

            alert("Sorry, login with Twitter failed");
            console.log(error);

          } else {

            // Get Twitter username
            username = authData.twitter.username;
            // Set our query var to check name values
            var query = firebaseRef.child('users').orderByChild('name').equalTo(username);

            // Check for a name value match
            query.once('value', function(snapshot) {

              // If no username matches, create a new db entry
              if ( snapshot.val() === null ) {

                // Create user in firebase
                usersRef.$add({
                  name:     username,
                  created:  Date.now(),
                  id:       authData.twitter.id
                });

              // If a username matches, redirect to chatrooms
              } else {
                console.log('username exists');
              }

            });

          }

        });

      }

    };

  }])

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
            user:     user,
            message:  message,
            roomId:   roomId,
            created:  Date.now()
          });

        }
    };

  }]);
