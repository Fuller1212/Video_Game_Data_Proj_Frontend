import { Chart } from "react-google-charts";
import './DataGraph.css'

const DataGraph = ({videoGames}) => {

  const options = {
    title: "Best Console To Invest In Since 2013",
      backgroundColor: 'whitesmoke',
      colors: ["#EE3C3C"],
      
    
    hAxis: {
      title: "Global Sales",
      minValue: 0,
    },
    vAxis: {
      title: "Platform",
    },
    bars: "horizontal",
    axes: {
      y: {
        0: { side: "right" },
      },
    },
  };

  
  function generateDataGraph(){
    let filteredGames = videoGames.filter(game => game.year >= 2013);

    let platforms = filteredGames.map(game => game.platform);

    let distinctPlatforms = [...new Set(platforms)];

    let platformArrays = distinctPlatforms.map(platform => {

      let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);

      
        let sum = 0;
        allGamesForPlatform.forEach((game) =>{
          sum = sum + game.globalsales;
        });
      
      console.log(allGamesForPlatform)
      console.log(sum)
      
      return [platform, sum];
    });
  
      const data = [
        ["Platform","Global Sales"],
        ... platformArrays
       ];

        return data; 
    }  
      

    return ( 
    <div className="graph">
        <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={generateDataGraph()}
        options={options} 
        />
    </div>
     );
}
 
export default DataGraph;