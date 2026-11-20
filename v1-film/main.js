/* ============================================================
   CONTENT — edit these lists to update the site
   ============================================================ */
const VIDEOS = [
  { src: "../assets/video/1.webm",  title: "Reel 01", tag: "Edit" },
  { src: "../assets/video/2.webm",  title: "Reel 02", tag: "Motion" },
  { src: "../assets/video/3.webm",  title: "Reel 03", tag: "Ad" },
  { src: "../assets/video/4.webm",  title: "Reel 04", tag: "Montage" },
  { src: "../assets/video/6.webm",  title: "Reel 05", tag: "Edit" },
  { src: "../assets/video/7.webm",  title: "Reel 06", tag: "Motion" },
  { src: "../assets/video/9.webm",  title: "Reel 07", tag: "Content" },
  { src: "../assets/video/10.webm", title: "Reel 08", tag: "Ad" },
];

const STILLS = ["a1.jpg","a2.jpg","a3.jpg","a4.jpg","10.jpeg","14.jpeg","19.png","20.png","21.jpeg","22.jpeg","23.jpg"]
  .map(f => "../assets/img/work/" + f);

const SKILLS = [
  ["Video Editing", 95], ["Adobe Suite", 95], ["Film Making", 90], ["Photography", 90], ["Graphic Design", 90],
  ["Content Creation", 90], ["Drawing", 90], ["Acting", 90], ["Modeling", 90], ["Marketing", 80],
];

// timeline: years from 2022.0 to 2027.0 (5 columns)
const TRACKS = [
  { label: "V1", clips: [
    { from: 2022.0, to: 2024.7, cls: "g", title: "Freelance", role: "Graphic Designer & Ad Creator", date: "JAN 2022 — SEP 2024" },
    { from: 2026.0, to: 2026.9, cls: "a", title: "Freelance", role: "FilmMaker", date: "2026" },
  ]},
  { label: "V2", clips: [
    { from: 2024.0, to: 2025.0, cls: "v", title: "MetaStars", role: "Video Editor & Digital Animation", date: "2024 — 2025" },
  ]},
  { label: "V3", clips: [
    { from: 2025.0, to: 2026.9, cls: "v", title: "Ghiras Alquds Academy", role: "Video Editor & Digital Animation", date: "2025 — NOW" },
  ]},
  { label: "A1", clips: [
    { from: 2025.0, to: 2026.9, cls: "a", title: "Hisas Online", role: "Video Editor & Content Creator", date: "2025 — NOW" },
  ]},
];

const TOOLS = [
  { ab: "Pr", name: "Premiere Pro",  note: "Editing & montage",  tier: "legendary", xp: 95, c: "#c8ff2e" },
  { ab: "Ae", name: "After Effects", note: "Motion & animation", tier: "legendary", xp: 92, c: "#ff4fd8" },
  { ab: "Ps", name: "Photoshop",     note: "Ads & thumbnails",   tier: "epic",      xp: 90, c: "#3de0ff" },
  { ab: "Ai", name: "Illustrator",   note: "Logos & vectors",    tier: "epic",      xp: 85, c: "#ffb020" },
  { ab: "Au", name: "Audition",      note: "Sound design",       tier: "rare",      xp: 75, c: "#b07bff" },
  { ab: "Lr", name: "Lightroom",     note: "Photo grading",      tier: "rare",      xp: 80, c: "#ff6b6b" },
];

const ROLES = ["Video Editor", "Montage Artist", "Motion Designer", "Content Creator", "FilmMaker"];

/* ============================================================ */
gsap.registerPlugin(ScrollTrigger);
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const FPS = 25;
const tc = (sec) => {
  const f = Math.floor((sec % 1) * FPS), s = Math.floor(sec) % 60, m = Math.floor(sec / 60) % 60, h = Math.floor(sec / 3600);
  return [h, m, s, f].map(n => String(n).padStart(2, "0")).join(":");
};
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
$("#year").textContent = new Date().getFullYear();

