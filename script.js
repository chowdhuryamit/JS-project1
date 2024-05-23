let boxes=document.querySelectorAll('.box');
let newgame=document.querySelector('#newgame');
let game=document.querySelector('.game');
let winnername=document.createElement('h1');
let container=document.querySelector('.container')
let turn=true;
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

boxes.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        if (turn) {
            i.innerHTML='X';
            i.style.color='red';
            i.style.backgroundColor='yellow';
            i.disabled=true;
            turn=false;
        }
        else{
            i.innerHTML='O';
            i.style.color='blue';
            i.style.backgroundColor='yellow';
            i.disabled=true;
            turn=true;
        }
        checkWinner();
    })
})

function checkWinner() {
    for (const i of arr) {
        if (boxes[i[0]].innerHTML==boxes[i[1]].innerHTML && boxes[i[1]].innerHTML==boxes[i[2]].innerHTML) {
            if (boxes[i[0]].innerHTML=='X'||boxes[i[0]].innerHTML=='O') {
                winner(boxes[i[0]].innerHTML);
            }
        }
    }
}
function winner(name) {
    winnername.innerHTML=`Congratulation Winner is ${name}`;
    container.before(winnername);
    boxes.forEach((i)=>{
        i.disabled=true;
        i.style.backgroundColor='yellow';
    })
}
newgame.addEventListener('click',(e)=>{
    boxes.forEach((i)=>{
        i.innerHTML='';
        i.disabled=false;
        i.style.backgroundColor='white';
    })
    winnername.remove();
    turn=true;
})