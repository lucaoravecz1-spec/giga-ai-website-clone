"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000




}: {end: number;suffix?: string;duration?: number;}) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
      }
      const elapsedTime = timestamp - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span className="text-white font-light text-[80px] leading-none tracking-tight">
      {count}
      {suffix}
    </span>);

};

const metricsData = [
{ label: "CALL ANSWER RATE", value: 99, suffix: "%" },
{ label: "VOICE OPTIONS", value: 50, suffix: "+" }];


export default function MetricsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div ref={ref} className="bg-background" id="1">
      <div className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-8 items-center">
          <div className="lg:col-span-5">
            <p className="text-[32px] leading-[1.4] font-normal text-text-primary max-w-[500px]">
              Transform your business communications with AI that handles reception, operations, and customer support seamlessly.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-12 sm:gap-16 justify-start lg:justify-end">
            {metricsData.map((metric) =>
            <div key={metric.label}>
                <p className="text-text-tertiary uppercase text-xs font-semibold tracking-[0.1em] mb-6 !whitespace-pre-line">
                  {metric.label}
                </p>
                {inView ?
              <AnimatedCounter end={metric.value} suffix={metric.suffix} /> :

              <span className="text-white font-light text-[80px] leading-none tracking-tight">
                    0{metric.suffix}
                  </span>
              }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}