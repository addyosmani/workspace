var model = {
      a: {}
    }

var _b = 2;

Object.defineProperty(model.a, 'b', {
  get: function() { return _b; },
  set: function(b) {

    Object.getNotifier(this).notify({
      type: 'updated',
      name: 'b',
      oldValue: _b
    });

    console.log('set', b);

    _b = b;
  }
});

function observer(changes){
  changes.forEach(function(change, i){
    console.log(change);
  })
}

Object.observe(model.a, observer);

model.a.b = 4; // will be observed.