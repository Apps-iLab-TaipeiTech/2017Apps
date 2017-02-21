angular.module('2017Apps').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
        cache: false, 
        url: '/',
        templateUrl: 'views/home.html', 
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
    })
}]);