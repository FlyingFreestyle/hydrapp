
const cnt = document.querySelector('.count--js')
const addGlass = document.querySelector('.add-glass--js')
const subGlass = document.querySelector('.subtract-glass--js')

let data = {}
let key = ""

function updateKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');

    key = `${year}-${month}-${day}`;
}

function updateCounterAndStorage() {
    if (data[key] === undefined) {
        console.log(`No data found for ${key}. Setting to 0`)
        data[key] = 0
    }
    cnt.textContent = data[key]
    localStorage.setItem('data', JSON.stringify(data))
}

function init() {
    if (localStorage['data']) {
        data = JSON.parse(localStorage['data'])
    }
    updateKey()
    updateCounterAndStorage()
}

function operate(num) {
    const sum = data[key] + num
    if (sum >= 0) {
        data[key] = sum
    } else {
        console.log("You can't go below 0 glasses")
    }
    updateCounterAndStorage()
}

init()
const keyInterval = setInterval(() => {
    updateKey()
    updateCounterAndStorage()
}, 10*1000);

addGlass.addEventListener('click', function() {
    operate(1)
})

subGlass.addEventListener('click', function() {
    operate(-1)
})
