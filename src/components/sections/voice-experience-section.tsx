import { Waves, Globe, Phone, Voicemail, Play } from "lucide-react";
import Image from 'next/image';

const features = [
{
  title: "Diverse human voices",
  description: "Choose from over 50 natural-sounding voice options",
  icon: Waves
},
{
  title: "Real-time adaptation",
  description: "Responds naturally to interruptions and context",
  icon: Globe
},
{
  title: "Ultra-low latency",
  description: "Lightning-fast response times for natural conversations",
  icon: Phone
}];


const VoiceExperienceSection = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 !w-full !h-[917px]">
            <div className="container mx-auto px-4 lg:px-16">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2.5 h-2.5 bg-accent rounded-full"></span>
                            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">NATURAL VOICE</p>
                        </div>
                        <h2 className="font-display text-5xl/[1.2] -tracking-tight font-normal text-text-primary">
                            Sounds authentically human
                        </h2>
                    </div>

                    <div className="lg:col-span-8 mt-12 lg:mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                            {features.map((feature) =>
              <div key={feature.title} className="flex flex-col gap-4">
                                    <feature.icon className="w-7 h-7 text-text-primary" strokeWidth={1.5} />
                                    <h3 className="text-xl font-medium text-text-primary">{feature.title}</h3>
                                    <p className="text-base text-white/70 leading-snug">{feature.description}</p>
                                </div>
              )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
                   <div className="lg:col-span-5 bg-card border border-border-subtle rounded-3xl p-8 lg:p-12 flex flex-col !w-full !h-[428px]">
                        <div className="flex-grow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center flex-shrink-0">
                                    <Voicemail className="w-6 h-6 text-text-primary" />
                                </div>
                                <h3 className="font-display text-3xl font-medium text-text-primary">Voice Experience</h3>
                            </div>
                            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                                Choose from a diverse library of human-like voices that understand tone, context, and intent. Perfect for receptionists, customer service, and operational support across any industry.
                            </p>
                        </div>
                        <a
              href="#"
              className="mt-10 self-start px-7 py-4 border border-white/20 rounded-full text-base font-medium text-white bg-transparent hover:bg-white/10 transition-colors duration-300">
                            Explore Voice Options
                        </a>
                    </div>
                    
                    <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-0 rounded-3xl overflow-hidden">
                        <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763916078772-icp5f8620ad.png"
              alt="A scenic mountain landscape, representing the context of Voice Experience"
              fill
              className="object-cover !w-full !h-[545px] !max-w-full"
              sizes="(max-width: 1024px) 100vw, 58vw" />

                         <div className="absolute inset-0 flex items-center justify-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763857496222-2mw3x2mzb1m.png)] !bg-cover !bg-center !w-[153px] !h-5">
                            <button className="flex items-center gap-2.5 px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-black/30 transition-colors !w-full !h-[26px]">
                                <Play className="w-5 h-5 fill-white" strokeWidth={1} />
                                <span className="text-base font-medium">Play</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default VoiceExperienceSection;