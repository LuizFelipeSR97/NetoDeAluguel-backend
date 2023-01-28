import { CreateUserParams, SignInParams, SignOutParams } from "@/services/users-service";
import Joi from "joi";

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const signInSchema = Joi.object<SignInParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const signOutSchema = Joi.object<SignOutParams>({
  userId: Joi.number().required()
});