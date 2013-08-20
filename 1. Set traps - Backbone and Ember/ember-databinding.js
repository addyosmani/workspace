// Container objects
MyApp.president = Ember.Object.create({
  name: "Barak Obama"
});
 
MyApp.country = Ember.Object.create({
  // ending a property with "Binding" tells Ember to
  // create a binding to the presidentName property
  presidentNameBinding: "MyApp.president.name"
});
 
// Later, after Ember has resolved bindings
MyApp.country.get("presidentName");
// "Barack Obama"
 
// Data from the server needs to be converted
// Composes poorly with existing code