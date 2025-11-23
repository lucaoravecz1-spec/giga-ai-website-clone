"use client";

import Image from "next/image";
import { Sparkles, ChevronDown, ArrowUp, ArrowLeft, ArrowRight, Settings2, BarChart2, Filter } from "lucide-react";

const SmartInsightsIcon = () =>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
    <path d="M12.969 0L14.5 2.0624L16.5622 3.59319L14.5 5.12399L12.969 7.18639L11.4382 5.12399L9.37582 3.59319L11.4382 2.0624L12.969 0Z" fill="currentColor" />
    <path d="M4.34692 4.34692L6.15113 6.9998L8.79815 8.80988L6.15113 10.6199L4.34692 13.267L2.54271 10.6199L0 8.80988L2.54271 6.9998L4.34692 4.34692Z" fill="currentColor" />
    <path d="M20.7303 14.7303L21.8479 16.5178L23.6354 17.6354L21.8479 18.7529L20.7303 20.5404L19.6128 18.7529L17.8253 17.6354L19.6128 16.5178L20.7303 14.7303Z" fill="currentColor" />
  </svg>;


const InsightItem = ({ category, title, tickets, improvement, progress }) =>
<div className="flex flex-col gap-3 py-4">
    <div className="flex justify-between items-center text-sm flex-wrap gap-2">
      <span className="text-white font-medium flex-1 min-w-[200px]">{title}</span>
      <div className="flex items-center gap-4 text-xs shrink-0">
        <span className={`py-1 px-3 rounded-full font-medium ${category === 'Policy Modification' ? 'bg-[#299578]/20 text-[#299578]' : 'bg-orange-500/10 text-orange-400'}`}>
          {category}
        </span>
        <span className="text-white/60 w-20 text-right">{tickets} tickets</span>
        <span className="text-[#299578] font-medium w-28 text-right">+{improvement}% improvement</span>
      </div>
    </div>
    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
      <div className="bg-[#299578] h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  </div>;


const WorkflowStep = ({ title, description, isActive, isLast }) =>
<div className="flex items-start gap-6">
    <div className="flex flex-col items-center">
      <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 border ${isActive ? 'bg-white border-white' : 'border-white/30'}`}></div>
      {!isLast && <div className="w-px h-24 bg-white/20 mt-2"></div>}
    </div>
    <div className={`pt-0 ${!isActive ? 'opacity-50' : ''}`}>
      <h4 className="text-white font-medium text-lg leading-tight">{title}</h4>
      {description && <p className="mt-2 text-white/60 text-base leading-relaxed max-w-sm">{description}</p>}
    </div>
  </div>;


export default function InsightsDemo() {
  return (
    <div className="bg-[#0A0A0A] rounded-[24px] border border-white/10 flex lg:flex-row flex-col gap-10 p-10 !w-full !h-full">
      <div className="lg:w-[55%] flex flex-col">
        <div className="relative z-30">
          <div className="flex items-center gap-3">
            <SmartInsightsIcon />
            <h3 className="font-display text-3xl text-white">Smart Insights</h3>
          </div>
          <p className="mt-4 mb-6 text-white/60 text-lg max-w-xl">
            Your agent will surface patterns and uncover root causes, then offer tips on how to update your policies to improve support performance, based on the success metrics you choose.
          </p>
          <a href="#" className="text-white text-base font-medium py-3 px-6 border border-white/20 rounded-full hover:bg-white/10 transition-colors w-fit">
            Explore Smart Insights
          </a>
        </div>

        <div className="mt-10 aspect-[4/3] rounded-2xl relative overflow-hidden flex-1">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d-giga-ai/assets/images/nw1nKNo2mCT3T2ZcAZEbjhzyzIE-4.png"
            alt="Mountain landscape"
            layout="fill"
            objectFit="cover"
            className="z-0" />

          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="absolute inset-4 sm:inset-6 z-20 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl flex flex-col font-body text-white">
            <div className="flex justify-between items-center p-2 border-b border-white/10 text-sm flex-wrap gap-2">
              <button className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
                <span>Resolution Rate Improvement (Voice)</span>
                <ChevronDown className="w-4 h-4 text-white/60" />
              </button>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md hover:bg-white/20 transition-colors">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="font-medium">Generate insights</span>
                </button>
                <div className="flex items-center text-white/60">
                  <button className="p-2 rounded-md hover:bg-white/10"><Filter className="w-4 h-4" /></button>
                  <button className="p-2 rounded-md hover:bg-white/10"><BarChart2 className="w-4 h-4" /></button>
                  <button className="p-2 rounded-md hover:bg-white/10"><Settings2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col p-4 overflow-y-auto">
              <div className="flex-shrink-0">
                <p className="text-sm text-white/80">Resolution Rate Improvement</p>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="text-5xl font-light">25.0%</span>
                  <div className="flex items-center gap-1 bg-[#1A3832] text-[#59DDBA] text-sm font-medium px-2 py-0.5 rounded-md">
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>+14%</span>
                  </div>
                </div>
                <p className="text-sm text-white/60 mt-1">1,302 of 2,170 tickets</p>
              </div>

              <div className="mt-6 flex-grow flex flex-col min-h-0">
                <div className="flex justify-between items-center border-b border-white/10 pb-2 flex-shrink-0">
                  <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">Insight 1 of 28</p>
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded-md hover:bg-white/10 text-white/60"><ArrowLeft className="w-4 h-4" /></button>
                    <button className="p-1 rounded-md hover:bg-white/10 text-white/60"><ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="overflow-y-auto divide-y divide-white/10">
                  <InsightItem title="Add self-service reservation modification flow" category="Policy Modification" tickets="928" improvement="13.8" progress={45} />
                  <InsightItem title="Add fallback search flow for missing confirmation" category="Policy Modification" tickets="1,190" improvement="22.2" progress={70} />
                  <InsightItem title="Streamline unspecific transfer flow" category="Policy Modification" tickets="102" improvement="9.7" progress={30} />
                  <InsightItem title="Add FAQ and handling rules" category="Knowledge Gap" tickets="72" improvement="3.5" progress={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[45%] flex items-center justify-center pt-10 lg:pt-0">
        <div className="flex flex-col">
          <WorkflowStep title="Choose an objective" isActive={true} isLast={false} />
          <WorkflowStep title="Generate insights" isActive={false} isLast={false} />
          <WorkflowStep
            title="Validate at scale"
            description="Review transcripts, run hypotheses across thousands of calls, and confirm the root cause."
            isActive={false}
            isLast={true} />

        </div>
      </div>
    </div>);

}