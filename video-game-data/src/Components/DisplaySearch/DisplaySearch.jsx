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
            <thead>
        <tr>
        <th scope="col">Name:</th>
        <th scope="col">Rank:</th>
        <th scope="col">Platform:</th>
        <th scope="col">Year:</th>
        <th scope="col">Genre:</th>
        <th scope="col">Publisher:</th>
        </tr>
        </thead>
        <tbody>
            
        {filteredGames.map((game) =>{
            return(
            
            <tr >
                <td>{game.name}</td>
                <td scope="row">{game.game_rank}</td>
                <td scope="row">{game.platform}</td>
                <td scope="row">{game.year}</td>
                <td scope="row">{game.genre}</td>
                <td scope="row">{game.publisher}</td>  
            </tr>    
            
            )
        })}
        </tbody>
       </table> 
     );
}
 
export default DisplaySearch;