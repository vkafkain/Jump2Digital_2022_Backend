const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/controllers");

router.get("/size", controllers.sortSize);
router.get("/date", controllers.sortDate);
router.get("/count", controllers.count);

module.exports = router;

