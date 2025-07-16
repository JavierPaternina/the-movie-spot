import db from "./db";
// If you need the Bookmark type, import PrismaClient and use Prisma.Bookmark
export const getBookmark = async (id: string | number) => {
    return db.bookmark.findFirst({
        where: {
            id: String(id),
        },
    });
};

