
const mainContainer = document.querySelector(".divConatiner");
const gridSizeBtn1 = document.querySelector(".gridSize16");
const gridSizeBtn2 = document.querySelector(".gridSize64");
const gridResetBtn = document.querySelector(".resetGrid");

let coloroption1 = 'black';
let coloroption2 = "white";
let gridSize = 16;

gridSizeBtn1.addEventListener('click', ()=> {
    gridSize = 16;
    
});

gridSizeBtn2.addEventListener('click',()=>{
    gridSize = 64;
});



const randomR = Math.floor(Math.random() * 256)
const randomG = Math.floor(Math.random() * 256)
const randomB = Math.floor(Math.random() * 256)
let coloroption3 = `rgb(${randomR}, ${randomG}, ${randomB})`;


for (let i=1; i<=gridSize*gridSize;i++){

let divGrid = document.createElement("div");
divGrid.className = "gridDiv"
mainContainer.appendChild(divGrid);
divGrid.addEventListener('mouseover', ()=>{
divGrid.style.background = coloroption1;
});
}


const squares = document.querySelectorAll(".gridDiv");

function resetDivs() {
  squares.forEach((square) => {
    square.style.background = "white";
  });
}

gridResetBtn.addEventListener('click', ()=>{resetDivs();});