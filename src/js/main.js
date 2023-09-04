
const cnt = document.querySelector('.count--js')
const addGlass = document.querySelector('.add-glass--js')
const subGlass = document.querySelector('.subtract-glass--js')

let data = {}

function init() {
    const key = new Date().toISOString().slice(0, 10)
    if (localStorage['data'])
    {
        data = JSON.parse(localStorage['data'])
        if (data[key] === undefined) {
            data[key] = 0
        }
        console.log(data)
        cnt.innerHTML = data[key]
    } else {
        data[key] = 0
        localStorage.setItem('data', JSON.stringify(data))
        console.log(`No data found for ${key}. Setting to 0`)
        cnt.innerHTML = data[key]
    }
}

init()

addGlass.addEventListener('click', () => {
    const key = new Date().toISOString().slice(0, 10)
    data[key] = data[key] + 1
    localStorage.setItem('data', JSON.stringify(data))
    cnt.innerHTML = data[key]
})

subGlass.addEventListener('click', () => {
    const key = new Date().toISOString().slice(0, 10)
    let val = parseInt(localStorage[key])
    if (data[key] > 0) {
        data[key] = data[key] - 1
        localStorage.setItem('data', JSON.stringify(data))
        cnt.innerHTML = data[key]
    }
    else {
        console.log("You can't go below 0 glasses")
    }
})
