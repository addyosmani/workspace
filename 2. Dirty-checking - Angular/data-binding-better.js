
// Instead, only check with the scoped item length has changed
// Expression executes more quickly

$scope.items = [];

for (var i = 0; i < 1000; i++) {
    $scope.items.push({prop1: 'val1', prop2: 'val2', prop3: 'val3'});
}

$scope.$watch('items.length', function() {

});