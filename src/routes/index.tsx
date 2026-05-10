import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Hammer, Phone, Mail, MapPin, Send, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  { title: "Welding", desc: "Custom metalwork, gates, balustrades and structural welding.", img: "/images/welding.jpg" },
  { title: "Tiling & Partition", desc: "Precision tiling and partition installation for homes and offices.", img: "/images/tiling.jpg" },
  { title: "Drywall", desc: "Quick, clean drywall builds and repairs with smooth finishes.", img: "/images/drywall.jpg" },
  { title: "Painting", desc: "Interior and exterior painting with premium, lasting finishes.", img: "/images/painting.jpg" },
  { title: "Paving & Plastering", desc: "Driveways, walkways and exterior plastering done to last.", img: "/images/paving.jpg" },
  { title: "Kitchen Design", desc: "Modern kitchens designed and built around how you live.", img: "/images/kitchen.jpg" },
  { title: "Interior Renovation", desc: "End-to-end remodels that transform your living spaces.", img: "/images/interior.jpg" },
  { title: "Ceiling Installation", desc: "Suspended, bulkhead and decorative ceilings with LED lighting.", img: "/images/ceiling.jpg" },
];

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/2778005757", icon: "M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" },
  { label: "Instagram", href: "https://instagram.com/ubuntu", icon: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.71 3.71 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13.67.65 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-11.84a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" },
  { label: "Facebook", href: "https://facebook.com/ubuntu", icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 sm:gap-3 group" aria-label="BA Ubuntu home">
          <span className="h-11 w-11 sm:h-14 sm:w-14 rounded-full overflow-hidden ring-2 ring-[var(--brand-gold)] shadow-card bg-white shrink-0">
            <img src="/images/logo.png" alt="BA Ubuntu logo" className="h-full w-full object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-base font-bold text-brand-navy">BA Ubuntu</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">Design Interior</span>
          </span>
        </button>
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-brand-navy hover:text-brand-gold transition-smooth relative"
            >
              {n.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-interior.jpg" alt="Modern luxury kitchen interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" /> Transforming Spaces, Elevating Lives
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            Transform Your Space <br />
            <span className="text-brand-gold">With Ubuntu</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
            Professional interior renovation, tiling, drywall, painting, welding and kitchen design services in Johannesburg.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-gold text-brand-navy-deep font-semibold shadow-elegant hover:scale-105 transition-smooth"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/70 text-white font-semibold backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-smooth"
            >
              Contact Us
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            {[
              { n: "500+", l: "Projects" },
              { n: "15+", l: "Years" },
              { n: "100%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="text-white">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">{s.n}</div>
                <div className="text-xs sm:text-sm text-white/75">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Specialists in interior renovations & accessories",
    "Quality craftsmanship and modern finishing",
    "Proudly based in Johannesburg",
    "Customer-focused workmanship from start to finish",
  ];
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img src="/images/about-team.jpg" alt="BA Ubuntu renovation team" className="w-full h-[420px] sm:h-[520px] object-cover" loading="lazy" />
          </div>
          <div className="hidden sm:flex absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl shadow-elegant p-5 items-center gap-4">
            <div className="h-14 w-14 rounded-full gradient-gold flex items-center justify-center">
              <Hammer className="h-6 w-6 text-brand-navy-deep" />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-brand-navy">15+</div>
              <div className="text-xs text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-brand-navy leading-tight">
            Crafting beautiful spaces with care and precision
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            BA - Ubuntu Design Interior and Accessories is a Johannesburg-based renovation company specializing in interior transformations.
            From concept to completion, we bring quality craftsmanship and modern finishing to every project, treating each home as if it were our own.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-brand-navy-deep" strokeWidth={3} />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-brand-navy">Our Services</h2>
          <p className="mt-4 text-muted-foreground">A complete range of construction and interior services delivered with precision and pride.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 via-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-gold opacity-0 group-hover:opacity-100 transition-smooth">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold">Get In Touch</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-brand-navy leading-tight">Let's build something beautiful together</h2>
          <p className="mt-4 text-muted-foreground">Tell us about your project and we'll get back to you within 24 hours.</p>
          <div className="mt-8 space-y-5">
            {[
              { icon: Phone, label: "Call us", value: "078 000 5757", href: "tel:+27780005757" },
              { icon: Mail, label: "Email us", value: "Bambimonga@gmail.com", href: "mailto:Bambimonga@gmail.com" },
              { icon: MapPin, label: "Location", value: "Johannesburg, South Africa" },
            ].map((c) => (
              <a key={c.label} href={c.href ?? "#"} className="flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-xl gradient-gold flex items-center justify-center shadow-card group-hover:scale-110 transition-smooth">
                  <c.icon className="h-5 w-5 text-brand-navy-deep" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">{c.label}</span>
                  <span className="block font-semibold text-brand-navy">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); (e.target as HTMLFormElement).reset(); }}
          className="bg-secondary/40 rounded-3xl p-6 sm:p-8 shadow-card space-y-4"
        >
          <div>
            <label className="text-sm font-medium text-brand-navy">Full Name</label>
            <input required maxLength={100} type="text" className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] transition-smooth" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-brand-navy">Email</label>
              <input required maxLength={255} type="email" className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] transition-smooth" />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-navy">Phone</label>
              <input required maxLength={20} type="tel" className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] transition-smooth" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-brand-navy">Message</label>
            <textarea required maxLength={1000} rows={5} className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] transition-smooth resize-none" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white font-semibold hover:bg-brand-navy-deep transition-smooth shadow-elegant">
            {sent ? <>Message Sent <Check className="h-4 w-4" /></> : <>Send Message <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="h-11 w-11 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy-deep text-white flex items-center justify-center transition-smooth"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d={s.icon} /></svg>
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-[var(--brand-gold)] bg-white">
              <img src="/images/logo.png" alt="BA Ubuntu" className="h-full w-full object-cover" />
            </span>
            <div>
              <div className="font-serif text-lg font-bold">BA Ubuntu</div>
              <div className="text-xs tracking-[0.2em] uppercase text-brand-gold">Design Interior</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">Premium interior renovation and accessories crafted with care in Johannesburg.</p>
          <SocialIcons className="mt-6" />
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold text-brand-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-gold" /> 078 000 5757 <span className="text-white/50">(WhatsApp)</span></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-gold" /> Bambimonga@gmail.com</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-gold" /> Johannesburg, South Africa</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold text-brand-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-white/80 hover:text-brand-gold transition-smooth">{n.label}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} BA Ubuntu Design Interior & Accessories. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
