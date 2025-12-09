import React from 'react';

interface SkillBadgeProps {
  name: string;
  isActive: boolean;
  category: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, isActive, category }) => {
  const getColors = () => {
    switch (category) {
      case 'core': return 'border-cyber-primary text-cyber-primary';
      case 'ai': return 'border-cyber-secondary text-cyber-secondary';
      case 'backend': return 'border-cyber-accent text-cyber-accent';
      case 'legacy': return 'border-slate-500 text-slate-400';
      default: return 'border-slate-500 text-slate-300';
    }
  };

  return (
    <span 
      className={`
        px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300
        ${isActive ? 'bg-opacity-20 bg-white scale-105 shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'bg-transparent'}
        ${getColors()}
      `}
    >
      {name}
    </span>
  );
};

export default SkillBadge;