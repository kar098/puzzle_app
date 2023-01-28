console.log('working?');
let board=document.querySelector('.board');
let tile;
let row=5;
let column=5;
let currentile;
let othertile;   
let order=["4", "2", "8", "5", "1", "6", "7", "9", "3","14", "12", "18", "15", "11", "16", "17", "19", "13",'24','22','26','25','21','23','20'];
let turns=0;
let t=document.querySelector('.turn');
window.onload=()=>{
   
    console.log('loading');
    for(let r=0;r<row;r++){
        for(let c=0;c<column;c++){
    tile=document.createElement('img');
    tile.classList.add(`${r}-${c}`);
    tile.src=order.shift()+'.jpg';
    board.appendChild(tile);
    tile.addEventListener('dragstart',dragStart);
   tile.addEventListener('dragover',dragOver);
    tile.addEventListener('dragenter',dragEnter);
    tile.addEventListener('dragleave',dragLeave);
    tile.addEventListener('drop',dragDrop);
    tile.addEventListener('dragend',dragEnd);
        }
    }
    
}
function dragStart()
{
    currentile=this;
    //console.log('start',this);
}
function dragOver(e){
    e.preventDefault();
   // console.log('over',this);
}
function dragEnter(e){
    e.preventDefault();
   // console.log('enter',this);
}
function dragLeave(e){
    e.preventDefault();
    //console.log('leave',this);
}
function dragDrop(){
    othertile=this;
    //console.log('end',this);
}
function dragEnd(){
   if (!othertile.src.includes("5.jpg")) {
    return;
}
   let currentcoordinate;
   currentcoordinate=currentile.className.split('-');
    let r1=parseInt(currentcoordinate[0]);
    let c1 =parseInt(currentcoordinate[1]);
   let othercoordinate=othertile.className.split('-');
   let r2=parseInt(othercoordinate[0]);
   let c2=parseInt(othercoordinate[1]);
   let leftmove=r1===r2 && c1===c2-1;
   let rightmove=r1===r2 && c1===c2+1;
   let upmove=c1===c2 && r1===r2-1;
   let downmove= c1===c2 && r1===r2+1;
   if (rightmove || leftmove || upmove || downmove)
   {
    let swap;
    console.log('ejfbeujb');
   swap=currentile.src;
   currentile.src=othertile.src;
   othertile.src=swap;
   turns++;
   t.innerHTML=`turns:${turns}`;
   }
}
