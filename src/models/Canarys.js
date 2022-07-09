import {Schema,model} from "mongoose";

const canarySchema = new Schema({
    origen: String,
    gender: "string",
    year: "Number",
    linea: "String"
},
{
    timestamps:true,
    versionKey:false
});

export default model('Canarys',canarySchema)