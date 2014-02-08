function ChooseRestaurantController($scope, $navigate, $http){
    $http.get('res/restaurants.json').success(function(data) {
        $scope.restaurants = data;
    });

    $scope.go_help_ordering_page = function(){
        $navigate.go('/help_ordering_page', 'slide', 'right')
    }
    $scope.back = function(){
        $scope.go_help_ordering_page()
    }
    $scope.select_restaurant = function(restaurant){
        localStorage.setItem('restaurant',restaurant)
        $scope.go_help_ordering_page()
    }

}