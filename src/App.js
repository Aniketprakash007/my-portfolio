import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun, Code, ChevronDown, Send } from 'lucide-react';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [typedText, setTypedText] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const roles = ['Full Stack Developer', 'Problem Solver', 'Chess Enthusiast', 'Dancer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    if (typeIndex < role.length) {
      setTimeout(() => {
        setTypedText(role.substring(0, typeIndex + 1));
        setTypeIndex(typeIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setTypeIndex(0);
        setTypedText('');
        setCurrentRole((currentRole + 1) % roles.length);
      }, 2000);
    }
  }, [typeIndex, currentRole]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const skills = {
    Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    Frontend: ['React', 'Vue', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express', 'Socket.IO'],
    Database: ['MongoDB', 'MySQL'],
    Other: ['Git', 'Linux', 'REST APIs']
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true,
      demo: '#',
      github: '#'
    },
    {
  title: 'Gamified Education Platform',
  description: 'SIH 2024 project featuring interactive learning modules...',
  tech: ['Vue', 'Express', 'MySQL', 'Socket.IO'],
  featured: true,
  badge: 'Featured in SIH 2024',
  demo: 'https://sih2025-main.vercel.app',
  github: 'https://github.com/Aniketprakash007/sih2025-main'
},

    {
      title: 'Real-Time Chat App',
      description: 'WebSocket-based chat application with rooms, typing indicators, and message history',
      tech: ['React', 'Socket.IO', 'Node.js'],
      demo: '#',
      github: '#'
    }
  ];

  const achievements = [
    { icon: '♟️', title: 'Chess Master', desc: '2400+ ELO | Top 11,000 Global', color: 'bg-blue-500' },
    { icon: '💃', title: 'Dancer', desc: '2 years of dedicated practice', color: 'bg-purple-500' },
    { icon: '🧠', title: 'DSA Expert', desc: '500+ problems solved', color: 'bg-green-500' }
  ];

  const stats = [
    { label: 'Projects Built', value: '15+' },
    { label: 'Lines of Code', value: '50K+' },
    { label: 'GitHub Commits', value: '1000+' },
    { label: 'Hours Coded', value: '2000+' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent! I will get back to you soon.');
    setTimeout(() => setFormStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const accentColor = 'text-emerald-500';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      <nav className={`fixed top-0 w-full ${cardBg} bg-opacity-90 backdrop-blur-md z-50 shadow-lg`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">Aniket</span>
          <div className="flex gap-6 items-center">
            <button onClick={() => scrollToSection('home')} className="hover:text-emerald-500 transition cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-500 transition cursor-pointer">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-500 transition cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-500 transition cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-500 transition cursor-pointer">Contact</button>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl text-center">
          <div className="mb-8 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-4xl font-bold">A</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I am <span className={accentColor}>Aniket</span>
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            A Full Stack Developer passionate about building meaningful, scalable products
          </p>
          <div className="h-8 mb-8">
            <span className={`${accentColor} text-lg`}>{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => window.open('#', '_blank')} className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition flex items-center gap-2">
              <Download size={20} /> Download Resume
            </button>
            <button onClick={() => scrollToSection('projects')} className="border-2 border-emerald-500 px-8 py-3 rounded-full hover:bg-emerald-500 hover:text-white transition cursor-pointer">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-emerald-500 px-8 py-3 rounded-full hover:bg-emerald-500 hover:text-white transition cursor-pointer">
              Contact Me
            </button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-emerald-500" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className={`${cardBg} rounded-2xl p-8 shadow-xl`}>
            <p className="text-lg leading-relaxed mb-4">
              I am a passionate full-stack developer who loves turning complex problems into elegant, scalable solutions. My journey in tech started with curiosity and has evolved into a deep commitment to building products that matter.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              What excites me most is working on projects that challenge both my technical skills and creative thinking. Whether it is architecting a robust backend system or crafting intuitive user interfaces, I thrive on the intersection of logic and innovation.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I channel my problem-solving mindset through chess (2400+ ELO) and express creativity through dance. This unique blend of analytical rigor and artistic expression shapes how I approach every project with discipline, creativity, and relentless attention to detail.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {[
              { year: '2023', event: 'Started mastering DSA - 500+ problems solved' },
              { year: '2024', event: 'Built full-stack applications with modern tech stacks' },
              { year: '2024', event: 'Participated in Smart India Hackathon' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <div className="bg-emerald-500 text-white px-4 py-2 rounded-full font-bold">{item.year}</div>
                <div className={`${cardBg} flex-1 p-4 rounded-lg shadow`}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`${cardBg} rounded-xl p-6 shadow-xl hover:shadow-2xl transition`}>
                <h3 className="text-xl font-bold mb-4 text-emerald-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-emerald-500 bg-opacity-20 px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`${cardBg} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2`}>
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                  <Code size={64} className="text-white opacity-50" />
                </div>
                <div className="p-6">
                  {project.badge && (
                    <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold mb-2 inline-block">
                      {project.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.demo} className="flex items-center gap-2 text-emerald-500 hover:underline">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-emerald-500 hover:underline">
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className={`${cardBg} rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition transform hover:scale-105`}>
                <div className={`text-6xl mb-4 ${achievement.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500 to-blue-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className={`${cardBg} rounded-xl p-8 shadow-xl`}>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border focus:border-emerald-500 outline-none`}
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border focus:border-emerald-500 outline-none`}
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className={`w-full p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border focus:border-emerald-500 outline-none`}
              />
            </div>
            <button onClick={handleSubmit} className="w-full bg-emerald-500 text-white py-4 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center gap-2">
              <Send size={20} /> Send Message
            </button>
            {formStatus && <p className="mt-4 text-center text-emerald-500">{formStatus}</p>}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-emerald-500 transition`}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-emerald-500 transition`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:aniket@example.com" className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} hover:bg-emerald-500 transition`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
      <footer className={`py-8 px-6 text-center border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
        <p className="mb-2">Built from scratch with ❤️ using React, Node.js, and Tailwind CSS</p>
        <p className="text-emerald-500 italic">If you have scrolled this far, we should probably work together.</p>
      </footer>
    </div>
  );
}
