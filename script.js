const mainWindow = document.createElement("div");
mainWindow.classList.add('mainWindow');
const body=document.querySelector("body");
body.appendChild(mainWindow);

let divArray = [];
let size = 0;
size = prompt('Please provide gride size');
const gridSize =size*size;
for (let i=0;i<gridSize;i++)
    {
        divArray.push(document.createElement("div"));
        divArray[i].classList.add('gridBox');
        divArray[i].style.width=`${800/size}px`;
        divArray[i].style.height=`${800/size}px`;
        divArray[i].setAttribute("id",`box_${i}`);
        //divArray[i].textContent="how are you";
        mainWindow.appendChild(divArray[i]);
        console.log(divArray[i]);
    }
mainWindow.addEventListener('mouseover',e =>
{
    if (!e.target.classList.contains('gridBox'))
        return;
    e.target.style.backgroundColor='aqua';
})