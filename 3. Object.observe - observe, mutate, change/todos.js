// A model can be a simple vanilla object
var todoModel = {
  label: 'Default',
  completed: false
};
 
// We then specify a callback for whenever mutations
// are made to the object
function observer(changes){
  changes.forEach(function(change, i){
    console.log(change);
    
    /*
      what property changed? change.name
      how did it change? change.type
      whats the current value? change.object[change.name]
    */
  })
}

// Which we then observe
Object.observe(todoModel, observer);

// Let's play!
todoModel.label = 'Buy some more milk';
 
/*
  label changed
  It was changed by being updated
  Its current value is 'Buy some more milk'
*/
 
todoModel.completeBy = '01/01/2014';
/*
 completeBy changed
 It was changed by being new
 Its current value is '01/01/2014'
*/
 
delete todoModel.completed;
 
/*
 completed changed
 It was changed by being deleted
 Its current value is undefined
*/

// Stop observing changes
Object.unobserve(todoModel, observer);
