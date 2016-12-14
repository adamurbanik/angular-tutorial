// 'use strict';

window.movieStubApp = angular.module('movieStubApp', ['ui.router', 'ngResource']);

movieStubApp.controller("movieStubController", ['$scope', 'movieStubFactory', '$location', function ($scope, movieStubFactory, $location) {
    
    $scope.headerSrc = "tmpl/header.html";
    $scope.movies = movieStubFactory.query();
    $scope.currMovie = null;
    $scope.getMovieById = function (id) {
        var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = $scope.movies[i];
            if (movie.id == id) {
                $scope.currMovie = movie;
            }
        }
    };
    $scope.back = function () {
        window.history.back();
    };
    $scope.getCount = function (n) {
        return new Array(n);
    };
    $scope.isActive = function (route) {
        console.log("route " + route);
        console.log("location " + $location.path());
        console.log(route === $location.path());
        return route === $location.path();
    };
    $scope.isActivePath = function (route) {
        console.log($location.path().indexOf(route));
        return ($location.path()).indexOf(route) >= 0;
    };
}]);

movieStubApp.controller("movieDetailsController", function ($scope, $stateParams) {
    $scope.getMovieById($stateParams.id);
});

movieStubApp.controller("bookTicketsController", function ($scope, $http, $location, $stateParams) {
    $scope.getMovieById($stateParams.id);
    $scope.onlyNumbers = /^\d+$/;
    $scope.formData = {};
    $scope.formData.movie_id = $scope.currMovie.id;
    $scope.formData.movie_name = $scope.currMovie.name;
    $scope.formData.date = "Today";
    $scope.processForm = function () {
        console.log($scope.formData);
        $http({
            method: 'POST',
            url: '/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                $location.path("/bookings");
            });
    };
});
movieStubApp.controller("bookingDetailsController", function ($scope, movieStubBookingsFactory) {
    $scope.bookings = movieStubBookingsFactory.query();
});