function MainController($scope) {
  $scope.name = 'Margaret';
}

angular
  .module('app')
  .controller('MainController', MainController);