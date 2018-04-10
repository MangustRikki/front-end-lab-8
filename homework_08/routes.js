const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  router = express.Router(),
  handlers = require("./controllers/handlers"),
  jsonParser = bodyParser.json();

router.post("/rockstar", jsonParser, handlers.addNew);
router.get("/rockstars", handlers.getAll);
router.get('/rockstar/:id', handlers.getById);
router.put('/rockstar/:id', handlers.put);
router.delete('/rockstar/:id', handlers.removeById);

module.exports = router;
