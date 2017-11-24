angular
  .module('cookApp')
  .controller('RecipesIndexCtrl', RecipesIndexCtrl);

RecipesIndexCtrl.$inject = ['Recipe'];
function RecipesIndexCtrl(Recipe) {
  const vm = this;
  vm.recipes = Recipe.query();
}
