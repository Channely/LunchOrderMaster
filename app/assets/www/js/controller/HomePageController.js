function HomePageController($scope, $navigate){

    $scope.go_help_ordering_page = function(){
        $navigate.go('/help_ordering_page')
    }
    $scope.go_orders_show_page = function(){
        $navigate.go('/orders_show_page')
    }

}