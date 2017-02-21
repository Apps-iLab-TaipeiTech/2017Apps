angular.module('2017Apps').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    var manifest = JSON.parse(localStorage.getItem('manifest'));

    $stateProvider.state('index', {
        cache: false, 
        url: '/',
        templateUrl: manifest.root + '/views/home.html', 
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
    })
}]);