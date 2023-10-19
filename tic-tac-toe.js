const ticTacToe =(xName,oName) =>{
    const X = xName;
    const O = oName;
    let currentPlayer="X";

    const players ={
        X : xName,
        O : oName,
    };

    const nextPlayer ={
        "X":"O",
        "O":"X",
    };

    const board=[
        "ongoing",
        "","","",
        "","","",
        "","",""
    ];

    const isValidMove=(move)=>{
        if((1<=move && move<=9) && board[move]==="")
        return true;
        else return false;
    }

    const computeStatus =()=>{
        let result ="ongoing";

        winningPossibilities=[
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ]

        winningPossibilities.forEach(([i1,i2,i3])=>{
            if(board[i1]===board[i2] && board[i2]===board[i3] && board[i3]=== currentPlayer)
            {
                result=`win-${currentPlayer}`;
            }
        });

        let drawPossibility=1;
        for (let i = 1; i <= 9; i++) {
            if(board[i]==="")
            drawPossibility =0;
        }
        if(drawPossibility==1)
        result = "draw";

        return result;
    }

    return(player,move)=>{
        if(player !== currentPlayer)
        return [`it is ${currentPlayer}'s turn!`,board];
        
        if(!isValidMove(move)){
            return[ "Invalid move",board];
        }

        board[move]=currentPlayer;
        board[0]= computeStatus();
        currentPlayer = nextPlayer[currentPlayer];

        return [board[0], board];


    }

}

module.exports={ticTacToe};