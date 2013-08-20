var model = ['Buy some milk', 'Learn to code', 'Wear some plaid'];
var count = 0;

Array.observe(model, function(changeRecords) {
  count++;
  console.log('Array observe', changeRecords, count);
});

model[0] = 'Skip this step';
model[1] = 'Paul Irish all the things';