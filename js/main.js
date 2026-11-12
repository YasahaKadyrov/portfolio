/* Яша Кадыров — портфолио. Без зависимостей и сборки. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* ---------- Работы ---------- */
  const grid = $("#grid");
  const filters = $("#filters");
  const projects = SITE.projects;

  const coverOf = (p) => p.image || (p.youtube ? `https://i.ytimg.com/vi/${p.youtube}/hqdefault.jpg` : "");

  function card(p, i) {
    // Ролики и картинки открываются на сайте; остальное — ссылкой на оригинал
    const opensHere = Boolean(p.youtube || p.image);
    const c = el(opensHere ? "button" : "a", "card" + (p.wide ? " card-wide" : ""));
    c.dataset.cat = p.category;
    if (opensHere) {
      c.type = "button";
      c.addEventListener("click", () => openLightbox(i));
    } else {
      c.href = p.link; c.target = "_blank"; c.rel = "noopener";
    }

    const media = el("div", "card-media");
    const src = coverOf(p);
    if (src) {
      const img = new Image();
      img.loading = "lazy"; img.decoding = "async"; img.alt = "";
      img.referrerPolicy = "no-referrer";
      img.onerror = () => { img.remove(); media.classList.add("is-empty"); };
      img.src = src;
      media.append(img);
    } else if (p.cover) {
      const cov = el("div", "card-cover");
      if (p.badge) cov.dataset.badge = p.badge;
      cov.append(el("span", "", p.cover));
      media.append(cov);
    } else {
      media.classList.add("is-empty");
    }
    const site = /instagram/.test(p.link || "") ? "Instagram" : /youtu/.test(p.link || "") ? "YouTube" : "оригинал";
    media.append(el("span", "card-open", p.youtube ? "Смотреть" : opensHere ? "Открыть" : "На " + site));

    const body = el("div", "card-body");
    body.append(el("span", "card-title", p.title), el("span", "card-role", p.role));
    if (p.text) body.append(el("span", "card-text", p.text));
    if (!opensHere) body.append(el("span", "card-go", site === "оригинал" ? "Открыть оригинал" : "Открыть в " + site));
    c.append(media, body);
    return c;
  }

  function renderGrid(cat, animate = true) {
    const draw = () => {
      grid.replaceChildren(...projects.map((p, i) => [p, i])
        .filter(([p]) => cat === "all" || p.category === cat)
        .map(([p, i]) => card(p, i)));
    };
    if (animate && document.startViewTransition && !reduced) document.startViewTransition(draw); else draw();
  }

  SITE.categories
    .filter((c) => c.id === "all" || projects.some((p) => p.category === c.id))
    .forEach((c, idx) => {
      const b = el("button", "filter", c.label);
      b.type = "button";
      b.setAttribute("aria-pressed", String(idx === 0));
      b.addEventListener("click", () => {
        $$(".filter", filters).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        renderGrid(c.id);
      });
      filters.append(b);
    });
  renderGrid("all", false);

  /* ---------- Просмотр работы ---------- */
  const lb = $("#lb"), lbMedia = $("#lb-media");
  function openLightbox(i) {
    const p = projects[i];
    $("#lb-title").textContent = p.title;
    $("#lb-role").textContent = p.role || "";
    const link = $("#lb-link");
    const href = p.link || (p.youtube ? `https://www.youtube.com/watch?v=${p.youtube}` : "");
    link.hidden = !href;
    if (href) {
      link.href = href;
      link.textContent = /behance/.test(href) ? "Открыть на Behance" : /youtu/.test(href) ? "Открыть на YouTube" : "Открыть оригинал";
    }
    if (p.youtube) {
      const f = el("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${p.youtube}?autoplay=1&rel=0`;
      f.title = p.title;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      lbMedia.replaceChildren(f);
    } else {
      const img = new Image();
      img.alt = p.title; img.referrerPolicy = "no-referrer";
      img.onerror = () => lbMedia.replaceChildren(el("p", "lb-fail", "Картинка не загрузилась. Откройте оригинал по кнопке ниже."));
      img.src = p.image;
      lbMedia.replaceChildren(img);
    }
    lb.showModal();
  }
  $("#lb-close").addEventListener("click", () => lb.close());
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("close", () => lbMedia.replaceChildren()); // останавливает видео

  /* ---------- Контакты ---------- */
  const c = SITE.contacts;
  const contactItems = [
    c.whatsapp && ["WhatsApp", c.phone || "+" + c.whatsapp, `https://wa.me/${c.whatsapp}`],
    c.telegram && ["Telegram", "@" + c.telegram, `https://t.me/${c.telegram}`],
    c.email && ["Почта", c.email, `mailto:${c.email}`],
    c.phone && ["Телефон", c.phone, `tel:${c.phone.replace(/[^\d+]/g, "")}`],
    c.behance && ["Behance", "3D-графика", c.behance],
    c.youtube && ["YouTube", "Мой канал", c.youtube],
    c.instagram && ["Instagram", "Профиль", c.instagram]
  ].filter(Boolean);
  $("#contacts").append(...contactItems.map(([label, value, href]) => {
    const a = el("a", "contact");
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    a.append(el("small", "", label), el("b", "", value));
    return a;
  }));

  /* ---------- Программы: подпись к выбранной ---------- */
  const note = $("#app-note");
  $$(".app").forEach((b) => {
    const pick = () => {
      $$(".app").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      note.replaceChildren(el("b", "", $("span", b).textContent + "."), " " + b.dataset.note);
    };
    b.addEventListener("click", pick);
    b.addEventListener("mouseenter", pick);
  });

  /* ---------- Таймлайн-навигация ---------- */
  const sections = $$("[data-clip]");
  const track = $("#tl-track"), playhead = $("#tl-playhead"), menu = $("#tl-menu"), menuBtn = $("#tl-menu-btn");
  const clips = sections.map((s) => {
    const a = el("a", "tl-clip", s.dataset.clip);
    a.href = "#" + s.id;
    track.insertBefore(a, playhead);
    const m = el("a", "", s.dataset.clip);
    m.href = "#" + s.id;
    m.addEventListener("click", () => toggleMenu(false));
    menu.append(m);
    return { s, a, m };
  });

  function toggleMenu(open) {
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", () => toggleMenu(menu.hidden));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

  // Ширина клипа = доля высоты раздела, как длительность на таймлайне
  function sizeClips() {
    clips.forEach(({ s, a }) => { a.style.flexGrow = Math.max(s.offsetHeight, 200); });
  }

  const FPS = 25;
  const pad = (n) => String(n).padStart(2, "0");
  function timecode(px) {
    const f = Math.max(0, Math.round(px / 6));
    return `${pad(Math.floor(f / FPS / 3600))}:${pad(Math.floor(f / FPS / 60) % 60)}:${pad(Math.floor(f / FPS) % 60)}:${pad(f % FPS)}`;
  }
  const tcNodes = $$("[data-tc]");
  const root = document.documentElement;

  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = scrollY;
    const max = root.scrollHeight - innerHeight;
    const progress = max > 0 ? Math.min(1, y / max) : 0;
    playhead.style.transform = `translateX(${progress * (track.clientWidth - 16)}px)`;
    const tc = timecode(y);
    tcNodes.forEach((n) => { n.textContent = tc; });
    if (!reduced) root.style.setProperty("--sy", y.toFixed(0));

    const mid = y + innerHeight * 0.45;
    let active = clips[0];
    clips.forEach((cl) => { if (cl.s.offsetTop <= mid) active = cl; });
    clips.forEach((cl) => {
      cl.a.classList.toggle("is-active", cl === active);
      cl.m.setAttribute("aria-current", String(cl === active));
    });
  }
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", () => { sizeClips(); request(); });
  addEventListener("load", () => { sizeClips(); request(); });
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => { sizeClips(); request(); });
    sections.forEach((s) => ro.observe(s));
  }
  sizeClips(); onScroll();

  /* ---------- Имя на главном экране: во всю ширину ---------- */
  const title = $("#hero-title");
  function fitTitle() {
    const lines = $$(".cut > span", title);
    title.style.fontSize = "100px";
    const widest = Math.max(...lines.map((l) => l.offsetWidth));
    // На широком экране вторая строка заходит на монитор только краем
    const visual = $(".hero-visual");
    const sideBySide = visual.offsetLeft > title.clientWidth * 0.5;
    const room = (title.clientWidth - (sideBySide ? visual.offsetWidth * 0.72 : 0)) * 0.965;
    const cap = Math.min(210, innerHeight * 0.21);    // чтобы экран не переполнялся по высоте
    title.style.fontSize = Math.max(34, Math.min(cap, (100 * room) / widest)).toFixed(1) + "px";
  }
  fitTitle();
  addEventListener("resize", fitTitle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fitTitle(); sizeClips(); request(); });

  /* ---------- Появление заголовков ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -12% 0px" });
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in"));
  }

  $("#year").textContent = new Date().getFullYear();
})();
