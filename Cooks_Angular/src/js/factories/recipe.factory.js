angular
  .module('cookApp')
  .factory('Recipe', Recipe);

Recipe.$inject = ['API', '$resource'];
function Recipe(API, $resource){
  return $resource(`${API}/recipes/:id`, { id: '@_id'}, {
    update: { method: 'PUT' }
  });
}