/* ---------- build: reel ---------- */
const track = $("#reelTrack");
VIDEOS.forEach((v, i) => {
  const el = document.createElement("article");
  el.className = "clip";
  el.dataset.cursor = "Play";
  el.innerHTML = `
    <video src="${v.src}" muted loop playsinline preload="metadata"></video>
    <span class="clip__tc mono">00:00:00:00</span>
    <div class="clip__info"><span class="clip__num">${String(i + 1).padStart(2, "0")}</span><span class="mono">${v.tag.toUpperCase()}</span></div>
    <span class="clip__bar"></span>`;
  const vid = $("video", el), tcEl = $(".clip__tc", el), bar = $(".clip__bar", el);
  vid.addEventListener("timeupdate", () => {
    tcEl.textContent = tc(vid.currentTime);
    if (vid.duration) bar.style.width = (vid.currentTime / vid.duration) * 100 + "%";
  });
  el.addEventListener("mouseenter", () => vid.play().catch(() => {}));
  el.addEventListener("mouseleave", () => vid.pause());
  el.addEventListener("click", () => openGallery("video", i));
  track.appendChild(el);
});

/* ---------- build: stills ---------- */
const grid = $("#stillsGrid");
STILLS.forEach((src, i) => {
  const el = document.createElement("figure");
  el.className = "still";
  el.dataset.cursor = "View";
  el.innerHTML = `<img src="${src}" alt="Design work by Abdullah Awamleh" loading="lazy">`;
  $("img", el).addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  el.addEventListener("click", () => openGallery("img", i));
  grid.appendChild(el);
});

/* ---------- build: meters ---------- */
const SEGS = 20;
const metersEl = $("#meters");
SKILLS.forEach(([name, val]) => {
  const m = document.createElement("div");
  m.className = "meter";
  m.innerHTML = `<div class="meter__bar">${'<i class="meter__seg"></i>'.repeat(SEGS)}</div>
    <span class="meter__val">0</span><span class="meter__name">${name}</span>`;
  m.dataset.val = val;
  metersEl.appendChild(m);
});
function setMeter(m, pct) {
  const on = Math.round((pct / 100) * SEGS);
  $$(".meter__seg", m).forEach((s, i) => {
    s.classList.toggle("on", i < on);
    s.classList.toggle("hot", i >= SEGS - 4 && i < SEGS - 1);
    s.classList.toggle("peak", i === SEGS - 1);
  });
}

/* ---------- build: timeline ---------- */
const pct = (y) => ((y - 2022) / 5) * 100;
const tracksEl = $("#tlTracks");
TRACKS.forEach((t) => {
  const row = document.createElement("div");
  row.className = "track";
  row.innerHTML = `<span class="track__label">${t.label}</span>` + t.clips.map(c => `
    <div class="track__clip ${c.cls}" style="left:${pct(c.from)}%;width:${pct(c.to) - pct(c.from)}%">
      <div><h3>${c.title}</h3><p>${c.role}</p></div><span class="mono">${c.date}</span>
    </div>`).join("");
  tracksEl.appendChild(row);
});

/* ---------- smooth anchor scrolling ---------- */
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = $(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const y = a.getAttribute("href") === "#home" ? 0 : target.getBoundingClientRect().top + scrollY - 70;
    scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
  });
});

/* ---------- build: hero ring ---------- */
const ringEl = $("#heroRing");
const ringImgs = STILLS.slice(0, 10);
const R = innerWidth < 821 ? 260 : 520;
ringImgs.forEach((src, i) => {
  const f = document.createElement("figure");
  f.style.transform = `rotateY(${(360 / ringImgs.length) * i}deg) translateZ(${R}px)`;
  f.innerHTML = `<img src="${src}" alt="">`;
  ringEl.appendChild(f);
});

/* ---------- build: tools ---------- */
const toolsEl = $("#tools");
TOOLS.forEach((t) => {
  const el = document.createElement("div");
  el.className = "tool";
  el.style.setProperty("--tc", t.c);
  el.innerHTML = `<span class="tool__tier tier--${t.tier}">${t.tier.toUpperCase()}</span>
    <div class="tool__icon">${t.ab}</div><h3>${t.name}</h3><p>${t.note}</p>
    <div class="tool__xp"><i data-xp="${t.xp}"></i></div>`;
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  });
  toolsEl.appendChild(el);
});

