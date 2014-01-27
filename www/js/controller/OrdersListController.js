function OrdersListController($scope, $navigate){

    $scope.go_to_home_page = function(){
        $navigate.go('/')
    }
    $scope.back = function(){
        $scope.go_to_home_page()
    }
}