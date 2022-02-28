import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ firstName, lastName, userId }) => {
  return prisma.profile.create({
    data: {
      firstName,
      lastName,
      User: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export const updateOne = async ({ id, firstName, lastName, userId }) => {
  return prisma.profile.update({
    where: {
      id,
    },
    data: {
      lastName,
      firstName,
    },
  });
}

export const deleteOne = async (id) => {
  return prisma.profile.delete({
    where: { id },
  });
}

export const findOneById = async (id) => {
  return prisma.profile.findUnique({
    where: { id },
  });
}

export const findAll = async () => {
  return prisma.profile.findMany();
}
