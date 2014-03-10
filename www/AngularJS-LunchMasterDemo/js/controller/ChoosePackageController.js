function ChoosePackageController($scope, $navigate, $http) {
    $http.get('res/foods.json').success(function (data) {
        $scope.foods = data[localStorage.getItem('restaurant')];
    });


    $scope.go_help_ordering_page = function () {
        $navigate.go('/help_ordering_page', 'slide', 'right')
    }
    $scope.back = function () {
        $scope.go_help_ordering_page()
    }
    $scope.select_food = function (food_information_object) {
        localStorage.setItem('food_information_object', JSON.stringify(food_information_object));
        $scope.go_help_ordering_page()
    }

}