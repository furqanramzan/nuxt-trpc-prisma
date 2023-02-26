import { z } from "zod";
import { router, procedure } from "~/server/trpc/trpc";

export const userRouter = router({
  list: procedure.query(() => {
    return prisma.user.findMany();
  }),
  create: procedure
    .input(
      z.object({
        name: z.string().max(255).min(1),
        email: z.string().max(255).min(1),
      })
    )
    .mutation(({ input }) => {
      return prisma.user.create({ data: input });
    }),
});
