var fotoApp = angular.module('fotoControllers', []);

fotoApp.controller('FotoHomeCtrl', ['$scope', function ($scope) {

    }]);

fotoApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
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
                    $http.post('http://localhost:3000',{data:$scope.fileData}, {headers:{'Access-Control-Allow-Origin':'http://localhost:8080'}});
                };

                fileReader.readAsDataURL($scope.file);
            });
        }
    }
}]);