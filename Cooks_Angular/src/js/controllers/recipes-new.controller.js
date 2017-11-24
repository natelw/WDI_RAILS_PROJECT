angular
  .module('cookApp')
  .controller('RecipesNewCtrl', RecipesNewCtrl);

RecipesNewCtrl.$inject = ['Recipe','$state'];
function RecipesNewCtrl(Recipe, $state) {
  const vm = this;
  vm.submit = recipe => {
    Recipe
      .save(recipe)
      .$promise
      .then(() => {
        $state.go('recipesIndex');
      });
  };
}
