const express = require("express");
const { MongoClient } = require("mongodb");

const authRouter = express.Router();
function router() {
  authRouter.get("/signUp").post((request, response) => {
    console.log(request.body);
  });
  return authRouter;
}

module.exports = router;
