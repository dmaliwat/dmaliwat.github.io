self.addEventListener('push', () => {
    self.registration.sendNotification('test message', {});
});

self.addEventListener('push', function(e) {
    console.log(e);
    var options = {
        body: e.data.text(),
        icon: 'https://img.icons8.com/color/344/user.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'images/xmark.png'
            }
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello there!', options)
    );
})
