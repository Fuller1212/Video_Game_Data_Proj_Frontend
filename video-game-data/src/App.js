
import ApiData from "./Components/APIData/APIData";
import GameData from "./Components/GameData/GameData";
import GameDetails from "./Components/GameDetails/GameDetails";


function App() {
  return (
    <div>
      <h3>Video Game Data</h3>
      <div>
        <ApiData/>
      </div>
      <div>
      <GameDetails/>  
      </div>
      <div>
      <GameData/> 
      </div>
    </div>
  );
}

export default App;
