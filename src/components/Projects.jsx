import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TKA - Tes Kemampuan Akademik',
      description: 'Comprehensive academic ability testing platform with interactive questions and real-time scoring system.',
      image: 'https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/cf6073b59ebe9915.jpeg',
      url: 'https://tka.resa.my.id',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Anime Website',
      description: 'Modern anime streaming platform with extensive database, user reviews, and personalized recommendations.',
      image: 'https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/5572ae564156e9a2.jpeg',
      url: 'https://anime.resa.my.id',
      tech: ['React', 'API Integration', 'TailwindCSS'],
    },
    {
      id: 3,
      title: 'Manga Website',
      description: 'Feature-rich manga reading platform with chapter tracking, bookmarks, and community features.',
      image: 'https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/949bbca0d608aca1.jpeg',
      url: 'https://manga.resa.my.id',
      tech: ['React', 'Express.js', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'Robust RESTful API service providing various endpoints for data management and integration.',
      image: 'https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/76eec92d8085e7f7.jpeg',
      url: 'https://api.resa.my.id',
      tech: ['Node.js', 'Express.js', 'JWT'],
    },
    {
      id: 5,
      title: 'Pterodactyl Panel',
      description: 'Advanced server management panel for game servers and applications with intuitive control interface.',
      image: 'https://raw.githubusercontent.com/Rendradnta/BoboiboyDB/main/database/ee35d1589f48a1f6.jpeg',
      url: 'https://panel.resa.my.id',
      tech: ['React', 'Docker', 'Linux'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            Featured <span className="text-primary">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn('up', index * 0.1)}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden card-glow group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary-light">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-dark-lighter text-primary-light rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 font-medium"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects