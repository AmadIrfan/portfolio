import React, { useState } from "react";
import { ref, update } from "firebase/database";
import db from "../../../firebase/config";
import type { Profile } from "../../../types/portfolio";

const ProfileManager: React.FC<{ profile: Profile }> = ({ profile }) => {
	// const [loading, setLoading] = useState(true);
	const [profiles, setProfiles] = useState<Profile>(profile);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setProfiles({ ...profile, [e.target.name]: e.target.value });
	};

	const handleSave = async () => {
		await update(ref(db, "profile"), profile);
		alert("Profile updated!");
	};

	return (
		<div className="bg-white p-6 rounded shadow">
			<h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
			<div className=" md:flex space-y-4 mb-4 block md:flex-row ">
				<div className="m-2 w-full">
					<label htmlFor="name">Name</label>
					<input
						readOnly
						id="name"
						name="name"
						value={profiles.name}
						onChange={handleChange}
						className="w-full p-2 rounded-md  border "
					/>
				</div>

				<div className="m-2 w-full">
					<label htmlFor="hid">Hero Image Index</label>
					<input
						type="number"
						min={0}
						max={profiles.imageUrl.length - 1}
						id="hid"
						name="heroImageIndex"
						value={profiles.heroImageIndex}
						onChange={handleChange}
						className="w-full p-2 rounded-md  border"
					/>
				</div>
			</div>
			<div className="m-2 w-full">
				<label htmlFor="bio">Bio</label>
				<textarea
					id="bio"
					rows={5}
					name="bio"
					value={profiles.bio}
					onChange={handleChange}
					className="w-full p-2 rounded-md  border mb-3"
				/>
			</div>
			<div className="m-2 w-full ">
				<label htmlFor="resumeLink">Resume URL</label>
				<input
					id="resumeLink"
					placeholder="Resume URL"
					name="resumeLink"
					value={profiles.resumeLink}
					onChange={handleChange}
					className="w-full p-2 rounded-md border mb-3"
				/>
			</div>

			<div className="w-full mb-5 flex flex-wrap flex-row space-x-2">
				{profile.imageUrl.map((item, index) => {
					return (
						<div className="m-2 w-xl" key={index}>
							<label htmlFor={`image-item-${index}`}> Image URL </label>
							<input
								id={`image-item-${index}`}
								className="w-full p-2 rounded-md border"
								value={item}
								readOnly
								// onChange={(e) => {}}
								key={index}
							/>
						</div>
					);
				})}
			</div>

			<button
				onClick={handleSave}
				className="bg-[#9333ea] text-xl w-1/4 shadow-2xl text-white px-4 py-2 rounded-xl"
			>
				Save
			</button>
		</div>
	);
};

export default ProfileManager;
