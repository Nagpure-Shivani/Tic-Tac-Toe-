let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
 let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//player x , player O(true)

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];
/* REset Game Button */
const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add(hide);
}

boxes.forEach((box)=>{ //for all boxes
    box.addEventListener("click",()=>{ //for individual box
    //  console.log("box was clicked");
     if(turnO)//Player O
     {
        box.innerText="O";//print O
        turnO=false;//player X turn

     }
     else{//Player X
        box.innerText="X";//print X
        turnO=true;//Turn Player O
     }
     box.disabled=true;//double click(X/O O/X)
     checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${(winner)}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>
{
    for(let pattern of winPatterns)
    {
        
            let pos1val=boxes[pattern[0]].innerText;//pos 1
            let pos2val=boxes[pattern[1]].innerText;//pos 2
            let pos3val=boxes[pattern[2]].innerText;//pos 3

            if(pos1val != "" && pos2val !=="" && pos3val !=="")
            {
                if(pos1val===pos2val && pos2val===pos3val)
                {
                    // console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
        
    }
}
newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);