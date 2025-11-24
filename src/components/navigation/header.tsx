"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Briefcase, Users } from 'lucide-react';

const productItems = [
{
  icon: Phone,
  title: "Receptionist",
  description: "AI voice assistant handling calls, scheduling, and visitor management"
},
{
  icon: Briefcase,
  title: "Sales",
  description: "Qualify leads, book meetings, and follow up with prospects automatically"
},
{
  icon: Users,
  title: "Operations",
  description: "Streamline workflows, manage inquiries, and provide 24/7 support"
}];


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`
        }>

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Far Left Corner */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763855775370-oqj4m75fvv.png"
                  alt="Drift AI Logo"
                  width={36}
                  height={36}
                  className="brightness-0 invert" />

                <span className="text-2xl font-display font-normal text-white tracking-tight">Drift</span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowProductsMenu(true)}
                onMouseLeave={() => setShowProductsMenu(false)}>

                <button className="text-base font-medium text-white/80 transition-colors hover:text-white">
                  Products
                </button>
                
                {showProductsMenu &&
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <div className="space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
                        Voice Assistant Solutions
                      </p>
                      {productItems.map((item) =>
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="text-base font-medium text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>
                }
              </div>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCompanyMenu(true)}
                onMouseLeave={() => setShowCompanyMenu(false)}>

                <button className="text-base font-medium text-white/80 transition-colors hover:text-white">
                  Company
                </button>
                
                {showCompanyMenu &&
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[400px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative h-48 w-full">
                      <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763916078772-icp5f8620ad.png"
                      alt="Drift AI Team"
                      fill
                      className="object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-medium text-white mb-3">About Drift AI</h4>
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        We're building the future of business communications with AI-powered voice assistants that sound authentically human. Our technology helps businesses of all sizes automate reception, sales, and operations while maintaining a personal touch.
                      </p>
                      <Link
                      href="/about"
                      className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">

                        Learn more about us →
                      </Link>
                    </div>
                  </div>
                }
              </div>
            </nav>

            {/* Contact Info - Far Right Corner */}
            <div className="hidden lg:flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <a 
                href="tel:2168702494"
                className="text-base font-medium text-white hover:text-accent transition-colors"
              >
                216 870 2494
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen &&
      <div className="fixed inset-0 top-20 z-40 bg-black lg:hidden overflow-y-auto">
          <div className="container p-8">
            <nav className="flex flex-col gap-6">
              {/* Products Section */}
              <div className="border-b border-white/10 pb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
                  Products
                </p>
                {productItems.map((item) =>
              <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
              )}
              </div>

              {/* Company Section */}
              <div className="border-b border-white/10 pb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
                  Company
                </p>
                <div className="rounded-xl overflow-hidden bg-white/5">
                  <div className="relative h-32 w-full">
                    <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763916078772-icp5f8620ad.png"
                    alt="Drift AI Team"
                    fill
                    className="object-cover" />

                  </div>
                  <div className="p-4">
                    <p className="text-sm text-white/70 leading-relaxed">
                      Building the future of business communications with AI-powered voice assistants.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="tel:2168702494"
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-3 text-center rounded-full bg-accent py-4 text-lg font-medium text-white hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Contact us: 216 870 2494
                </a>
              </div>
            </nav>
          </div>
        </div>
      }
    </>);

}