
function Thingy(a, b, c) {
  this.a = a;
  this.b = b;
}

Thingy.MULTIPLY = 'multiply';
Thingy.INCREMENT = 'increment';
Thingy.INCREMENT_AND_MULTIPLY = 'incrementAndMultiply';

var observer, observer2 = {
    records: undefined,
    callbackCount: 0,
    reset: function() {
      this.records = undefined;
      this.callbackCount = 0;
    },
};

observer.callback = function(r) {
    console.log(r);
    observer.records = r;
    observer.callbackCount++;
};


Thingy.prototype = {
  increment: function(amount) {
    var notifier = Object.getNotifier(this);

    // Tell the system that a collection of work
    // compromises a given changeType
    // e.g
    // notifier.performChange('foo', 'performFooChangeFn');
    // notifier.notify('foo', 'fooChangeRecord');
    notifier.performChange(Thingy.INCREMENT, function() {
      this.a += amount;
      this.b += amount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.INCREMENT,
      incremented: amount
    });
  },

  multiply: function(amount) {
    var notifier = Object.getNotifier(this);

    notifier.performChange(Thingy.MULTIPLY, function() {
      this.a *= amount;
      this.b *= amount;
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.MULTIPLY,
      multiplied: amount
    });
  },

  incrementAndMultiply: function(incAmount, multAmount) {
    var notifier = Object.getNotifier(this);

    notifier.performChange(Thingy.INCREMENT_AND_MULTIPLY, function() {
      this.increment(incAmount);
      this.multiply(multAmount);
    }, this);

    notifier.notify({
      object: this,
      type: Thingy.INCREMENT_AND_MULTIPLY,
      incremented: incAmount,
      multiplied: multAmount
    });
  }
}


observer2.callback = function(r){
	console.log('Observer 2', r);
}


Thingy.observe = function(thingy, callback) {
  // Object.observe(obj, callback, opt_acceptList)
  Object.observe(thingy, callback, [Thingy.INCREMENT,
                                    Thingy.MULTIPLY,
                                    Thingy.INCREMENT_AND_MULTIPLY,
                                    'updated']);
}

Thingy.unobserve = function(thingy, callback) {
  Object.unobserve(thingy);
}

var thingy = new Thingy(2, 4);

// breaking here..

Object.observe(thingy, observer.callback); 
Thingy.observe(thingy, observer2.callback);
thingy.increment(3);               // { a: 5, b: 7 }
thingy.b++;                        // { a: 5, b: 8 }
thingy.multiply(2);                // { a: 10, b: 16 }
thingy.a++;                        // { a: 11, b: 16 }
thingy.incrementAndMultiply(2, 2); // { a: 26, b: 36 }