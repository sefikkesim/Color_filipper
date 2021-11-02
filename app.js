const color1 =["green", "red", "rgba(133,122,200)", 
"#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color")
const nav = document.querySelector(".nav-center")
const container = document.querySelector(".container")
let date = new Date;
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let spanHour = document.querySelector("#hour")
let spanMinute = document.querySelector("#minutes")
let spanSecond = document.querySelector("#second")
let header = document.querySelector("h4")

spanHour.textContent = currentHour;
spanMinute.textContent = currentMinute.toString().padStart(2,0);
spanSecond.textContent = currentSecond.toString().padStart(2,0);;

btn.addEventListener("click",()=> {
    document.body.style.backgroundColor = rColor();
    nav.style.backgroundColor = rColor();
    container.style.backgroundColor  = rColor();
    btn.style.backgroundColor = rColor();
    spanHour.style.color = rColor();
    spanMinute.style.color = rColor();
    spanSecond.style.color =rColor();
    header.style.color = rColor();
})

let number = () => Math.floor(Math.random() * 256)
let rColor = () =>` RGB(${number()},${number()},${number()})`

function updateTime(){
let date = new Date;
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let spanHour = document.querySelector("#hour")
let spanMinute = document.querySelector("#minutes")
let spanSecond = document.querySelector("#second")

spanHour.textContent = currentHour;
spanMinute.textContent = currentMinute.toString().padStart(2,0);
spanSecond.textContent = currentSecond.toString().padStart(2,0);;
}
setInterval(updateTime,1000);
updateTime()
