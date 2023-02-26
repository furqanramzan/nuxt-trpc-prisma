import { User } from "server/models";

export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany();
  return users;
});
