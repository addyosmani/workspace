var model = [1];
var count = 0;

Array.observe(model, function(changeRecords) {
  count++;
  console.log('Array observe', changeRecords, count);
});

model[0] = 2;
model[1] = 3;