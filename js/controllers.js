var fotoApp = angular.module('fotoControllers', []);

fotoApp.controller('FotoHomeCtrl', ['$scope','Phone', function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);

fotoApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);