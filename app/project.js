var app = angular.module('project', ['ngRoute', 'ngResource'])

.config(function config($resource, $routeProvider) {
 
  $routeProvider.when('/', {
    controller:'ProjectListController',
    templateUrl:'list.html'
  })    
  .otherwise({
    redirectTo:'/'
  });

})
.controller('ProjectListController', function($resource) {
  var projectList = this;
});