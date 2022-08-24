import Chart from "react-google-charts";
import Api_Data from "./Components/API_Data/API_Data";
import Game_Data from "./Components/Game_Data/Game_Data";


function App() {
  return (
    <div>
      <h3>Video Game Data</h3>
      <div>
        <Api_Data/>
        <Game_Data/>
      </div>
    </div>
  );
}

export default App;
