import { useEffect,useState } from "react";
import Loading from "./Loading";
import Picture from "./Picture";

const Home = () => {
const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = '';
const [data  ,setData] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);



useEffect(() => {
    setTimeout(() =>{

    fetch(url+apiKey)
     .then(response => {
    if(!response.ok)
        {   
            throw Error('could not fetch the data from that resources');
        }
return response.json()
})
     .then(data=>{
        setData(data);
        setIsPending(false); 
     })
.catch(err => {
      
        setIsPending(false);  
        setError(err.message);
})
},2000);
},[url])

    return ( 

<div className="home">

{isPending && <Loading />}
{error && <h1>{error}</h1>}
{data && <Picture data ={data}/>}





</div>

 );
}
 
export default Home;