import React from 'react';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  User,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-zinc-200 pb-2">
    {Icon && <Icon className="w-5 h-5 text-brand-blue" />}
    <h2 className="text-2xl font-bold text-brand-blue uppercase tracking-tight">{children}</h2>
  </div>
);

const SkillItem = ({ name, level }: { name: string, level: string }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-zinc-700">{name}</span>
      <span className="text-[10px] px-2 py-0.5 bg-brand-blue text-white rounded-full font-bold uppercase">{level}</span>
    </div>
    <div className="skill-bar-bg">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: level === 'Básico' ? '40%' : '70%' }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="skill-bar-fill" 
      />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      {/* Mobile Header */}
      <header className="lg:hidden bg-zinc-900 text-white p-6 sticky top-0 z-50 shadow-lg">
        <h1 className="text-3xl font-black leading-none mb-2">
          PEDRO ELIAS<br />
          <span className="text-brand-blue">DOS SANTOS FERREIRA</span>
        </h1>
        <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">Designer Gráfico & Adm</p>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 bg-zinc-50 lg:min-h-screen p-8 lg:p-12 border-r border-zinc-200">
          <div className="hidden lg:block mb-12">
             <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-black leading-[0.9] tracking-tighter text-zinc-900 mb-4"
            >
              PEDRO ELIAS<br />
              DOS SANTOS<br />
              FERREIRA
            </motion.h1>
            <div className="h-1 w-20 bg-brand-blue mb-8"></div>
          </div>

          {/* Contact Section */}
          <section className="mb-12">
            <h3 className="text-brand-blue font-bold text-xl mb-6 uppercase tracking-widest border-b border-brand-blue/20 pb-2">Contato</h3>
            <div className="space-y-4">
              <a href="tel:+5541988402775" className="flex items-center gap-4 text-zinc-600 hover:text-brand-blue transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">(41) 98840-2775</span>
              </a>
              <a href="mailto:pedroeliasferreira@gmail.com" className="flex items-center gap-4 text-zinc-600 hover:text-brand-blue transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium break-all">pedroeliasferreira@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/pedroeliasferreira" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-600 hover:text-brand-blue transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">linkedin.com/in/pedroeliasferreira</span>
              </a>
              <div className="flex items-start gap-4 text-zinc-600">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium leading-relaxed">
                  Av. Doutor Freitas, 1228, Torres Dumont, Apto 1604<br />
                  Fragata, Pedreira - Belém/PA<br />
                  CEP: 66087-810
                </span>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h3 className="text-brand-blue font-bold text-xl mb-6 uppercase tracking-widest border-b border-brand-blue/20 pb-2">Habilidades</h3>
            <div className="space-y-2">
              <SkillItem name="Adobe Premiere Pro" level="Básico" />
              <SkillItem name="Adobe After Effects" level="Básico" />
              <SkillItem name="Adobe Photoshop" level="Básico" />
              <SkillItem name="Adobe Illustrator" level="Básico" />
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h3 className="text-brand-blue font-bold text-xl mb-6 uppercase tracking-widest border-b border-brand-blue/20 pb-2">Idiomas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 text-center">
                <p className="text-sm font-bold text-zinc-900">Libras</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Fluente/Nativo</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 text-center">
                <p className="text-sm font-bold text-zinc-900">Inglês</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Básico</p>
              </div>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-2/3 p-8 lg:p-20">
          
          {/* Summary */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionTitle icon={User}>Resumo Profissional</SectionTitle>
            <p className="text-lg text-zinc-600 leading-relaxed font-light">
              Graduado em <span className="font-semibold text-zinc-900 text-brand-blue">Design Gráfico</span> (concluído em 2025), PCD auditivo, com perfil resiliente e foco em comunicação visual. Experiência administrativa e habilidades em produção e edição gráfica, unindo organização e criatividade.
            </p>
          </motion.section>

          {/* Education */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionTitle icon={GraduationCap}>Formação</SectionTitle>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-zinc-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-blue border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-bold text-zinc-900">Tecnologia em Design Gráfico</h4>
                  <span className="text-brand-blue font-bold text-sm">2025</span>
                </div>
                <p className="text-zinc-600 font-medium">UNAMA - Universidade da Amazônia</p>
                <p className="text-zinc-400 text-sm">Belém/PA</p>
              </div>

              <div className="relative pl-8 border-l-2 border-zinc-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-300 border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-bold text-zinc-900 text-zinc-500">Ensino Médio</h4>
                  <span className="text-zinc-400 font-bold text-sm">2016 - 2017</span>
                </div>
                <p className="text-zinc-500 font-medium">Colégio Estadual para Surdos Alcindo Fanaya Junior</p>
              </div>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionTitle icon={Briefcase}>Experiências</SectionTitle>
            <div className="space-y-10">
              <div className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="text-xl font-bold text-zinc-900 group-hover:text-brand-blue transition-colors">Auxiliar Administrativo | TJPR</h4>
                  <span className="text-brand-blue font-bold text-sm bg-brand-blue/5 px-3 py-1 rounded-full">2021 - 2023</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-zinc-600 leading-relaxed">
                    <ChevronRight className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Gestão documental e suporte administrativo especializado ao setor de processos.</span>
                  </li>
                  <li className="flex gap-3 text-zinc-600 leading-relaxed">
                    <ChevronRight className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Expertise em organização de dados via Microsoft Excel e manutenção de sistemas de registro corporativo, garantindo a celeridade na tramitação de documentos oficiais.</span>
                  </li>
                </ul>
              </div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="text-xl font-bold text-zinc-900 group-hover:text-brand-blue transition-colors">Auxiliar de Escritório</h4>
                  <span className="text-zinc-400 font-bold text-sm bg-zinc-100 px-3 py-1 rounded-full">2019 - 2021</span>
                </div>
                <p className="text-zinc-500 font-medium mb-2">Trombini Embalagens S/A, Curitiba/PR</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-zinc-600 leading-relaxed">
                    <ChevronRight className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                    <span>Treinamentos na área de auxiliar de escritório.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Courses */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle icon={Award}>Cursos</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Pacote Office", hours: "100 horas" },
                { title: "Auxiliar Administrativo", hours: "100 horas" },
                { title: "Inglês Básico", hours: "10 horas" },
                { title: "Adobe Photoshop - Modo Essencial", hours: "11 horas", sub: "Héber Simeoni Cursos Online" }
              ].map((course, idx) => (
                <div key={idx} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-brand-blue/30 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <h5 className="font-bold text-zinc-900 mb-1 group-hover:text-brand-blue transition-colors">{course.title}</h5>
                  {course.sub && <p className="text-xs text-zinc-500 mb-2 italic">{course.sub}</p>}
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-1 h-1 rounded-full bg-brand-blue"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">{course.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </main>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-8 text-center">
        <p className="text-zinc-500 text-sm mb-4">© 2025 Pedro Elias dos Santos Ferreira. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </footer>
    </div>
  );
}
