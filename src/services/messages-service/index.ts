import userRepository from "@/repositories/user-repository";
import messagesRepository from "@/repositories/messages-repository";
import { messages, users } from "@prisma/client";

export async function getMessagesByUserId( userId: number): Promise<messages> {

    //procurar o typeId
    //Se for 1 (ajudante), procurar messages que 

  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    name,
    email,
    password: hashedPassword,
  });
}

async function getAllMessagesByUserId(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

const messagesService = {
    getMessagesByUserId,
    getAllMessagesByUserId
};

export * from "./errors";
export default messagesService;
