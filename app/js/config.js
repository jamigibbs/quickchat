angular.module('quickchatApp', [
  'ui.router',
  'firebase',
  'ngCookies',
  'ngDialog'
])

  .config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {

    // Configure the app's path
    $locationProvider.html5Mode({
      // Disables hashbang mode
      enabled: true,
      // Unrelated to hashbang but avoids $location error
      requireBase: false
    });

    // Setup the template routes/states
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeCtrl',
            templateUrl: '/templates/home.html'
        });

  }])

  // Runs when the app instance is created
  .run(['$cookies', 'ngDialog', function($cookies, ngDialog){

    // Set our username cookie variable
    var usernameCookie = $cookies.get('quickchatCurrentUser');

    // Check if a username is saved to cache yet
    if( !usernameCookie || usernameCookie === '' ){

      // Create our modal dialog box
      ngDialog.openConfirm({
        template: '/templates/username-modal.html',
        showClose: false,
        closeByEscape: false,
        closeByDocument: false

      // Return the username promise
      }).then( function(username) {
        // Create a cookie for the username entered
        $cookies.put('quickchatCurrentUser', username);
        // Close the dialog box
        ngDialog.close();
      });

    }

  }]);
