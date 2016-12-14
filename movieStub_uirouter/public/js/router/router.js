movieStubApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    
        .state('root', {
            url: "/",
            templateUrl: 'tmpl/home.html',
            controller: 'movieStubController'
        })
        
        .state('movieread', {
            url: '/movie/:id',
            templateUrl: 'tmpl/movie.html',
            controller: 'movieDetailsController'
        })
        
        .state('bookings', {
            url: '/bookings',
            templateUrl: 'tmpl/bookings.html',
            controller: 'bookingDetailsController'
        })
        
        .state('bookTickets', {
            url: '/bookTickets/:id',
            templateUrl: 'tmpl/bookTickets.html',
            controller: 'bookTicketsController'
        });
        
        
    // $state.go('root')
    // $state.go('bookings') 
    
});