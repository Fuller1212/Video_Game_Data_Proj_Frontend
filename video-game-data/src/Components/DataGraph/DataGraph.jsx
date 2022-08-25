import { Chart } from "react-google-charts";
const DataGraph = ({videoGames}) => {

  const options = {
    chart: {
      title: "Platform By Global Sales in Millions",
      subtitle: "Since 2013",
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
      
      return [platform, sum];
    });
  
      const data = [
        ["Platform","Global Sales"],
        ... platformArrays
       ];

        return data; 
    }  
      

    return ( 
    <div>
        <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={generateDataGraph()}
        options={options} 
        />
    </div>
     );
}
 
export default DataGraph;