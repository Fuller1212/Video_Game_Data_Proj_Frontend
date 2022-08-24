import DataGraph from "./Components/DataGraph/DataGraph";
import GameDetails from "./Components/GameDetails/GameDetails";
import SearchBar from "./Components/SearchBar/SearchBar";
import YearGraph from "./Components/YearGraph/YearGraph";


function App() {
  return (
    <div>
      <h3>Video Game Data</h3>
      <DataGraph/>
      <SearchBar/>
      <GameDetails/>
      <YearGraph/>  
    </div>
  );
}

export default App;
