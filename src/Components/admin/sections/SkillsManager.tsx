import React, { useState } from "react";
import type { Skill } from "../../../types/portfolio";
import { Edit } from "lucide-react";

const SkillsManager: React.FC<{ skill: Skill[] }> = ({ skill }) => {
	const [skills, setSkillsState] = useState<Skill[]>(skill);
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
	const [editingIndex, setEditingIndex] = useState<number | null>(null);
	const [loading, SetLoading] = useState(false);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [newSkill, setNewSkill] = useState({
		logo: "",
		name: "",
		level: "",
		percentage: "",
		category: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedSkill) {
			setSelectedSkill({ ...selectedSkill, [e.target.name]: e.target.value });
		}
	};

	const handleAddSkill = () => {
		if (!newSkill.name) return;
		// Add newSkill to your Firebase, DB, or state
		console.log("New Skill:", newSkill);
		// Reset the form
		setNewSkill({
			logo: "",
			name: "",
			level: "",
			percentage: "",
			category: "",
		});
	};

	const updateSkill = () => {
		if (editingIndex !== null && selectedSkill) {
			const updatedSkills = [...skills];
			updatedSkills[editingIndex] = selectedSkill;
			setSkillsState(updatedSkills);
			setEditingIndex(null);
			setSelectedSkill(null);
			SetLoading(true);
			console.log(selectedSkill);
			SetLoading(false);
		}
	};

	return (
		<div className="bg-white p-6 rounded shadow">
			<h2 className="text-xl font-semibold mb-4">Edit Skills</h2>

			<div className="overflow-x-auto">
				<table
					key={"table"}
					className="mb-2 w-full border  table-auto gap-2 space-y-2 scrollable"
				>
					<thead>
						<tr className="border text-left">
							<th className="border px-1">Name</th>
							<th className="border px-1">logo</th>
							<th className="border px-1">Level</th>
							<th className="border px-1">Percentage</th>
							<th className="border px-1">Category</th>
							<th className="border px-1">Actions</th>
						</tr>
					</thead>
					<tbody>
						{skills.map((skill, idx) => (
							<tr key={idx}>
								<td key={`c0-${idx}`} className="border px-1">
									{skill.logo && (
										<img
											src={skill.logo}
											alt={skill.name}
											width={"30px"}
											height={"30px"}
										/>
									)}
								</td>
								<td key={`c1-${idx}`} className="border px-1">
									{skill.name}
								</td>
								<td key={`c2-${idx}`} className="border px-1">
									{skill.level}
								</td>
								<td key={`c3-${idx}`} className="border px-1">
									{skill.percentage}
								</td>
								<td key={`c4-${idx}`} className="border px-1">
									{skill.category}
								</td>
								<td key={`c5-${idx}`} className="border px-1">
									<button
										title="btn"
										key={`edit-${idx}`}
										onClick={() => {
											setSelectedSkill(skill);
											setEditingIndex(idx);
										}}
									>
										<Edit key={idx} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<button
				onClick={() => setIsAddModalOpen(true)}
				className="my-4 px-4 py-2 bg-green-500 text-white rounded"
			>
				Add New Skill
			</button>

			{isAddModalOpen && (
				<div className="fixed inset-0 p-5 flex items-center justify-center bg-accent bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded shadow-lg w-96">
						<h3 className="text-lg font-bold mb-4">Add New Skill</h3>

						<input
							type="url"
							name="logo"
							value={newSkill.logo}
							onChange={(e) =>
								setNewSkill({ ...newSkill, logo: e.target.value })
							}
							placeholder="Logo URL"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="text"
							name="name"
							value={newSkill.name}
							onChange={(e) =>
								setNewSkill({ ...newSkill, name: e.target.value })
							}
							placeholder="Name"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="text"
							name="level"
							value={newSkill.level}
							onChange={(e) =>
								setNewSkill({ ...newSkill, level: e.target.value })
							}
							placeholder="Level"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="number"
							name="percentage"
							value={newSkill.percentage}
							onChange={(e) =>
								setNewSkill({ ...newSkill, percentage: e.target.value })
							}
							placeholder="Percentage"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="text"
							name="category"
							value={newSkill.category}
							onChange={(e) =>
								setNewSkill({ ...newSkill, category: e.target.value })
							}
							placeholder="Category"
							className="w-full p-2 border mb-4"
						/>

						<div className="flex justify-end">
							<button
								onClick={() => setIsAddModalOpen(false)}
								className="mr-2 px-4 py-2 bg-gray-300 rounded"
							>
								Cancel
							</button>
							<button
								onClick={() => {
									handleAddSkill(); // Your logic to add
									setIsAddModalOpen(false);
								}}
								className="px-4 py-2 bg-green-600 text-white rounded"
							>
								Add
							</button>
						</div>
					</div>
				</div>
			)}

			{selectedSkill && (
				<div className="fixed inset-0 p-5 flex items-center justify-center bg-accent bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded shadow-lg w-96">
						<h3 className="text-lg font-bold mb-4">Edit Skill</h3>

						<div className="w-40  mb-4">
							<img src={selectedSkill.logo} alt={selectedSkill.name} />
						</div>
						<input
							type="url"
							name="logo"
							value={selectedSkill.logo}
							onChange={handleInputChange}
							placeholder="Logo URL"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="text"
							name="name"
							value={selectedSkill.name}
							onChange={handleInputChange}
							placeholder="Name"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="text"
							name="level"
							value={selectedSkill.level}
							onChange={handleInputChange}
							placeholder="Level"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="number"
							name="percentage"
							value={selectedSkill.percentage}
							onChange={handleInputChange}
							placeholder="Percentage"
							className="w-full p-2 border mb-2"
						/>
						<input
							type="text"
							name="category"
							value={selectedSkill.category}
							onChange={handleInputChange}
							placeholder="Category"
							className="w-full p-2 border mb-4"
						/>
						<div className="flex justify-end">
							<button
								onClick={() => setSelectedSkill(null)}
								className="mr-2 px-4 py-2 bg-gray-300 rounded"
							>
								Cancel
							</button>
							<button
								onClick={updateSkill}
								className="px-4 py-2 bg-blue-600 text-white rounded"
							>
								{loading ? "Loading..." : " Update"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SkillsManager;
