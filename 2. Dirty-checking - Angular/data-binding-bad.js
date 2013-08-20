// Try to keep number of bound template expressions below 2000
// If you implement watches on scope, make sure expression for
// watch executes very quickly

$scope.items = [];

for (var i = 0; i < 1000; i++) {
    $scope.items.push({prop1: 'val1', prop2: 'val2', prop3: 'val3'});
}

$scope.$watch('items', function() {

}, true);

// True as a third argument to $watch tells Angular to loop through
// your items for every digest cycle to check if any of them have
// changed