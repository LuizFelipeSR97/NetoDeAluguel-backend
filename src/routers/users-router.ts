import { Router } from "express";
import { createUserSchema, signInSchema, signOutSchema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";
import { signUp, signIn, signOut, getUserInfo } from "@/controllers";

const usersRouter = Router();

usersRouter
    .post("/sign-up", validateBody(createUserSchema), signUp)
    .post("/sign-in", validateBody(signInSchema), signIn)
    //.all("/*", authenticateToken)
    .post("/sign-out", validateBody(signOutSchema), signOut)
    .get("/:id", getUserInfo)

export { usersRouter };
