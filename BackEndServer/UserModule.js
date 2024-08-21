const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
{
    product:String,
    productId : String,
    category : String,
    location : String,
    available : Number,
    reserved : Number,
    onhand : Number
},{
    collection:"Users"
}
)
mongoose.model("Users",UserSchema)