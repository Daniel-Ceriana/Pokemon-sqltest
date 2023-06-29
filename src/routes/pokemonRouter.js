const express = require("express");
const router = express.Router();

const controller = require("../controllers/pokemonController");


router.get("/", controller.index);
// router.get("/:page", controller.index);
router.get("/:pok_id", controller.show);

module.exports = router;