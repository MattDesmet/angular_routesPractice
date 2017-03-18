var app = angular.module('app', []);
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  // .when('/',{
  //   templateUrl: 'index.html'
  //   // controller:
  //   // controllerAs:
  // })
  .when('/',{
    templateUrl: 'partials/partial1.html'
    // controller:
    // controllerAs:
  })
  .when('/partial2',{
    templateUrl: 'partials/partial2.html'
    // controller:
    // controllerAs:
  })
  .otherwise({
    redirectTo: '/'
  });
});

//     $routeProvider
//     .when("/", {
//         templateUrl : "main.htm"
//     })
//     .when("/red", {
//         templateUrl : "red.htm"
//     })
//     .when("/green", {
//         templateUrl : "green.htm"
//     })
//     .when("/blue", {
//         templateUrl : "blue.htm"
//     });
// });
