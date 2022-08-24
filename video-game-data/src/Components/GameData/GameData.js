import { Chart } from "react-google-charts";

const GameData = () => {

    const data = [
        ["Console", "Sales"],
        ["PS3", 1],
        ["X360", 1],
        ["PS4", 1],
        ["3DS", 1],
        ["XOne", 1],
        ["WiiU", 1],
        ["Wii", 1],
        ["PC", 1],
        ["PSV", 1],
        ["DS", 1],
        ["PSP", 1],
      ];

       const options = {
        title: "Console Sales Since 2013",
      };



    return ( 
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
     );
}
 
export default GameData;