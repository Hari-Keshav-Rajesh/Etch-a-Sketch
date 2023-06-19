function sizeChange(){
    size=prompt("Enter new size");
    grid.innerHTML='';
    for(let i=0;i<size;i++){
        let column=document.createElement("div");
        column.classList.add("column");
        for(let j=0;j<size;j++){
            let row=document.createElement("div");
            row.style.cssText="width:50px;height:50px;";
            row.style.border="thin double red"
            row.classList.add("square");
            row.style.
            column.appendChild(row);
        }
        column.style.display="flex";
        column.style.justifyContent="center";
        column.style.alignItems="center";
        grid.appendChild(column);
    }


}


let size=16;
const changeSize=document.querySelector(".prompt");
changeSize.addEventListener("click",sizeChange);

const grid = document.querySelector(".grid");

for(let i=0;i<16;i++){
    let column=document.createElement("div");
    column.classList.add("column");
    for(let j=0;j<16;j++){
        let row=document.createElement("div");
        row.style.cssText="width:50px;height:50px;";
        row.style.border="thin double red"
        row.classList.add("square");
        row.style.backgroundColor='white';

        row.addEventListener("click",()=>{
            row.style.backgroundColor='black';
    });

        column.appendChild(row);
    }
    column.style.display="flex";
    column.style.justifyContent="center";
    column.style.alignItems="center";
    grid.appendChild(column);
}
