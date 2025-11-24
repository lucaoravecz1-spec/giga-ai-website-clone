import Link from 'next/link';
import Image from 'next/image';

const DriftLogo = () =>
<div className="flex items-center gap-3">
    <Image
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763856934092-r02d06kx0p.png"
    alt="Drift AI Logo"
    width={36}
    height={36}
    className="brightness-0 invert !w-9 !h-full !max-w-9" />

    <span className="font-body text-[28px] font-bold tracking-tight text-text-primary !font-(family-name:--font-raleway) !w-[98px] !h-[33px]">
      Drift AI
    </span>
  </div>;

const footerLinkColumns = [
{
  title: 'Product',
  links: [
  { name: 'Drift Studio', href: '#' },
  { name: 'Voice Options', href: '#' },
  { name: 'Integrations', href: '#' }]

},
{
  title: 'Company',
  links: [
  { name: 'Careers', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Trust Center', href: '#' }]

},
{
  title: 'Resources',
  links: [
  { name: "", href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: "", href: '#' }]

}];


const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-y-10 gap-x-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-label text-text-tertiary mb-6">GET STARTED TODAY</p>
              <h2 className="font-display text-[40px] leading-tight lg:text-5xl text-text-primary max-w-xl">
                Ready to transform your business communications?
              </h2>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start gap-y-8">
              <p className="text-lg text-text-secondary">
                Drift AI's voice assistants handle reception, operations, and support for businesses of all sizes. Get up and running in minutes.
              </p>
              <a
                href="https://calendly.com/lucaoravecz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground text-button font-medium px-8 py-4 rounded-full transition-transform hover:scale-105">

                Get Started
              </a>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        <div className="py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
            <div className="flex-shrink-0 lg:w-1/3">
              <DriftLogo />
            </div>

            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinkColumns.map((column) =>
              <div key={column.title}>
                  <h3 className="text-base font-semibold text-text-primary mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.links.map((link) =>
                  <li key={link.name}>
                        <Link
                      href={link.href}
                      className="text-base text-text-secondary hover:text-text-primary transition-colors !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">

                          {link.name}
                        </Link>
                      </li>
                  )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 lg:mt-20 pt-8 border-t border-border">
            <p className="text-sm text-text-tertiary">© 2025 Drift AI, Inc.</p>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;