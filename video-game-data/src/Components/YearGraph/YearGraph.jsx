import { Chart } from "react-google-charts";

const YearGraph = () => {

    const data = [
        ["Year", "Global Sales"],
        ["2001", 11],
        ["2002", 2],
        ["2003", 4],
        ["2004", 3],
        ["2005", 7],
      ]; 
      const options = {
        title: "Top 5 Global Sale Years",
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
 
export default YearGraph;