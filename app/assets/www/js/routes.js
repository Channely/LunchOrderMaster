myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/home_page.html",
        controller: HomePageController
    }).when("/home_page", {
            templateUrl: "pages/home_page.html",
            controller: HomePageController
        }).when("/help_ordering_page", {
            templateUrl: "pages/help_ordering_page.html",
            controller: HelpOrderingController
        }).when("/choose_people_page", {
            templateUrl: "pages/choose_people_page.html",
            controller: ChoosePeopleController
        }).when("/choose_restaurant_page", {
            templateUrl: "pages/choose_restaurant_page.html",
            controller: ChooseRestaurantController
        }).when("/choose_package_page", {
            templateUrl: "pages/choose_package_page.html",
            controller: ChoosePackageController
        }).when("/orders_show_page", {
            templateUrl: "pages/orders_show_page.html",
            controller: OrdersShowController
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