const express = require("express");
const { response } = require("express");
const adminRouter = express.Router();

function router(nav) {
  adminRouter.router("/").get((request, response) => {
    response.send("inserting books");
  });
  return adminRouter;
}

module.exports = router;
