
const {ticTacToe} = require("./tic-tac-toe");

const play= ticTacToe("Mayur","Teja");



const printBoard=(board) =>{
    for(let i=0;i<3;i++){
        for(let j=1;j<=3;j++)
        process.stdout.write(`${board[3*i+j] || "_"}\t`)
        process.stdout.write("\n");
    }
}
let [result,board]= play("X",1);


[result,board]= play("O",2);

[result,board]= play("X",4);

[result,board]= play("O",5);

[result,board]= play("X",9);

[result,board]= play("O",8);

printBoard(board);

console.log(result);


