import { useEffect, useState } from "react";
import axios from 'axios';
import DataGraph from "./Components/DataGraph/DataGraph";
import GameDetails from "./Components/GameDetails/GameDetails";
import SearchBar from "./Components/SearchBar/SearchBar";
import YearGraph from "./Components/YearGraph/YearGraph";


function App() {

  const[videoGames, setVideoGames] = useState([]);
  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames(){
    try{
      const response = await axios.get(`http://localhost:8080/all`);
      debugger
      console.log(response.data);
      setVideoGames(response.data);
    }catch(ex){
      console.log(`Error in getVideoGames EXCEPTION: ${ex}`)
    };
    }
  

  return (
    <div>
      <h3>Video Game Data</h3>
      <DataGraph videoGames = {videoGames}/>
      <SearchBar/>
      <GameDetails/>
      <YearGraph/>  
    </div>
  );
}

export default App;
