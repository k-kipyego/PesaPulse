const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("../controllers/itemController");
const router = express.Router();

//Routes

router.get("/get-items", getItemController);

router.post("/add-item", addItemController);

router.put("/edit-item", editItemController);

router.post("/delete-item", deleteItemController);

module.exports = router;
