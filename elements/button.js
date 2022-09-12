
const container = document.getElementById("options");

let btn = document.createElement("button");


for(let i = 0; i< 4; i++){
    let btn = document.createElement("button")
    btn.innerHTML = `click me ${i}`;
    container.appendChild(btn);
}