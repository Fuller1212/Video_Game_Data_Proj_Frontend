import { Chart } from "react-google-charts";

const YearGraph = ({videoGames}) => {

  const options = {
    
      title: "Best Sports Game Sellers in North America",
      subtitle: "Since 2010",
      backgroundColor: 'beige',
      colors: ["#0AB1F1"],
      
    
    hAxis: {
      title: "Sales",
      minValue: 0,
    },
    vAxis: {
      title: "Game",
    },
    bars: "horizontal",
    axes: {
      y: {
        0: { side: "right" },
      },
    },
  };
  
  function generatedYearGraph(){
    let filteredYears = videoGames.filter(game=>game.year >= 2010);

    let filteredSportsGames = filteredYears.filter(game=>game.genre.includes('Sports'));

    let topFilteredGames = filteredSportsGames.filter(game => game.northamericasales >=2.12)
    console.log(topFilteredGames)

    let sportsGames = topFilteredGames.map(game =>{
      return [game.name, game.northamericasales]
    });


  

    const data = [
        ["Year", "North America Sales"],
        ... sportsGames

      ]; 

      return data;
  } 
    return ( 
    <Chart
      chartType="BarChart"
      data={generatedYearGraph()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
     );
}
 
export default YearGraph;