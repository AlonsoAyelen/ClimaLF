

angular.module('ionicApp', []).controller('MainCtrl', function($scope, $http) {
 $http.get('http://clima.info.unlp.edu.ar/last').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  },
  function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
}),
    $scope.rta = function() {
        return $scope.temperature;
    }
});



