import { motion } from "framer-motion";
import { PROFILE } from "../constants";
import Particle from "./Particle";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-20">
            <Particle />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left order-2 lg:order-1"
                >
                    <h2 className="text-xl md:text-2xl font-mono text-primary mb-4">
                        Hi There! <span className="animate-wave inline-block">👋</span>
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6 tracking-tight">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PROFILE.name}</span>
                    </h1>

                    <div className="text-xl md:text-3xl font-mono text-text-muted h-16 md:h-20">
                        <Typewriter
                            options={{
                                strings: PROFILE.subRoles,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 75,
                                wrapperClassName: "text-primary font-bold",
                                cursorClassName: "text-text-main animate-pulse"
                            }}
                        />
                    </div>

                    <p className="mt-4 text-text-muted max-w-lg leading-relaxed text-base md:text-lg">
                        {PROFILE.summary}
                    </p>


                    <div className="mt-8 flex gap-4 md:gap-6 flex-wrap">
                        <a
                            href="#contact"
                            className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all transform hover:-translate-y-1 text-sm md:text-base border border-transparent"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume"
                            className="px-6 py-3 md:px-8 md:py-3 border border-text-muted hover:border-primary/50 text-text-main font-bold rounded-full transition-all hover:bg-text-main/5 hover:text-primary text-sm md:text-base"
                        >
                            View Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center order-1 lg:order-2"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-primary to-secondary overflow-hidden shadow-2xl">
                            <div className="w-full h-full rounded-full overflow-hidden bg-bg">
                                <img
                                    src={PROFILE.image}
                                    alt="Omar"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
