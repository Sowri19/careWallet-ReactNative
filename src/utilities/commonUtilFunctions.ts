import axiosInstance from './axiosInstance';

export const getImageUrlfromBinaryAPI = async (params: { url: string }) => {
  try {
    const { url } = params;
    const response = await axiosInstance.get(url);
    const blobOptions: BlobOptions = {
      type: response.headers['Content-Type'] || `image/jpg`,
    };
    const blob = new Blob([response.data], blobOptions);
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    return ``;
  }
};
