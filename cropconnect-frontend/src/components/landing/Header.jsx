import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const links = [
  { id: "prototype", label: "Prototype" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "goals", label: "Goals" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/75 border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-2 group"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1B4332] text-[#FDFBF7]">
            <Leaf className="w-4 h-4" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl text-[#1A201C] tracking-tight">
            Crop<span className="text-[#1B4332]">Connect</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              data-testid={`nav-${l.id}`}
              className="text-sm text-[#1A201C]/80 hover:text-[#1B4332] transition-colors link-u"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            data-testid="header-cta"
            onClick={() => scrollTo("contact")}
            className="bg-[#1B4332] hover:bg-[#0F2A1F] text-[#FDFBF7] rounded-full px-5"
          >
            Get in touch
          </Button>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-full border border-[#D5D1C5] flex items-center justify-center bg-white/70"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FDFBF7] border-t border-[#D5D1C5]">
          <div className="px-5 py-5 flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-${l.id}`}
                onClick={() => scrollTo(l.id)}
                className="text-left py-2 text-[#1A201C]"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-[#1B4332] hover:bg-[#0F2A1F] text-[#FDFBF7] rounded-full mt-2"
              data-testid="mobile-cta"
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
