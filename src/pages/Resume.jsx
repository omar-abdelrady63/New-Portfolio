import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { EDUCATION_TIMELINE, PROFILE, PROJECTS, SKILLS } from "../constants";

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-white text-black min-h-screen pt-24 pb-12 font-sans relative">

            {/* Download/Print Button (Floating) */}
            <div className="fixed bottom-8 right-8 z-50 print:hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                    <FaDownload /> Download PDF
                </button>
            </div>

            <div className="max-w-[210mm] mx-auto bg-white p-8 md:p-12 shadow-2xl print:shadow-none print:w-full print:max-w-none">

                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-6 flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold uppercase tracking-wide text-gray-900">{PROFILE.name}</h1>
                        <h2 className="text-xl font-medium text-primary mt-1">{PROFILE.role}</h2>
                        <p className="text-gray-600 mt-2 max-w-lg text-sm">{PROFILE.summary}</p>
                    </div>
                    <div className="text-right text-sm space-y-1 text-gray-700">
                        <p className="flex items-center justify-end gap-2"><FaEnvelope /> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
                        <p className="flex items-center justify-end gap-2"><FaPhone /> <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></p>
                        <p className="flex items-center justify-end gap-2"><FaMapMarkerAlt /> {PROFILE.location}</p>
                        <p className="flex items-center justify-end gap-2"><FaLinkedin /> <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p className="flex items-center justify-end gap-2"><FaGithub /> <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-8">

                    {/* Left Column (Main Content) */}
                    <div className="col-span-12 md:col-span-8 space-y-8">

                        {/* Experience / Timeline */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 text-gray-800">Experience & Education</h3>
                            <div className="space-y-6">
                                {EDUCATION_TIMELINE.map((item, index) => (
                                    <div key={index} className="relative pl-4 border-l-2 border-gray-200">
                                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gray-400"></div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                                            <span>{item.institution}</span>
                                            <span>{item.year}</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 text-gray-800">Key Projects</h3>
                            <div className="space-y-4">
                                {PROJECTS.slice(0, 4).map((project, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="font-bold text-gray-900">{project.title}</h4>
                                            <a href={project.github} className="text-xs text-blue-600 hover:underline">View Code</a>
                                        </div>
                                        <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                                        <p className="text-xs text-gray-500 italic mt-1">Stack: {project.techStack.map(t => t.name).join(", ")}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="col-span-12 md:col-span-4 space-y-8">

                        {/* Skills */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 text-gray-800">Technical Skills</h3>

                            <div className="space-y-4">
                                {SKILLS.map((category) => (
                                    <div key={category.category}>
                                        <h4 className="font-bold text-sm text-gray-700 mb-2">{category.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map(skill => (
                                                <span key={skill.name} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs border border-gray-200">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 text-gray-800">Languages</h3>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li><strong>Arabic:</strong> Native</li>
                                <li><strong>English:</strong> Professional Working Proficiency</li>
                            </ul>
                        </section>

                    </div>
                </div>

                {/* Footer Quote */}
                <div className="mt-12 text-center text-xs text-gray-400 pt-8 border-t border-gray-100">
                    <p>Designed & Built by {PROFILE.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
