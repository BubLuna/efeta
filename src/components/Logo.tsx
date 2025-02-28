
import React from 'react';
import { Tent } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={cn('flex items-center gap-2 font-display font-bold text-efeta-500', sizes[size], className)}>
      <div className="relative">
        <div className="absolute inset-0 bg-efeta-500 rounded-full blur-sm opacity-30 animate-pulse-soft"></div>
        <Tent className="text-efeta-500 relative z-10" />
      </div>
      <span>EFETA</span>
    </div>
  );
};

export default Logo;
