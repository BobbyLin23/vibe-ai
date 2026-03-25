import { z } from 'zod'

import { ORPCError, os } from '@orpc/server'

export const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  name: z.string(),
  image: z.url(),
})

export interface ORPCContext {
  user?: z.infer<typeof UserSchema>
}

export const pub = os.$context<ORPCContext>()

export const authed = pub.use(({ context, next }) => {
  if (!context.user) {
    throw new ORPCError('UNAUTHORIZED')
  }

  return next({
    context: {
      user: context.user,
    },
  })
})
