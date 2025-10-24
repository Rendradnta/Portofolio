import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown } from 'lucide-react'
import { fadeIn, textVariant } from '../utils/motion'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-glow">
            <span className="text-white">Renzy</span>
            <span className="text-primary"> Rendranta</span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-primary-light mb-4">
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'Frontend Specialist',
                2000,
                'Backend Engineer',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about modern web technologies and creating exceptional digital experiences
          </p>
        </motion.div>

        <motion.button
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-heading font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50 card-glow"
        >
          View Projects
          <ChevronDown className="animate-bounce" size={20} />
        </motion.button>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-primary" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero