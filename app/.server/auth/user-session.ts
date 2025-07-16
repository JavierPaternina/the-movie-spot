import { UserSessionData } from "@/.server/auth-types";
import { commitSession, getSession } from "@/.server/auth/cookie-session";
import { getUserById } from "@/.server/services/user";
import { redirect } from "@remix-run/react";

// Session management
export async function createUserSession(user: UserSessionData, redirectTo: string = '/') {
  const session = await getSession();
  session.set('user', user);  
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  const session = await getSession(request.headers.get('Cookie'));
  return session.get('user') as UserSessionData | undefined;
}

export async function requireUserId(request: Request, redirectTo: string = '/login') {
  const user = await getUserSession(request);
  if (!user) {
    throw redirect(redirectTo);
  }
  return user.id;
}

export async function getUser (request: Request) {
    const user = await getUserSession(request);
    if (!user) return null;

    return await getUserById(user.id);
}