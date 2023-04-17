import jwt from 'jsonwebtoken';

const JWT_SECRET = '156';
export const signToken = (data, expiresIn) => jwt.sign(data, JWT_SECRET, { expiresIn });

export const verifyToken = (token) => jwt.verify(token, JWT_SECRET);