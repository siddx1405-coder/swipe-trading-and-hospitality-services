import { useState, type ReactNode } from "react";
import acIndoor from "./assets/projects/ac-indoor.png";
import acOutdoor from "./assets/projects/ac-outdoor.png";
import electricalOne from "./assets/projects/electrical-panel-1.png";
import electricalTwo from "./assets/projects/electrical-panel-2.png";
import gypsum from "./assets/projects/gypsum-ceiling.png";
import paintingOne from "./assets/projects/painting-1.png";
import paintingTwo from "./assets/projects/painting-2.png";
import paintingThree from "./assets/projects/painting-3.png";
import flexSign from "./assets/projects/sign-dolphine.png";
import signPrime from "./assets/projects/sign-prime-master.png";
import signSeeMax from "./assets/projects/sign-see-max.png";
import washingMachine from "./assets/projects/washing-machine.png";

type Language = "ar" | "en";
type IconName =
  | "ac"
  | "arrow"
  | "bolt"
  | "brush"
  | "check"
  | "chevron"
  | "clock"
  | "design"
  | "location"
  | "mail"
  | "menu"
  | "phone"
  | "sign"
  | "washer"
  | "whatsapp"
  | "x";

const copy = {
  ar: {
    nav: ["الرئيسية", "خدماتنا", "أعمالنا", "من نحن", "تواصل معنا"],
    eyebrow: "حلول متكاملة لمنزلك وعملك",
    heroTitle: "نحوّل أفكارك إلى",
    heroAccent: "واقع متقن.",
    heroText:
      "من الصيانة والتشطيبات إلى اللوحات الإعلانية — فريق محترف، جودة موثوقة، وتنفيذ نهتم بكل تفاصيله.",
    explore: "استكشف خدماتنا",
    call: "اتصل الآن",
    response: "استجابة سريعة",
    responseDetail: "في جميع أنحاء الدوحة",
    servicesKicker: "ما الذي نقدمه",
    servicesTitle: "كل ما تحتاجه، في مكان واحد",
    servicesText:
      "حلول عملية متكاملة للمنازل والمنشآت التجارية، ينفذها فريق خبرة بأعلى معايير الجودة.",
    services: [
      { title: "أعمال التكييف", text: "تركيب وصيانة وتنظيف وإصلاح جميع أنواع أجهزة التكييف.", icon: "ac" as IconName, image: acIndoor },
      { title: "أعمال الكهرباء", text: "تمديدات كهربائية، لوحات توزيع، صيانة وحلول أعطال آمنة.", icon: "bolt" as IconName, image: electricalOne },
      { title: "الدهانات", text: "دهانات داخلية وخارجية وتشطيبات نظيفة بلمسة احترافية.", icon: "brush" as IconName, image: paintingOne },
      { title: "الجبس والديكور", text: "أسقف جبسية عصرية، إضاءة مخفية وتصاميم داخلية مميزة.", icon: "design" as IconName, image: gypsum },
      { title: "اللوحات الإعلانية", text: "لوحات ثلاثية الأبعاد وفلكس، من التصميم حتى التركيب.", icon: "sign" as IconName, image: signSeeMax },
      { title: "صيانة الغسالات", text: "فحص وإصلاح وصيانة الغسالات الأوتوماتيكية والعادية.", icon: "washer" as IconName, image: washingMachine },
    ],
    projectsKicker: "من أعمالنا",
    projectsTitle: "جودة تراها في كل مشروع",
    projectsText: "نماذج حقيقية من أعمال فريقنا في الصيانة والتشطيبات والإعلانات.",
    projectNames: ["دهانات خارجية", "لوحات ثلاثية الأبعاد", "تصميم وتنفيذ الجبس", "صيانة أجهزة التكييف", "لوحات إعلانية للمحلات", "صيانة الغسالات"],
    aboutKicker: "لماذا سويب؟",
    aboutTitle: "حِرفة نثق بها، وخدمة تعتمد عليها",
    aboutText:
      "في سويب للتجارة وخدمات الضيافة، نجمع بين الخبرة العملية والالتزام بالمواعيد لنقدم حلولاً متقنة تناسب احتياجك وميزانيتك.",
    promises: ["فنيون متخصصون وذوو خبرة", "أسعار واضحة ومنافسة", "خامات موثوقة وتنفيذ دقيق", "التزام بالمواعيد ونظافة الموقع"],
    statYears: "خدمات متنوعة",
    statServices: "حلول متكاملة",
    statSupport: "جاهزون لخدمتكم",
    ctaTitle: "لديك مشروع أو تحتاج إلى صيانة؟",
    ctaText: "تواصل معنا الآن للحصول على معاينة وعرض سعر مناسب.",
    whatsapp: "تواصل عبر واتساب",
    contactKicker: "تواصل معنا",
    contactTitle: "نحن قريبون منك دائماً",
    addressLabel: "العنوان",
    address: "مدينة خليفة الجنوبية، الدوحة، قطر",
    phoneLabel: "اتصل بنا",
    emailLabel: "البريد الإلكتروني",
    map: "فتح الموقع على الخريطة",
    footerText: "شريكك الموثوق لأعمال الصيانة والتشطيبات واللوحات الإعلانية في قطر.",
    quick: "روابط سريعة",
    legal: "رقم السجل التجاري: 180138",
    rights: "جميع الحقوق محفوظة.",
  },
  en: {
    nav: ["Home", "Services", "Projects", "About", "Contact"],
    eyebrow: "Complete solutions for home & business",
    heroTitle: "We turn your ideas into",
    heroAccent: "work built right.",
    heroText:
      "From maintenance and finishing to professional signage — trusted quality, skilled hands, and care in every detail.",
    explore: "Explore our services",
    call: "Call now",
    response: "Fast response",
    responseDetail: "Across Doha",
    servicesKicker: "What we do",
    servicesTitle: "Everything you need, under one roof",
    servicesText:
      "Practical, end-to-end solutions for homes and businesses, delivered by an experienced team to exacting standards.",
    services: [
      { title: "AC Services", text: "Installation, servicing, deep cleaning and repair for all AC types.", icon: "ac" as IconName, image: acIndoor },
      { title: "Electrical Works", text: "Safe wiring, distribution panels, maintenance and fault repair.", icon: "bolt" as IconName, image: electricalOne },
      { title: "Painting", text: "Clean interior and exterior painting with a professional finish.", icon: "brush" as IconName, image: paintingOne },
      { title: "Gypsum & Décor", text: "Modern gypsum ceilings, concealed lighting and custom details.", icon: "design" as IconName, image: gypsum },
      { title: "Sign Boards", text: "3D and flex signage, expertly designed, produced and installed.", icon: "sign" as IconName, image: signSeeMax },
      { title: "Washing Machines", text: "Diagnosis, repair and maintenance for all washing machine types.", icon: "washer" as IconName, image: washingMachine },
    ],
    projectsKicker: "Our work",
    projectsTitle: "Quality you can see in every project",
    projectsText: "Real work delivered by our team across maintenance, finishing and signage.",
    projectNames: ["Exterior painting", "3D signage", "Gypsum design & installation", "AC maintenance", "Retail sign boards", "Washing machine repair"],
    aboutKicker: "Why Swipe?",
    aboutTitle: "Craftsmanship we trust. Service you can rely on.",
    aboutText:
      "At Swipe Trading and Hospitality Services, we combine hands-on expertise with punctual delivery to provide precise solutions for your needs and budget.",
    promises: ["Experienced specialist technicians", "Clear and competitive pricing", "Trusted materials and precise execution", "On-time delivery and a clean workspace"],
    statYears: "Professional services",
    statServices: "Complete solutions",
    statSupport: "Ready to help",
    ctaTitle: "Have a project or need a repair?",
    ctaText: "Talk to us now for an inspection and a tailored quotation.",
    whatsapp: "Chat on WhatsApp",
    contactKicker: "Contact us",
    contactTitle: "We are always within reach",
    addressLabel: "Address",
    address: "Madinah Khalifa South, Doha, Qatar",
    phoneLabel: "Call us",
    emailLabel: "Email",
    map: "Open location in Maps",
    footerText: "Your trusted partner for maintenance, finishing and professional signage in Qatar.",
    quick: "Quick links",
    legal: "Commercial Registration: 180138",
    rights: "All rights reserved.",
  },
};

