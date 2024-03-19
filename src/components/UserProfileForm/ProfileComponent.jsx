import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from 'react-bootstrap/Image';
import CompressImage from "../../services/compressImage";

const ProfileComponent = ({ updateUserDocument }) => {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = async (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);

		// Compress the image before uploading
		const compressedImage = await CompressImage(file);

		// Upload compressed image to Firebase Storage
		const storage = getStorage();
		const storageRef = ref(storage, `profile_images/${file.name}`);
		await uploadBytes(storageRef, compressedImage);

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
			<input type="file" className="form-control" onChange={handleImageChange} />
			{selectedImage && (
				<Image
					src={URL.createObjectURL(selectedImage)}
					alt="Selected"
					width={70}
					height={70}
					style={{
						objectFit: "cover",
						marginRight: "10px",
					}}
					thumbnail
				/>
			)}
		</div>
	);
};

export default ProfileComponent;
