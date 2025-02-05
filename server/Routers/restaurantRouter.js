const express = require("express");
const router = express.Router();

const restaurantController = require('../Controllers/restaurantController')

router.get("/", restaurantController.getRestaurants);
router.get("/:id", restaurantController.getRestaurantById);

module.exports = router;
