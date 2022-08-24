import { Chart } from "react-google-charts";
const DataGraph = () => {

  // let response = await axios.get(`http://localhost:8080/all`);


     const data = [
         ["Platform","Global Sales"],
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
        chart: {
          title: "Platform By Global Sales in Millions",
          subtitle: "Since 2013",
        },
      }; 
      

    return ( 
    <div>
        <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options} 
        />
    </div>
     );
}
 
export default DataGraph;