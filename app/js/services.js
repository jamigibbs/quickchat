angular.module('quickchatApp')

  .factory('roomsService', ['$firebaseArray', function ($firebaseArray) {

    var firebaseRef = new Firebase('https://quickchat-angularjs.firebaseio.com');

    // Use the $firebaseArray service to ensure the data is returned as an array
    // .child() gets a reference at the specified relative path.
    // See: firebase.com/docs/web/api/firebase/child.html

    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {

      all: rooms

    };

  }]);
