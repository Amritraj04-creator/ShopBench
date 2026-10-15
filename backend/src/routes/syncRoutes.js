const express = require("express");

const syncController =
    require("../controllers/syncController");

const validateSync =
    require("../middleware/syncValidation");

const router = express.Router();

router.post(
    "/",
    validateSync,
    syncController.sync
);

module.exports = router;