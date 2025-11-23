"use client";

import { Briefcase, PenLine, Sparkles, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) =>
<div className="flex-1 rounded-3xl bg-[rgba(255,255,255,0.05)] p-8 flex flex-col gap-4">
    <div className="w-6 h-6 text-white">{icon}</div>
    <div className="flex flex-col gap-2">
      <h3 className="font-medium text-xl text-primary">{title}</h3>
      <p className="text-base text-text-secondary">{description}</p>
    </div>
  </div>;


const timelineItems = [
{
  title: "Configure your assistant",
  description: "Set up your AI receptionist with your business hours, services, and brand voice to ensure every interaction reflects your standards."
},
{
  title: "Train on your data",
  description: ""
},
{
  title: "Design call flows",
  description: ""
},
{
  title: "Test and deploy",
  description: ""
},
{
  title: "Monitor and optimize",
  description: ""
}];


type TimelineItemProps = {
  title: string;
  description: string;
  isActive: boolean;
  isLast: boolean;
};

const TimelineItem = ({ title, description, isActive, isLast }: TimelineItemProps) =>
<div className="relative pl-6">
    <div
    className={cn(
      "absolute left-0 top-1.5 w-2 h-2 rounded-full",
      isActive ? "bg-white" : "bg-muted-foreground"
    )}>
  </div>
    {!isLast &&
  <div className="absolute left-[3.5px] top-4 bottom-0 w-px bg-border"></div>
  }
    <div className={cn("flex flex-col gap-2", !isLast && "pb-8")}>
      <p className={cn("text-base font-medium", isActive ? "text-primary" : "text-text-tertiary")}>
        {title}
      </p>
      {isActive && description &&
    <p className="text-sm text-text-secondary">{description}</p>
    }
    </div>
  </div>;


export default function CustomAgentsSection() {
  const activeIndex = 0;

  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 py-24 sm:py-32 !w-[1280px] !h-full !max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_464px)_1fr] gap-x-20 gap-y-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <p className="font-semibold text-text-tertiary uppercase tracking-[0.08em] text-[11px]">
                INTELLIGENT AUTOMATION
              </p>
            </div>
            <h2 className="font-display text-[56px] font-medium leading-[1.1] text-primary">
              Handles any business scenario
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <FeatureCard
              icon={<Briefcase />}
              title="Fully customizable"
              description="Tailored to your business processes and workflows" />

            <FeatureCard
              icon={<PenLine />}
              title="Smart learning"
              description="Improves from every interaction automatically" />

            <FeatureCard
              icon={<Sparkles />}
              title="24/7 availability"
              description="Never miss a call or customer inquiry" />

          </div>

          <div className="flex flex-col gap-10">
            <div className="rounded-3xl p-[1px] bg-gradient-to-br from-accent from-0% via-zinc-800 to-zinc-800 to-30%">
              <div className="bg-card rounded-[23px] p-10 h-full flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Grid className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-base text-primary">
                      Drift Studio
                    </h3>
                  </div>
                  <p className="text-base text-text-secondary">
                    Build and customize your AI assistant with our intuitive platform. No coding required.
                  </p>
                </div>
                <a
                  href="#"
                  className="self-start rounded-full border border-border px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-hover-state">

                  Explore Drift Studio
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              {timelineItems.map((item, index) =>
              <TimelineItem
                key={item.title}
                title={item.title}
                description={item.description}
                isActive={index === activeIndex}
                isLast={index === timelineItems.length - 1} />

              )}
            </div>
          </div>

          <div className="relative aspect-[2640/2352] rounded-3xl flex items-center justify-center border border-border !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763856556419-bes30h05rvk.png)] !bg-cover !bg-center !w-[665px] !h-[595px]">
             <p className="text-text-tertiary !whitespace-pre-line !w-[35.9%] !h-[27px] !whitespace-pre-line"></p>
          </div>
        </div>
      </div>
    </div>);

}