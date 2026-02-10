import Tilt from "react-parallax-tilt";
import { SKILLS } from "../constants";

const TechStack = () => {
    return (
        <div className="py-10" id="skills">
            <h3 className="text-3xl font-bold mb-12 text-center text-text-main font-mono">
                <span className="text-primary">Skills</span> & Technologies
            </h3>

            <div className="flex flex-col gap-16">
                {SKILLS.map((skillCategory) => (
                    <div key={skillCategory.category}>
                        <h4 className="text-xl font-bold mb-6 text-text-muted border-l-4 border-primary pl-4">
                            {skillCategory.category}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {skillCategory.items.map((skill) => (
                                <Tilt
                                    key={skill.name}
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    scale={1.1}
                                    className="bg-card border border-text-main/10 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all shadow-lg group cursor-pointer"
                                >
                                    <skill.icon
                                        className="text-5xl transition-all group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                        style={{ color: skill.color }}
                                    />
                                    <span className="text-text-muted font-mono text-sm group-hover:text-text-main transition-colors">
                                        {skill.name}
                                    </span>
                                </Tilt>
                            ))}
                        </div>
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
