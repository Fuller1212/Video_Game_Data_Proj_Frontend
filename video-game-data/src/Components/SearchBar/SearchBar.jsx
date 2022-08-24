import { useState } from "react";

const SearchBar = (props) => {

    const[search, setSearch] = useState('')

    function handleSearch (event){
        event.preventDefault();
    };
    return ( 
        <div>
            <form >
            <p>Search for game</p>    
            <input className ='search-bar' type="text" placeholder="search..."/>
            <button className='search-button' type="submit">Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;