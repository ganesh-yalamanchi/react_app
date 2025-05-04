
import "./Home.css";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {

    const items = [
        {
            name: "Tic Tac Toe",
            id: 1,
            route: "/tic-tac-toe",
        },
        {
            name: "Rock Paper Scissors",
            id: 2,
            route: "/rock-paper-scissors",
        },
        {
            name: "Memory Flip Game",
            id: 3,
            route: "/memory-game",
        },
        {
            name: "Dice Roller",
            id: 4,
            route: "/dice-roller",
        },
        {
            name: "To-Do List",
            id: 5,
            route: "/todo-list",
        },
        {
            name: "Counter App",
            id: 6,
            route: "/counter",
        },
        {
            name: "Stopwatch",
            id: 7,
            route: "/stopwatch",
        },
        {
            name: "BMI Calculator",
            id: 8,
            route: "/bmi-calculator",
        },
        {
            name: "Unit Converter",
            id: 9,
            route: "/unit-converter",
        },
        {
            name: "Image Gallery",
            id: 10,
            route: "/image-gallery",
        },
        {
            name: "Profile Cards",
            id: 11,
            route: "/profile-cards",
        },
        {
            name: "Theme Switcher",
            id: 12,
            route: "/theme-switcher",
        },
        {
            name: "FAQ Accordion",
            id: 13,
            route: "/accordion",
        },
        {
            name: "Star Rating",
            id: 14,
            route: "/star-rating",
        },
        {
            name: "Weather App",
            id: 15,
            route: "/weather",
        },
        {
            name: "Quote Generator",
            id: 16,
            route: "/quote-generator",
        },
        {
            name: "Dictionary App",
            id: 17,
            route: "/dictionary",
        },
        {
            name: "Movie Search",
            id: 18,
            route: "/movie-search",
        },
        {
            name: "Form Validation",
            id: 19,
            route: "/form-validation",
        },
        {
            name: "Color Picker",
            id: 20,
            route: "/color-picker",
        },
        {
            name: "Markdown Previewer",
            id: 21,
            route: "/markdown",
        },
        {
            name: "Expense Tracker",
            id: 22,
            route: "/expense-tracker",
        },
    ];

    const [filterItems, setFilterItems] = useState(items);
    const [searchValue, setSearchValue] = useState("");

    const history = useNavigate();

    const searchItem = () =>{
        const filtervalues = items.filter( i => i.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilterItems(filtervalues);
    }

    return (
        <>

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
                            onChange={ e => setSearchValue(e.target.value)}
                        /> </div>
                    <div className="searchIcon"> <SearchIcon onClick={searchItem} /> </div>
                </div>

            </div>

            <div className="mainContainer" >
                {filterItems.map(item => <div className={`item item${item.id}`} onClick={() => history(item.route)}> {item.name} </div>)}
            </div>

        </>
    );
}

export default Home;