console.clear();

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
  })
};

// Which we then observe
// Note the third argument
Object.observe(todoModel, observer, ['deleted']);
// without this third option, defaults to intrinsic types

todoModel.label = 'Buy some milk'; // note that no changes were reported

// delete todoModel.label; 
// this change was reported