import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa'
import { fadeIn, staggerContainer } from '../utils/motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const socialLinks = [
    { icon: FaWhatsapp, url: 'https://wa.me/6281234567890', color: '#25D366', label: 'WhatsApp' },
    { icon: FaInstagram, url: 'https://instagram.com/renal_adnta', color: '#E4405F', label: 'Instagram' },
    { icon: FaGithub, url: 'https://github.com/resaadnyta', color: '#181717', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/resaadnyta', color: '#0A66C2', label: 'LinkedIn' },
    { icon: FaYoutube, url: 'https://youtube.com/@resaadnyta', color: '#FF0000', label: 'YouTube' },
    { icon: FaDiscord, url: 'https://discord.com/users/resaadnyta', color: '#5865F2', label: 'Discord' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Pesan terkirim (gimmick only)!')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Get In <span className="text-primary">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn('right', 0.3)}>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary-light">
                Connect With Me
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out through any of these platforms. I'm always open to 
                discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn('up', index * 0.1)}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-effect p-4 rounded-lg flex flex-col items-center justify-center gap-2 card-glow group transition-all duration-300"
                    style={{
                      borderColor: `${social.color}30`,
                    }}
                  >
                    <social.icon
                      className="transition-colors duration-300"
                      size={32}
                      style={{ color: social.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn('left', 0.3)}>
              <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-lg card-glow">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary-light">
                  Kirim Pesan (Gimmick)
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-lighter border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-lighter border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-dark-lighter border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white resize-none"
                      placeholder="Tulis pesan Anda..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white font-heading font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50"
                  >
                    Kirim Pesan
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact