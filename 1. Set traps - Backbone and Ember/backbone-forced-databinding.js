var userModel = Backbone.Model.extend({
    defaults: {
        firstName: "John",
        lastName: "Smith"
    }
});

var userView = Backbone.View.extend({

    events: {
        "change input#firstName": "changeFirstNameHandler"
    },

    initialize: function (options) {
        this.firstNameInput = this.$("#firstName");
        // this.model.on("change:firstName", _.bind(this.onFirstNameChange, this));
        this.listenTo(this.model, 'change:firstName', _.bind(this.onFirstNameChange, this));
    },
    changeFirstNameHandler: function (event) {
        this.model.set("firstName", this.firstNameInput.val());
    },
    onFirstNameChange: function () {
        this.firstNameInput.val(this.model.get("firstName"));
    }

});

// Alternatives: ModelBinder (11KB), Backbone.stickit (3KB)