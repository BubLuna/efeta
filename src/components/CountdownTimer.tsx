
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setIsExpired(true);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className={cn("text-center p-8", className)}>
        <h2 className="text-3xl font-bold text-efeta-500">O evento já começou!</h2>
      </div>
    );
  }

  const timeBlocks = [
    { value: days, label: 'Dias' },
    { value: hours, label: 'Horas' },
    { value: minutes, label: 'Minutos' },
    { value: seconds, label: 'Segundos' }
  ];

  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 font-display text-efeta-900">Faltam</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {timeBlocks.map((block, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-efeta-500 rounded-xl blur-md opacity-20"></div>
            <div className="glass relative z-10 w-24 md:w-28 h-24 md:h-28 rounded-xl flex flex-col items-center justify-center border border-white/50">
              <span className="text-3xl md:text-4xl font-bold text-efeta-600">{block.value}</span>
              <span className="text-sm font-medium text-gray-500">{block.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
