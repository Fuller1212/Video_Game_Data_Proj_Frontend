import { useEffect, useState } from "react";
import axios from 'axios';
import DataGraph from "./Components/DataGraph/DataGraph";
import SearchBar from "./Components/SearchBar/SearchBar";
import YearGraph from "./Components/YearGraph/YearGraph";
import Header from "./Components/Header/Header";


function App() {

  const[videoGames, setVideoGames] = useState([]);
  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames(){
    try{
      const response = await axios.get(`http://localhost:8080/all`);
      console.log(response.data);
      setVideoGames(response.data);
    }catch(ex){
      console.log(`Error in getVideoGames EXCEPTION: ${ex}`)
    };
    }
  

  return (
    <div>
      <Header/>
      <DataGraph videoGames = {videoGames}/>
      <SearchBar videoGames = {videoGames}/>
      <YearGraph videoGames ={videoGames}/>  
    </div>
  );
}

export default App;
