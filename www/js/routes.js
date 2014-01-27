myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/home_page.html",
        controller: HomePageController
    }).when("/home_page", {
            templateUrl: "pages/home_page.html",
            controller: HomePageController
        }).when("/order_index", {
            templateUrl: "pages/order_index.html",
            controller: OrderIndexController
        }).otherwise({
            redirectTo: "/"
        });


    //routing generate
    //routing generated over
});

/** Here is example
myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_list_page.html",
        controller: ActivityListController
    }).when("/activity/create", {
            templateUrl: "pages/activity_create_page.html",
            controller: ActivityCreateController
        }).when("/sign_ups/list/:activity_name", {
            templateUrl: "pages/apply_page.html",
            controller: SignUpListController
        }).otherwise({
            redirectTo: "/"
        });
});
**/