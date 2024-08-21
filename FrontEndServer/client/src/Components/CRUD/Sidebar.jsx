import React from "react";
import { FaInbox, FaProcedures, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = ({children})=>{
const menuItem =[
    // {
    //     path : "/",
    //     name :"dashboard",
    //     icon :<FaTh />
    // },
    {
        path : "/",
        name :"Analytics",
        icon :<FaSearch />
    },
    {
        path : "/inventry",
        name :"Inventry",
        icon :<FaInbox />
    },
    {
        path : "/product",
        name :"Product",
        icon :<FaProcedures />
    },
] 
return(
    <div className="container">
      <div className="sidebar">
           <div className="top-section">
           <img src="https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg" alt="LOGO" />
             <div className="bars">
             <h1 className="logo">JAMES</h1>
             </div>
         </div>
           {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link">
                    <div className="icon">{item.icon}</div>
                    <div className="link-text">{item.name}</div>
                </NavLink>
            ))
           }
      </div>
      <main>{children}</main>
    </div>
)
}
export default Sidebar