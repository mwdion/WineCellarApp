var app = angular.module('wineApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("main", {
        url:'/',
        templateUrl: "app/templates/main.html",
        controller: "MainCtrl"
      });
      $urlRouterProvider.otherwise('/');
  });