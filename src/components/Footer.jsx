import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa'
import { Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: FaWhatsapp, url: 'https://wa.me/6285117070328', color: '#25D366' },
    { icon: FaInstagram, url: 'https://instagram.com/renal_adnta', color: '#E4405F' },
    { icon: FaGithub, url: 'https://github.com/resaaa', color: '#181717' },
    { icon: FaLinkedin, url: 'https://instagram.com/renal_adnta', color: '#0A66C2' },
    { icon: FaYoutube, url: 'https://instagram.com/renal_adnta', color: '#FF0000' },
    { icon: FaDiscord, url: 'https://instagram.com/renal_adnta', color: '#5865F2' },
  ]

  return (
    <footer className="relative z-10 glass-effect border-t border-primary/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="transition-all duration-300"
              >
                <social.icon
                  size={24}
                  style={{ color: social.color }}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2025 Resa4You</span>
            <span>—</span>
            <span className="flex items-center gap-1">
              Amatir Developer
            </span>
          </div>

          <p className="text-gray-500 text-xs">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer