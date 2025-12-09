import React from 'react';
import { Project } from '../types';
import { Bot, Leaf, Network, ExternalLink, Youtube, Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = () => {
    switch (project.iconName) {
      case 'bot': return <Bot className="w-8 h-8 text-cyber-primary" />;
      case 'leaf': return <Leaf className="w-8 h-8 text-cyber-accent" />;
      case 'network': return <Network className="w-8 h-8 text-cyber-secondary" />;
      default: return <Bot className="w-8 h-8 text-slate-400" />;
    }
  };

  const getSecondaryIcon = (iconName: string) => {
    switch (iconName) {
      case 'youtube': return <Youtube className="w-5 h-5" />;
      case 'github': return <Github className="w-5 h-5" />;
      case 'web': return <Globe className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  }

  const handleCardClick = (e: React.MouseEvent) => {
    // Only open the main link if it exists
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`
        group relative bg-cyber-light border border-slate-700 rounded-xl p-6 
        transition-all duration-300 flex flex-col h-full
        ${project.link ? 'cursor-pointer hover:border-cyber-primary/50 hover:shadow-lg hover:shadow-cyber-primary/10' : ''}
      `}
      role={project.link ? "link" : "article"}
      tabIndex={project.link ? 0 : undefined}
      onKeyDown={(e) => {
        if (project.link && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          window.open(project.link, '_blank', 'noopener,noreferrer');
        }
      }}
    >
       {/* Top Right External Link Icon indicator */}
       {project.link && (
         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyber-primary" />
         </div>
       )}

       <div className="mb-4 p-3 bg-slate-800 rounded-lg inline-block group-hover:bg-slate-700 transition-colors self-start">
          {getIcon()}
       </div>
       
       <h3 className="text-xl font-bold text-slate-100 mb-2 font-mono group-hover:text-cyber-primary transition-colors">
         {project.title}
       </h3>
       
       <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
         {project.description}
       </p>
       
       <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs text-cyber-primary bg-cyber-primary/10 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
       </div>
       
       {/* Secondary Links Section */}
       {project.secondaryLinks && project.secondaryLinks.length > 0 && (
          <div className="flex gap-2 mt-auto pt-4 border-t border-slate-700/50 relative z-20">
            {project.secondaryLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded border border-slate-600 transition-colors"
                onClick={(e) => {
                  // CRITICAL: Stop the click from bubbling up to the card's onClick
                  e.stopPropagation();
                }}
              >
                {getSecondaryIcon(link.iconName)}
                <span>{link.platform}</span>
              </a>
            ))}
          </div>
       )}
    </div>
  );
};

export default ProjectCard;