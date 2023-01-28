import { Router } from "express";
import { createUserSchema, signInSchema, signOutSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { signUp, signIn, signOut } from "@/controllers";

const usersRouter = Router();

usersRouter.post("/sign-up", validateBody(createUserSchema), signUp);
usersRouter.post("/sign-in", validateBody(signInSchema), signIn);
usersRouter.post("/sign-out", validateBody(signOutSchema), signOut);

export { usersRouter };
