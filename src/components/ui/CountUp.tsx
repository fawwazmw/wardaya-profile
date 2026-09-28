"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: string;
  className?: string;
};

/** Parses "50+" → { num: 50, suffix: "+" }, "99.9%" → { num: 99.9, suffix: "%" } */
function parseStat(raw: string) {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export function CountUp({ value, className = "" }: Props) {
  const { num, suffix } = parseStat(value);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const steps = 30;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, num);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, num]);

  const display = Number.isInteger(count) ? Math.round(count) : count.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
