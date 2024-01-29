import axiosInstance from './axiosInstance';

export const performLogin = async (
  username: string,
  password: string,
  type: string
) => {
  try {
    const response = await axiosInstance.post(
      '/patient/authentication/login.ns',
      {
        username: username.toLowerCase(),
        password: password,
        type,
      }
    );

    if (response.data.success) {
      return { success: true, data: response.data };
    } else {
      console.log(response.data);
      console.log('Authentication failed on the server.');
      return { success: false };
    }
  } catch (error) {
    console.log('An error occurred during login:', error);
    return { success: false, error };
  }
};
