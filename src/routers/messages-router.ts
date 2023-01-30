import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getMessagesByUserId, getAllMessagesByUserId } from "@/controllers";

const messagesRouter = Router();

messagesRouter
    //.all("/*", authenticateToken)
    .get("/:id", getMessagesByUserId)
    .get("/:id/all", getAllMessagesByUserId)

export { messagesRouter };
