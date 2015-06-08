var fotoServices = angular.module('fotoServices', []);

fotoServices.factory('Foto', ['$http', function($http) {
    return {
        share: function(data) {
            console.log('here');
            $http({method:'POST', url:'http://localhost:3000/', data:{body:'hello'}});
        }
    }}]);