/* ---------- toasts ---------- */
const toastsEl = $("#toasts");
const TOAST_COLORS = ["#c8ff2e", "#ff4fd8", "#3de0ff", "#ffb020"];
let toastN = 0;
function toast(icon, title, text) {
  const t = document.createElement("div");
  t.className = "toast";
  t.style.setProperty("--tc", TOAST_COLORS[toastN++ % TOAST_COLORS.length]);
  t.innerHTML = `<div class="toast__ico">${icon}</div><div><b>${title}</b><span>${text}</span></div><i class="toast__bar"></i>`;
  toastsEl.appendChild(t);
  gsap.timeline({ onComplete: () => toastsEl.removeChild(t) })
    .from(t, { x: 60, opacity: 0, duration: 0.5, ease: "back.out(2)" })
    .fromTo($(".toast__bar", t), { scaleX: 1 }, { scaleX: 0, duration: 3.2, ease: "none" })
    .to(t, { x: 60, opacity: 0, duration: 0.4, ease: "power2.in" });
}

/* ---------- scene label, active nav, section toasts ---------- */
const SCENES = [
  { id: "home",     label: "HOME" },
  { id: "about",    label: "ABOUT",    toast: ["🎬", "CLIP IMPORTED", "Talent loaded — meet the editor"] },
  { id: "reel",     label: "REEL",     toast: ["▶", "RENDER COMPLETE", "8 clips ready for playback"] },
  { id: "stills",   label: "STILLS",   toast: ["🖼", "FRAMES EXPORTED", `${STILLS.length} designs added to the bin`] },
  { id: "timeline", label: "TIMELINE", toast: ["⏱", "SEQUENCE OPENED", "4+ years on the timeline"] },
  { id: "toolkit",  label: "TOOLKIT",  toast: ["🧰", "PLUGINS LOADED", "Full effects panel unlocked"] },
  { id: "contact",  label: "CONTACT",  toast: ["✉", "FINAL CUT", "Ready to roll — let's talk"] },
];
const hudScene = $("#hudScene");
SCENES.forEach((s, i) => {
  let shown = false;
  ScrollTrigger.create({
    trigger: "#" + s.id, start: "top 55%", end: "bottom 55%",
    onToggle: (st) => {
      if (!st.isActive) return;
      hudScene.textContent = `SC.${String(i + 1).padStart(2, "0")} · ${s.label}`;
      $$(".hud__nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + s.id));
      if (s.toast && !shown) { shown = true; toast(...s.toast); }
    },
  });
});

/* ---------- lightbox ---------- */
const lb = $("#lightbox"), lbStage = $("#lbStage"), lbCount = $("#lbCount");
let gal = { type: "img", i: 0 };
function renderGallery() {
  const list = gal.type === "video" ? VIDEOS.map(v => v.src) : STILLS;
  gal.i = (gal.i + list.length) % list.length;
  const src = list[gal.i];
  lbStage.innerHTML = gal.type === "video"
    ? `<video src="${src}" controls autoplay playsinline></video>`
    : `<img src="${src}" alt="Design work by Abdullah Awamleh">`;
  lbCount.textContent = `${String(gal.i + 1).padStart(2, "0")} / ${String(list.length).padStart(2, "0")}`;
  gsap.fromTo(lbStage.firstElementChild, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" });
}
function openGallery(type, i) {
  gal = { type, i };
  renderGallery();
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
}
$("#lbPrev").addEventListener("click", () => { gal.i--; renderGallery(); });
$("#lbNext").addEventListener("click", () => { gal.i++; renderGallery(); });
addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "ArrowLeft") { gal.i--; renderGallery(); }
  if (e.key === "ArrowRight") { gal.i++; renderGallery(); }
});
let touchX = null;
lb.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) { gal.i += dx < 0 ? 1 : -1; renderGallery(); }
  touchX = null;
});
function closeLightbox() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  setTimeout(() => (lbStage.innerHTML = ""), 400);
}
$("#lbClose").addEventListener("click", closeLightbox);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

/* ---------- cursor ---------- */
const cursor = $("#cursor"), cursorLabel = $("#cursorLabel");
const cx = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3" });
const cy = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3" });
addEventListener("mousemove", (e) => { cx(e.clientX); cy(e.clientY); });
document.addEventListener("mouseover", (e) => {
  const t = e.target.closest("[data-cursor]");
  cursor.classList.toggle("is-big", !!t);
  cursorLabel.textContent = t ? t.dataset.cursor : "";
});

