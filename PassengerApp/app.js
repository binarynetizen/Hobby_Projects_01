let save_element = document.getElementById("save-element");
let counter_element = document.getElementById("counter");
let count = 0;
console.log(counter_element);
function increment() {
    count++;
    counter_element.textContent = count;
}

function save() {
    let totalPassenger = count + " - ";
    save_element.textContent += totalPassenger;
    count = 0;
    counter_element.textContent = count;
}
