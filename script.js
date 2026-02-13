const mainWindow = document.createElement("div");
mainWindow.classList.add('mainWindow');
const body=document.querySelector("body");
body.appendChild(mainWindow);
reset = false;

function creatGrid(gridSize,divArray,size)
{
    for (let i=0;i<gridSize;i++)
        {

            divArray[i]=document.createElement("div");
            divArray[i].classList.add('gridBox');
            divArray[i].style.width=`${800/size}px`;
            divArray[i].style.height=`${800/size}px`;
            divArray[i].setAttribute("id",`box_${i}`);
            //divArray[i].textContent="how are you";
            mainWindow.appendChild(divArray[i]);

        }
}
function destroyGrid(divArray)
{
    for (let i=0;i<divArray.length;i++)
    {
        divArray[i].remove();
    }
    divArray.length=0;
}
const sizeButton=document.querySelector("#sizeSubmit");
let size = 0;
let divArray = [];
const inputSize=document.querySelector("#size");
sizeButton.addEventListener("click",e=>
    {
        e.preventDefault();
        size=inputSize.value;
        inputSize.focus();
        console.log(size);
        const gridSize =size*size;
        switch (reset) {
            case false:
                if (size>=0 && size<=100)
                {
                    creatGrid(gridSize,divArray,size);
                    reset = true;
                }
                break;
            case true:
                destroyGrid(divArray);
                if(size>=0 && size<=100)
                    creatGrid(gridSize,divArray,size);
                break;
            default:
                alert("Error in grid creation or destruction");
                break;
        }
       
    });
mainWindow.addEventListener('mouseover',e =>
{
    if (!e.target.classList.contains('gridBox'))
        return;
    e.target.style.backgroundColor='aqua';
});