function Circle(radius) {

    Object.defineOwnProperty(this, 'radius', {
        get: function () {
            return radius;
        },
        set: function (newRadius) {
            if (radius == newRadius)
                return;

            var notify = Object.getNotifier(this);

            // notify(changeRecord)
            notifier.notify({
                type: 'updated', // deleted, new, reconfigured etc.
                // you can also just custom type (e.g 'foo')
                name: 'radius',
                oldValue: radius
            });

            radius: newRadius;
        }
    });
}

/*
notifier.notify({
    type: 'reconfigured', 
    name: 'radius',
    oldValue: 'circumference'
});
*/