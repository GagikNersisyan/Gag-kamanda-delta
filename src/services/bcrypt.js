import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
  return hash;
};

export const comparePassword = (loginPassword, userPassword) =>
  bcrypt.compare(loginPassword, userPassword);


export const compareNewPassword = (userNewPassword, userPassword) =>
  bcrypt.compare(userNewPassword, userPassword);
