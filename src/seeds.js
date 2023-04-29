import { createUserService } from './api/user/user.service.js';

export const createSuperAdminSeed = async () => {
  const createSuperAdmin = {
    firstName: 'Admin',
    lastName: 'SuperAdmin',
    username: 'SuperAdmin',
    email: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.SUPER_ADMIN_PASSWORD,
    isVerified: true,
    role: 'SUPER_ADMIN',
  };
  try {
    await createUserService(createSuperAdmin);
  } catch (err) {
    console.log('SEED SUPER ADMIN', err.message);
  }
};