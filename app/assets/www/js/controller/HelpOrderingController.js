function HelpOrderingController($scope, $navigate){

    $scope.user = localStorage.getItem('user')
    $scope.restaurant = localStorage.getItem('restaurant')
    $scope.food = JSON.parse(localStorage.getItem('food_information_object'))


    $scope.go_home_page = function(){
        $navigate.go('/', 'slide', 'right')
    }
    $scope.back = function(){
        $scope.go_home_page()
    }
    $scope.go_choose_people_page = function(){
        $navigate.go('/choose_people_page')
    }
    $scope.go_choose_restaurant_page = function(){
        $navigate.go('/choose_restaurant_page')
    }
    $scope.go_choose_package_page = function(){
        $navigate.go('/choose_package_page')
    }
    $scope.submit_ordering = function(){
        store_the_order_information()
        clear_order_index_page_data()
        $scope.go_home_page();
    }

}