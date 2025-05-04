import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import routing from "./Routing/routers";
import Home from "./Home/Home";

function App(){

    const items = routing();

    return(
        <Router>
            <Routes>
                {items.map( i => <Route path={`${i.route}`} element={i.element} />)}
            </Routes>
        </Router>
    );
}

export default App;