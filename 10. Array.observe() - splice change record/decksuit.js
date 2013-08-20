function DeckSuit() {
  this.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K');
}

DeckSuit.SHUFFLE = 'shuffle';

DeckSuit.prototype = {
  __proto__: Array.prototype,

  shuffle: function() {
    var notifier = Object.getNotifier(this);
    notifier.performChange(DeckSuit.SHUFFLE, function() {
      this.reverse();
      this.sort(function() { return Math.random()* 2 - 1; });
      var cut = this.splice(0, 6);
      Array.prototype.push.apply(this, cut);
      this.reverse();
      this.sort(function() { return Math.random()* 2 - 1; });
      var cut = this.splice(0, 6);
      Array.prototype.push.apply(this, cut);
      this.reverse();
      this.sort(function() { return Math.random()* 2 - 1; });
    }, this);

    notifier.notify({
      object: this,
      type: DeckSuit.SHUFFLE
    });
  },
}

DeckSuit.observe = function(thingy, callback) {
  Object.observe(thingy, callback, [DeckSuit.SHUFFLE]);
}

DeckSuit.unobserve = function(thingy, callback) {
  Object.unobserve(thingy);
}

function observer2(changes){
  changes.forEach(function(change, i){
    console.log(change);
    
    /*
      what property changed? change.name
      how did it change? change.type
      whats the current value? change.object[change.name]
    */
  })
}

var deck = new DeckSuit;

DeckSuit.observe(deck, observer2);
deck.shuffle();