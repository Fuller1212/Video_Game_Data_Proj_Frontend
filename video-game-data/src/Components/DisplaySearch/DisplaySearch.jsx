import { useState } from "react";


const DisplaySearch = ({filteredGames}) => {
    const[search, setSearch] = useState([])
    
    function displayUserSearch(search){
        <tr>
            <p>Name:</p>
            <p>Rank:</p>
            <p>Platform:</p>
            <p>Year</p>
            <p>Genre</p>
            <p>Publisher:</p>
        </tr>    
            {filteredGames.map((game)=>{
                return(
                <tr>
                    <td>{game.name}</td>
                    <td>{game.game_rank}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.genre}</td>
                    <td>{game.publisher}</td>
                </tr>    
                )
            })}
    }
    return ( 
        // <div>
        // <button onClick={displayUserSearch}>See Details</button>
        // </div>
        <table>
        <tr>
        <th>Name:</th>
        <th>Rank:</th>
        <th>Platform:</th>
        <th>Year</th>
        <th>Genre</th>
        <th>Publisher:</th>
        </tr>    
        {filteredGames.map((game)=>{
            return(
            <tr>
                <td>{game.name}</td>
                <td>{game.game_rank}</td>
                <td>{game.platform}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td>{game.publisher}</td>
            </tr>    
            )
        })}
       </table> 
     );
}
 
export default DisplaySearch;