import React from 'react';
import { TimelineEra } from '../types';
import { Terminal, Cpu, Briefcase, Brain, Rocket } from 'lucide-react';

interface TimelineItemProps {
  era: TimelineEra;
  isSelected: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ era, isSelected, onClick }) => {
  const getIcon = () => {
    const props = { className: `w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-400'}` };
    switch (era.iconName) {
      case 'terminal': return <Terminal {...props} />;
      case 'cpu': return <Cpu {...props} />;
      case 'briefcase': return <Briefcase {...props} />;
      case 'brain': return <Brain {...props} />;
      case 'rocket': return <Rocket {...props} />;
      default: return <Terminal {...props} />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`
        relative pl-8 pb-8 cursor-pointer group border-l-2 transition-colors duration-300
        ${isSelected ? 'border-cyber-primary' : 'border-slate-700 hover:border-slate-500'}
      `}
    >
      <div 
        className={`
          absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 flex items-center justify-center bg-cyber-dark transition-all duration-300
          ${isSelected ? 'border-cyber-primary scale-125 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'border-slate-700 group-hover:border-slate-500'}
        `}
      />
      
      <div className={`transition-all duration-300 ${isSelected ? 'translate-x-2' : ''}`}>
        <div className="flex items-center gap-3 mb-1">
          <span className={`text-sm font-mono ${isSelected ? 'text-cyber-primary' : 'text-slate-500'}`}>
            {era.period}
          </span>
          {isSelected && (
             <span className="bg-cyber-primary/20 text-cyber-primary text-[10px] px-2 py-0.5 rounded-full animate-pulse">
               ACTIVE
             </span>
          )}
        </div>
        <h3 className={`text-lg font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
          {era.title}
        </h3>
        <p className={`text-sm leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
          {era.summary}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;