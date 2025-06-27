export interface Skill {
	name: string;
	level: string;
	percentage: number;
	category: string;
	logo?: string;
}

export interface Education {
	degree: string;
	institution: string;
	year: string;
	description: string;
}

export interface Experience {
	role: string;
	company: string;
	duration: string;
	description: string;
}

export interface Project {
	title: string;
	description: string;
	tech: string[];
	github: string;
	liveDemo: string;
	image: string;
}

export interface Review {
	name: string;
	rating: number;
	message: string;
	image: string;
	position: string;
}

export interface Contact {
	email: string;
	phone: string;
	location: string;
	social: {
		linkedin: string;
		github: string;
		mail: string;
		facebook: string;
		x: string;
		instagram: string;
	};
}

export interface Profile {
	name: string;
	designation: string[];
	imageUrl: string;
	bio: string;
	resumeLink: string;
}

export interface PortfolioData {
	profile: Profile;
	skills: Skill[];
	education: Education[];
	experience: Experience[];
	projects: Project[];
	certifications: Certification[];
	reviews: Review[];
	contact: Contact;
}

export interface Certification {
	title: string;
	issuer: string;
	date: string;
	certificateUrl?: string;
	logo?: string; // optional logo like Coursera, Google, etc.
}
