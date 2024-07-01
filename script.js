let turn = 'X';

let title = document.querySelector('.title');
let T_items =[];
let drawCount=0;
const GameOVER = (num1,num2,num3) =>{
   if(num1 == 0){
    title.innerHTML = 'DRAW';
    setInterval(function(){title.innerHTML +='.'},800);
    setInterval(function(){location.reload()},3000);
   }
   else{
    title.innerHTML = `${T_items[num1]} WINNER`;
    document.getElementById('item'+num1).style.background='#000';
    document.getElementById('item'+num2).style.background='#000';
    document.getElementById('item'+num3).style.background='#000';

    setInterval(function(){title.innerHTML +='.'},600);
    setInterval(function(){location.reload()},2000);
   }
   }

const Winner = () =>{
    for(let i =1 ;i<10 ;i++){
     T_items[i]=document.getElementById(`item${i}`).innerHTML;
    }

    if(T_items[1] === T_items[2] && T_items[2] === T_items[3] && T_items[1] != ''){
       GameOVER(1,2,3);
    }else if(T_items[4] === T_items[5] && T_items[5] === T_items[6] && T_items[5] !== ''){
        GameOVER(4,5,6);
    }else if(T_items[7] === T_items[8] && T_items[8] === T_items[9] && T_items[8] !== ''){
        GameOVER(7,8,9);
    }else if(T_items[1] === T_items[4] && T_items[4] === T_items[7] && T_items[1] !== ''){
        GameOVER(1,4,7);
    }else if(T_items[2] === T_items[5] && T_items[5] === T_items[8] && T_items[5] !== ''){
        GameOVER(2,5,8);
    }else if(T_items[3] === T_items[6] && T_items[6] === T_items[9] && T_items[9] !== ''){
        GameOVER(3,6,9);
    }else if(T_items[1] === T_items[5] && T_items[5] === T_items[9] && T_items[1] !== ''){
        GameOVER(1,5,9);
    }else if(T_items[3] === T_items[5] && T_items[5] === T_items[7] && T_items[5] !== ''){
        GameOVER(3,5,7);
    }
    Draw();
}

const Draw = () =>{
    for(let i=1;i<10;i++){
        if(T_items[i] === 'X' || T_items[i] === 'O'){
            drawCount++;
        }
    }
    if(drawCount == 9) GameOVER(0,0,0);
    else drawCount =0;
}
const StartGame = (id) =>{
    let box = document.getElementById(id);
   if(box.innerHTML == '' && turn === 'X'){
     box.innerHTML = 'X';
     turn = 'O';
     title.innerHTML='O';
   }else  if(box.innerHTML == '' && turn === 'O'){
    box.innerHTML = 'O';
    turn = 'X';
    title.innerHTML='X';
   }
   Winner();
}