/* ---------- magnetic ---------- */
$$("[data-magnetic]").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4 });
  });
  el.addEventListener("mouseleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" }));
});

/* ---------- tilt ---------- */
$$("[data-tilt]").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    gsap.to(el, { rotateY: ((e.clientX - r.left) / r.width - 0.5) * 14, rotateX: -((e.clientY - r.top) / r.height - 0.5) * 14, transformPerspective: 900, duration: 0.5 });
  });
  el.addEventListener("mouseleave", () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8 }));
});

/* ---------- HUD timecode + scrub ---------- */
const t0 = performance.now();
const hudTc = $("#hudTc");
gsap.ticker.add(() => { hudTc.textContent = tc((performance.now() - t0) / 1000); });
const scrubFill = $("#scrubFill"), scrubHead = $("#scrubHead");
ScrollTrigger.create({
  start: 0, end: "max",
  onUpdate: (s) => {
    scrubFill.style.width = s.progress * 100 + "%";
    scrubHead.style.left = s.progress * 100 + "%";
  },
});

/* ---------- glitch every few seconds ---------- */
const glitchEl = $(".glitch");
setInterval(() => {
  glitchEl.classList.add("is-glitching");
  setTimeout(() => glitchEl.classList.remove("is-glitching"), 700);
}, 3800);

