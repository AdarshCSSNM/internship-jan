import React, { useEffect,useState} from "react";
import axios from "axios";

function Data(){
    const [content, setContent] = useState([])
    useEffect(()=>{
        const handlFetch =async()=>{
            try{
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setContent(response.data);
            }catch (error){
                console.log("failed");
            }
        };
        handlFetch();
    },[]);
    return(
        <div>
           {content.map((item) =>(
           <div key={item}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.phone}</p>
           </div>
           ))}
            
        </div>
    )
}

export default Data;