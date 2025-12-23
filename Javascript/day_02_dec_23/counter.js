let count = 0;

function increment() {
    count = count + 1;
    document.querySelector('#countSpan').innerHTML = count;
}
function decrement() {
    count = count - 1;
    document.querySelector('span').innerHTML = count;
}
function reset() {
    count = 0;
    document.querySelector('span').innerHTML = count;
}