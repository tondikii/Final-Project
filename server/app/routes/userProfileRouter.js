const userProfileRouter = require("express").Router();
const userProfilesController = require("../controllers/userProfilesController");

userProfileRouter.post("/", userProfilesController.createUserProfile);
userProfileRouter.get("/", userProfilesController.getUserProfile);
userProfileRouter.patch(
  "/updateSubs",
  userProfilesController.updateSubscription
);


module.exports = userProfileRouter;
