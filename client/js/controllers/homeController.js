myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        id:0,
        image: "img/code1.jpeg"
    },
    {
        id:1,
        image: "img/code2.jpeg"
    },
    {
        id:2,
        image: "img/code3.jpeg"
    }]
}]);