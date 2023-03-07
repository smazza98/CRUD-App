const express = require('express');
const router = express.Router();

const {
    getCompliment,
    setCompliment,
    updateCompliment,
    deleteCompliment
} = require('../controllers/complimentsControllers');

router.route("/").get(getCompliment).post(setCompliment);
router.route("/:id").put(updateCompliment).delete(deleteCompliment);

module.exports = router;