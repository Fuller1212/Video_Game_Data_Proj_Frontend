// import axios from "axios";

const GameDetails = () => {

    // let response = await axios.get()

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
 
export default GameDetails;