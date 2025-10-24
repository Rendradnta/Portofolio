import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2 } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            variants={fadeIn('down', 0.2)}
            className="text-4xl sm:text-5xl font-heading font-bold text-center mb-16 text-glow"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.3)}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src="https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/59926218322e25d9.jpeg"
                    alt="Renzy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              className="space-y-6"
            >
              <div className="glass-effect p-6 rounded-lg card-glow">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-light">
                  Hello! I'm Renzy
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A passionate fullstack developer with expertise in modern web technologies. 
                  I specialize in building scalable web applications using cutting-edge frameworks 
                  and tools, always focusing on creating exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I bring 
                  ideas to life through clean code, innovative solutions, and attention to detail.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  variants={fadeIn('left', 0.4)}
                  className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-primary border border-transparent transition-all duration-300"
                >
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Jawa Tengah, Indonesia</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn('left', 0.5)}
                  className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-primary border border-transparent transition-all duration-300"
                >
                  <GraduationCap className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Education</p>
                    <p className="font-medium">SMAN 1</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn('left', 0.6)}
                  className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-primary border border-transparent transition-all duration-300"
                >
                  <Code2 className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Specialization</p>
                    <p className="font-medium">Amatir Development</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About