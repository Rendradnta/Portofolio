import React, { useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import { motion } from 'framer-motion'

const projects = [
  { title: 'TKA — Tes Kemampuan Akademik', img: '/tka.png', link: 'https://tka.resa.my.id' },
  { title: 'Website Nonton Anime', img: '/anime.png', link: 'https://anime.resa.my.id' },
  { title: 'Website Manga', img: '/manga.jpg', link: 'https://manga.resa.my.id' },
  { title: 'Website Rest API', img: '/api.png', link: 'https://api.resa.my.id' },
  { title: 'Server Pterodactyl', img: '/panel.png', link: 'https://panel.resa.my.id' },
];

const skills = [
  { name: 'Node.js', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Express.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'TailwindCSS', level: 88 },
];

export default function App(){
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const secs = document.querySelectorAll('section');
    const onScroll = () => {
      const trigger = window.innerHeight * 0.8;
      secs.forEach(s => {
        const top = s.getBoundingClientRect().top;
        if(top < trigger) s.classList.add('show');
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    particles: {
      color: { value: '#ff1a1a' },
      links: { color: '#ff1a1a', distance: 150, enable: true, opacity: 0.35, width: 1 },
      collisions: { enable: false },
      move: { enable: true, speed: 1, outModes: { default: 'out' } },
      number: { density: { enable: true, area: 800 }, value: 45 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  return (
    <div className="relative min-h-screen text-white">
      <Particles className="absolute inset-0 -z-10" options={particlesOptions} />
      <nav className="fixed top-0 w-full z-40 bg-black/60 backdrop-blur-sm border-b border-red-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-red-500">Resa4You</div>
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#home" className="hover:text-red-400 transition">Home</a>
            <a href="#about" className="hover:text-red-400 transition">About</a>
            <a href="#projects" className="hover:text-red-400 transition">Projects</a>
            <a href="#skills" className="hover:text-red-400 transition">Skills</a>
            <a href="#contact" className="hover:text-red-400 transition">Contact</a>
          </div>
          <button className="md:hidden px-2 py-1 border rounded border-red-700" onClick={() => setOpen(o=>!o)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-black/80 border-t border-red-700">
            {['home','about','projects','skills','contact'].map(s => (
              <a key={s} href={`#${s}`} className="block px-4 py-3 hover:bg-red-700 transition" onClick={()=>setOpen(false)}>{s}</a>
            ))}
          </div>
        )}
      </nav>

      <header id="home" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}} className="text-5xl md:text-7xl font-extrabold text-red-500">Resa4You</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}} className="mt-6 max-w-2xl text-gray-300">
          Portofolio interaktif — Resa Adnyta. Web developer fokus pada Node.js & modern frontend.
        </motion.p>
        <a href="#projects" className="mt-8 inline-block px-6 py-3 rounded-full border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition">Lihat Project</a>
      </header>

      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-red-700 rounded-lg p-6">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Tentang Saya</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <tbody>
                <tr className="border-b border-red-700"><td className="py-2 text-red-400 font-semibold w-48">Nama Lengkap</td><td>Resa Adnyta</td></tr>
                <tr className="border-b border-red-700"><td className="py-2 text-red-400 font-semibold">Alamat</td><td>Bandung, Jawa Barat</td></tr>
                <tr className="border-b border-red-700"><td className="py-2 text-red-400 font-semibold">Lulusan</td><td>Universitas Teknologi Kreatif</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
        <h3 className="text-3xl text-center text-red-500 font-bold mb-8">Project Unggulan</h3>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p,i)=>(
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="group block rounded-xl overflow-hidden border border-red-700 bg-zinc-900 hover:scale-[1.02] transition-transform">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-red-400">{p.title}</h4>
                <p className="text-gray-300 text-sm mt-2">{p.link}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <h3 className="text-3xl text-center text-red-500 font-bold mb-8">Skills</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((s,idx)=>(
            <div key={s.name}>
              <div className="flex justify-between"><div className="text-gray-300">{s.name}</div><div className="text-gray-400">{s.level}%</div></div>
              <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
                <motion.div initial={{width:0}} animate={{width:`${s.level}%`}} transition={{duration:1+idx*0.2}} className="h-4 bg-red-600 rounded-full"></motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-black border-t border-red-700">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl text-red-500 font-bold mb-6">Contact</h3>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a href="https://wa.me/6281234567890" className="text-gray-300 hover:text-red-400"><FaIcon name="whatsapp" /></a>
            <a href="https://instagram.com/renal_adnta" className="text-gray-300 hover:text-red-400"><FaIcon name="instagram" /></a>
            <a href="https://github.com/Resa4You" className="text-gray-300 hover:text-red-400"><FaIcon name="github" /></a>
          </div>

          <div className="bg-zinc-900 border border-red-700 rounded-lg p-6 mx-4">
            <h4 className="text-red-400 font-semibold mb-4">Kirim Pesan (Gimmick)</h4>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Pesan terkirim (gimmick)')}} className="space-y-4">
              <input required placeholder="Nama Anda" className="w-full p-3 rounded bg-black border border-red-700" />
              <textarea required placeholder="Pesan..." className="w-full p-3 rounded bg-black border border-red-700"></textarea>
              <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white">Kirim</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 border-t border-red-700">
        © {new Date().getFullYear()} Resa4You
      </footer>
    </div>
  )
}

// Simple wrapper to pick icons without requiring many imports
function FaIcon({name}) {
  if(name === 'whatsapp') return <span style={{fontSize:24}}>📱</span>
  if(name === 'instagram') return <span style={{fontSize:24}}>📷</span>
  if(name === 'github') return <span style={{fontSize:24}}>💻</span>
  return null
}
