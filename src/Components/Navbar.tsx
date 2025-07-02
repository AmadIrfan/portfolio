import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import type { Profile, SectionInterface } from "../types/portfolio";
import { Toggle } from "./ui/toggle";

interface NavbarProps {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
	profile: Profile;
	setMobileMenuOpen: (b: boolean) => void;
	mobileMenuOpen: boolean;
	activeSection: string;
	sections: SectionInterface[];
	scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
	darkMode,
	setDarkMode,
	profile,
	sections,

	activeSection,
	mobileMenuOpen,
	setMobileMenuOpen,
	scrollToSection,
}) => {
	return (
		<header
			className={`fixed top-0 z-50 w-full border-b backdrop-blur-lg transition-all ${
				darkMode
					? "bg-gray-950/80 border-gray-800"
					: "bg-white/80 border-gray-200"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				{/* Brand */}
				<div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
					{profile.name}
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-5 items-center">
					{sections.map(
						(section) =>
							section.enable && (
								<Button
									key={section.id}
									variant="ghost"
									size="sm"
									onClick={() => scrollToSection(section.id)}
									className={`relative px-2 py-1 ${
										activeSection === section.id
											? "text-blue-500 font-semibold"
											: darkMode
											? "text-gray-300 hover:text-white"
											: "text-gray-700 hover:text-gray-900"
									}`}
								>
									{section.label}
									<span
										className={`absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transition-transform duration-300 ${
											activeSection === section.id
												? "scale-x-100"
												: "scale-x-0 group-hover:scale-x-100"
										}`}
									/>
								</Button>
							)
					)}
				</nav>

				{/* Actions */}
				<div className="flex items-center gap-2">
					{/* Dark Mode Toggle */}
					<Toggle
						pressed={darkMode}
						onPressedChange={() => setDarkMode(!darkMode)}
						className="rounded-full p-2"
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</Toggle>

					{/* Mobile Menu */}
					<div className="md:hidden">
						<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu />
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="w-64 p-5">
								<div className="flex flex-col space-y-4 mt-6">
									{sections.map((section) => (
										<Button
											key={section.id}
											variant="ghost"
											className={`justify-start text-left ${
												activeSection === section.id
													? "text-blue-500 font-semibold"
													: "text-muted-foreground"
											}`}
											onClick={() => {
												scrollToSection(section.id);
												setMobileMenuOpen(false);
											}}
										>
											{section.label}
										</Button>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
