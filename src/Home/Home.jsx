
import "./Home.css";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import routing from "../Routing/routers";

function Home() {

    const items = routing();

    const [filterItems, setFilterItems] = useState(items);
    const [searchValue, setSearchValue] = useState("");

    const history = useNavigate();

    const searchItem = (searchtext) =>{
        const filtervalues = items.filter( i => i.name.toLowerCase().includes(searchtext.toLowerCase()));
        setFilterItems(filtervalues);
    }

    return (
        <div className="homeBody">

            <div className="headerContainer">

                <div className="header">
                    Design with React
                </div>

                <div className="search-container">
                    <div className="searchInput">
                        <input
                            id="nameInput"
                            type="text"
                            placeholder="Search here..."
                            value={searchValue}
                            onChange={ e => {
                                setSearchValue(e.target.value)
                                searchItem(e.target.value);
                            }}
                        /> </div>
                    <div className="searchIcon"> <SearchIcon /> </div>
                </div>

            </div>

            <div className="mainContainer" >
                {filterItems.map(item => {
                   return item.id !== 0 && <div className={`item item${item.id}`} onClick={() => history(item.route)}> {item.name} </div>
                })}
            </div>
        </div>
    );
}

export default Home;