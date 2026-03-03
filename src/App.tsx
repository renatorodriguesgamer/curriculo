/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code, 
  User,
  Globe,
  Award,
  CheckCircle
} from 'lucide-react';
import { resumeData } from './data';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header / Hero Section */}
      <header className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 skew-x-[-15deg] translate-x-1/2 opacity-50" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl shrink-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" 
                  alt={`Foto de perfil de ${resumeData.name}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4 uppercase">
                  {resumeData.name}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">
                  {resumeData.title}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> {resumeData.email}
              </a>
              <div className="flex items-center gap-2">
                <Phone size={16} /> {resumeData.phone}
              </div>
              <div className="flex items-center gap-2 font-bold">
                <MapPin size={16} /> {resumeData.location}
              </div>
            </div>
            
            <div className="flex gap-4 mt-8 no-print">
              <a 
                href={`https://${resumeData.linkedin}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`https://${resumeData.github}`} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all transform hover:scale-105"
              >
                <Download size={18} /> Imprimir PDF
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Section */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold mb-4 uppercase tracking-wider">
                <User size={20} className="text-emerald-500" /> Perfil Profissional
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                {resumeData.about}
              </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold mb-6 uppercase tracking-wider">
                <Code size={20} className="text-emerald-500" /> Habilidades
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Técnicas</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Comportamentais</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Languages Section */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold mb-6 uppercase tracking-wider">
                <Globe size={20} className="text-emerald-500" /> Idiomas
              </h2>
              <div className="space-y-4">
                {resumeData.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">{lang.name}</span>
                    <span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-xl font-bold mb-6 uppercase tracking-wider">
                <GraduationCap size={20} className="text-emerald-500" /> Formação
              </h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-slate-100">
                    <h3 className="font-bold text-slate-800 text-sm">{edu.school}</h3>
                    <p className="text-xs text-slate-600 mt-1">{edu.degree}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-8 uppercase tracking-wider">
                <Briefcase size={24} className="text-emerald-500" /> Experiência Profissional
              </h2>
              
              <div className="space-y-12">
                {resumeData.experiences.map((exp, idx) => (
                  <div key={idx} className="group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-slate-500 font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-400 mt-2 md:mt-0 px-3 py-1 bg-slate-50 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Certifications Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-8 uppercase tracking-wider">
                <Award size={24} className="text-emerald-500" /> Cursos e Certificações
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm">{cert.name}</h3>
                      <p className="text-xs text-slate-500">{cert.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Differentials Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="card"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-8 uppercase tracking-wider">
                <CheckCircle size={24} className="text-emerald-500" /> Diferenciais
              </h2>
              
              <div className="space-y-4">
                {resumeData.differentials.map((diff, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {diff}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section (Conditional) */}
            {resumeData.projects.length > 0 && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-8 uppercase tracking-wider">
                  <Code size={24} className="text-emerald-500" /> Projetos em Destaque
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resumeData.projects.map((project, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-lg text-slate-800">{project.name}</h3>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-slate-400 hover:text-emerald-500 transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-4">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 mt-12 text-center text-slate-400 text-sm no-print">
        <p>© {new Date().getFullYear()} {resumeData.name}. Todos os direitos reservados.</p>
        <p className="mt-2 italic">Criado com React, Tailwind CSS e muito café.</p>
      </footer>
    </div>
  );
}
