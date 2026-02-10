import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { PROFILE, PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-bg relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-text-main font-mono flex items-center gap-4">
                    <span className="text-primary">03.</span> Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                scale={1.02}
                                className="bg-card border border-text-main/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all group shadow-xl"
                            >
                                {/* Image / Thumbnail Area */}
                                <div className="relative h-48 bg-gray-800/50 flex items-center justify-center overflow-hidden group">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                            <FaFolder className="text-6xl text-text-muted/50 group-hover:text-primary/50 transition-colors" />
                                        </div>
                                    )}

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Overlay Links */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-[-50%] z-10">
                                        {project.github !== "Private Repo" && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-text-main/10 backdrop-blur-md rounded-full hover:bg-text-main text-text-main hover:text-bg transition-all hover:scale-110">
                                                <FaGithub className="text-xl" />
                                            </a>
                                        )}
                                        <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-text-main/10 backdrop-blur-md rounded-full hover:bg-text-main text-text-main hover:text-bg transition-all hover:scale-110">
                                            <FaExternalLinkAlt className="text-xl" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors font-mono">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Problem Solved Tooltip or Small Text */}
                                    <p className="text-xs text-text-muted mb-6 italic border-l-2 border-text-muted/50 pl-3">
                                        "{project.problemSolved}"
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="text-xs font-mono px-2 py-1 bg-text-main/5 rounded border border-text-main/10 text-secondary"
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
