import Dashboard from "../Dashboard/Dashboard";
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
        {
            name: "Dashboard",
            id : 3,
            route : "/dashboard",
            element : (<Dashboard/>)
        },
        {
            name: "Not Found",
            id : 4,
            route : "*",
            element : (<div> Not Found </div>)
        },
        {
            name: "About",
            id : 5,
            route : "/about",
            element : (<div> About </div>)
        },
        {
            name: "Contact",
            id : 6,
            route : "/contact",
            element : (<div> Contact </div>)
        },
        {
            name: "Services",
            id : 7,
            route : "/services",
            element : (<div> Services </div>)
        },
        {
            name: "Products",
            id : 8,
            route : "/products",
            element : (<div> Products </div>)
        },
        {
            name: "Gallery",
            id : 9,
            route : "/gallery",
            element : (<div> Gallery </div>)
        },
        {
            name: "Blog",
            id : 10,
            route : "/blog",
            element : (<div> Blog </div>)
        }
    ];

    return items;
}

export default routing;