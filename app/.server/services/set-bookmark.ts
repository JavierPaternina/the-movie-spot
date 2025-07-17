import { TMediaInfo } from "@/shared/types";
import db from "./db";
// If you need the Bookmark type, import PrismaClient and use Prisma.Bookmark
export const getBookmark = async (id: string | number, userId: string) => {
    return db.bookmark.findFirst({
        where: {
            id: String(id),
            userId: String(userId),
        },
    });
};

export const createBookmark = async (userId: string, media:TMediaInfo) => {
    return db.bookmark.create({
        data: {
            userId,
            media
            },
        });
    };
export const getBookmarksByUserId = async (userId: string) => {
    return db.bookmark.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export const deleteBookmark = async (id: string | number, userId: string) => {
    return db.bookmark.delete({
        where: {
            id: String(id),
            userId: String(userId),
        },
    });
};