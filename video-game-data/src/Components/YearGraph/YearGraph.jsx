import { Chart } from "react-google-charts";
import './YearGraph.css'

const YearGraph = ({videoGames}) => {

  const options = {
    
      title: "Top 10 Sport Games in Last 10 Years",
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
    let filteredYears = videoGames.filter(game=>game.year >= 2008);

    let filteredSportsGames = filteredYears.filter(game=>game.genre.includes('Sports'));

    let topFilteredGames = filteredSportsGames.filter(game => game.northamericasales >=2.34)
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
    <div className="graph"> 
    <Chart
      chartType="BarChart"
      data={generatedYearGraph()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div> 
     );
}
 
export default YearGraph;