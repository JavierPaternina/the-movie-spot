

import { getUser } from "@/.server/auth/user-session";
import { getBookmark } from "@/.server/services/set-bookmark";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({  request }: ActionFunctionArgs) => {
  const user = await getUser(request);
  if (!user) {
    console.error("User not authenticated");
    return { success: false };
  }
  // Extract bookmarkId from params
  const formData = await request.formData();
  const { bookmarkId } = Object.fromEntries(formData) as { bookmarkId: string | number };

  if (!bookmarkId) {
    console.error("Bookmark ID is required");
    return { success: false };
  }

  // Assuming you have a function to handle the bookmark action
  const bookmark = await getBookmark(bookmarkId);
  
  if (!bookmark) {
    console.error("Bookmark not found");
    return { success: false };
  }
  // Perform your action with the bookmark here

  return { success: true };
}