// ====================================
// SCRIPT INJECTION
// ====================================
const addScript = async src => new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.addEventListener('load', resolve);
    el.addEventListener('error', reject);
    document.body.append(el);
});
await addScript('https://cdn.socket.io/4.8.0/socket.io.min.js');
await addScript('/js/socket.js');
