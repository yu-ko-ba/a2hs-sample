if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/a2hs-sample/sw.js')
        .then(() => { console.log('Service Worker Registered'); });
}
