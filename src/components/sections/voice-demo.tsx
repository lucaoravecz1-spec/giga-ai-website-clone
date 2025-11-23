"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Timer, MicVocal, ArrowRightLeft } from "lucide-react";

const VoiceExperienceIcon = () =>
<svg
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true">

    <path
    d="M21.5 15.625C22.6875 15.625 24.125 15.125 24.5 14C24.875 12.875 23.9375 11.8125 23.375 11.375C22.25 10.5 20.5625 11.375 19.25 11.9375C17.9375 12.5 16.625 13.5625 15.4375 13.5625C14.25 13.5625 12.8125 13.0625 12.5 12C12.125 10.875 13.0625 9.8125 13.625 9.375C14.75 8.5 16.4375 9.375 17.75 9.9375M10.25 18.0625C9.0625 18.0625 7.625 17.5625 7.25 16.4375C6.875 15.3125 7.8125 14.25 8.375 13.8125C9.5 12.9375 11.1875 13.8125 12.5 14.375"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round" />

    <rect
    x="1.5"
    y="1.5"
    width="25"
    height="25"
    rx="7"
    stroke="url(#paint0_linear_voice_icon)"
    strokeWidth="2" />

    <defs>
      <linearGradient
      id="paint0_linear_voice_icon"
      x1="28"
      y1="0"
      x2="0"
      y2="28"
      gradientUnits="userSpaceOnUse">

        <stop stopColor="#FF4D00" />
        <stop offset="1" stopColor="#FF7A00" />
      </linearGradient>
    </defs>
  </svg>;


const features = [
{
  icon: MicVocal,
  title: "Personalized voices",
  description: "Tailor your agent's voice to match your brand"
},
{
  icon: ArrowRightLeft,
  title: "Dynamic interrupts",
  description: "Designed to adapt to a global audience"
},
{
  icon: Timer,
  title: "Ultra-low latency",
  description: "Industry-leading voice response time"
}];


export default function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };


  return (
    <section className="container pb-16 sm:pb-24 !w-[1280px] !h-[809px] !max-w-screen-xl">
      <div className="flex flex-col items-center gap-4 text-center mx-auto max-w-2xl">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
          <span className="text-label text-text-tertiary">NATURAL VOICE</span>
        </div>
        <h2 className="font-display text-4xl leading-tight md:text-5xl md:leading-tight font-medium text-text-primary tracking-[-0.02em]">
          Engage with empathy
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 max-w-5xl mx-auto">
        {features.map((feature, index) =>
        <div key={index} className="flex flex-col items-center text-center">
            <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
            <h3 className="mt-4 text-base font-medium text-white">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-text-secondary max-w-[250px]">
              {feature.description}
            </p>
          </div>
        )}
      </div>

      <div className="mt-16 lg:mt-24">
        <div className="bg-surface-elevated border border-border-subtle rounded-radius-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="lg:w-2/5 lg:py-6">
            <div className="flex items-center gap-3">
              <VoiceExperienceIcon />
              <h3 className="font-display text-2xl font-medium text-white">
                Voice Experience
              </h3>
            </div>
            <p className="mt-4 text-text-secondary text-base lg:text-lg">
              Emotionally-aware agents that understand tone, intent, and
              context. Fluidly handle accents, interruptions, and rapid turns of
              conversation to ensure every conversation feels natural.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm font-medium text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white/10 transition-colors">

              Explore Voice Experience
            </a>
          </div>

          <div className="flex-1 w-full self-stretch">
            <div className="relative w-full h-full rounded-radius-md overflow-hidden bg-black aspect-video lg:aspect-auto">
              <video
                ref={videoRef}
                src="https://framerusercontent.com/assets/lt3r9RT6cCKh8i9Cy7jtB8i2HI.mp4"
                controls
                playsInline
                onEnded={handleVideoEnd}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isPlaying ? "opacity-100 z-10" : "opacity-0"}`
                } />


              {!isPlaying &&
              <>
                  <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-11-22-at-6.31.54-PM-1763854344950.png"
                  alt="Voice Experience demo background"
                  fill
                  className="object-cover !w-full !h-full !max-w-full"
                  sizes="(max-width: 1024px) 100vw, 60vw" />

                  <button
                  onClick={handlePlay}
                  aria-label="Play video"
                  className="absolute top-4 right-4 lg:top-6 lg:right-6 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm py-2 pl-3 pr-4 text-white hover:bg-black/50 transition-colors text-sm font-medium z-20">

                    <Play className="h-4 w-4 text-white" fill="white" />
                    <span>Play</span>
                  </button>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}