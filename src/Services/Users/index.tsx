/* eslint-disable consistent-return */
import getUser from './_getUser';
import getUserReports from './_getUserReports';

export { default as getUser } from './_getUser';
export { default as getUserProjects } from './_getUserProjects';
export { default as getUserReports } from './_getUserReports';
export { default as updateUser } from './_updateUser';
export { default as deleteUser } from './_deleteUser';

export const getAllReports = async (userId: number) => {
  try {
    const reports = await getUserReports(userId);
    return reports;
  } catch (e) {
    console.log(e);
  }

  return [{ Name: '', Id: -1 }];
};
// @TODO refactor this with interface. unknown is a bad decision
export const getUserProps = async (userId: number): Promise<unknown> => {
  try {
    const user = await getUser(userId);
    return user;
  } catch (error) {
    console.log(error);
  }
};
