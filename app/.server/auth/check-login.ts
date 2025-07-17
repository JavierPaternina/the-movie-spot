import { destroySession, getSession } from "@/.server/auth/cookie-session";
import { getUserByEmail } from '@/.server/services/user';
import { redirect } from '@remix-run/node';
import bcrypt from 'bcryptjs';
export async function verifyLogin (email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) return null;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export async function logout(request: Request) {
  const session = await getSession(request.headers.get('Cookie'));

  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
}