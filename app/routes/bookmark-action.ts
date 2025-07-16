

import { getUser } from "@/.server/auth/user-session";
import { createBookmark, deleteBookmark, getBookmark } from "@/.server/services/set-bookmark";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({  request }: ActionFunctionArgs) => {
  const user = await getUser(request);
  if (!user) {
    console.error("User not authenticated");
    return { success: false };
  }
  // Extract bookmarkId from params
  const formData = await request.formData();
  const { bookmark, intent } = Object.fromEntries(formData) as { bookmark: string, intent: string; };
  const bookmarkState = JSON.parse(bookmark);
  console.log("Bookmark action received:", bookmarkState, intent);

  if (!bookmarkState) {
    console.error("Bookmark is required");
    return { success: false };
  }

  // Assuming you have a function to handle the bookmark action
  const bm = await getBookmark(bookmarkState.id, user.id) ?? undefined;
  console.log("Bookmark found:", bm);
  if (!bm && intent === "remove") {
    console.error("Bookmark not found for removal");
    return { success: false };
  }
  if (intent === "add") {
    // Create a new bookmark
    const createdBookmark = await createBookmark(user.id, bookmarkState);
    console.log("Bookmark created:", createdBookmark);
    return { success: true, action: "created" };
  } else if (intent === "remove" && bm) {
    console.log("Removing bookmark:", bm);
    // Delete the existing bookmark
    const deletedBookmark = await deleteBookmark(bm?.id, user.id);
    console.log("Bookmark deleted:", deletedBookmark);
    return { success: true, action: "deleted" };
  } else {
    console.error("Invalid intent:", intent);
    return { success: false };
  }
 
}