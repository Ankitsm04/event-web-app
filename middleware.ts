import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
    audience: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/razorpay',
        '/api/webhook/uploadthing',
    ],
    
})

export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};