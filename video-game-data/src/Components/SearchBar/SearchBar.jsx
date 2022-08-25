import { useEffect } from "react";
import { useState } from "react";
import DisplaySearch from "../DisplaySearch/DisplaySearch";

const SearchBar = ({videoGames}) => {

    const[search, setSearch] = useState([])
    const[filteredGames, setFilteredGames] = useState([]);


    function handleSearch (event){
        event.preventDefault();
        console.log('search in handleSearch', search)
        setFilteredGames(videoGames.filter(game => game.name.includes(search)));
        

        

    };


    return ( 
        <div>
            
            
            <input className ='search-bar' type="text" placeholder="search for game..."
            value={search} onChange ={(event)=> setSearch(event.target.value)}/>
            <button className='search-button'onClick={handleSearch}>Search</button>
            <DisplaySearch filteredGames = {filteredGames}/>
        </div>
        
     );
}
 
export default SearchBar;