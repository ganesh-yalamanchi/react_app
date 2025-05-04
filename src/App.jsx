import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import TicTacToe from "./Tic-Tac-Toe/TicTacToe";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tic-tac-toe" element={<TicTacToe/>} />
            </Routes>
        </Router>
    );
}

export default App;