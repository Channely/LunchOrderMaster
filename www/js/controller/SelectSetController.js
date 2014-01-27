function SelectSetController($scope, $navigate, $http){

    $http.get('res/foods.json').success(function(data) {
        $scope.users = data[localStorage.getItem('restaurant')];
    });

    $scope.go_to_order_index_page = function(){
        $navigate.go('/order_index')
    }
    $scope.back = function(){
        $scope.go_to_order_index_page()
    }
}