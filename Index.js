//Lets Deal with Js to make our app More interactive
let button = document.getElementById('btn1')
let countEl = document.getElementById("count")
let saveEl = document.getElementById("btn")
let but = document.getElementById("btn2")
let show = document.getElementById("display")

let count = 0

button.addEventListener("click",increment)

function increment(){
    count=count+1
    countEl.textContent = count
}

but.addEventListener("click",save)
function save(){
    let store = count +" - "
    show.textContent += store
    count = 0
    countEl.textContent = count
}