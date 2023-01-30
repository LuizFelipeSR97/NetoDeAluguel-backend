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

async function getUserInfo(userId: number) {
  const user = await prisma.users.findFirst({
    where: {
      id: userId
    },
    include: {
      userTypes: true,
      usersStatus: true
    }
  });
  return user
}

const userRepository = {
  findByEmail,
  create,
  updateUserStatus,
  getUserInfo
};

export default userRepository;
