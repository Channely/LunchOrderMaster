function OrdersShowController($scope, $navigate, $http){

    $scope.orders = change_foods_price_to_float_format(JSON.parse(localStorage.getItem('orders_list')));
//    $scope.orders = JSON.parse(localStorage.getItem('orders_list'))
    $scope.orders_count = $scope.orders.length

    $http.get('res/users.json').success(function(data) {
        $scope.unorders = get_the_unorders_people_name_array(data)
        $scope.unorders_count = $scope.unorders.length
    });

    $scope.total_price = get_total_price()

    $scope.go_home_page = function(){
        $navigate.go('/', 'slide', 'right')
    }
    $scope.back = function(){
        $scope.go_home_page()
    }
}