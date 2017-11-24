angular
  .module('cookApp')
  .config(Router);


Router.$inject = ['$stateProvider', '$locationProvider'];
function Router($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('recipesIndex', {
      url: '/recipes',
      templateUrl: '/js/views/recipes/index.html',
      controller: 'RecipesIndexCtrl as vm'
    });
}
