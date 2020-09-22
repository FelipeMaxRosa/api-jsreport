const express = require("express");
const router = express.Router();

// Controller
const controllerReport = require("../../controllers/reportController");

// @routes POST api/users
// @description Create an user
router.post("/", controllerReport.create);

// @routes GET api/users
// @description Get All users
router.get("/", controllerReport.findAll);

// @routes GET api/users/:id
// @description Get an user
router.get("/:id", controllerReport.findOne);

// @routes UPDATE api/users/:id
// @description Update an user
router.patch("/:id", controllerReport.update);

// @routes DELETE api/users/:id
// @description Delete an user
router.delete("/:id", controllerReport.remove);

// @routes DELETE ALL api/users
// @description Delete all users
router.delete("/", controllerReport.removeAll);

module.exports = router;
