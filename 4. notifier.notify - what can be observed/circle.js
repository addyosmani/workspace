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
                type: 'updated', // deleted, new etc.
                name: 'radius',
                oldValue: radius
            });

            radius: newRadius;
        }
    });
}