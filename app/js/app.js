// Include our angular files
require('angular');
require('angular-ui-router');

angular.module('quickchatApp', ['ui.router'])

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

// Include our app's external JS files
require('./controllers');
require('./services');
require('./directives');
