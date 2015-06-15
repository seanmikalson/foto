var fotoApp = angular.module('fotoControllers', []);

fotoApp.controller('FotoHomeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(config.url).success(function(data, status,headers,config) {
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
                var button = $('.btn-file').button('sharing');
                console.log('file selected');
                $scope.file = e.target.files[0];
                var fileReader = new FileReader();

                fileReader.onload = function(evt) {
                    button.button('reset');
                    var image = new Image();
                    image.src = evt.target.result;

                    $scope.$apply(function() {
                        $scope.pictures.push({data:image.src});
                    });

                    var cmpImage = compress(image);
                    $http.post(config.url,{data:cmpImage.src});
                };

                fileReader.readAsDataURL($scope.file);
            });
        }
    }
}]);