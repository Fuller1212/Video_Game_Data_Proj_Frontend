import { useState } from "react";
import './DisplaySearch.css'


const DisplaySearch = ({filteredGames}) => {
    
// function displayDetails(){
//     filteredGames.map((game)=>{
//         return(
//             <div>
//             <td>{game.game_rank}</td>
//             <td>{game.platform}</td>
//             <td>{game.year}</td>
//             <td>{game.genre}</td>
//             <td>{game.publisher}</td>
//             </div>
//         )
//     })
// }

    return ( 
        <table>
        <tr>
        <th>Name:</th>
        <th>Rank:</th>
        <th>Platform:</th>
        <th>Year</th>
        <th>Genre</th>
        <th>Publisher:</th>
        </tr>
            
        {filteredGames.map((game) =>{
            return(
            
            <tr scope="row">
                <td>{game.name}</td>
                {/* <button onClick={displayDetails}>See Details</button> */}
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