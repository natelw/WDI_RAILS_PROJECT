angular
  .module('cookApp')
  .config(Router);


Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
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
    })
    .state('recipesNew', {
      url: '/recipes/new',
      templateUrl: '/js/views/recipes/form.html',
      controller: 'RecipesNewCtrl as vm'

    });
  $urlRouterProvider.otherwise('/');

}
