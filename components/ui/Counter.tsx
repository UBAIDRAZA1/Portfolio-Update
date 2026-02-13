'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  label?: string;
}

const Counter = ({ end, duration = 2000, prefix = '', suffix = '', label }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 16ms per frame for ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-neon-cyan">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {label && <div className="text-gray-400 mt-2">{label}</div>}
    </div>
  );
};

export default Counter;