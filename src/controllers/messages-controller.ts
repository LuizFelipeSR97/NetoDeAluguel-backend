import messagesService from "@/services/messages-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getMessagesByUserId(req: Request, res: Response) {
  const {id} = req.params;
  const userId = Number(id);
  try {
    //const result = await messagesService.getMessagesByUserId(userId);
    //return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
};

export async function getAllMessagesByUserId(req: Request, res: Response) {
  const {id} = req.params;
  const userId = Number(id);
  try {
    //const result = await messagesService.getAllMessagesByUserId(userId);
    //return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
