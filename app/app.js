var app = angular.module('wineApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("main", {
        url:'/',
        templateUrl: "app/templates/main.html",
        controller: "MainCtrl"
      })
      .state("newwine",{
        url:'/new',
        templateUrl: "app/templates/new.html",
        controller: "NewCtrl"
        })
      .state('show',{
        url: '/show/:id',
        templateUrl: "app/templates/show.html",
        controller: "ShowCtrl"
      })
      .state('edit',{
        url: '/edit/:id',
        templateUrl: "app/templates/edit.html",
        controller: "EditCtrl"
      })
      $urlRouterProvider.otherwise('/');
  });