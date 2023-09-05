
const cnt = document.querySelector('.count--js')
const addGlass = document.querySelector('.add-glass--js')
const subGlass = document.querySelector('.subtract-glass--js')

let data = {}

function currentKeyExists(key) {
    if (data[key] === undefined) {
        console.log(`No data found for ${key}. Setting to 0`)
        data[key] = 0
    }
}

function init() {
    const key = new Date().toISOString().slice(0, 10)
    if (localStorage['data']) {
        data = JSON.parse(localStorage['data'])
    }
    currentKeyExists(key)
    console.log(data)
    localStorage.setItem('data', JSON.stringify(data))
    cnt.innerHTML = data[key]
}

function operate(num) {
    const key = new Date().toISOString().slice(0, 10)
    currentKeyExists(key)
    if (data[key] >= 0) {
        data[key] = data[key] + num
    } else {
        console.log("You can't go below 0 glasses")
    }
    localStorage.setItem('data', JSON.stringify(data))
    cnt.innerHTML = data[key]
}

init()

addGlass.addEventListener('click', function() {
    operate(1)
})

subGlass.addEventListener('click', function() {
    operate(-1)
})
