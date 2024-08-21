import React, { useEffect, useState } from "react";
import { FaTrashAlt,FaEdit } from "react-icons/fa";

const Todo = () =>{
    const [input, setInput] =useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/details")
        .then(response => {
    
            if (!response.ok) {
                console.log("Error Fetching data");
            }
            return response.json();
        }
        )
        .then(user => {
            setInput(user);
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    const[id,setId]=useState("")
    const[task,setName]=useState("")
    const[description,setDescription]=useState("")
    const[status, setStatus]=useState("")
    const addNew=()=>{
        if (id &&task && description && status) {
            fetch("http://localhost:5000/details",{
                method:"POST",
                body : JSON.stringify({
                    id,
                    task,
                    description,
                    status
                }),
                headers:{"content-type":"application/json"}
            })
            .then(response=>response.json())
            .then(data=>{
                setInput([...input,data])
                setId("")
                setName("")
                setDescription("")
                setStatus("")
            })
        }
    }
    const handleDelete =id=>{
    fetch(`http://localhost:5000/details/${id}`,{
        method:"DELETE",
    })
    .then(response=>response.json())
    .then(()=>{
        setInput(values=>{
            return values.filter(item=>item.id !==id)
        })
    })
    }
    return(
        <div className="one">
            <div>
              <h1>TODO LIST</h1>
              <div>
                    <input type="text" value={id} name="name" onChange={e=>setId(e.target.value)}/>
                    <input type="text" value={task} name="name" onChange={e=>setName(e.target.value)}/>
                    <input type="text" value={description} name="name" onChange={e=>setDescription(e.target.value)}/>
                    <input type="text" value={status} name="name" onChange={e=>setStatus(e.target.value)}/>
                    <button onClick={addNew}>Add</button>
              </div>
              <div>
              <table border={1} width={"1000"} cellPadding={15} cellSpacing={0}>
                <thead>
                <tr>
                <th>S.No</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Status</th>
                <th colSpan={2}>Action</th>
                </tr>
                </thead>
               <tbody>
                  {
                   input.map((input)=>{
                    return(
                        <tr key={input}>
                        <td>{input.id}</td>
                        <td>{input.task}</td>
                        <td>{input.description}</td>
                        <td>{input.status}</td>
                        <td>
                            <button className="update"><FaEdit size="25px" /></button></td>
                            <td><button className="delete" onClick={()=>handleDelete(input.id)}><FaTrashAlt size="25px" /></button>
                        </td>
                    </tr>
                    )})
                }
               </tbody>
            </table>
              </div>
            
            </div>
            
        </div>
    )
}
export default Todo