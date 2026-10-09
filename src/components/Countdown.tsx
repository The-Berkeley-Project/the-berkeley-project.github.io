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
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const target =
      typeof targetDate === "string"
        ? new Date(targetDate)
        : targetDate;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        setIsComplete(true);

        if (onComplete) {
          onComplete();
        }

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      setIsComplete(false);
    };

    calculateTimeLeft();

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
    {
      value: timeLeft.days,
      label: getLabel("days"),
      show: showDays,
    },
    {
      value: timeLeft.hours,
      label: getLabel("hours"),
      show: showHours,
    },
    {
      value: timeLeft.minutes,
      label: getLabel("minutes"),
      show: showMinutes,
    },
    {
      value: timeLeft.seconds,
      label: getLabel("seconds"),
      show: showSeconds,
    },
  ].filter((unit) => unit.show);

  if (isComplete) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
      >
        <span className="font-serif text-2xl font-bold text-[#1F3557]">
          Berkeley Project Day is here!
        </span>
      </div>
    );
  }

return (
  <div
    className={`countdown grid w-full grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:gap-10 ${className}`}
  >
    {timeUnits.map((unit) => (
      <div
        key={unit.label}
        className="
          countdown-unit
          flex
          h-[120px]
          w-full
          flex-col
          items-center
          justify-center
          rounded-xl
          bg-[#FFF8E8]
          px-5
          shadow-sm
          sm:h-[130px]
        "
      >
        <span
          className="
            countdown-value
            font-serif
            text-5xl
            font-bold
            leading-none
            text-[#2B2B2B]
            sm:text-6xl
            md:text-7xl
          "
        >
          {formatNumber(unit.value)}
        </span>

        <span
          className="
            countdown-label
            mt-2
            text-center
            text-sm
            font-medium
            capitalize
            text-[#5F5F5F]
            sm:text-base
          "
        >
          {unit.label}
        </span>
      </div>
    ))}
  </div>
);
}