import Header from "@/components/navigation/header";
import HeroSection from "@/components/sections/hero-section";
import MetricsSection from "@/components/sections/metrics-section";
import CustomAgentsSection from "@/components/sections/custom-agents-section";
import AgentCanvasDemo from "@/components/sections/agent-canvas-demo";
import SmartSuggestionsSection from "@/components/sections/smart-suggestions-section";
import InsightsDemo from "@/components/sections/insights-demo";
import VoiceExperienceSection from "@/components/sections/voice-experience-section";
import VoiceDemo from "@/components/sections/voice-demo";
import DemoCtaSection from "@/components/sections/demo-cta-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <MetricsSection />
        <div id="product">
          <CustomAgentsSection />
          <AgentCanvasDemo />
        </div>
        <div className="container py-16 sm:py-24">
          <SmartSuggestionsSection />
          <div className="mt-16 sm:mt-24">
            <InsightsDemo />
          </div>
        </div>
        <VoiceExperienceSection />
        <VoiceDemo />
        <DemoCtaSection />
        <div id="resources">
          <Footer />
        </div>
      </main>
    </>);

}