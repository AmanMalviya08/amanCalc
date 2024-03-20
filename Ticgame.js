let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let newGameBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true; //playerX , playerO

  //Array for winPattern
  const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 7],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    ];

    // reset our Game BTN
    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    };

    // function add color.
    
    function addcolor(cell){
        const color = (currentPlayer = "X")
    }

 // if else for  click O and X
  boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO){
           box.innerText = "O";
           turnO = false;
        }
        else{
           box.innerText = "X";
           turnO = true; 
        }
        //Disable the buttons not repeat
        box.disabled = true;
//array
        checkWWinner();
    });
  });

//   disabled all butttons after winning one
    const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
    };

    //   enabled all butttons after winning one
    const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    }

  //accass hide class for our Winner
  const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    // call disable Boxes
     disableBoxes();
  }
  //for checking the array which is true
        const checkWWinner = () => {
            for( Patterns of winPattern){
               let pos1Val = boxes[Patterns[0]].innerText;
               let pos2Val = boxes[Patterns[1]].innerText;
               let pos3Val = boxes[Patterns[2]].innerText;

               if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val ===pos3Val){
                    //show winner
                    showWinner(pos1Val);
                }
               }
            }
        };

        newGameBtn.addEventListener("click", resetGame);
        resetBtn.addEventListener("click", resetGame);