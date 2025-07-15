// This file is part of The Movie Spot project.
// It is licensed under the GNU General Public License v3.0.
// prima-client.ts
// This file sets up the Prisma client with the Accelerate extension for performance optimization.
import { PrismaClient } from "@prisma/client"; // Adjust the import path based on your project structure
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const db = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

export default db