let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

let show = document.querySelector(".container");

let count = 0;
plus.addEventListener("click" ,()=>{
    ++count;
    show.innerText = count;
})
minus.addEventListener("click" ,()=>{
    --count;
    show.innerText = count;
})
reset.addEventListener("click" ,()=>{
    count = 0;
    show.innerText = count;
})