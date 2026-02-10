import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { PROFILE } from "../constants";

const Footer = () => {
    return (
        <footer className="bg-bg py-12 px-6 border-t border-text-main/10 text-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold font-mono text-text-main">
                    Initialize <span className="text-primary">Handshake?</span>
                </h2>
                <p className="text-text-muted max-w-md">
                    Open for internships, freelance projects, and collaborative opportunities.
                </p>

                <div className="flex justify-center gap-8">
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-2xl text-text-muted hover:text-text-main transition-transform hover:-translate-y-1">
                        <FaGithub />
                    </a>
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-2xl text-text-muted hover:text-blue-500 transition-transform hover:-translate-y-1">
                        <FaLinkedin />
                    </a>
                    <a href={`mailto:${PROFILE.email}`} className="text-2xl text-text-muted hover:text-red-500 transition-transform hover:-translate-y-1">
                        <FaEnvelope />
                    </a>
                    <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="text-2xl text-text-muted hover:text-green-500 transition-transform hover:-translate-y-1">
                        <FaWhatsapp />
                    </a>
                </div>

                <p className="text-xs text-text-muted font-mono mt-8">
                    © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
