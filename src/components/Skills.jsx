import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const Skills = () => {
  const skills = [
    { name: 'Node.js', level: 90, color: '#68A063' },
    { name: 'React.js', level: 85, color: '#61DAFB' },
    { name: 'Express.js', level: 80, color: '#000000' },
    { name: 'MongoDB', level: 75, color: '#47A248' },
    { name: 'TailwindCSS', level: 88, color: '#06B6D4' },
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'Git', level: 70, color: '#F05032' },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            Technical <span className="text-primary">Skills</span>
          </motion.h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeIn('up', index * 0.1)}
                className="glass-effect p-6 rounded-lg card-glow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-primary-light font-bold">{skill.level}%</span>
                </div>

                <div className="relative h-4 bg-dark-lighter rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    style={{
                      boxShadow: `0 0 10px ${skill.color}40, 0 0 20px ${skill.color}20`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn('up', 0.8)}
            className="mt-12 glass-effect p-8 rounded-lg text-center card-glow"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary-light">
              Always Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Continuously expanding my skill set and staying updated with the latest 
              technologies and best practices in web development. Open to new challenges 
              and opportunities to grow.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills