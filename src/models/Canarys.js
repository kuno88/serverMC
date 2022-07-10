import { Schema, model } from "mongoose";
//import MongooseDelete from "mongoose-delete";
const mongoose_delete = require('mongoose-delete');


const canarySchema = new Schema(
  {
    origen: String,
    gender: "string",
    year: "Number",
    linea: "String",
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// canarySchema.plugin(MongooseDelete, { overrideMethod: "true" });
canarySchema.plugin(mongoose_delete,{ overrideMethod: "true" })
export default model("Canarys", canarySchema);
