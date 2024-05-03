const container = document.getElementById('spreadsheet-conatiner');



const columHeaderRow = document.createElement('div');
for(let i = 0; i<=100; i++){
     const cell = document.createElement('div');
     cell.className = "cell"
     cell.classList.add("header-cell")
     cell.innerText =  i
    //  cell.style.backgroundColor = "red"
    columHeaderRow.append(cell);
}
container.append(columHeaderRow);


// rows and columns: 20*26: 
 count = 1
for(let row = 1; row<=100; row++){
    const newRow = document.createElement('div');
    newRow.id = "row"+row
    const rowHeader = document.createElement('div');
    rowHeader.className = "cell"
    rowHeader.classList.add("header-cell")
    let n=row
    let ans=""
    while(n>0){
    let rem=n%26;
    if(rem==0){
        ans="Z"+ans;
        n=Math.floor(n/26)-1
        rowHeader.innerText = ans
    }else{
        ans=String.fromCharCode(rem-1+65)+ans;
        n=Math.floor(n/26);
        rowHeader.innerText = ans
    }
    }
    //rowHeader.innerText =  String.fromCharCode(64+row)
    newRow.append(rowHeader);

    
    // newRow.style.display = "contents"
    // newRow.style.display = "flex"


    for(col = 1; col<=100; col++){
        const newCol = document.createElement('div');
        newCol.className = "cell"
        // newCol.innerText =  `12`
        newCol.setAttribute('contenteditable', 'true');
        newCol.addEventListener('click', handleCellClick)
        newRow.append(newCol);
    }

    container.append(newRow);

}

let selectedCells = new Set() 


function handleCellClick(event){
    console.log(event)
   let targetCell = event.target;

   if(!event.ctrlKey  && !event.metaKey){
    //   selectedCells.clear()
    selectedCells.forEach(cell =>{
          cell.classList.remove('selected-cell')
    })
    selectedCells.clear()
   }

   else if(selectedCells.has(targetCell)){
       targetCell.classList.remove('selected-cell')
       selectedCells.delete(targetCell)
   }

   else{ 
    targetCell.classList.add('selected-cell')
    selectedCells.add(targetCell)
   }


}

function bold(){
    let bb=document.querySelector(".fa-bold")
    selectedCells.forEach(cell => {
        cell.style.fontWeight = cell.style.fontWeight === "bold" ? "normal"  : "bold"
        if(cell.style.fontWeight !== "bold"){
            bb.classList.remove('selected');
        }else{
            bb.classList.add('selected');
        }
   })
}

function italic(){
    let bb=document.querySelector(".fa-italic")
    selectedCells.forEach(cell => {
        cell.style.fontStyle = cell.style.fontStyle === "italic" ? "normal" : "italic"
        if(cell.style.fontStyle !== "italic"){
            bb.classList.remove('selected');
        }else{
            bb.classList.add('selected');
        }
   })
   
}

function underline(){
    let bb=document.querySelector(".fa-underline")
    selectedCells.forEach(cell => {
        cell.style.textDecoration = cell.style.textDecoration === "underline" ? "none" : "underline"
        if(cell.style.textDecoration !== "underline"){
         bb.classList.remove('selected');
        }else{
         bb.classList.add('selected');
         }
   })
    
}

//font change
const font=document.getElementById("font-type");

function fontChange(){
    selectedCells.forEach(cell=>{
        cell.style.fontFamily=`${font.value}`
    })

    
}

const fontSize=document.getElementById("font-size")

function fontSizeChange(){
    selectedCells.forEach(cell=>{
        cell.style.fontSize=`${fontSize.value}`
    })
    
}

//Text Align
function left(){
    let bb=document.querySelector(".fa-align-left")
    selectedCells.forEach(cell=>{
        cell.style.textAlign="left"
        
    })
}
function center(){
    
    selectedCells.forEach(cell=>{
        cell.style.textAlign="center"
    
    })
}
function right(){
 
    selectedCells.forEach(cell=>{
        cell.style.textAlign="right"
       
    })
}
let copy="";
// // Copy Cut Paste
function copy1(){
    let bb=document.querySelector(".fa-copy")
    selectedCells.forEach(cell=>{
        copy=cell.innerText
        
        if(cell.innerText === ""){
            bb.classList.remove('selected');
        }else{
            bb.classList.add('selected');
        }
    })

}

function cut1(){
    
    selectedCells.forEach(cell=>{
        copy=cell.innerText
        cell.innerText=""
        
    })
    
}

function paste1(){
    let bb=document.querySelector(".fa-copy")
    selectedCells.forEach(cell=>{
        cell.innerText=copy;
        bb.classList.remove('selected');
        
    })
    

}

//text color change
const color=document.getElementById("color");
function colorChange(){
    selectedCells.forEach(cell=>{
        cell.style.color=color.value;
        
    })
}

function detail(evt){
console.log(selectedCells);
console.log(document.querySelectorAll(".selected-cell"))

}
