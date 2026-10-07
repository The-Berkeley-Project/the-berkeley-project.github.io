"use client";

import React, { useState, useEffect } from "react";

export interface CountdownProps {
  targetDate: Date | string;
  onComplete?: () => void;
  className?: string;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  format?: "short" | "long";
  separator?: string;
  valueClassName?: string;
  labelClassName?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({
  targetDate,
  onComplete,
  className = "",
  showDays = true,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
  format = "short",
  separator = ":",
  valueClassName = "text-4xl sm:text-5xl md:text-6xl text-white",
  labelClassName = "text-sm sm:text-base md:text-lg text-white",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const target = typeof targetDate === "string" ? new Date(targetDate) : targetDate;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setIsComplete(false);
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const getLabel = (unit: string): string => {
    if (format === "short") {
      const shortMap: Record<string, string> = {
        days: "d",
        hours: "h",
        minutes: "m",
        seconds: "s",
      };
      return shortMap[unit] || unit;
    }
    return unit;
  };

  const timeUnits = [
    { value: timeLeft.days, label: getLabel("days"), show: showDays },
    { value: timeLeft.hours, label: getLabel("hours"), show: showHours },
    { value: timeLeft.minutes, label: getLabel("minutes"), show: showMinutes },
    { value: timeLeft.seconds, label: getLabel("seconds"), show: showSeconds },
  ].filter((unit) => unit.show);

  if (isComplete) {
    return (
      <div className={`countdown complete ${className}`}>
        <span className={labelClassName}>{format === "long" ? "Today’s the day" : "Done"}</span>
      </div>
    );
  }

  return (
    <div className={`countdown grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:items-baseline sm:gap-6 ${className}`}>
      {timeUnits.map((unit) => (
        <div key={unit.label} className="countdown-unit flex items-baseline gap-1 sm:gap-2">
          <span className={`countdown-value inline-block overflow-hidden font-bold tabular-nums ${valueClassName}`}>
            <span key={unit.value} className="animate-tick">
              {formatNumber(unit.value)}
            </span>
          </span>
          <span className={`countdown-label font-normal ${labelClassName}`}>
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
