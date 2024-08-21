import React, { useEffect, useState } from "react";
const Employee = () => {

        const [empdata, setEmpData] = useState([]);
    
        // console.log(empdata);
    
        useEffect(() => {
            fetch('http://localhost:5000/employee')
                .then(response => {
    
                    if (!response.ok) {
                        console.log("Error Fetching data");
                    }
                    return response.json();
                }
                )
                .then(user => {
                    setEmpData(user);
                })
                .catch(error => {
                    console.log(error);
                })
    
        //fetch("https://jsonplaceholder.org/comments/1")
        //.then(response=>response.json())
        //.then(user=>setEmpdata(user))
        //.catch(error=>{
        //    console.log("error",error);
      //  })
    },[])
    return(
        <div>
            <h1>Employee data</h1>
            {/* {empdata.map(item => {
                console.log("Emp", item);
                return (
                    <div>

                        {item.comment}
                    </div>
                )
            })} */}
            {empdata.map(item=>(
                
                <ul>
                    <li>{item.name}-{item.email}</li>
                </ul>
            ))}
            {/* {empdata.postId}  {empdata.comment} */}
         </div>   
    )
}
export default Employee