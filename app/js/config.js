angular.module('quickchatApp', [
  'ui.router',
  'firebase',
  'ngCookies'
])

  .constant('FIREBASE_URL', 'https://quickchat-angularjs.firebaseio.com')

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
        .state('login', {
            url: '/',
            controller: 'homeCtrl',
            templateUrl: '/templates/login.html'
        })
        .state('home', {
            url: '/chat',
            controller: 'homeCtrl',
            templateUrl: '/templates/chat.html'
        });

  }]);
