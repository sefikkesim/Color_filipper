const color1 =["green", "red", "rgba(133,122,200)", 
"#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color")
const nav = document.querySelector(".nav-center")
const container = document.querySelector(".container")

btn.addEventListener("click",()=> {
    document.body.style.backgroundColor = rColor();
    nav.style.backgroundColor = rColor();
    container.style.backgroundColor  = rColor();
    btn.style.backgroundColor = rColor();
})

let number = () => Math.floor(Math.random() * 256)
let rColor = () =>` RGB(${number()},${number()},${number()})`
