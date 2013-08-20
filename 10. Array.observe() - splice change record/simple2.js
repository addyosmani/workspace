var arr = new Array(1000);

function observer(changes){
  changes.forEach(function(change, i){
    console.log(change);
  })
};

Array.observe(arr, observer);

for (var i = 0; i < 500; i++) {
  arr[i] = 'test';
}