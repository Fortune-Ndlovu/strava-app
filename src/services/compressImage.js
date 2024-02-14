// Utilizing browser-image-compression library's compression functionality 
import imageCompression from "browser-image-compression";

const compressImage = async (file) => {
  try {
    const options = {
      maxSizeMB: 1, // Maximum size of the compressed image
      maxWidthOrHeight: 800, // Maximum width or height of the compressed image
    };

    // Compress the image using the provided options
    const compressedFile = await imageCompression(file, options);

    // return the compressed file
    return compressedFile;
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error;
  }
};

export default compressImage;
