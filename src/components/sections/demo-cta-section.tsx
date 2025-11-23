import Link from 'next/link';

const DemoCtaSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-24 lg:py-32 !w-full !h-[438px]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                GET STARTED TODAY
              </p>
            </div>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-black md:text-[3.5rem] md:leading-[1.2]">
              Ready to transform your business communications?
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-4">
            <p className="text-lg leading-relaxed text-zinc-700">
              Drift AI's voice assistants handle reception, operations, and support for businesses of all sizes. Choose from diverse human-like voices and get up and running in minutes.
            </p>
            <div className="mt-2">
              <Link
                href="https://calendly.com/lucaoravecz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-black px-8 py-4 text-base font-medium text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03]">

                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default DemoCtaSection;