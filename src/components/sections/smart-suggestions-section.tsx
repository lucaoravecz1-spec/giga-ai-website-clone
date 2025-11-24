import React from 'react';
import { Lightbulb, TrendingUp, Sparkles, BarChartBig } from 'lucide-react';

const FeatureCard = ({
  icon: Icon,
  title,
  description




}: {icon: React.ElementType;title: string;description: string;}) =>
<div className="flex items-start gap-6 rounded-[20px] border border-white/10 p-8">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/[.05]">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="mt-1 text-base text-white/60">{description}</p>
    </div>
  </div>;


const SmartSuggestionsSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32 !w-full !h-[734px]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></div>
                <div className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></div>
              </div>
              <p className="font-semibold uppercase tracking-[0.1em] text-white/50 text-sm">
                SMART SUGGESTIONS
              </p>
            </div>
            
            <h2 className="font-display text-[56px] font-normal leading-[1.1] -tracking-[0.01em] text-white">
              Improve as<br />
              you go
            </h2>
            
            <div className="flex w-full flex-col gap-4 self-stretch">
              <FeatureCard
                icon={TrendingUp}
                title="Performance enhancement"
                description="Designed to help you hit KPIs" />

              <FeatureCard
                icon={Sparkles}
                title="Custom suggestions"
                description="Based on your unique business requirements" />

              <FeatureCard
                icon={BarChartBig}
                title="Auto improve"
                description="Ready-to-implement policy improvements" />

            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative h-full w-full">
            <div className="sticky top-32 flex flex-col gap-6 rounded-[20px] border border-white/10 bg-white/[.05] p-12">
              <div className="flex items-center gap-4">
                <Lightbulb className="h-7 w-7 flex-shrink-0 text-white" />
                <h3 className="font-display text-3xl font-normal text-white">Smart Insights</h3>
              </div>
              <p className="text-lg leading-relaxed text-white/70">
                Your agent will surface patterns and uncover root causes, then offer
                tips on how to update your policies to improve support
                performance, based on the success metrics you choose.
              </p>
              <a
                href="./insights"
                className="mt-2 inline-block self-start rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10">

                Explore Smart Insights
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SmartSuggestionsSection;