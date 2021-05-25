import { getUserProjects } from '../Users';

export { default as getProject } from './_getProject';
export { default as getProjectsReports } from './_getProjectReports';
export { default as updateProject } from './_updateProject';
export { default as createProject } from './_createProject';
export { default as deleteProject } from './_deleteProject';

export const getAllProjects = async (userId: number) => {
  try {
    const projects = await getUserProjects(userId);
    return projects;
  } catch (e) {
    console.log(e);
  }

  return [{ Name: '', Id: -1 }];
};