const projectImages = [paintingTwo, signPrime, gypsum, acOutdoor, flexSign, washingMachine];

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    ac: <><rect x="3" y="5" width="18" height="11" rx="2" /><path d="M7 10h10M8 16c0 2-1 3-2 4m5-4c0 2-.3 3-1 4m6-4c0 2 1 3 2 4" /></>,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
    brush: <><path d="m14 4 6 6L9 21H3v-6L14 4Z" /><path d="m12 6 6 6M3 18h6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    design: <><path d="M4 4h16v16H4zM4 9h16M9 9v11" /><path d="m13 14 2-2 2 2-2 2-2-2Z" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M6.6 2.9 9 7l-2 2a16 16 0 0 0 8 8l2-2 4.1 2.4v3a2 2 0 0 1-2.2 2C10 21.3 2.7 14 1.6 5.1A2 2 0 0 1 3.6 3h3Z" />,
    sign: <><path d="M4 5h16v10H4zM8 15v6m8-6v6M2 21h20" /><path d="M8 9h8" /></>,
    washer: <><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="14" r="5" /><path d="M8 6h.01M11 6h4" /></>,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.2 7.7c.4 4 4 7 7.5 7.7l1.1-1.7-2.4-1.2-1 1a7 7 0 0 1-3-3l1-1-1.2-2.4-2 .6Z" /></>,
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark" aria-hidden="true"><span>S</span></div>
      <div className="leading-tight">
        <div className={`text-base font-black tracking-[0.12em] ${light ? "text-white" : "text-slate-950"}`}>SWIPE</div>
        <div className={`text-[0.62rem] font-bold tracking-[0.08em] ${light ? "text-white/55" : "text-slate-500"}`}>TRADING & SERVICES</div>
      </div>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const isArabic = language === "ar";
  const anchors = ["home", "services", "projects", "about", "contact"];
  const switchLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
    setMenuOpen(false);
  };

  return (
    <div className={isArabic ? "font-arabic" : "font-english"} dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071b18]/92 text-white backdrop-blur-xl">
        <div className="border-b border-white/10 bg-black/15">
          <div className="container-page flex h-8 items-center justify-between text-[0.68rem] font-bold text-white/55">
            <span>{isArabic ? "رقم السجل التجاري" : "Commercial Registration"}</span>
            <span dir="ltr">CR No. 180138</span>
          </div>
        </div>
        <div className="container-page flex h-20 items-center justify-between">
          <a href="#home" aria-label={isArabic ? "الصفحة الرئيسية" : "Home"}><Brand light /></a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {t.nav.map((item, index) => <a className="nav-link" href={`#${anchors[index]}`} key={item}>{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button className="language-button" onClick={switchLanguage} type="button"><span className="text-xs opacity-60">{isArabic ? "EN" : "ع"}</span><span>{isArabic ? "English" : "العربية"}</span></button>
            <a className="header-call hidden sm:flex" href="tel:+97477310076" aria-label={t.call}><Icon name="phone" className="h-4 w-4" /><span dir="ltr">7731 0076</span></a>
            <button className="menu-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} type="button" aria-expanded={menuOpen} aria-label="Toggle navigation"><Icon name={menuOpen ? "x" : "menu"} className="h-6 w-6" /></button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">{t.nav.map((item, index) => <a href={`#${anchors[index]}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
      </header>

      <main>
        <section className="hero" id="home">
          <img src={paintingThree} alt={isArabic ? "فريق سويب أثناء تنفيذ أعمال الدهان" : "Swipe team completing exterior painting"} className="hero-image" />
          <div className="hero-overlay" /><div className="hero-pattern" />
          <div className="container-page relative z-10 flex min-h-[760px] items-center pt-24">
            <div className="max-w-3xl py-24 text-white">
              <div className="eyebrow-light"><span className="h-px w-9 bg-amber-400" />{t.eyebrow}</div>
              <h1 className="mt-7 text-5xl font-black leading-[1.13] sm:text-6xl lg:text-7xl">{t.heroTitle}<span className="block text-amber-400">{t.heroAccent}</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-white/75 sm:text-xl">{t.heroText}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="button-primary" href="#services">{t.explore}<Icon name="arrow" className="h-5 w-5 rtl:rotate-180" /></a>
                <a className="button-ghost" href="tel:+97477310076"><Icon name="phone" className="h-5 w-5" />{t.call}</a>
              </div>
            </div>
          </div>
          <div className="hero-badge"><div className="icon-tile"><Icon name="clock" className="h-6 w-6" /></div><div><div className="font-extrabold">{t.response}</div><div className="mt-0.5 text-sm text-white/55">{t.responseDetail}</div></div></div>
        </section>

        <section className="section bg-[#f5f3ed]" id="services">
          <div className="container-page">
            <div className="section-heading"><div><div className="eyebrow">{t.servicesKicker}</div><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service, index) => (
                <article className="service-card group" key={service.title}>
                  <div className="service-image-wrap"><img src={service.image} alt={service.title} className="service-image" loading="lazy" /><span className="service-number">0{index + 1}</span></div>
                  <div className="p-7"><div className="service-icon"><Icon name={service.icon} className="h-6 w-6" /></div><h3>{service.title}</h3><p>{service.text}</p><a className="text-link" href="#contact">{isArabic ? "اطلب الخدمة" : "Request service"}<Icon name="arrow" className="h-4 w-4 rtl:rotate-180" /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" id="projects">
          <div className="container-page">
            <div className="section-heading"><div><div className="eyebrow">{t.projectsKicker}</div><h2>{t.projectsTitle}</h2></div><p>{t.projectsText}</p></div>
            <div className="project-grid mt-14">
              {projectImages.map((image, index) => <figure className={`project-card group project-${index + 1}`} key={image}><img src={image} alt={t.projectNames[index]} loading="lazy" /><figcaption><span>{t.projectNames[index]}</span><div className="project-arrow"><Icon name="arrow" className="h-5 w-5 rtl:rotate-180" /></div></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container-page grid items-center gap-16 lg:grid-cols-2">
            <div className="about-visual"><img src={paintingOne} alt={isArabic ? "تنفيذ أعمال الدهان الخارجية" : "Exterior painting work"} loading="lazy" /><div className="about-small-image"><img src={electricalTwo} alt={isArabic ? "لوحة كهربائية" : "Electrical panel"} loading="lazy" /></div><div className="about-stamp"><span>SWIPE</span><small>{isArabic ? "جودة • ثقة • إتقان" : "QUALITY • TRUST • CRAFT"}</small></div></div>
            <div>
              <div className="eyebrow text-amber-400">{t.aboutKicker}</div>
              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-white/65">{t.aboutText}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">{t.promises.map((promise) => <div className="promise" key={promise}><span><Icon name="check" className="h-4 w-4" /></span>{promise}</div>)}</div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"><div className="stat"><strong>6+</strong><span>{t.statYears}</span></div><div className="stat"><strong>360°</strong><span>{t.statServices}</span></div><div className="stat"><strong>24/7</strong><span>{t.statSupport}</span></div></div>
            </div>
          </div>
        </section>

        <section className="cta-strip"><div className="container-page flex flex-col items-center justify-between gap-7 py-12 text-center lg:flex-row lg:text-start"><div><h2 className="text-3xl font-black text-slate-950">{t.ctaTitle}</h2><p className="mt-2 text-slate-800/70">{t.ctaText}</p></div><a className="button-dark shrink-0" href="https://wa.me/97477006414" target="_blank" rel="noreferrer"><Icon name="whatsapp" className="h-5 w-5" />{t.whatsapp}</a></div></section>

        <section className="section bg-[#f5f3ed]" id="contact">
          <div className="container-page">
            <div className="mb-12 text-center"><div className="eyebrow justify-center">{t.contactKicker}</div><h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">{t.contactTitle}</h2></div>
            <div className="contact-grid">
              <a className="contact-card" href="https://www.google.com/maps?q=25.3171143,51.4815054&z=17&hl=en" target="_blank" rel="noreferrer"><span className="contact-icon"><Icon name="location" className="h-6 w-6" /></span><span><small>{t.addressLabel}</small><strong>{t.address}</strong><em>{t.map}</em></span><Icon name="chevron" className="h-5 w-5 text-slate-400 rtl:rotate-180" /></a>
              <a className="contact-card" href="tel:+97477310076"><span className="contact-icon"><Icon name="phone" className="h-6 w-6" /></span><span><small>{t.phoneLabel}</small><strong dir="ltr">+974 7731 0076</strong><em dir="ltr">WhatsApp: +974 7700 6414</em></span><Icon name="chevron" className="h-5 w-5 text-slate-400 rtl:rotate-180" /></a>
              <a className="contact-card" href="mailto:swipetrading2022@gmail.com"><span className="contact-icon"><Icon name="mail" className="h-6 w-6" /></span><span><small>{t.emailLabel}</small><strong className="break-all text-base sm:text-lg">swipetrading2022@gmail.com</strong><em>SWIPE Trading & Services</em></span><Icon name="chevron" className="h-5 w-5 text-slate-400 rtl:rotate-180" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#061512] text-white">
        <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div><Brand light /><p className="mt-5 max-w-md leading-7 text-white/55">{t.footerText}</p></div>
          <div><h3 className="font-extrabold">{t.quick}</h3><div className="mt-5 grid gap-3 text-sm text-white/55">{t.nav.slice(1).map((item, index) => <a className="transition hover:text-amber-400" href={`#${anchors[index + 1]}`} key={item}>{item}</a>)}</div></div>
          <div><h3 className="font-extrabold">{isArabic ? "بيانات الشركة" : "Company details"}</h3><div className="mt-5 grid gap-3 text-sm text-white/55"><span>{t.legal}</span><a href="tel:+97477310076" dir="ltr">+974 7731 0076</a><a href="mailto:swipetrading2022@gmail.com">swipetrading2022@gmail.com</a></div></div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-page flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-white/35">
            <span>© {new Date().getFullYear()} SWIPE. {t.rights}</span>
            <span className="flex flex-wrap items-center gap-2">
              <span>{isArabic ? "صُنع بواسطة" : "Made by"}</span>
              <a className="font-bold text-amber-400 transition hover:text-amber-300" href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">@Xenosys Qatar</a>
              <span aria-hidden="true">•</span>
              <a className="transition hover:text-white" href="tel:+97470643918" dir="ltr">+974 7064 3918</a>
            </span>
          </div>
        </div>
      </footer>
      <a className="floating-whatsapp" href="https://wa.me/97477006414" target="_blank" rel="noreferrer" aria-label={t.whatsapp}><Icon name="whatsapp" className="h-7 w-7" /></a>
    </div>
  );
}