/* ---------- role swap ---------- */
const roleEl = $("#roleSwap");
let ri = 0;
function nextRole() {
  ri = (ri + 1) % ROLES.length;
  gsap.timeline()
    .to(roleEl, { yPercent: -100, opacity: 0, filter: "blur(6px)", duration: 0.35, ease: "power2.in" })
    .set(roleEl, { textContent: ROLES[ri], yPercent: 100 })
    .to(roleEl, { yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power3.out" });
}

/* ============================================================
   INTRO: 3-2-1 film leader, then letterbox opens
   ============================================================ */
function intro() {
  document.body.classList.add("is-loading");
  const num = $("#loaderNum"), ltc = $("#loaderTc");
  const ring = $(".loader__ring circle");
  const tl = gsap.timeline({
    onComplete: () => { document.body.classList.remove("is-loading"); setInterval(nextRole, 2400); },
  });
  [3, 2, 1].forEach((n) => {
    tl.call(() => (num.textContent = n))
      .fromTo(ring, { strokeDashoffset: 566 }, { strokeDashoffset: 0, duration: 0.55, ease: "none",
        onUpdate() { ltc.textContent = tc(tl.time()); } })
      .fromTo(num, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.25 }, "<");
  });
  tl.to("#loader", { opacity: 0, duration: 0.2 })
    .set("#loader", { display: "none" })
    .to(".letterbox--top", { yPercent: -100, duration: 1.1, ease: "expo.inOut" })
    .to(".letterbox--bottom", { yPercent: 100, duration: 1.1, ease: "expo.inOut" }, "<")
    .to(".hero__video", { scale: 1, duration: 2, ease: "power3.out" }, "<")
    .from(".hero__title .word", { yPercent: 110, duration: 1.1, stagger: 0.12, ease: "expo.out" }, "<0.4")
    .from(".hero__meta span, .hero__roles, .hero__cta > *, .hero__scroll, .hud", { y: 30, opacity: 0, duration: 0.8, stagger: 0.06, ease: "power3.out" }, "<0.4");
}
if (reduced) {
  $("#loader").style.display = "none";
  $$(".letterbox").forEach((l) => (l.style.display = "none"));
  $(".hero__video").style.transform = "none";
} else {
  intro();
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
if (!reduced) {
  // hero parallax out
  gsap.to(".hero__title", { yPercent: -30, opacity: 0.2, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero__video", { yPercent: 20, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // marquee speeds with scroll velocity
  const mq = $(".marquee__inner");
  ScrollTrigger.create({ onUpdate: (s) => {
    const v = gsap.utils.clamp(-6, 6, s.getVelocity() / 300);
    gsap.to(mq, { skewX: -v, duration: 0.3 });
  }});

  // section titles slide in
  $$(".big-title span").forEach((s, i) => {
    gsap.from(s, { xPercent: i % 2 ? 30 : -30, opacity: 0, duration: 1.2, ease: "expo.out",
      scrollTrigger: { trigger: s, start: "top 85%" } });
  });
  $$(".section-tag, .reveal").forEach((el) => {
    gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  // about photo wipe
  gsap.to(".about__frame", { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "expo.inOut",
    scrollTrigger: { trigger: ".about__photo", start: "top 75%" } });
  gsap.to(".about__frame img", { scale: 1, duration: 1.8, ease: "expo.out",
    scrollTrigger: { trigger: ".about__photo", start: "top 75%" } });
  gsap.from(".about__corners i", { scale: 0, opacity: 0, stagger: 0.1, duration: 0.6, ease: "back.out(3)",
    scrollTrigger: { trigger: ".about__photo", start: "top 75%" } });
}

// word-by-word lead (scrubbed)
const lead = $(".reveal-words");
lead.innerHTML = lead.innerHTML.trim().split(/(<em>.*?<\/em>|\s+)/).filter(Boolean)
  .map((p) => (/^\s+$/.test(p) ? " " : `<span class="w">${p}</span>`)).join("");
gsap.to(".about__lead .w", { opacity: 1, stagger: 0.1, ease: "none",
  scrollTrigger: { trigger: lead, start: "top 80%", end: "bottom 45%", scrub: true } });

// counters
$$("[data-count]").forEach((el) => {
  const o = { v: 0 };
  gsap.to(o, { v: +el.dataset.count, duration: 2, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 90%" },
    onUpdate: () => (el.textContent = Math.round(o.v)) });
});

// meters: bounce like live audio then settle on value
$$(".meter").forEach((m, i) => {
  const val = +m.dataset.val, valEl = $(".meter__val", m), o = { v: 0 };
  ScrollTrigger.create({ trigger: ".meters", start: "top 80%", once: true, onEnter: () => {
    gsap.timeline({ delay: i * 0.06 })
      .to(o, { v: 100, duration: 0.35, ease: "power2.out" })
      .to(o, { v: 40 + Math.random() * 30, duration: 0.25 })
      .to(o, { v: val, duration: 0.9, ease: "elastic.out(1,0.5)" })
      .eventCallback("onUpdate", () => { setMeter(m, o.v); valEl.textContent = Math.round(o.v); })
      .eventCallback("onComplete", () => { m.dataset.live = 1; });
  }});
  // idle flicker after settling, like a live signal
  if (!reduced) setInterval(() => { if (m.dataset.live) setMeter(m, val - Math.random() * 8); }, 160 + i * 7);
});

// reel horizontal scroll (desktop)
const mm = gsap.matchMedia();
mm.add("(min-width: 821px)", () => {
  const dist = () => track.scrollWidth - innerWidth;
  gsap.to(track, {
    x: () => -dist(), ease: "none",
    scrollTrigger: { trigger: ".reel", start: "top top", end: () => "+=" + dist(), pin: ".reel__pin", scrub: 1, invalidateOnRefresh: true },
  });
});

// stills reveal
$$(".still").forEach((el) => {
  ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => el.classList.add("in") });
});

// timeline: clips draw in, playhead sweeps with scroll
gsap.from(".track__clip", { scaleX: 0, duration: 1, stagger: 0.12, ease: "expo.out",
  scrollTrigger: { trigger: ".tl", start: "top 75%" } });
mm.add("(min-width: 821px)", () => {
  gsap.fromTo("#tlPlayhead", { left: 96 }, {
    left: () => $(".tl").clientWidth - 18, ease: "none",
    scrollTrigger: { trigger: ".tl", start: "top 70%", end: "bottom 30%", scrub: true, invalidateOnRefresh: true },
  });
});

// contact big text
gsap.from(".contact__line > *", { yPercent: 110, duration: 1.2, stagger: 0.1, ease: "expo.out",
  scrollTrigger: { trigger: ".contact__big", start: "top 80%" } });
gsap.from(".contact__links a", { y: 40, opacity: 0, stagger: 0.08, duration: 0.8,
  scrollTrigger: { trigger: ".contact__links", start: "top 90%" } });

// slate clapper snaps shut when it scrolls in
gsap.timeline({ scrollTrigger: { trigger: "#slate", start: "top 80%" } })
  .from("#slate", { y: 60, opacity: 0, duration: 0.8, ease: "power3.out" })
  .to(".slate__clap", { rotate: 0, duration: 0.18, ease: "power4.in" }, "+=0.2")
  .to("#slate", { y: 4, duration: 0.06, yoyo: true, repeat: 1 })
  .from(".slate__mrz span", { clipPath: "inset(0 100% 0 0)", duration: 0.9, stagger: 0.15, ease: "steps(30)" });

// toolkit cards + XP bars
gsap.from(".tool", { y: 50, opacity: 0, rotateX: -30, stagger: 0.08, duration: 0.9, ease: "power3.out",
  scrollTrigger: { trigger: ".tools", start: "top 85%" } });
$$(".tool__xp i").forEach((b) => {
  gsap.to(b, { width: b.dataset.xp + "%", duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: b, start: "top 95%" } });
});

/* ---------- scatter letters (contact) ---------- */
$$(".scatter").forEach((el) => {
  el.innerHTML = [...el.textContent].map((c) => `<span class="ch">${c === " " ? "&nbsp;" : c}</span>`).join("");
});
const chars = $$(".scatter .ch");
const bigEl = $("#contactBig");
if (!reduced && matchMedia("(hover:hover)").matches) {
  bigEl.addEventListener("mousemove", (e) => {
    chars.forEach((ch) => {
      const r = ch.getBoundingClientRect();
      const dx = r.left + r.width / 2 - e.clientX, dy = r.top + r.height / 2 - e.clientY;
      const d = Math.hypot(dx, dy) || 1, force = Math.max(0, 1 - d / 220);
      gsap.to(ch, { x: (dx / d) * force * 60, y: (dy / d) * force * 60, rotate: (dx / d) * force * 25, duration: 0.4, ease: "power3.out" });
    });
  });
  bigEl.addEventListener("mouseleave", () => gsap.to(chars, { x: 0, y: 0, rotate: 0, duration: 1, ease: "elastic.out(1,0.35)" }));
} else if (!reduced) {
  // touch: tap to scatter, then reassemble
  bigEl.addEventListener("touchstart", () => {
    gsap.timeline()
      .to(chars, { x: () => gsap.utils.random(-80, 80), y: () => gsap.utils.random(-60, 60), rotate: () => gsap.utils.random(-40, 40), duration: 0.4, ease: "power3.out" })
      .to(chars, { x: 0, y: 0, rotate: 0, duration: 1, ease: "elastic.out(1,0.35)" }, "+=0.2");
  }, { passive: true });
}

/* ---------- projector dust: drifting specks that stretch into streaks with scroll speed ---------- */
(() => {
  if (reduced) return;
  const cv = $("#dust"), ctx = cv.getContext("2d");
  const DUST = ["#c8ff2e", "#ff4fd8", "#3de0ff", "#ffb020", "#fff8ef"];
  let w, h, dpr, specks = [], vel = 0;
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr;
    specks = Array.from({ length: innerWidth < 821 ? 50 : 110 }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: (Math.random() * 1.4 + 0.3) * dpr,
      s: Math.random() * 0.3 + 0.05, a: Math.random() * 0.5 + 0.25, c: DUST[Math.floor(Math.random() * DUST.length)],
    }));
  }
  size(); addEventListener("resize", size);
  ScrollTrigger.create({ onUpdate: (s) => (vel = s.getVelocity()) });
  gsap.ticker.add(() => {
    vel *= 0.92;
    const v = gsap.utils.clamp(-40, 40, vel / 60) * dpr;
    ctx.globalAlpha = 1; ctx.clearRect(0, 0, w, h);
    for (const p of specks) {
      p.y -= p.s * dpr + v * p.s * 2;
      p.x += Math.sin(p.y / 80) * 0.15;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;
      ctx.globalAlpha = p.a; ctx.strokeStyle = ctx.fillStyle = p.c;
      if (Math.abs(v) > 2) {
        ctx.lineWidth = p.r; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x, p.y + v * p.s * 6); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
    }
  });
})();

// refresh once images/videos have sizes
addEventListener("load", () => ScrollTrigger.refresh());
