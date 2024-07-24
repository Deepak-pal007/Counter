let counter = 0;

function increment() {
    counter++;
    updateCounter();
}

function decrement() {
    counter--;
    updateCounter();
}

function updateCounter() {
    document.getElementById("counter").innerText = counter;
}