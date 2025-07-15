import db from "./db";

export const createUser = async (userData: { name: string; email: string; password: string }) => {
    return db.user.create({
        data: {
            email: userData.email,
            password: userData.password,
            username: userData.name, // assuming 'name' is used as 'username'
        },
    });
};

export const getUserByEmail = async (email: string) => {
    return db.user.findUnique({
        where: {
            email
        },  
        select: {
            id: true,
            email: true,
            username: true,
            password: true // include password for login verification
        }
    });
};

export const getUserById = async (id: string) => {
    return db.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            email: true,
            username: true
        }
    });
};