// controller.js
angular
    .module('app')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$state'];
function LoginController($scope, $state) {
    $scope.login = function () {
        //    alert("asldkfasldfkaj");
        $state.go('app.main');
    }
}