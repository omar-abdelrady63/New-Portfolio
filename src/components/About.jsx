import { motion } from "framer-motion";
import { PROFILE } from "../constants";
import TechStack from "./TechStack";
import Timeline from "./Timeline";

const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative bg-bg">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main font-mono flex items-center gap-4">
                            <span className="text-primary">01.</span> About Me
                        </h2>
                        <div className="prose text-text-muted leading-relaxed text-lg mb-8">
                            <p className="mb-6">
                                Hello! I am <strong className="text-text-main">{PROFILE.name}</strong>, a passionate <span className="text-secondary">Software Engineer</span> based in {PROFILE.location}.
                            </p>
                            <p className="mb-6">
                                I am currently a {PROFILE.level} student at the <strong>{PROFILE.faculty}</strong>, {PROFILE.university}.
                                My journey involves solving complex problems, building scalable web applications, and constantly learning new technologies.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 font-mono"
                    >
                        <div className="bg-card p-6 rounded-xl border border-text-main/10 hover:border-primary/50 transition-all text-center group">
                            <div className="text-4xl font-bold text-text-main group-hover:text-primary transition-colors mb-2">{PROFILE.graduationYear}</div>
                            <div className="text-xs text-text-muted tracking-widest">GRADUATION</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-text-main/10 hover:border-secondary/50 transition-all text-center group">
                            <div className="text-4xl font-bold text-text-main group-hover:text-secondary transition-colors mb-2">{PROFILE.grade}</div>
                            <div className="text-xs text-text-muted tracking-widest">GPA</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-text-main/10 hover:border-tertiary/50 transition-all text-center group">
                            <div className="text-4xl font-bold text-text-main group-hover:text-tertiary transition-colors mb-2">15+</div>
                            <div className="text-xs text-text-muted tracking-widest">PROJECTS</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-text-main/10 hover:border-primary/50 transition-all text-center group">
                            <div className="text-4xl font-bold text-text-main group-hover:text-primary transition-colors mb-2">2+</div>
                            <div className="text-xs text-text-muted tracking-widest">YEARS EXP</div>
                        </div>
                    </motion.div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3xl font-bold mb-12 text-center text-text-main font-mono">
                        <span className="text-secondary">My</span> Journey
                    </h3>
                    <Timeline />
                </div>

                <TechStack />
            </div>
        </section>
    );
};

export default About;
