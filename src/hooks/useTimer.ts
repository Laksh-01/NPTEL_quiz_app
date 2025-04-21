import { useState, useEffect, useCallback } from 'react';

interface TimerProps {
  initialTime: number; // in seconds
  onTimeUp: () => void;
}

const useTimer = ({ initialTime, onTimeUp }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startTimer = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);

  const resetTimer = useCallback(() => {
    setTimeRemaining(initialTime);
    setIsActive(false);
    setIsPaused(false);
  }, [initialTime]);

  useEffect(() => {
    let interval: number | null = null;

    if (isActive && !isPaused) {
      interval = window.setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            clearInterval(interval!);
            setIsActive(false);
            onTimeUp();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, onTimeUp]);

  const percentRemaining = (timeRemaining / initialTime) * 100;

  return {
    timeRemaining,
    isActive,
    isPaused,
    percentRemaining,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer
  };
};

export default useTimer;