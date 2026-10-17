"use strict";

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
const navigationLinks = [...document.querySelectorAll(".nav-link, .nav-contact")];
const sections = [...document.querySelectorAll("main section[id]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const translations = {
  en: {
    title: "Farrag Mahmoud — Junior Front-End Developer",
    description: "The portfolio of Farrag Mahmoud, a junior front-end developer building digital experiences with HTML, CSS, and JavaScript.",
    content: {
      ".skip-link": "Skip to content",
      ".nav-link": ["Home", "About", "Skills", "Projects", "Contact"],
      ".availability": '<span class="availability-dot"></span> OPEN TO OPPORTUNITIES',
      ".hero-copy > .eyebrow": 'JUNIOR FRONT-END DEVELOPER <span class="eyebrow-rule"></span> 01 / 05',
      "#hero-title": 'Crafting Digital<br>Experiences <span class="gradient-text">Through Code.</span>',
      ".hero-description": "I’m a junior front-end developer passionate about building responsive, accessible, and user-friendly web experiences using HTML, CSS, and JavaScript.",
      ".hero-actions .button-primary": 'Explore My Work <span aria-hidden="true">↘</span>',
      ".hero-actions .button-quiet": 'Get In Touch <span aria-hidden="true">↗</span>',
      ".social-label": "FIND ME ON",
      ".hero-socials a": ['GitHub <span aria-hidden="true">↗</span>', 'LinkedIn <span aria-hidden="true">↗</span>'],
      ".editor-status > span:first-child": "<i></i> Always curious",
      ".editor-body": "Example HTML, CSS, and JavaScript code",
      ".hero-portrait figcaption span": "JUNIOR FRONT-END DEVELOPER",
      ".art-caption": '<span class="caption-line"></span> A little logic, a lot of intention.',
      ".scroll-cue": '<span class="scroll-line"></span> SCROLL TO EXPLORE',
      ".about-section .section-heading .eyebrow": '<span class="section-number">01</span> THE PERSON BEHIND THE PIXELS',
      "#about-title": 'A Little <span class="gradient-text">About Me.</span>',
      ".about-profile-copy > span": "MEET THE DEVELOPER",
      ".about-profile-copy small": "Junior Front-End Developer",
      ".avatar-placeholder-tag": "FRONT-END DEVELOPER",
      ".about-intro > p": [
        "I’m a self-taught developer building my front-end skills one thoughtful project at a time. I enjoy turning ideas into clear, functional interfaces—and figuring out the little details that make them feel right.",
        "There’s always something new to learn. I keep experimenting, practicing, and refining my approach with every page I make."
      ],
      ".text-link": 'A bit more about what I’m looking for <span aria-hidden="true">→</span>',
      ".feature-card h3": ["Clean &amp; structured code", "Responsive by design", "Always learning"],
      ".feature-card p": [
        "Readable foundations that keep a project easy to understand.",
        "Interfaces that adapt thoughtfully to every screen size.",
        "Curiosity, practice, and steady progress—every day."
      ],
      ".skills-section .section-heading .eyebrow": '<span class="section-number">02</span> THE TOOLS I’M GROWING WITH',
      "#skills-title": 'Small toolkit.<br><span class="gradient-text">Big possibilities.</span>',
      ".skills-section .heading-aside": "A strong foundation in the building blocks of the web—learning by making, testing, and refining.",
      ".skill-index": ["01 / MARKUP", "02 / STYLING", "03 / INTERACTION"],
      ".skill-card > p": [
        "Semantic markup and considered page structure—the foundations of accessible, meaningful experiences.",
        "Layouts, Flexbox, Grid, and responsive styling that bring a visual idea to life across devices.",
        "DOM manipulation and event handling to create useful, approachable interactive interfaces."
      ],
      ".skill-tags span": ["Semantic markup", "Accessibility", "Flexbox &amp; Grid", "Responsive design", "DOM", "Interactivity"],
      ".skills-note": '<span class="note-line"></span> Learning in public. Building with purpose.',
      ".projects-section .section-heading .eyebrow": '<span class="section-number">03</span> SELECTED PRACTICE PROJECTS',
      "#projects-title": 'Made to learn.<br><span class="gradient-text">Built to explore.</span>',
      ".projects-section .heading-aside": "A few project ideas I’m developing as part of my learning journey. These are examples, not completed work.",
      ".preview-label": "EXAMPLE PROJECT · NOT A LIVE PORTFOLIO PROJECT",
      ".project-number": ["01 — LANDING PAGE", "02 — INTERACTIVE APP", "03 — PERSONAL SITE"],
      ".project-title-row h3": ["Responsive Landing Page", "Interactive To-Do List", "Personal Portfolio Website"],
      ".mock-nav > span": ['DISCOVER &nbsp; ABOUT &nbsp; <i>GET STARTED ↗</i>'],
      ".mock-landing-content small": "MAKE ROOM FOR MORE",
      ".mock-landing-content strong": 'Find your<br><em>next horizon.</em>',
      ".mock-button": "EXPLORE THE COLLECTION&nbsp; →",
      ".todo-window-head > span:first-child": "little by little",
      ".todo-greeting": 'A good day to<br><strong>get things done.</strong>',
      ".todo-progress > span:first-child": "YOUR PROGRESS",
      ".todo-item > span": ["Plan the week", "Make a fresh start", "Build something useful", "Take a little break"],
      ".todo-item small": ["DONE", "DONE", "UP NEXT", "LATER"],
      ".todo-input": "＋&nbsp; Add a new task...",
      ".portfolio-mini-nav > span": "ABOUT &nbsp; WORK &nbsp; CONTACT",
      ".portfolio-mini-copy small": "HELLO, WORLD. I'M A DEVELOPER.",
      ".portfolio-mini-copy strong": 'Turning ideas<br>into <em>interfaces.</em>',
      ".portfolio-mini-copy p": "Thoughtful design. Clean code.<br>Always learning.",
      ".portfolio-mini-copy i": "EXPLORE MY WORK&nbsp; ↘",
      ".portfolio-mini-footer": 'BASED IN YOUR CITY <span>SCROLL TO EXPLORE ↓</span>',
      ".project-info > p": [
        "An example concept for a responsive landing page with clear sections and a focused call to action.",
        "An example task-list concept exploring DOM updates, event handling, and simple interactions.",
        "An example personal-site concept for presenting skills, practice projects, and ways to connect."
      ],
      ".project-links a": ["Live demo ↗", "Source code ↗", "Live demo ↗", "Source code ↗", "Live demo ↗", "Source code ↗"],
      ".project-disclaimer": '<span aria-hidden="true">ⓘ</span> These are illustrative placeholders, not claims of completed or deployed work. Replace them with your own projects.',
      ".contact-section .eyebrow": '<span class="section-number">04</span> HAVE A GOOD ONE IN MIND?',
      "#contact-title": 'Let’s Build<br><span class="gradient-text">Something Great.</span>',
      ".contact-copy > p:not(.eyebrow)": "I’m open to connecting about junior opportunities, collaboration, or all things front-end. If that sounds like your kind of conversation, I’d love to hear from you.",
      ".contact-cta": 'Say hello <span aria-hidden="true">↗</span>',
      ".contact-item small": ["DROP ME A LINE", "FIND ME ON GITHUB", "CONNECT ON LINKEDIN"],
      ".placeholder-note": "Replace the email and profile links with your own details before publishing.",
      ".footer-inner > p": 'Designed with care. Built with curiosity.<br><span>© <span id="copyright-year"></span> Farrag Mahmoud</span>'
    },
    aria: {
      ".nav": "Main navigation",
      ".hero-art": "Decorative code editor illustration",
      ".hero-socials a:first-of-type": "GitHub profile (replace the placeholder URL)",
      ".hero-socials a:last-of-type": "LinkedIn profile (replace the placeholder URL)",
      ".project-preview.preview-landing": "Example project preview: Responsive Landing Page (replace the placeholder URL)",
      ".project-preview.preview-todo": "Example project preview: Interactive To-Do List (replace the placeholder URL)",
      ".project-preview.preview-portfolio": "Example project preview: Personal Portfolio Website (replace the placeholder URL)",
      ".back-top": "Back to top"
    },
    imageAlt: "Portrait of Farrag Mahmoud"
  },
  ar: {
    title: "Farrag Mahmoud — مطور واجهات أمامية",
    description: "معرض أعمال فرّاج محمود، مطور واجهات أمامية مبتدئ يبني تجارب رقمية باستخدام HTML وCSS وJavaScript.",
    content: {
      ".skip-link": "انتقل إلى المحتوى",
      ".nav-link": ["الرئيسية", "نبذة عني", "المهارات", "المشاريع", "تواصل معي"],
      ".availability": '<span class="availability-dot"></span> متاح لفرص العمل',
      ".hero-copy > .eyebrow": 'مطور واجهات أمامية مبتدئ <span class="eyebrow-rule"></span> 01 / 05',
      "#hero-title": 'أصنع تجارب رقمية<br><span class="gradient-text">بشغفٍ وكود.</span>',
      ".hero-description": "أنا فرّاج، مطور واجهات أمامية مبتدئ، شغوف ببناء تجارب ويب متجاوبة وسهلة الاستخدام ومتاحة للجميع باستخدام HTML وCSS وJavaScript.",
      ".hero-actions .button-primary": 'اكتشف أعمالي <span aria-hidden="true">↙</span>',
      ".hero-actions .button-quiet": 'تواصل معي <span aria-hidden="true">↖</span>',
      ".social-label": "تابعني على",
      ".hero-socials a": ['GitHub <span aria-hidden="true">↗</span>', 'LinkedIn <span aria-hidden="true">↗</span>'],
      ".editor-status > span:first-child": "<i></i> الفضول في تطور دائم",
      ".editor-body": "مثال توضيحي لأكواد HTML وCSS وJavaScript",
      ".hero-portrait figcaption span": "مطور واجهات أمامية مبتدئ",
      ".art-caption": '<span class="caption-line"></span> قليل من المنطق، وكثير من الاهتمام.',
      ".scroll-cue": '<span class="scroll-line"></span> مرّر لاكتشاف المزيد',
      ".about-section .section-heading .eyebrow": '<span class="section-number">01</span> الشخص خلف الشاشة',
      "#about-title": 'نبذة <span class="gradient-text">عني.</span>',
      ".about-profile-copy > span": "تعرّف على المطور",
      ".about-profile-copy small": "مطور واجهات أمامية مبتدئ",
      ".avatar-placeholder-tag": "مطور واجهات أمامية",
      ".about-intro > p": [
        "أنا مطور أتعلم ذاتيًا وأطوّر مهاراتي في الواجهات الأمامية مشروعًا بعد مشروع. أستمتع بتحويل الأفكار إلى واجهات واضحة وعملية، والاهتمام بالتفاصيل الصغيرة التي تصنع فرقًا.",
        "هناك دائمًا شيء جديد لنتعلمه. أواصل التجربة والتدرب وتحسين أسلوبي مع كل صفحة أبنيها."
      ],
      ".text-link": 'ما الفرص التي أبحث عنها <span aria-hidden="true">←</span>',
      ".feature-card h3": ["كود منظم وواضح", "تصميم متجاوب", "تعلّم مستمر"],
      ".feature-card p": [
        "أساس متين وسهل القراءة يجعل المشروع أبسط في الفهم والتطوير.",
        "واجهات تتكيف بعناية مع مختلف أحجام الشاشات.",
        "فضول وممارسة وتقدم ثابت، يومًا بعد يوم."
      ],
      ".skills-section .section-heading .eyebrow": '<span class="section-number">02</span> أدوات أطور مهاراتي بها',
      "#skills-title": 'أدوات بسيطة.<br><span class="gradient-text">إمكانيات كبيرة.</span>',
      ".skills-section .heading-aside": "أساس متين في تقنيات الويب، أتعلم من خلال البناء والتجربة والتحسين.",
      ".skill-index": ["01 / هيكلة", "02 / تنسيق", "03 / تفاعل"],
      ".skill-card > p": [
        "كتابة دلالية وهيكلة مدروسة للصفحات، أساس تجارب مفهومة ومتاحة للجميع.",
        "تنسيقات وتخطيطات متجاوبة باستخدام Flexbox وGrid لتحويل الأفكار إلى تصميم حي.",
        "التعامل مع DOM والأحداث لبناء واجهات تفاعلية مفيدة وسهلة الاستخدام."
      ],
      ".skill-tags span": ["عناصر دلالية", "إمكانية الوصول", "Flexbox وGrid", "تصميم متجاوب", "DOM", "التفاعل"],
      ".skills-note": '<span class="note-line"></span> أتعلم وأشارك، وأبني بهدف.',
      ".projects-section .section-heading .eyebrow": '<span class="section-number">03</span> مشاريع تدريبية مختارة',
      "#projects-title": 'أبني لأتعلّم.<br><span class="gradient-text">وأستكشف لأتطور.</span>',
      ".projects-section .heading-aside": "أفكار مشاريع تدريبية ضمن رحلتي التعليمية. هذه أمثلة توضيحية وليست أعمالًا منجزة.",
      ".preview-label": "مثال توضيحي · ليس مشروعًا منشورًا",
      ".project-number": ["01 — صفحة هبوط", "02 — تطبيق تفاعلي", "03 — موقع شخصي"],
      ".project-title-row h3": ["صفحة هبوط متجاوبة", "قائمة مهام تفاعلية", "موقع معرض أعمال شخصي"],
      ".mock-nav > span": ['اكتشف &nbsp; نبذة &nbsp; <i>ابدأ الآن ↗</i>'],
      ".mock-landing-content small": "افسح مكانًا للمزيد",
      ".mock-landing-content strong": 'اكتشف<br><em>أفقًا جديدًا.</em>',
      ".mock-button": "استكشف المجموعة&nbsp; →",
      ".todo-window-head > span:first-child": "خطوة بخطوة",
      ".todo-greeting": 'يوم جميل<br><strong>لإنجاز مهامك.</strong>',
      ".todo-progress > span:first-child": "تقدمك",
      ".todo-item > span": ["خطط للأسبوع", "ابدأ من جديد", "ابنِ شيئًا مفيدًا", "خذ استراحة قصيرة"],
      ".todo-item small": ["تم", "تم", "التالي", "لاحقًا"],
      ".todo-input": "＋&nbsp; أضف مهمة جديدة...",
      ".portfolio-mini-nav > span": "نبذة &nbsp; أعمالي &nbsp; تواصل",
      ".portfolio-mini-copy small": "مرحبًا، أنا مطور واجهات.",
      ".portfolio-mini-copy strong": 'أحوّل الأفكار<br>إلى <em>واجهات.</em>',
      ".portfolio-mini-copy p": "تصميم مدروس. كود نظيف.<br>وتعلّم مستمر.",
      ".portfolio-mini-copy i": "اكتشف أعمالي&nbsp; ↙",
      ".portfolio-mini-footer": 'مقيم في مدينتك <span>مرّر للاكتشاف ↓</span>',
      ".project-info > p": [
        "تصور توضيحي لصفحة هبوط متجاوبة بأقسام واضحة وعبارة تحث على اتخاذ إجراء.",
        "فكرة توضيحية لقائمة مهام تستكشف تحديث DOM والتعامل مع الأحداث والتفاعلات البسيطة.",
        "تصور توضيحي لموقع شخصي يعرض المهارات والمشاريع التدريبية وطرق التواصل."
      ],
      ".project-links a": ["معاينة ↗", "الكود المصدري ↗", "معاينة ↗", "الكود المصدري ↗", "معاينة ↗", "الكود المصدري ↗"],
      ".project-disclaimer": '<span aria-hidden="true">ⓘ</span> هذه أمثلة توضيحية وليست ادعاءً بإنجاز مشاريع أو نشرها. استبدلها بأعمالك وروابطك عند توفرها.',
      ".contact-section .eyebrow": '<span class="section-number">04</span> هل لديك فكرة جميلة؟',
      "#contact-title": 'لنبنِ معًا<br><span class="gradient-text">شيئًا رائعًا.</span>',
      ".contact-copy > p:not(.eyebrow)": "يسعدني التواصل بشأن فرص المبتدئين أو التعاون أو كل ما يتعلق بتطوير الواجهات الأمامية. إذا كانت لديك فكرة، يسعدني أن أسمع منك.",
      ".contact-cta": 'أرسل لي رسالة <span aria-hidden="true">↖</span>',
      ".contact-item small": ["راسلني عبر البريد", "تابعني على GitHub", "تواصل معي على LinkedIn"],
      ".placeholder-note": "استبدل البريد وروابط الحسابات ببياناتك قبل نشر الموقع.",
      ".footer-inner > p": 'صُنع بعناية، وبُني بشغف للتعلّم.<br><span>© <span id="copyright-year"></span> Farrag Mahmoud</span>'
    },
    aria: {
      ".nav": "التنقل الرئيسي",
      ".hero-art": "رسم توضيحي لمحرر أكواد",
      ".hero-socials a:first-of-type": "حساب GitHub (رابط تجريبي)",
      ".hero-socials a:last-of-type": "حساب LinkedIn (رابط تجريبي)",
      ".project-preview.preview-landing": "معاينة مشروع توضيحي: صفحة هبوط متجاوبة (استبدل الرابط التجريبي)",
      ".project-preview.preview-todo": "معاينة مشروع توضيحي: قائمة مهام تفاعلية (استبدل الرابط التجريبي)",
      ".project-preview.preview-portfolio": "معاينة مشروع توضيحي: موقع معرض أعمال شخصي (استبدل الرابط التجريبي)",
      ".back-top": "العودة إلى الأعلى"
    },
    imageAlt: "صورة Farrag Mahmoud"
  }
};

function setLanguage(language) {
  const selected = translations[language];
  if (!selected) return;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = selected.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", selected.description);

  Object.entries(selected.content).forEach(([selector, values]) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      const value = Array.isArray(values) ? values[index] : values;
      if (value !== undefined) element.innerHTML = value;
    });
  });

  Object.entries(selected.aria).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => element.setAttribute("aria-label", value));
  });

  document.querySelectorAll(".hero-portrait img, .profile-avatar img").forEach((image) => {
    image.setAttribute("alt", selected.imageAlt);
  });

  const currentYear = document.querySelector("#copyright-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
  const languageToggle = document.querySelector(".language-toggle");
  if (languageToggle) {
    languageToggle.textContent = language === "ar" ? "EN" : "عربي";
    languageToggle.lang = language === "ar" ? "en" : "ar";
    languageToggle.setAttribute("aria-label", language === "ar" ? "Switch language to English" : "تغيير اللغة إلى العربية");
  }

  closeMenu();
}

setLanguage("ar");
document.querySelector(".language-toggle")?.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", document.documentElement.lang === "ar" ? "فتح قائمة التنقل" : "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  const language = document.documentElement.lang;
  menuToggle.setAttribute("aria-label", language === "ar"
    ? (isExpanded ? "فتح قائمة التنقل" : "إغلاق قائمة التنقل")
    : (isExpanded ? "Open navigation menu" : "Close navigation menu"));
  navigation?.classList.toggle("is-open", !isExpanded);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (menuToggle?.getAttribute("aria-expanded") !== "true") return;
  const target = event.target;
  if (target instanceof Node && !navigation?.contains(target) && !menuToggle.contains(target)) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) closeMenu();
});

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-32% 0px -56% 0px", threshold: 0 });

  sections.forEach((section) => sectionObserver.observe(section));

  if (!reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
