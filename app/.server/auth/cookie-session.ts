import { createCookieSessionStorage } from '@remix-run/node';
    
export const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: [
            (() => {
                if (!process.env.SESSION_SECRET) {
                    if (process.env.NODE_ENV === "production") {
                        throw new Error("SESSION_SECRET must be set in production");
                    }
                    return 'default-secret';
                }
                return process.env.SESSION_SECRET;
            })()
        ],
        secure: process.env.NODE_ENV === "production",
    }
});

export const {
    commitSession,
    destroySession, getSession
} = sessionStorage;
