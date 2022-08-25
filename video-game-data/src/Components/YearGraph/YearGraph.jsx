import { Chart } from "react-google-charts";

const YearGraph = ({videoGames}) => {


  function generatedYearGraph(){
    let filteredYears = videoGames.filter(game=>game.year >= 2010);

    let filteredSportsGames = filteredYears.filter(game=>game.genre.includes('Sports'));

    
    let sportsGames = filteredSportsGames.map(game =>{
      return [game.name, game.northamericasales]
    })


  }

    const data = [
        ["Year", "Global Sales"],
        
      ]; 
      const options = {
        title: "Best Sports Game Sellers Since 2010 in North America",
      };
    return ( 
    <Chart
      chartType="Bar"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
     );
}
 
export default YearGraph;