import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getServicesByUserId, getAllServicesByUserId, getAllOpenServices } from "@/controllers";

const servicesRouter = Router();

servicesRouter
    //.all("/*", authenticateToken)
    .get("/open", getAllOpenServices)
    .get("/:id", getServicesByUserId)
    .get("/:id/all", getAllServicesByUserId)

export { servicesRouter };
