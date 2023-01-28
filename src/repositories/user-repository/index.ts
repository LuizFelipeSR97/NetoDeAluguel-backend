import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string, select?: Prisma.usersSelect) {

  const user = await prisma.users.findFirst({
    where: {
      email,
    }
  })

  return user;
}

async function create(data: Prisma.usersCreateInput) {
  return prisma.users.create({
    data,
  });
}

async function updateUserStatus(userId: number, statusId: number) {

  const user = await prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      statusId,
    },
  })

  return user;
}

const userRepository = {
  findByEmail,
  create,
  updateUserStatus
};

export default userRepository;
