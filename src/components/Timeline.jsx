import { motion } from "framer-motion";
import { EDUCATION_TIMELINE } from "../constants";

const Timeline = () => {
    return (
        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div className="absolute z-0 w-1 h-full bg-text-main/10 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
            {EDUCATION_TIMELINE.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className={index % 2 === 0 ? "timeline-container left" : "timeline-container right"}>
                        <div className={index % 2 === 0 ? "timeline-pointer left" : "timeline-pointer right"} aria-hidden="true"></div>
                        <div className="bg-card border border-text-main/10 p-6 rounded-lg shadow-xl hover:border-primary/50 transition-all">
                            <span className="font-bold text-primary text-sm tracking-wide">{item.year}</span>
                            <h3 className="text-lg font-bold text-text-main mt-1">{item.title}</h3>
                            <p className="text-sm text-text-muted mb-2">{item.institution}</p>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
