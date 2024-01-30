import axiosInstance from '../../utilities/axiosInstance';

const taskQueue: { [key: string]: Promise<any> } = {};

export const addCleanUpTask = async (key: string, task: Promise<any>) => {
  if (key in taskQueue) {
    throw new Error('Key already exists');
  }
  taskQueue[key] = task;
};

export const deleteCleanUpTask = async (key: string) => {
  delete taskQueue[key];
};

export const triggerCleanUp = async () => {
  const promiseArr = [];
  for (const key of Object.keys(taskQueue)) {
    const value = taskQueue[key];
    promiseArr.push(value);
    delete taskQueue[key];
  }
  return await Promise.all(promiseArr);
};

export const logout = async (params: any = {}) => {
  const { successCB } = params;
  const response = await axiosInstance.get('/patient/authentication/logout.ns');
  await triggerCleanUp();
  successCB && successCB(response.data);
};
