
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let refreshBtn = document.getElementById("refresh-btn")

let count = 0

console.log(refreshBtn)

function add() {
    count = count + 1
    countEl.innerText = count
}

function remove(){
    count = count -1 
    countEl.innerHTML = count
}

function save(){
    let countStr = count + "-"
    saveEl.innerHTML += countStr
    countEl.innerText = 0
    count = 0
}


function refresh(){
    saveEl.innerHTML = ""
    count = 0
}

k