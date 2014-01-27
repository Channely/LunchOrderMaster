function SelectRestaurantController($scope, $navigate, $http){
    $http.get('res/restaurants.json').success(function(data) {
        $scope.users = data;
    });



    $scope.select_restaurant = function(restaurant){
        localStorage.setItem('restaurant',restaurant)
    }



    $scope.go_to_order_index_page = function(){
        $navigate.go('/order_index')
    }
    $scope.back = function(){
        $scope.go_to_order_index_page()
    }
}