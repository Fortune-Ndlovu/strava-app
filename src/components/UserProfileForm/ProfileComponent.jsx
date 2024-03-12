import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getCurrentUserId } from "../../firebase/firebase";

const ProfileComponent = ({ updateUserDocument }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // Upload image to Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `profile_images/${file.name}`);
    await uploadBytes(storageRef, file);

    // Get download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Update the user document with the image URL
    try {
      await updateUserDocument({ profileImageUrl: imageUrl });
      console.log("Profile image updated successfully.");
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected Image"
          width={70}
          height={70}
          style={{
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
      )}
    </div>
  );
};

export default ProfileComponent;
