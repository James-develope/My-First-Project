import React from "react";
import Acceceries from "../Acessories";
const Product = () =>{
    return(
        <div className="product-parent">
            {
            Acceceries.map((data)=>(
                <div className="product-child">
                    <img src={data.product} alt={data.alt} key={data.name} className="product-image" /> <br />
                    <p>{data.name}</p>
                </div>
            ))
            }
        </div>
    )
}
export default Product