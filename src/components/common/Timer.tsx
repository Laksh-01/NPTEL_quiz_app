import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { formatTime } from '../../utils/quizUtils';

interface TimerProps {
  timeRemaining: number; // seconds
  percentRemaining: number;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, percentRemaining }) => {
  const [isWarning, setIsWarning] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  
  useEffect(() => {
    setIsWarning(percentRemaining <= 30);
    setIsUrgent(percentRemaining <= 10);
  }, [percentRemaining]);
  
  const getTimerColor = () => {
    if (isUrgent) return 'text-red-600';
    if (isWarning) return 'text-orange-500';
    return 'text-green-600';
  };
  
  const getProgressColor = () => {
    if (isUrgent) return 'bg-red-600';
    if (isWarning) return 'bg-orange-500';
    return 'bg-green-600';
  };
  
  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-1">
        <Clock className={`h-5 w-5 ${getTimerColor()}`} />
        <span className={`font-mono font-medium ${getTimerColor()}`}>
          {formatTime(timeRemaining)}
        </span>
      </div>
      
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getProgressColor()} transition-all duration-1000 ease-linear`}
          style={{ width: `${percentRemaining}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;