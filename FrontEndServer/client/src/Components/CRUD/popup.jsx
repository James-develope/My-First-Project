import React, { Component } from "react";
export default class Popup extends Component {
render() {
        const {onClose,onCancel,onChange,formdata,onSubmit,isEditing,errors}=this.props
        return ( 
            <div className="model-conntainer">
                <div className="model">
                    <div className="model-header">
                        <button className="close" onClick={onClose} >X</button>
                    </div>
                    <div className="model-content">
                        <div className="form" >
                            <form onSubmit={onSubmit}>
                                <label>Product :</label> <br />
                                <input type="text" value={formdata.product} name="product" onChange={onChange} /> <br />
                                <span className="error">{errors.product}</span> <br />
                                <label>Product Id :</label> <br />
                                <input type="text" value={formdata.productId} name="productId" onChange={onChange} /> <br />
                                <span className="error">{errors.productId}</span> <br />
                                <label >Category :</label>  <br />
                                <input type="text" value={formdata.category} name="category" onChange={onChange} /> <br />
                                <span className="error">{errors.category}</span> <br />
                                <label>Location :</label> <br />
                                <input type="text" value={formdata.location} name="location" onChange={onChange} /> <br />
                                <span className="error">{errors.location}</span> <br />
                                <label>Reserved :</label> <br />
                                <input type="text" value={formdata.reserved} name="reserved" onChange={onChange} /> <br />
                                <span className="error">{errors.reserved}</span> <br />
                                <label>OnHand :</label> <br />
                                <input type="text" value={formdata.onhand} name="onhand" onChange={onChange} /> <br />
                                <span className="error">{errors.onhand}</span> <br />
                                <label>Available : </label>  <br />
                                <input type="text" value={formdata.available} name="available" onChange={onChange} /> <br />
                                <span className="error">{errors.available}</span> <br />
                                <button className="btn" type="submit">{isEditing? "Update" : "Submit"}</button>
                            </form>
                        </div>
                    </div>
                    <div className="model-footer">
                        <button className="btn-btn-cancel"onClick={onCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}