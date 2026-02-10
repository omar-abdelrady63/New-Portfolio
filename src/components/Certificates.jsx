import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { CERTIFICATES } from "../constants";

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 bg-bg relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-text-main font-mono flex items-center gap-4">
          <span className="text-primary">02.</span> Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATES.map((cert, index) => (
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
                scale={1.05}
                className="bg-card border border-text-main/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all group shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-text-main mb-2 font-mono group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-auto border-t border-text-main/10 pt-2">
                    {cert.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
