angular.module('quickchatApp', ['ui.router', 'firebase'])

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

  }]);
