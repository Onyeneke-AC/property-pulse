// This file is used to protect the routes stated in the matcher array
export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};