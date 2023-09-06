
const cnt = document.querySelector('.count--js')
const addGlass = document.querySelector('.add-glass--js')
const subGlass = document.querySelector('.subtract-glass--js')

let data = {}
let key = new Date().toISOString().slice(0, 10)

function updateKey() {
    key = new Date().toISOString().slice(0, 10)
}

function currentKeyExists(key) {
    if (data[key] === undefined) {
        console.log(`No data found for ${key}. Setting to 0`)
        data[key] = 0
    }
}

function init() {
    if (localStorage['data']) {
        data = JSON.parse(localStorage['data'])
    }
    currentKeyExists(key)
    localStorage.setItem('data', JSON.stringify(data))
    cnt.innerHTML = data[key]
}

function operate(num) {
    currentKeyExists(key)
    const sum = data[key] + num
    if (sum >= 0) {
        data[key] = sum
    } else {
        console.log("You can't go below 0 glasses")
    }
    localStorage.setItem('data', JSON.stringify(data))
    cnt.innerHTML = data[key]
}

init()
const interval = setInterval(updateTimestamp, 10*1000);

addGlass.addEventListener('click', function() {
    operate(1)
})

subGlass.addEventListener('click', function() {
    operate(-1)
})
