const mainWindow = document.createElement("div");
mainWindow.classList.add('mainWindow');
const body=document.querySelector("body");
body.appendChild(mainWindow);

let divArray = [];
const gridSize =16;
for (let i=0;i<gridSize;i++)
    {
        divArray.push(document.createElement("div"));
        divArray[i].classList.add('gridBox');
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