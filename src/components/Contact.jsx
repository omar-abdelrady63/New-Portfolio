import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { PROFILE } from "../constants";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for email sending logic
        console.log("Form submitted:", formData);
        alert("Thanks for your message! This is a demo form.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 px-6 bg-bg relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main font-mono">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-text-main mb-6">Contact Information</h3>

                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-text-main/5 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                <FaEnvelope className="text-2xl text-primary" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-main mb-1">Email Me</h4>
                                <a href={`mailto:${PROFILE.email}`} className="text-text-muted hover:text-text-main transition-colors">
                                    {PROFILE.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-text-main/5 rounded-2xl group-hover:bg-green-500/20 transition-colors">
                                <FaWhatsapp className="text-2xl text-green-500" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-main mb-1">WhatsApp</h4>
                                <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-main transition-colors">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-text-main/5 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                <FaMapMarkerAlt className="text-2xl text-primary" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-main mb-1">Location</h4>
                                <p className="text-text-muted">
                                    {PROFILE.location}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-3xl border border-text-main/10 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-bg/50 border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-text-muted/50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-bg/50 border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-text-muted/50"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-bg/50 border border-text-main/10 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-text-muted/50 resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-xl shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
