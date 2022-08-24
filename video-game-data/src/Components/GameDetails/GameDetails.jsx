// import axios from "axios";

import { useEffect, useState } from "react";

const GameDetails = (props) => {


    const [title, setTitle] = useState();
    const [rank, setRank] = useState();
    const [platform, setPlatform] = useState();
    const [year, setYear] = useState();
    const [genre, setGenre] = useState();
    const [publisher, setPublisher] = useState();

    // useEffect(async () =>{
    //     let response = await axios.get()
    // })
    

    return ( 
        <form>
            <button>See Details</button>
        </form>
     );
}
 
export default GameDetails;