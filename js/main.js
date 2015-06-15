
var fotoApp = angular.module('fotoApp', [
    'ngRoute',
    'fotoControllers'
]);

fotoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'foto-home.html',
                controller: 'FotoHomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

