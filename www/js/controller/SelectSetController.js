function SelectSetController($scope, $navigate, $http){
    $http.get('res/foods.json').success(function(data) {
        $scope.users = data[localStorage.getItem('restaurant')];
    });


    $scope.select_food = function(food_information_object){
        localStorage.setItem('food_information_object',JSON.stringify(food_information_object));
    }

    $scope.go_to_order_index_page = function(){
        $navigate.go('/order_index')
    }
    $scope.back = function(){
        $scope.go_to_order_index_page()
    }
}