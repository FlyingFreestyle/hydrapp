const table = document.querySelector(".table--js");
const data = JSON.parse(localStorage['data'])
console.log(data)

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        let row = table.insertRow()
        let dateCell = row.insertCell()
        let dateText = document.createTextNode(key)
        dateCell.appendChild(dateText)

        let valueCell = row.insertCell()
        let valueText = document.createTextNode(value)
        valueCell.appendChild(valueText)
    }

    // for (let item in data) {
    //     console.log(item, data[item])
    //     let row = table.insertRow();
    //     let cell = row.insertCell();
    //     let text = document.createTextNode(item);
    //     cell.appendChild(text);
    // }
}


generateTableHead(table, ["date", "glasses"])
console.log(table)
generateTable(table, data)


// Object.entries(data).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
//     let el = document.createElement('tr')
//     el.classList
//   })
