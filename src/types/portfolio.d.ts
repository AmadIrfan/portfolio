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
	startYear: string;
	endYear: string;
	description: string;
}

export interface Experience {
	role: string;
	company: string;
	startDate: string;
	endDate: string;
	description: string;
}

export interface Project {
	title: string;
	description: string;
	tech: string[];
	github: string;
	liveDemo: string;
	isCompleted?: bool;
	startDate?: string;
	endDate?: string;
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
		linkedin?: string;
		github?: string;
		mail?: string;
		facebook?: string;
		x?: string;
		instagram?: string;
	};
}

export interface Profile {
	name: string;
	heroImageIndex: int | 0;
	designation: string[];
	imageUrl: string[];
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
	showSections: ShowSection;
}

export interface Certification {
	title: string;
	issuer: string;
	endDate: string;
	startDate: string;
	certificateUrl?: string;
	logo?: string; // optional logo like Coursera, Google, etc.
}

export interface ShowSection {
	hero: boolean;
	about: boolean;
	skills: boolean;
	education: boolean;
	certifications: boolean;
	experience: boolean;
	projects: boolean;
	reviews: boolean;
	contact: boolean;
	sideIcons: boolean;
	footer: boolean;
}

export interface SectionInterface {
	id: string;
	label: string;
	ref: RefObject<HTMLElement>;
	enable: boolean;
}
