/*
  Warnings:

  - You are about to drop the column `backdropPath` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `mediaId` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `mediaType` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `posterPath` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `bookmarks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,media]` on the table `bookmarks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `media` to the `bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "bookmarks_userId_mediaId_mediaType_key";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "backdropPath",
DROP COLUMN "mediaId",
DROP COLUMN "mediaType",
DROP COLUMN "posterPath",
DROP COLUMN "title",
ADD COLUMN     "media" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "bookmarks_userId_media_key" ON "bookmarks"("userId", "media");
