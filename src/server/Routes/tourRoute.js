import express from "express";
import tourCtrl from "../controllers/tourController.js";

const router = express.Router();

router.route("/api/tours/city/:city")
.get(tourCtrl.listToursByCity);

export default router;