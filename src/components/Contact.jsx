import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submit = (values) => {
    const templateParams = {
      user_name: values.user_name,
      user_email: values.user_email,
      message: values.message,
    };

    // Send email using EmailJS
    emailjs.send(
      "Rajarshi_26",      // Service ID
      "Rajarshi_2603",    // Template ID
      templateParams,
      "9LnOnFzrXoG8Ym0AY" // Public Key
    )
    .then(() => {
      console.log("✅ Message sent successfully!");
      alert("Message sent successfully ✅");
      reset();
    })
    .catch((error) => {
      console.error("❌ Failed to send message:", error);
      alert("Failed to send message: " + JSON.stringify(error));
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's Build Something Amazing Together
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(submit)} className="glass rounded-2xl p-6 glow-effect">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Send a Message
                </h3>

                {/* Name Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    {...register("user_name", { required: true })}
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg focus:outline-none focus:border-accent transition-all"
                  />
                  {errors.user_name?.type === "required" && (
                    <div className="text-red-500 text-sm mt-1">* Name is required</div>
                  )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    {...register("user_email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9]+(\.?[a-zA-Z0-9]+)*@gmail\.com$/,
                    })}
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg focus:outline-none focus:border-accent transition-all"
                  />
                  {errors.user_email?.type === "required" && (
                    <div className="text-red-500 text-sm mt-1">* Email is required</div>
                  )}
                  {errors.user_email?.type === "pattern" && (
                    <div className="text-red-500 text-sm mt-1">* Invalid email format</div>
                  )}
                </div>

                {/* Message Input */}
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    {...register("message", { required: true })}
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg focus:outline-none focus:border-accent transition-all resize-none"
                  />
                  {errors.message?.type === "required" && (
                    <div className="text-red-500 text-sm mt-1">* Message is required</div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-accent to-accentPurple rounded-lg font-semibold flex items-center justify-center gap-2 glow-effect"
                >
                  <FaPaperPlane /> Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
