function SelectPeopleController($scope, $navigate, $http){

    $http.get('res/users.json').success(function(data) {
        $scope.users = data;
    });

    $scope.select_user = function(user){
        localStorage.setItem('users',JSON.stringify(JSON.parse(localStorage.getItem('users')||'[]').push(user)))
    }

    $scope.go_to_order_index_page = function(){
        $navigate.go('/order_index')
    }
    $scope.back = function(){
        $scope.go_to_order_index_page()
    }
}