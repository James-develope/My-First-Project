const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const port = process.env.PORT
const url = process.env.MONGO_URI
mongoose.connect(url,
{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(()=>app.listen(port,()=>{
    console.log("Backend Server running sucessfully");
})).catch((error)=>console.log(error))

require("./UserModule")
const User = mongoose.model("Users")

///<-----------GET---------------->///

app.get("/products",async(req,res)=>{
    try{
    const data = await User.find()
     res.status(200).json(data)
    }catch(error){
    res.status(500).json(error)
}})

//<--------------POST------------>//

app.post("/products",async(req,res)=>{
 const{product,productId,location,category,available,reserved,onhand} = req.body
 try{
    await User.create({
        product,
        productId,
        location,
        category,
        available,
        reserved,
        onhand
    })
     res.status(200).json("New data created")
 }catch(error){
    res.status(500).json(error)
 }
})

//<--------PUT--------------------->//
app.put("/products/:id", async (req, res) => {
    const id = req.params.id;
    const { _id, product, productId, location, category, available, reserved, onhand } = req.body;
    if (id !== _id) {
        return res.status(400).json({ error: " _id URL mismatch" });
        
    }
    try {
        const updatedProduct = await User.findByIdAndUpdate(id, {
            product,
            productId,
            location,
            category,
            available,
            reserved,
            onhand
        }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the product."});
    }
});

//<----------DELETE---------------->//

app.delete("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Server error", error });
    }
});
