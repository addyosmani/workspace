console.clear();

// A model can be a simple vanilla object
var todoModel = {
  label: 'Default',
  completed: false
};

Object.observe(todoModel, function(changeRecords){
  changeRecords.forEach(function(change){
    console.log({
      changeType:           change.type, 
      affectedObject:       change.object, 
      affectedPropertyName: change.name, 
      valueBeforeChange:    change.oldValue 
    });
  })
});

todoModel.label = 'Buy some bread';
delete todoModel.label;

/*
Object.observe(todoModel, function(changeRecords){
  changeRecords.forEach(function(change){

    console.log(
      
    change.type, // new, updated, deleted or reconfigured
    change.object, // affected JS object
    change.name, // affected property name
    change.oldValue // value of the property before the change

    );
  })
});
*.