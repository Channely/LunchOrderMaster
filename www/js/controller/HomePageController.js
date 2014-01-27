function HomePageController($scope, $navigate){

    $scope.go_ordering = function(){
        $navigate.go('/order_index')
    }
    $scope.look_orders = function(){
        $navigate.go('/orders_list')
    }

}