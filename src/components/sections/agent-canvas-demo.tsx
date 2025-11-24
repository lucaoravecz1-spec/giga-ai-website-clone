"use client";

import Image from "next/image";
import {
  MessageCircle,
  Mic,
  LayoutGrid,
  UploadCloud,
  PanelTop } from
"lucide-react";

interface StepProps {
  title: string;
  description?: string;
  isActive?: boolean;
  isLast?: boolean;
}

const steps: StepProps[] = [
{
  title: "Create the agent",
  description:
  "Ground agents in your brand standards, compliance rules, and workflows so every interaction is consistent and on-policy.",
  isActive: true
},
{ title: "Define policies" },
{ title: "Design the logic" },
{ title: "Test and launch" },
{ title: "", isLast: true }];


const StepItem = ({ title, description, isActive, isLast }: StepProps) =>
<li className="flex gap-6">
    <div className="flex flex-col items-center">
      <div
      className={`flex-grow w-0.5 ${
      isActive ? "bg-gradient-to-b from-accent to-[#ff7a00]" : "bg-white/10"}`
      } />

      {!isLast && <div className="h-full w-0.5 bg-white/10" />}
    </div>
    <div className={`pb-8 flex-1 ${isLast ? "pb-0" : ""}`}>
      <p
      className={`font-medium ${
      isActive ? "text-white" : "text-white/40"} text-lg leading-[1.3]`
      }>

        {title}
      </p>
      {description &&
    <p className="mt-2 text-base text-white/60 font-normal leading-relaxed">
          {description}
        </p>
    }
    </div>
  </li>;


export default function AgentCanvasDemo() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto max-w-[1312px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 md:p-12 !w-[520px] !h-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-7 h-7 text-white" />
                <span
                  className="bg-clip-text bg-gradient-to-r from-white to-white/70 text-2xl font-medium !text-black"
                  style={{
                    background:
                    "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)"
                  }}>
                  Agent Canvas
                </span>
              </div>
              <p className="text-xl text-white/60 max-w-md">
                The fastest way to build, govern, and scale enterprise AI
                agents.
              </p>
              <a
                href="./agent-canvas"
                className="text-white text-base font-medium py-3 px-6 border border-white/20 rounded-full self-start hover:bg-white/10 transition-colors">

                Explore Agent Canvas
              </a>
            </div>
            <ul className="mt-12 flex flex-col">
              {steps.map((step, index) =>
              <StepItem
                key={index}
                title={step.title}
                description={step.description}
                isActive={step.isActive}
                isLast={index === steps.length - 1} />

              )}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[1.122] rounded-3xl overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763951725733-fdapgnpi4x.png"
                alt="Drift Studio interface showing appointment booking scenario"
                fill
                className="object-cover !w-full !h-[638px] !max-w-full" />

            </div>
          </div>
        </div>
      </div>
    </section>);

}