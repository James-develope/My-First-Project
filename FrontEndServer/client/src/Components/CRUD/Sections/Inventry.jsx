import React, { Component } from "react";
import "./Inventry.css"
import Popup from "../popup";
import validator from "validator"
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { FaBell, FaCube, FaSearch, FaUpload, FaUserAlt } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../Documentpdf";
export default class Inventry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formdata: { product: "", productId: "", category: "", location: "", available: "", reserved: "", onhand: "" },
            products: [],
            modelOpen: false,
            isEditing: false,
            filterCriterion: "",
            selectedValue: "",
            errors: {}
        };
    }
    componentDidMount = () => {
        this.getContactList()
    }
    getContactList = async () => {
        const response = await fetch("http://localhost:3030/products")
        const products = await response.json();
        this.setState({ products })
    }
    handlechange = (event) => {
        const { name, value } = event.target
        this.setState((prevState) => ({
            formdata: { ...prevState.formdata, [name]: value },
            errors: { ...prevState.errors, [name]: "" }
        }))
    }
    handleFilterChange = (event) => {
        this.setState({ filterCriterion: event.target.value })
    }
    handleSelect = (event) => {
        const selectedCategory = event.target.value
        this.setState({
            selectedCategory: selectedCategory,
            products: this.state.products.filter(item => item.category === selectedCategory)
        })
    }
    validateForm = () => {
        const { formdata } = this.state;
        let errors = {};
        let formIsValid = true;

        if (validator.isEmpty(String(formdata.product))) {
            formIsValid = false;
            errors["product"] = "Product name is required.";
        }

        if (validator.isEmpty(String(formdata.productId))) {
            formIsValid = false;
            errors["productId"] = "Product ID is required.";
        }

        if (validator.isEmpty(String(formdata.category))) {
            formIsValid = false;
            errors["category"] = "Category is required.";
        }

        if (validator.isEmpty(String(formdata.location))) {
            formIsValid = false;
            errors["location"] = "Location is required.";
        }

        if (!validator.isNumeric(String(formdata.available))) {
            formIsValid = false;
            errors["available"] = "Available quantity must be a number.";
        }

        if (!validator.isNumeric(String(formdata.reserved))) {
            formIsValid = false;
            errors["reserved"] = "Reserved quantity must be a number.";
        }

        if (!validator.isNumeric(String(formdata.onhand))) {
            formIsValid = false;
            errors["onhand"] = "On-hand quantity must be a number.";
        }

        this.setState({ errors });
        return formIsValid;
    };

    handleSubmit = async (event) => {
        event.preventDefault()
        const { formdata, isEditing, } = this.state;
        if (!this.validateForm()) {
            return;
        }
        try {
            if (isEditing) {
                const response = await fetch(`http://localhost:3030/products/${formdata._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formdata)
                });
                if (!response.ok) {
                    throw new Error("Failed to update item");
                }
                this.formEmpty();
                this.getContactList();
            } else {
                const response = await fetch('http://localhost:3030/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formdata),
                });
                if (!response.ok) {
                    throw new Error('Failed to create item');
                }
                this.formEmpty();
                this.getContactList();
            }
            this.togglePopup();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
    handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3030/products/${id}`, {
            method: "DELETE",
        })
        if (!response.ok) {
            throw new Error("Failed to delete item")
        }
        this.getContactList()
    }
    formEmpty = () => {
        this.setState({
            formdata: { product: "", productId: "", category: "", location: "", available: "", reserved: "", onhand: "" },
            errors: {}
        })
    }
    handleEdit = (id) => {
        const itemToEdit = this.state.products.find((item) => item._id === id);
        this.setState({
            modelOpen: true,
            isEditing: true,
            formdata: { ...itemToEdit },
            errors: {}
        })
    }
    togglePopup = () => {
        this.setState((prevState) => ({
            modelOpen: !prevState.modelOpen,
            isEditing: false,
            errors: {}
        }))
    }
    render() {
        const { selectedValue } = this.state
        const options = ["Watch", "Electronics", "Laptop", "Camera", "Macbook", "TV", "Accesories"]
        const { products, modelOpen, formdata, isEditing, filterCriterion, errors } = this.state
        const filteredData = products.filter(item => item.product.toLowerCase().includes(filterCriterion.toLocaleLowerCase()))
        return (
            <>
                <div className="one">
                    <div className="Logo">
                        <img src="https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg" alt="LOGO" />
                    </div>
                    <div>
                        <i className="one-search"><FaSearch size="20px" /></i>
                        <input type="text" placeholder="Search Anything here" className="Heading" />
                        <i className="bell-icon"><FaBell size="20px" /></i>
                    </div>
                    <div>
                        <i className="image-icon"><FaUserAlt size="30px" /></i>
                    </div>
                </div>
                <div className="top">
                    <div>
                        <h1>Inventry</h1>
                        <h3>Dashboard / Inventry</h3>
                    </div>
                    <div>
                        <span><button className="Export-btn"> <FaUpload size="20px" />
                            <PDFDownloadLink document={<MyDocument products={filteredData} />}
                                fileName="inventry.pdf"
                            >
                                {({ loading }) => (loading ? "Generating PDF..." : "Export")}
                            </PDFDownloadLink>
                        </button></span>
                        <span><button onClick={this.togglePopup} className="Add-btn"><FaUpload size="20px" />  Add Inventry</button></span>
                    </div>
                </div>

                <div className="header">
                    <div><h3> <FaCube color="orange" /> Inventry</h3></div>
                    <div className="search">
                        <span><i className="Fsearch"><FaSearch /></i></span>
                        <span><input type="text" name="name" value={filterCriterion} onChange={this.handleFilterChange} placeholder="Search anything here" className="input" /></span>
                        <span><select name="select" id="dropdown" value={selectedValue} onChange={this.handleSelect}>
                            <option value={options}>CATEGORY</option>
                            {
                                options.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))
                            }
                        </select></span>
                    </div>
                </div>
                <div>
                    {modelOpen && (
                        <Popup
                            formdata={formdata}
                            onChange={this.handlechange}
                            onSubmit={this.handleSubmit}
                            onClose={this.togglePopup}
                            onCancel={this.togglePopup}
                            isEditing={isEditing}
                            errors={errors}
                        />
                    )}

                </div>
                <div>
                    <div className="table">
                        <table border={2} style={{ borderCollapse: "collapse", textAlign: "center" }} cellPadding={10} width="100%" >
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>Product</th>
                                    <th>Product Id</th>
                                    <th>Category</th>
                                    <th>Location</th>
                                    <th>Available</th>
                                    <th>Reserved</th>
                                    <th>On Hand</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.product}</td>
                                            <td>{item.productId}</td>
                                            <td>{item.category}</td>
                                            <td>{item.location}</td>
                                            <td>{item.available}</td>
                                            <td>{item.reserved}</td>
                                            <td>{item.onhand}</td>
                                            <td>
                                                <span><button className="btn-Read"><FaEye size="10px" /></button></span>
                                                <span><button className="btn-Edit" onClick={() => this.handleEdit(item._id)}><FaEdit size="10px" /></button></span>
                                                <span><button className="btn-Delete" onClick={() => this.handleDelete(item._id)}><FaTrashAlt size="10px" /></button></span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }

}


