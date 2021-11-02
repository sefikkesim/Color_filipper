const color1 =["green", "red", "rgba(133,122,200)", 
"#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click",()=> {
    document.body.style.backgroundColor = rColor();
    color.textContent = rColor()

})

let number = () => Math.floor(Math.random() * 256)
let rColor = () =>` RGB(${number()},${number()},${number()})`
