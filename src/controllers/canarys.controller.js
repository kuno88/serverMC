import Canarys from "../models/Canarys";

export const createItem = async (req, res) => {
  try {
    const data = await Canarys.create(req.body);
    res.send({ data });
  } catch (error) {
    console.log("ERROR_CREATE_ITEM:", error);
  }
};

export const getItems = async (req, res) => {
  try {
    const data = await Canarys.find({}).where("deleted").equals()
    res.send({ data });
  } catch (error) {
    console.log("ERROR_GET_ITEMS", error);
  }
};
export const getItem = async (req, res) => {
  try {
    const data = await Canarys.findById(req.params.id);
    res.send({ data });
  } catch (error) {
    console.log("ERROR_GET_ITEM",error)
  }
};

export const updateItem = async (req, res) => {
  try {
    const data = await Canarys.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({data});
  } catch (error) {
    console.log("ERROR_UPDATE_ITEM",error);
  }
};

export const deleteItem = async (req, res) => {
  try {
    const data = await Canarys.deleteById({_id:req.params.id});
    res.send({ data });
  } catch (error) {
    console.log("ERROR_DELETE_ITEM",error)
    
  }
};

export const deletedItems = async (req,res) =>{
  try {
    const data = await Canarys.find({}).where("deleted").equals(true);
    res.send({data});
  } catch (error) {
    console.log("ERROR_DELETED_ITEM",error)
  }
}
