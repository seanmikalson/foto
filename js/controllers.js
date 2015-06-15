var fotoApp = angular.module('fotoControllers', []);

fotoApp.controller('FotoHomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(config.url).success(function(data, status, headers,config) {
        console.log('got pictures');
        $scope.pictures = data;
    });

    $scope.onImageClicked = function(data) {
        $scope.current_picture = data;
    }
}]);

fotoApp.directive('fotoFileSelect', ['$http', function($http) {
    return {
        link: function($scope, el, attrs) {
            el.bind('change', function(e) {
                console.log('file selected');
                $scope.file = e.target.files[0];
                var fileReader = new FileReader();

                fileReader.onload = function(evt) {
                    var image = new Image();
                    console.log(evt.target.result);
                    image.src = evt.target.result;
                    console.log(image.width);
                    $scope.pictures.push[{data:image.src}];
                    var cmpImage = compress(image);
                    $scope.$apply();
                    $http.post(config.url,{data:cmpImage.src});
                };

                fileReader.readAsDataURL($scope.file);

                $http.get(config.url).success(function(data, status, headers,config) {
                    console.log('got pictures');
                    $scope.pictures = data;
                });
            });
        }
    }
}]);