
const cnt = document.querySelector('.count--js')
const addGlass = document.querySelector('.add-glass--js')
const subGlass = document.querySelector('.subtract-glass--js')

const key = new Date().toISOString().slice(0, 10)

if (localStorage[key])
{
    console.log(`${key}: ${localStorage[key]}`)
    cnt.innerHTML = parseInt(localStorage[key])
} else {
    console.log(`No data found for ${key}. Setting to 0`)
    cnt.innerHTML = 0
    localStorage.setItem(key, 0)
}

addGlass.addEventListener('click', () => {
    let val = parseInt(localStorage[key]) + 1
    localStorage.setItem(key, val)
    cnt.innerHTML = val
})

subGlass.addEventListener('click', () => {
    let val = parseInt(localStorage[key])
    if (val > 0) {
        val = val - 1
        localStorage.setItem(key, val)
        cnt.innerHTML = val
    }
    else {
        console.log("You can't go below 0 glasses")
    }
})
