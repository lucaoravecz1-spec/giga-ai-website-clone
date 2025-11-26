"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translate3d(0, ${offsetY * 0.3}px, 0)`
        }}>

        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot-2025-11-26-at-3.33.04-PM-1764189198285.png?width=8000&height=8000&resize=contain"
          alt="A vast mountain range with misty valleys at sunrise, representing scale and sophistication."
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90" />

      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="container relative z-20 flex flex-col items-center justify-between py-16 text-foreground sm:py-24 !w-[768px] !h-full !max-w-screen-md">
        <div />

        <div className="flex flex-col items-center space-y-6 text-center -mt-8 !w-[126%] !h-[412px]">
          <h1 className="font-display text-5xl leading-[1.1] tracking-[-0.01em] text-text-primary lg:text-[72px] !w-[544px] !h-[136px] !max-w-[544px] md:!text-[56px]">
            AI Voice Assistant.
            <br />
            Built for any business.
          </h1>

          <p className="text-body-large text-text-secondary !my-0 !py-0 tracking-wide !w-full !h-[73px] !max-w-full">
            AI-powered receptionist, operations, and support with human-like voices that adapt to your business needs
          </p>

          <Link
            href="https://calendly.com/lucaoravecz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03] !my-6 !w-[24.7%] !h-14">

            Get Started
          </Link>

          <Link
            href="#"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/10 !flex-row !items-center !justify-center !gap-[9px] !my-0 !p-0 !w-[306px] !h-[22px] !mt-4">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#17ff6d]"></span>
            </span>
            <span className="!w-[266px] !h-5 !flex !flex-row !my-0 !py-0">Now Available: Multi-Language Support</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground md:gap-x-12 !w-full !h-5">
          <span className="text-lg font-medium tracking-wide">Healthcare</span>
          <span className="text-lg font-medium tracking-wide">Retail</span>
          <span className="text-lg font-medium tracking-wide">Hospitality</span>
          <span className="text-lg font-medium tracking-wide">Professional Services</span>
          <span className="text-lg font-medium tracking-wide">E-commerce</span>
        </div>
      </div>
    </section>);

};

export default HeroSection;