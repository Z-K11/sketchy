const mainWindow = document.createElement("div");
mainWindow.classList.add('mainWindow');
const body=document.querySelector("body");
body.appendChild(mainWindow);
function initialize()
{
    const sizeButton=document.querySelector("#sizeSubmit");
    let size = 0;
    const inputSize=document.querySelector("#size");
    sizeButton.addEventListener("click",e=>
    {
        e.preventDefault();
        size=inputSize.value;
        inputSize.focus();
        console.log(size);
        let divArray = [];
    const gridSize =size*size;
    if (size>=0 && size<=100)
    {
        creatGrid(gridSize,divArray);
    }
    });
    
}
function creatGrid(gridSize,divArray)
{
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
}
initialize();
mainWindow.addEventListener('mouseover',e =>
{
    if (!e.target.classList.contains('gridBox'))
        return;
    e.target.style.backgroundColor='aqua';
});