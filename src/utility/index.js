import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => await bcrypt.hash(password, 10);
export const comparePassword = async (password, hashPassword) => await bcrypt.compare(password, hashPassword);
export const generateToken = async (data) => await jwt.sign({ ...data }, 'top-secret-key');
export const verifyToken = async (token) => await jwt.verify(token, 'top-secret-key');