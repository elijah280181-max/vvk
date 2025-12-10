import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Globe, Mail, Rocket, Cpu, Sun } from 'lucide-react';
import { BIO_SUMMARY, PROJECTS, SKILLS, TIMELINE_DATA, SOCIAL_LINKS } from './constants';
import SkillBadge from './components/SkillBadge';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';

const App: React.FC = () => {
  const [selectedEraId, setSelectedEraId] = useState<string>(TIMELINE_DATA[TIMELINE_DATA.length - 1].id);

  // Auto-switch timeline every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = TIMELINE_DATA.findIndex(e => e.id === selectedEraId);
      const nextIndex = (currentIndex + 1) % TIMELINE_DATA.length;
      setSelectedEraId(TIMELINE_DATA[nextIndex].id);
    }, 10000);

    // Clear timeout if component unmounts or if user manually changes selection (resetting the timer)
    return () => clearInterval(timer);
  }, [selectedEraId]);

  const selectedEra = TIMELINE_DATA.find(e => e.id === selectedEraId) || TIMELINE_DATA[0];

  const isSkillHighlighted = (skillName: string) => {
    return selectedEra.skillsLearned.includes(skillName);
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-200 font-sans selection:bg-cyber-primary selection:text-cyber-dark">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary opacity-50" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyber-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-cyber-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Header / Hero */}
        <header className="flex flex-col md:flex-row items-center gap-8 mb-20 border-b border-slate-800 pb-10">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900 flex items-center justify-center">
              <img 
                src="/images/my_photo.png" 
                alt="Vladimir Kapustin" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-primary"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-wider">OPEN FOR WORK</span>
              </div>

              <a 
                href="https://portfolio4-gold-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-yellow-400 hover:border-yellow-500/50 transition-all group"
              >
                <Sun className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-xs font-mono font-bold tracking-wider">LIGHT VERSION</span>
              </a>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              Vladimir <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">Kapustin</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-6 font-light">
              AI-Augmented Developer. From Assembly to Autonomous Agents.
            </p>
            <p className="text-slate-500 max-w-xl leading-relaxed text-sm md:text-base border-l-4 border-cyber-secondary pl-4">
              {BIO_SUMMARY}
            </p>
          </div>

          <div className="flex flex-col gap-4 shrink-0">
             {/* Resume Button */}
             <a 
              href="/Vladimir Kapustin - EN.pdf" 
              download
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 hover:border-cyber-primary transition-all group shadow-lg shadow-black/20"
            >
              <Download className="w-5 h-5 group-hover:text-cyber-primary transition-colors" />
              <span>Download CV</span>
            </a>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Timeline Navigation */}
          <section className="lg:col-span-4">
            <div className="sticky top-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-cyber-primary" />
                <span>Career Evolution</span>
              </h2>
              <div className="relative">
                {/* Progress bar for auto-rotation could go here, but kept simple for now */}
                <div className="flex flex-col">
                  {TIMELINE_DATA.map((era) => (
                    <TimelineItem 
                      key={era.id} 
                      era={era} 
                      isSelected={selectedEraId === era.id}
                      onClick={() => setSelectedEraId(era.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Detailed View & Projects */}
          <section className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Interactive Era Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden min-h-[300px]">
              <div className="absolute top-0 right-0 p-32 bg-cyber-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedEra.title}</h2>
                  <span className="px-3 py-1 rounded bg-slate-700 text-slate-300 font-mono text-sm">
                    {selectedEra.period}
                  </span>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-8 leading-relaxed">
                  {selectedEra.content}
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Relevant Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                      <SkillBadge 
                        key={skill.name} 
                        name={skill.name} 
                        category={skill.category}
                        isActive={isSkillHighlighted(skill.name)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-cyber-secondary" />
                <span>Featured Projects</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>

          </section>
        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-slate-800 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               <span className="text-sm">Available for opportunities</span>
            </div>

            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => {
                 const Icon = link.iconName === 'github' ? Github : link.iconName === 'linkedin' ? Linkedin : Globe;
                 return (
                   <a 
                    key={link.platform} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                    aria-label={link.platform}
                   >
                     <Icon className="w-6 h-6" />
                   </a>
                 )
              })}
              <a href="mailto:gavkitay@gmail.com" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <p className="text-slate-600 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Vladimir Kapustin. <br/>
              Augmented with AI.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;