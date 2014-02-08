function ChoosePeopleController($scope, $navigate, $http){
    $http.get('res/users.json').success(function(data) {
        $scope.users = data;
    });

    $scope.go_help_ordering_page = function(){
        $navigate.go('/help_ordering_page', 'slide', 'right')
    }
    $scope.back = function(){
        $scope.go_help_ordering_page()
    }
    $scope.select_user = function(user){
        localStorage.setItem('user',user)
        $scope.go_help_ordering_page()
    }

}