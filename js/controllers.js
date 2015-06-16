var fotoApp = angular.module('fotoControllers', []);

fotoApp.controller('FotoHomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(config.url).success(function(data, status,headers,config) {
        $scope.pictures = data;
    });

    $scope.onImageClicked = function(data) {
        $scope.current_picture = data;
    };
}]);

fotoApp.directive('fotoFileSelect', ['$http', function($http) {
    return {
        link: function($scope, el, attrs) {
            el.on('change', function(e) {
                var button = $('.btn-file').button('sharing');
                $scope.file = e.target.files[0];
                var fileReader = new FileReader();

                fileReader.onload = function(evt) {
                    var image = new Image();
                    image.src = fileReader.result;

                    $scope.$apply(function() {
                        $scope.pictures.push({data:image.src});

                        var cmpImage = compress(image);
                        $http.post(config.url,{data:cmpImage.src}).success(function() {
                            button.button('reset');
                            el.val(null);
                        });
                    });
                };

                fileReader.readAsDataURL($scope.file);
            });
        }
    }
}]);