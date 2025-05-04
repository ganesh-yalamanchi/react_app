import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import TicTacToe from "../Tic-Tac-Toe/TicTacToe";

function routing(){
    const items = [
        {
            name : "Home",
            id : 0,
            route :"/",
            element : (<Home/>)
        },
        {
            name: "Tic Tac Toe",
            id: 1,
            route: "/tic-tac-toe",
            element : (<TicTacToe/>)
        },
        {
            name: "LogIn Page",
            id: 2,
            route: "/logIn",
            element : (<LogIn/>)
        },
    ];

    return items;
}

export default routing;