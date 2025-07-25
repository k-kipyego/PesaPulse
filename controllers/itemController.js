const itemModel = require("../models/itemModels");

// get Items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

// add Items
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Item Created Successfuly");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//Update Item
const editItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.status(201).send("Item Updated Successfuly");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//Delete Item
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(200).send("Item Deleted Successfuly");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
