function OrderIndexController($scope, $navigate){

    $scope.go_to_home_page = function(){
        $navigate.go('/')
    }
    $scope.back_to_home_page = function(){
        $scope.go_to_home_page()
    }
    $scope.go_to_select_people_page = function(){
        $navigate.go('/order_index/select_people')
    }
    $scope.go_to_select_restaurant_page = function(){
        $navigate.go('/order_index/select_Restaurant')
    }
    $scope.go_to_select_set_page = function(){
        $navigate.go('/order_index/select_set')
    }
    $scope.submit_ordering = function(){
        $scope.go_to_home_page();
    }

}