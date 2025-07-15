import bcrypt from 'bcryptjs';
import { getUserByEmail } from '../services/user';
export async function verifyLogin (email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) return null;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}