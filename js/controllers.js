var fotoApp = angular.module('fotoControllers', []);

fotoApp.controller('FotoHomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('http://sleepy-cliffs-7844.herokuapp.com').success(function(data, status, headers,config) {
            console.log('got pictures');
            $scope.pictures = data;
        });
    }]);

fotoApp.directive('fotoFileSelect', ['Foto','$http', function(Foto, $http) {
    return {
        link: function($scope, el, attrs) {
            el.bind('change', function(e) {
                console.log('file selected');
                $scope.file = e.target.files[0];
                fileReader = new FileReader();

                fileReader.onload = function(e) {
                    console.log('loaded');
                    // Render thumbnail.
                    $scope.fileData = e.target.result;
                    $scope.$apply();
                    $http.post('http://sleepy-cliffs-7844.herokuapp.com',{data:$scope.fileData}, {headers:{'Access-Control-Allow-Origin':'http://localhost:8080'}});
                };

                fileReader.readAsDataURL($scope.file);

                $http.get('http://sleepy-cliffs-7844.herokuapp.com').success(function(data, status, headers,config) {
                    console.log('got pictures');
                    $scope.pictures = data;
                });
            });
        }
    }
}]);