
// disableBackButton.js
history.replaceState(null, '', location.href);
window.addEventListener('popstate', function () {
    history.replaceState(null, '', location.href);
});