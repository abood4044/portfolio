/* ============================================================
   CONTENT — from Abdullah's 2026 CV. Edit these to update the site.
   ============================================================ */
// cat: "camera" = Abdullah on camera (presenting / acting), "edit" = editing, motion & montage work
// wide: true for landscape (16:9) videos
const V = (file, title, tag, cat, extra = {}) => ({
  src: "assets/video/" + file,
  poster: file.endsWith(".mp4") ? "assets/poster/" + file.replace(".mp4", ".jpg") : null,
  title, tag, cat, ...extra,
});
const VIDEOS = [
  V("presenter-dates.mp4",      "Exam Dates Announcement",    "ON CAMERA",   "camera"),
  V("supplementary-exam.mp4",   "Supplementary Exam Explainer", "ON CAMERA", "camera"),
  V("messi-retires.mp4",        "Messi Retires — News Story", "NEWS",        "camera"),
  V("studio-presenting.mp4",    "Studio Presenting",          "STUDIO",      "camera"),
  V("presenter-promo.mp4",      "Promo — On Camera",          "PROMO",       "camera"),
  V("on-camera-reel.mp4",       "Instagram Reel",             "REEL",        "camera"),
  V("on-camera-story.mp4",      "Character Sketch",           "ACTING",      "camera"),
  V("car-talk-1.mp4",           "Car Talk · Part 1",          "TALK",        "camera"),
  V("car-talk-2.mp4",           "Car Talk · Part 2",          "TALK",        "camera"),
  V("car-talk-3.mp4",           "Car Talk · Story",           "TALK",        "camera"),
  V("1.webm",                   "On-Camera Clip",             "ON CAMERA",   "camera"),
  V("3.webm",                   "Talking Head",               "ON CAMERA",   "camera"),
  V("historical-cinematic.mp4", "Historical Cinematic",       "CINEMATIC",   "edit"),
  V("tesla-edit.mp4",           "Tesla Edit",                 "AD",          "edit"),
  V("lungs-animation.mp4",      "Lungs — Educational Animation", "E-LEARNING", "edit"),
  V("infographic-explainer.mp4","Infographic Explainer",      "MOTION",      "edit"),
  V("product-closeup.mp4",      "Product Close-up",           "PRODUCT",     "edit"),
  V("old-city-documentary.mp4", "Old City Documentary",       "DOC",         "edit"),
  V("park-vlog.mp4",            "Event Coverage",             "EVENT",       "edit"),
  V("construction-edit.mp4",    "Construction Montage",       "MONTAGE",     "edit"),
  V("9.webm",                   "Social Content",             "CONTENT",     "edit"),
  V("aerial-documentary.mp4",   "Aerial Documentary",         "DOC · 4 MIN", "edit", { wide: true }),
  V("night-talk-1.mp4",         "Night Talk · Part 1",        "TALK",        "camera"),
  V("night-talk-2.mp4",         "Night Talk · Part 2",        "TALK",        "camera"),
  V("night-talk-3.mp4",         "Night Talk · Part 3",        "TALK",        "camera"),
  V("podcast-edit.mp4",         "Podcast Edit · Meta Stars",  "PODCAST",     "edit", { wide: true }),
];

// menswear modeling photoshoot of Abdullah
const PHOTOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({ src: `assets/img/photos/shoot-${n}.jpg`, title: "Menswear Model", rarity: "epic" }));

const DESIGNS = [
  { file: "../photos/film-30-seconds-poster.jpg", title: "“30 ثانية” Film Poster", meta: "Short film poster · 2026", rarity: "legendary" },
  { file: "a1.jpg", title: "Campaign Poster", meta: "Print & social",        rarity: "legendary" },
  { file: "a2.jpg",  title: "Brand Visual",    meta: "Social media design",   rarity: "epic" },
  { file: "a3.jpg",  title: "Promo Artwork",   meta: "Advertising design",    rarity: "rare" },
  { file: "a4.jpg",  title: "Product Ad",      meta: "Advertising design",    rarity: "epic" },
  { file: "10.jpeg", title: "Social Post",     meta: "Instagram design",      rarity: "common" },
  { file: "14.jpeg", title: "Event Poster",    meta: "Print & social",        rarity: "rare" },
  { file: "19.png",  title: "Banner Design",   meta: "Web & social banner",   rarity: "common" },
  { file: "20.png",  title: "Cover Design",    meta: "Social cover",          rarity: "common" },
  { file: "21.jpeg", title: "Food Ad",         meta: "Restaurant campaign",   rarity: "legendary" },
  { file: "22.jpeg", title: "Brand Identity",  meta: "Logo & identity",       rarity: "rare" },
  { file: "23.jpg",  title: "Key Visual",      meta: "Advertising design",    rarity: "epic" },
].map(d => ({ ...d, src: "assets/img/work/" + d.file }));

/* Career timeline — standard international job titles */
const QUESTS = [
  { id: "jo", live: true, date: "2026 – Present", title: "On-Camera Talent & Video Editor", org: "Jo Academy",
    points: ["Appears on camera as on-camera talent for Jo Academy", "Edits interactive educational lessons using AI tools and animation to boost engagement and learning"] },
  { id: "film", live: false, date: "2026", title: "Filmmaker — Director & Editor",
    org: 'Freelance · Short film “<span lang="ar">30 ثانية</span>”',
    points: ["Directed and produced a short film across pre-production, shooting and post-production", "Created visual effects, motion graphics and the final edit for cinematic storytelling"] },
  { id: "ghiras", live: false, date: "2025 – 2026", title: "Photographer & Multimedia Designer", org: "Ghiras Alquds Academy",
    points: ["Photographed students, school events and sports", "Designed advertising visuals and educational content for the school"] },
  { id: "hisas", live: false, date: "2025 – 2026", title: "Video Editor & Content Creator", org: "Hisas Online",
    points: ["Edited and designed video content for digital platforms", "Created daily visual content and advertising materials", "Filmed events and activities with high-quality coverage"] },
  { id: "meta", live: false, date: "2024 – 2025", title: "Video Producer & Editor", org: "Meta Stars",
    points: ["Set up and managed filming studios, including podcast studios", "Handled video editing and post-production", "Designed creative ads and visual content aligned with each project's message"] },
];

const SKILLS = [
  // primary: true = always shown first and marked ★ PRIMARY in every role
  { name: "Marketing",        val: 95, ico: "📈", c: "#a66bff", primary: true },
  { name: "Acting",           val: 90, ico: "🎭", c: "#00e5ff", primary: true },
  { name: "Content Creation", val: 90, ico: "📱", c: "#00e5ff", primary: true },
  { name: "Video Editing",    val: 95, ico: "🎬", c: "#a66bff" },
  { name: "Adobe Programs",   val: 95, ico: "🧩", c: "#3b0a6b" },
  { name: "Graphic Design",   val: 90, ico: "🎨", c: "#a66bff" },
  { name: "Film Making",      val: 90, ico: "🎥", c: "#a66bff" },
  { name: "Photography",      val: 90, ico: "📸", c: "#00e5ff" },
  { name: "Modeling",         val: 90, ico: "🕶️", c: "#a66bff" },
  { name: "Drawing",          val: 90, ico: "✏️", c: "#3b0a6b" },
];

const SOFTWARE = [
  { name: "Premiere Pro",   rarity: "legendary", c: "#00e5ff" },
  { name: "After Effects",  rarity: "legendary", c: "#3b0a6b" },
  { name: "Photoshop",      rarity: "legendary", c: "#a66bff" },
  { name: "Illustrator",    rarity: "epic",      c: "#00e5ff" },
  { name: "Lightroom",      rarity: "epic",      c: "#3b0a6b" },
  { name: "Media Encoder",  rarity: "rare",      c: "#a66bff" },
  { name: "3ds Max",        rarity: "rare",      c: "#00e5ff" },
  { name: "Maya",           rarity: "rare",      c: "#3b0a6b" },
  { name: "MS Office",      rarity: "common",    c: "#a66bff" },
];

/* The four roles — what each one shows and highlights */
const ROLES = {
  video: {
    n: 1, name: "Video Editor", ar: "مونتير", ico: "🎬", c: "#00e5ff",
    desc: "Editing, motion graphics, studio & podcast production, e-learning and short film.",
    chip: "Video Editor in Amman, Jordan",
    tag: "Edits, motion graphics and post-production that stop the scroll — from raw footage to final export.",
    lead: "I'm a video editor from Amman who turns raw footage into edits people actually watch — ads, lessons, podcasts, events and short films.",
    body: "From setting up studios and filming to editing, motion graphics, VFX and final export, I run the full post-production pipeline in Premiere Pro, After Effects and Media Encoder — and use AI tools to speed up e-learning edits.",
    focus: ["Post-production", "Motion graphics", "Podcast & studio", "E-learning video", "Short film"],
    stats: [["EDITING", 95], ["MOTION", 90], ["FILMMAKING", 90]],
    sections: ["work"], videos: [26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    jobs: ["jo", "film", "hisas", "meta", "ghiras"],
    skills: ["Video Editing", "Film Making", "Adobe Programs"],
    tools: ["Premiere Pro", "After Effects", "Media Encoder"],
    tapes: ["VIDEO EDITOR", "MOTION GRAPHICS", "POST-PRODUCTION", "SHORT FILM", "AMMAN, JORDAN"],
    contact: "IT MOVE.",
  },
  design: {
    n: 2, name: "Graphic Designer", ar: "مصمم جرافيك", ico: "🎨", c: "#a66bff",
    desc: "Ads, posters, social media and brand visuals for restaurants, cafés, schools and businesses.",
    chip: "Graphic Designer in Amman, Jordan",
    tag: "Advertising and brand visuals that make restaurants, cafés, schools and businesses impossible to ignore.",
    lead: "I'm a graphic designer from Amman creating ads, posters and social visuals that sharpen a brand and pull customers in.",
    body: "I design advertising and promotional work for restaurants, cafés, schools and commercial brands — with a background in Computer Graphics & Animation, plus photography and 3D in 3ds Max and Maya.",
    focus: ["Advertising design", "Social media", "Brand visuals", "Print & posters", "Photography"],
    stats: [["DESIGN", 90], ["ADOBE", 95], ["DRAWING", 90]],
    sections: ["designs"], videos: [],
    jobs: ["ghiras", "meta", "hisas"],
    skills: ["Graphic Design", "Drawing", "Adobe Programs", "Photography"],
    tools: ["Photoshop", "Illustrator", "Lightroom", "3ds Max", "Maya"],
    tapes: ["GRAPHIC DESIGNER", "ADVERTISING", "SOCIAL MEDIA", "BRAND VISUALS", "AMMAN, JORDAN"],
    contact: "IT POP.",
  },
  presenter: {
    n: 3, name: "On-Camera Talent", ar: "وجه إعلامي", ico: "🎙️", c: "#00e5ff",
    desc: "On camera for Jo Academy and on my personal Instagram — presenting, acting and menswear modeling.",
    chip: "On-Camera Talent in Amman, Jordan",
    tag: "Presenting, acting and talking straight to the lens — for Jo Academy and on my own Instagram.",
    lead: "I'm on-camera talent from Amman — I explain, act out characters and talk straight to the audience in short-form video.",
    body: "I appear on camera for Jo Academy's educational content and create on-camera videos for my personal Instagram — backed by acting, menswear modeling and a filmmaker's eye for how a shot should feel.",
    focus: ["On-camera talent", "Presenting", "Acting", "Menswear modeling", "Instagram"],
    stats: [["ON CAMERA", 90], ["ACTING", 90], ["MODELING", 90]],
    sections: ["spotlight", "work"], videos: [1, 2, 4, 5, 8, 9, 10],
    jobs: ["jo", "film"],
    skills: ["Acting", "Modeling", "Content Creation", "Marketing"],
    tools: ["Premiere Pro", "After Effects"],
    tapes: ["ON-CAMERA TALENT", "ACTING", "JO ACADEMY", "MENSWEAR MODEL", "AMMAN, JORDAN"],
    contact: "SOME NOISE.",
    // On Camera section for this role: Jo Academy account + menswear photos
    spot: {
      sub: "Presenting, acting and talking straight to the lens.",
      phoneName: "Jo Academy", avatar: "assets/img/joacademy-icon.png", avatarAlt: "Jo Academy logo",
      stats: [["Short", "videos"], ["Daily", "stories"], ["Edu", "content"]],
      clips: ["presenter-dates", "supplementary-exam", "car-talk-1"],
      date: "2026 – Present", title: "On-Camera Talent", role: "Jo Academy · Personal Instagram",
      points: ["On-camera talent for Jo Academy's educational lessons and announcements",
               "Presents, acts and speaks directly to camera on my personal Instagram",
               "Short-form videos, characters and Stories that keep audiences watching"],
      shoot: true,
    },
  },
  creator: {
    n: 4, name: "Content Creator", ar: "صانع محتوى", ico: "📱", c: "#a66bff",
    desc: "Daily social content end-to-end: idea, filming, editing, design and marketing.",
    chip: "Content Creator in Amman, Jordan",
    tag: "Daily content from idea to post — filmed, edited, designed and built to perform.",
    lead: "I'm a digital content creator from Amman who takes content from idea to post — shooting, editing, designing and presenting it myself.",
    body: "I create daily visual content and ads for brands and digital platforms, film events, present on camera and design the visuals around it — with a marketing mindset so every post is made to perform.",
    focus: ["Daily content", "Short-form video", "Event coverage", "Social design", "Marketing"],
    stats: [["MARKETING", 95], ["CONTENT", 90], ["EDITING", 95]],
    sections: ["spotlight", "work"], videos: [6, 7, 12, 8, 9, 10, 18, 19, 22, 23, 24, 25],
    jobs: ["jo", "hisas", "ghiras", "meta"],
    skills: ["Content Creation", "Marketing", "Photography", "Video Editing"],
    tools: ["Premiere Pro", "Photoshop", "Lightroom", "After Effects"],
    tapes: ["CONTENT CREATOR", "SHORT-FORM VIDEO", "SOCIAL MEDIA", "MARKETING", "AMMAN, JORDAN"],
    contact: "IT VIRAL.",
    // On Camera section for this role: personal Instagram account, no modeling photos
    spot: {
      sub: "Ideas, filming, editing and posting — all on my personal Instagram.",
      phoneName: "abdullah_al_awamleh_", avatar: "assets/img/personal.jpeg", avatarAlt: "Abdullah Awamleh", ig: true,
      stats: [["Short", "videos"], ["Daily", "stories"], ["Own", "ideas"]],
      clips: ["night-talk-1", "night-talk-2", "night-talk-3"],
      date: "", title: "Content Creator", role: "Personal Instagram",
      points: ["Creates short-form videos for my personal Instagram — from idea to post",
               "Films, edits and presents everything myself, straight to camera",
               "Talking-head videos and Stories that build a real connection with the audience"],
      shoot: false,
    },
  },
};
const ROLE_KEYS = Object.keys(ROLES);

const LOADER_TIPS = ["Rendering timeline…", "Syncing audio…", "Color grading…", "Adding keyframes…", "Exporting final cut…"];
const SKY = [
  "linear-gradient(180deg,#050505,#09060f)",
  "linear-gradient(180deg,#050505,#0d0619)",
  "linear-gradient(180deg,#050505,#05121a)",
  "linear-gradient(180deg,#050505,#120720)",
  "linear-gradient(180deg,#050505,#061419)",
  "linear-gradient(180deg,#050505,#150828)",
  "linear-gradient(180deg,#050505,#1a0833 70%,#3b0a6b)",
];

/* ============================================================ */
gsap.registerPlugin(ScrollTrigger);
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad2 = (n) => String(n).padStart(2, "0");
const esc = (s) => s.replace(/</g, "&lt;");
$("#year").textContent = new Date().getFullYear();
let role = null;
let vidIO = null; // set up further down; pauses autoplay videos while off-screen

/* ---------- split letters (grouped per word) ---------- */
function splitEl(el) {
  el.innerHTML = el.textContent.trim().split(/\s+/)
    .map((w) => `<span class="word">${[...w].map((c) => `<span class="ch">${c}</span>`).join("")}</span>`).join(" ");
}
$$("[data-split]").forEach(splitEl);

/* ---------- lightbox ---------- */
const lb = $("#lightbox"), lbStage = $("#lbStage");
let lbList = [], lbIndex = 0;
function lbRender() {
  lbIndex = (lbIndex + lbList.length) % lbList.length;
  const it = lbList[lbIndex];
  lbStage.innerHTML = it.type === "video"
    ? `<video src="${it.src}" ${it.poster ? `poster="${it.poster}"` : ""} controls autoplay playsinline></video>`
    : `<img src="${it.src}" alt="${it.title || "Design work"}">`;
  const r = $("#lbRarity");
  r.className = it.rarity ? `rarity rarity--${it.rarity}` : "rarity";
  r.textContent = it.rarity ? it.rarity.toUpperCase() : "";
  r.style.display = it.rarity ? "" : "none";
  $("#lbCount").textContent = `${pad2(lbIndex + 1)} / ${pad2(lbList.length)}`;
  gsap.fromTo(lbStage.firstElementChild, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.6)" });
}
function lbOpen(list, i) { lbList = list; lbIndex = i; lbRender(); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
function lbClose() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); setTimeout(() => (lbStage.innerHTML = ""), 350); }
$("#lbClose").onclick = lbClose;
$("#lbPrev").onclick = () => { lbIndex--; lbRender(); };
$("#lbNext").onclick = () => { lbIndex++; lbRender(); };
lb.addEventListener("click", (e) => { if (e.target === lb) lbClose(); });
addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lbClose();
  if (e.key === "ArrowLeft") { lbIndex--; lbRender(); }
  if (e.key === "ArrowRight") { lbIndex++; lbRender(); }
});
let lbTouch = null;
lb.addEventListener("touchstart", (e) => (lbTouch = e.touches[0].clientX), { passive: true });
lb.addEventListener("touchend", (e) => {
  if (lbTouch === null) return;
  const dx = e.changedTouches[0].clientX - lbTouch;
  if (Math.abs(dx) > 50) { lbIndex += dx < 0 ? 1 : -1; lbRender(); }
  lbTouch = null;
});
const designList = DESIGNS.map((d) => ({ type: "img", src: d.src, title: d.title, rarity: d.rarity }));

/* ---------- toasts ---------- */
function toast(ico, title, text) {
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `<span class="toast__ico">${ico}</span><div><b>ACHIEVEMENT UNLOCKED</b><span><strong>${title}</strong> — ${text}</span></div>`;
  const box = $("#toasts");
  while (box.children.length >= 2) box.removeChild(box.firstElementChild);
  box.appendChild(t);
  gsap.timeline({ onComplete: () => t.parentNode && t.parentNode.removeChild(t) })
    .from(t, { x: 340, duration: 0.5, ease: "back.out(1.4)" })
    .to(t, { x: 340, opacity: 0, duration: 0.4, ease: "power2.in" }, "+=3.4");
}

/* ---------- cursor ---------- */
const ring = $("#cursorRing"), dot = $("#cursorDot"), cLabel = $("#cursorLabel");
const rx = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });
const dx = gsap.quickTo(dot, "x", { duration: 0.08 }), dy = gsap.quickTo(dot, "y", { duration: 0.08 });
addEventListener("mousemove", (e) => { rx(e.clientX); ry(e.clientY); dx(e.clientX); dy(e.clientY); });
document.addEventListener("mouseover", (e) => {
  const t = e.target.closest("[data-cursor]");
  ring.classList.toggle("big", !!t);
  cLabel.textContent = t ? t.dataset.cursor : "";
});

/* ---------- nav ---------- */
const nav = $("#nav");
$("#menuBtn").onclick = () => { const o = nav.classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); };
$$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
  const t = $(a.getAttribute("href")); if (!t) return;
  e.preventDefault(); nav.classList.remove("open");
  scrollTo({ top: a.getAttribute("href") === "#hero" ? 0 : t.getBoundingClientRect().top + scrollY - 40, behavior: reduced ? "auto" : "smooth" });
}));

/* ============================================================
   BUILD STATIC PARTS
   ============================================================ */

/* hero orbit */
/* hero orbit — built from the chosen role's work videos (designs for Graphic Designer) */
const orbit = $("#orbit");
const ORB_R = innerWidth < 700 ? 170 : 560;
const ORB_MIN = 10; // short lists repeat so the ring stays full
let orbitSlots = []; // { video, angle }
function buildOrbit(items) {
  if (!items.length) items = DESIGNS.map((d) => ({ img: d.src }));
  const slots = [];
  for (let i = 0; slots.length < Math.max(ORB_MIN, items.length) && i < 40; i++) slots.push(items[i % items.length]);
  const n = Math.min(slots.length, 14);
  orbit.innerHTML = "";
  orbitSlots = [];
  for (let i = 0; i < n; i++) {
    const it = slots[i], angle = (360 / n) * i;
    const f = document.createElement("figure");
    f.style.transform = `rotateY(${angle}deg) translateZ(${ORB_R}px)`;
    // videos have no autoplay: only the cards facing the viewer play (see ticker below)
    f.innerHTML = it.img ? `<img src="${it.img}" alt="">`
      : `<video src="${it.src}" ${it.poster ? `poster="${it.poster}"` : ""} muted loop playsinline preload="none"></video>`;
    orbit.appendChild(f);
    orbitSlots.push({ video: $("video", f), angle });
  }
}
gsap.set(orbit, { z: -ORB_R * 1.3, rotationX: -8 });
if (!reduced) gsap.to(orbit, { rotationY: -360, duration: 50, ease: "none", repeat: -1 });
// play only front-facing videos, and only while the hero is on screen
let heroOnScreen = true;
new IntersectionObserver((e) => (heroOnScreen = e[0].isIntersecting)).observe($("#hero"));
let orbitTick = 0;
gsap.ticker.add(() => {
  if (++orbitTick % 10) return; // ~6 checks per second is plenty
  const rot = gsap.getProperty(orbit, "rotationY") || 0;
  orbitSlots.forEach((s) => {
    if (!s.video) return;
    const facing = Math.cos(((s.angle + rot) * Math.PI) / 180) > 0.55;
    const want = facing && heroOnScreen && !document.body.classList.contains("is-loading");
    if (want && s.video.paused) { if (s.video.preload === "none") s.video.preload = "auto"; s.video.play().catch(() => {}); }
    else if (!want && !s.video.paused) s.video.pause();
  });
});

/* reel (rebuilt per role) */
const reelScroll = $("#reelScroll");
let videoList = [];
function buildReel(list) {
  videoList = list.map((v) => ({ type: "video", src: v.src, poster: v.poster, title: v.title }));
  reelScroll.innerHTML = "";
  list.forEach((v, k) => {
    const el = document.createElement("article");
    el.className = "lvl" + (v.wide ? " lvl--wide" : "");
    el.dataset.cursor = "PLAY";
    el.innerHTML = `<video src="${v.src}" ${v.poster ? `poster="${v.poster}"` : ""} aria-label="${v.title} — video by Abdullah Awamleh" title="${v.title}" muted loop playsinline preload="${v.poster ? "none" : "metadata"}"></video>
      <span class="lvl__tag pixel">${v.tag}</span>
      <div class="lvl__play"><span>▶</span></div>
      <div class="lvl__foot"><span class="lvl__num">${pad2(k + 1)}</span><span class="lvl__title">${v.title}</span></div>`;
    const vid = $("video", el);
    el.addEventListener("mouseenter", () => { vid.play().catch(() => {}); el.classList.add("playing"); });
    el.addEventListener("mouseleave", () => { vid.pause(); el.classList.remove("playing"); });
    el.addEventListener("click", () => lbOpen(videoList, k));
    reelScroll.appendChild(el);
  });
  reelScroll.scrollLeft = 0;
  if (!reduced) gsap.from(".lvl", { y: 60, opacity: 0, stagger: 0.04, duration: 0.5, ease: "back.out(1.5)", clearProps: "transform,opacity" });
}
/* a role's video list: "all", or video numbers (1 = first in VIDEOS) in the order to show them */
function roleVideos(spec) {
  return spec === "all" ? VIDEOS.slice() : spec.map((n) => VIDEOS[n - 1]).filter(Boolean);
}

/* menswear model strip (On Camera section) */
$("#shoot").innerHTML = PHOTOS.map((p, i) => `<figure class="shoot__item" data-cursor="VIEW" data-i="${i}"><img src="${p.src}" alt="Abdullah Awamleh — menswear model" loading="lazy"></figure>`).join("");
$$(".shoot__item").forEach((f) => f.addEventListener("click", () => lbOpen(PHOTOS.map((p) => ({ type: "img", ...p })), +f.dataset.i)));
const reelStep = () => (($(".lvl", reelScroll) || { offsetWidth: 240 }).offsetWidth + 18) * 2;
$("#reelPrev").onclick = () => reelScroll.scrollBy({ left: -reelStep(), behavior: "smooth" });
$("#reelNext").onclick = () => reelScroll.scrollBy({ left: reelStep(), behavior: "smooth" });

/* design deck */
const deckStage = $("#deckStage");
let deckI = 0, deckBusy = false;
const cards = DESIGNS.map((d, i) => {
  const c = document.createElement("div");
  c.className = "card";
  c.dataset.cursor = "VIEW";
  c.innerHTML = `<img src="${d.src}" alt="${d.title}" loading="${i < 3 ? "eager" : "lazy"}">`;
  c.addEventListener("click", () => { if (!c._dragged) lbOpen(designList, deckI); });
  deckStage.appendChild(c);
  return c;
});
function layoutDeck(instant) {
  cards.forEach((c, i) => {
    const pos = (i - deckI + cards.length) % cards.length;
    gsap.to(c, {
      x: 0, y: pos * 14, rotation: pos === 0 ? 0 : (pos % 2 ? 4 : -4) * pos, scale: 1 - pos * 0.05,
      zIndex: cards.length - pos, opacity: pos < 4 ? 1 : 0, pointerEvents: pos === 0 ? "auto" : "none",
      duration: instant ? 0 : 0.5, ease: "power3.out",
    });
  });
  const d = DESIGNS[deckI], r = $("#deckRarity");
  r.className = `rarity rarity--${d.rarity}`; r.textContent = d.rarity.toUpperCase();
  $("#deckTitle").textContent = d.title;
  $("#deckMeta").textContent = d.meta;
  $("#deckCount").textContent = `${pad2(deckI + 1)} / ${pad2(cards.length)}`;
}
function deckGo(dir) {
  if (deckBusy) return; deckBusy = true;
  if (dir > 0) {
    gsap.to(cards[deckI], { x: -innerWidth * 0.6, rotation: -25, opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
      deckI = (deckI + 1) % cards.length; layoutDeck(); deckBusy = false;
    }});
  } else {
    deckI = (deckI - 1 + cards.length) % cards.length;
    gsap.set(cards[deckI], { x: innerWidth * 0.6, rotation: 25, opacity: 0, zIndex: 99 });
    layoutDeck(); setTimeout(() => (deckBusy = false), 450);
  }
}
$("#deckNext").onclick = () => deckGo(1);
$("#deckPrev").onclick = () => deckGo(-1);
let dragX = null;
deckStage.addEventListener("pointerdown", (e) => { dragX = e.clientX; cards[deckI]._dragged = false; });
addEventListener("pointermove", (e) => {
  if (dragX === null) return;
  const d = e.clientX - dragX;
  if (Math.abs(d) > 6) cards[deckI]._dragged = true;
  gsap.set(cards[deckI], { x: d, rotation: d / 20 });
});
addEventListener("pointerup", (e) => {
  if (dragX === null) return;
  const d = e.clientX - dragX; dragX = null;
  if (Math.abs(d) > 90) deckGo(d < 0 ? 1 : -1); else layoutDeck();
});
layoutDeck(true);

/* power-ups */
const SEG = 20;
SKILLS.forEach((s) => {
  const el = document.createElement("div");
  el.className = "pu" + (s.primary ? " primary" : ""); el.style.setProperty("--c", s.c); el.dataset.name = s.name;
  el.innerHTML = `<span class="pu__star">${s.primary ? "★ PRIMARY" : "★ KEY"}</span>
    <div class="pu__top"><span class="pu__ico">${s.ico}</span><span class="pu__val" data-to="${s.val}">0</span></div>
    <h3>${s.name}</h3><div class="pu__bar">${"<i></i>".repeat(SEG)}</div>`;
  $("#powerups").appendChild(el);
});

/* quests */
$("#questItems").innerHTML = QUESTS.map((q, i) => `
  <article class="qi" data-id="${q.id}">
    <span class="qi__lvl pixel ${q.live ? "live" : ""}">LEVEL ${QUESTS.length - i} · ${q.live ? "IN PROGRESS" : "CLEARED"}</span>
    <span class="qi__date">${q.date}</span><span class="qi__main">★ MAIN QUEST</span>
    <h3>${q.title}</h3><h4>${q.org}</h4>
    <ul>${q.points.map((p) => `<li>${p}</li>`).join("")}</ul>
  </article>`).join("");

/* planets */
$("#planets").innerHTML = SOFTWARE.map((s, i) => `
  <div class="planet" data-name="${s.name}">
    <div class="planet__orb" style="--c:${s.c};--d:${-i * 0.6}s"><b>${s.name.replace(" ", "<br>")}</b></div>
    <span class="rarity rarity--${s.rarity}">${s.rarity.toUpperCase()}</span>
  </div>`).join("");

/* picker cards */
$("#pickerGrid").innerHTML = ROLE_KEYS.map((k) => {
  const r = ROLES[k], top = r.stats[0];
  return `<button class="role" data-role="${k}" style="--rc:${r.c}">
    <span class="role__key">${r.n}</span>
    <span class="role__ico">${r.ico}</span>
    <span class="role__name">${r.name}</span>
    <span class="role__ar" lang="ar" dir="rtl">${r.ar}</span>
    <span class="role__desc">${r.desc}</span>
    <span class="role__go">Select ▶</span>
  </button>`;
}).join("");
$$(".role").forEach((b) => b.addEventListener("click", () => chooseRole(b.dataset.role)));

/* ============================================================
   STARFIELD
   ============================================================ */
(() => {
  const cv = $("#space"), ctx = cv.getContext("2d");
  const COLORS = ["#ffffff", "#ffffff", "#ffffff", "#00e5ff", "#00e5ff", "#a66bff"];
  let w, h, cx, cy, dpr, stars = [], boost = 0;
  function reset(s, far) {
    s.x = (Math.random() - 0.5) * w; s.y = (Math.random() - 0.5) * h;
    s.z = far ? w : Math.random() * w; s.pz = s.z;
    s.c = COLORS[(Math.random() * COLORS.length) | 0];
  }
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr; cx = w / 2; cy = h / 2;
    stars = Array.from({ length: innerWidth < 700 ? 80 : 170 }, () => { const s = {}; reset(s); return s; });
  }
  size(); addEventListener("resize", size);
  ScrollTrigger.create({ onUpdate: (st) => { boost = Math.min(Math.abs(st.getVelocity()) / 60, 30); } });
  gsap.ticker.add(() => {
    boost *= 0.94;
    const speed = ((reduced ? 0.6 : 2) * dpr + boost * dpr) * 0.5; // 50% slower than before
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.pz = s.z; s.z -= speed;
      if (s.z < 1) { reset(s, true); continue; }
      const k = 128 * dpr / s.z, pk = 128 * dpr / s.pz;
      const x = s.x * k + cx, y = s.y * k + cy, px = s.x * pk + cx, py = s.y * pk + cy;
      if (x < 0 || x > w || y < 0 || y > h) { reset(s, true); continue; }
      ctx.strokeStyle = s.c; ctx.globalAlpha = Math.min(1, 1.2 - s.z / w);
      ctx.lineWidth = (1 - s.z / w) * 2.4 * dpr; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  });
})();

/* ============================================================
   APPLY ROLE — swaps text, shows/hides role sections, highlights
   ============================================================ */
function applyRole(key) {
  role = key;
  const r = ROLES[key];
  document.documentElement.style.setProperty("--rc", r.c);
  try { localStorage.setItem("abd-role", key); } catch (e) {}
  const url = new URL(location.href); url.searchParams.set("role", key); history.replaceState(null, "", url);

  // nav + hero
  $("#roleBtnIco").textContent = r.ico;
  $("#roleBtnText").textContent = r.name;
  $("#heroChip").textContent = r.chip;
  $("#heroPlayer").textContent = `PLAYER 1 — ${r.name.toUpperCase()}`;
  $("#heroRole").innerHTML = `${r.name}<span lang="ar" dir="rtl">${r.ar}</span>`;
  $("#heroTag").textContent = r.tag;
  $("#heroStart").setAttribute("href", "#" + (r.sections[0] || "about"));
  document.title = `Abdullah Awamleh — ${r.name}`;

  // tapes
  const tape = (words) => { const one = words.map((w) => `<span>${w}</span><b>✺</b>`).join(""); return one + one; };
  $("#tapeA").innerHTML = tape(r.tools.concat(SOFTWARE.map((s) => s.name).filter((n) => !r.tools.includes(n))).slice(0, 6).map((s) => s.toUpperCase()));
  $("#tapeB").innerHTML = tape(r.tapes);

  // about + pass
  $("#aboutLead").textContent = r.lead;
  $("#aboutBody").textContent = r.body;
  $("#aboutFocus").innerHTML = r.focus.map((f) => `<li>${f}</li>`).join("");
  $("#passClass").textContent = `CLASS: ${r.name}`;
  $("#passRole").textContent = r.name;
  $("#passMrz").textContent = (r.name.toUpperCase().replace(/[^A-Z]+/g, "<") + "<<AMMAN<<<<<<<<<<<<<<<<<<<<").slice(0, 44);
  $("#passStats").innerHTML = r.stats.map(([n, v]) =>
    `<div class="pstat"><span class="pixel">${n}</span><i><b style="--v:${v}%"></b></i><em>${v}%</em></div>`).join("");

  // role-only sections + matching nav links
  $$("[data-role-section]").forEach((s) => s.classList.toggle("hidden", !r.sections.includes(s.id)));
  $$(".nav__links a[data-sec]").forEach((a) => a.classList.toggle("hidden", !r.sections.includes(a.dataset.sec)));
  if (r.videos.length) {
    const list = roleVideos(r.videos);
    buildReel(list);
    buildOrbit(list);
    const count = list.length;
    $("#workSub").textContent = key === "presenter"
      ? `${count} on-camera videos — hover to preview, tap to play with sound.`
      : `${count} videos — hover to preview, tap to play with sound.`;
    $("#work").dataset.toast = `🛸|Reel Found|${count} videos ready to play`;
  } else buildOrbit([]); // Graphic Designer: no videos, ring shows designs

  // shared sections: highlight what matters for this role
  $$(".qi").forEach((q) => { const m = r.jobs.includes(q.dataset.id); q.classList.toggle("main", m); q.classList.toggle("dim", !m); });
  // primary skills (Marketing, Acting, Content Creation) always stay first; role-relevant ones just glow
  $$(".pu").forEach((p) => p.classList.toggle("main", r.skills.includes(p.dataset.name)));
  $$(".planet").forEach((p) => { const m = r.tools.includes(p.dataset.name); p.classList.toggle("main", m); p.classList.toggle("dim", !m); });

  // On Camera section content for this role
  if (r.spot) {
    const sp = r.spot;
    $("#spotSub").textContent = sp.sub;
    $("#phoneName").textContent = sp.phoneName;
    $("#phoneAvatar").src = sp.avatar; $("#phoneAvatar").alt = sp.avatarAlt;
    $(".phone__stats").innerHTML = sp.stats.map(([b, t]) => `<div><b>${b}</b><span>${t}</span></div>`).join("");
    $("#phoneGrid").innerHTML = sp.clips.map((c) =>
      `<video src="assets/video/${c}.mp4" poster="assets/poster/${c}.jpg" muted loop autoplay playsinline preload="metadata"></video>`).join("");
    if (vidIO) $$("#phoneGrid video").forEach((v) => vidIO.observe(v));
    $("#spotDate").textContent = sp.date; $("#spotDate").style.display = sp.date ? "" : "none";
    $("#spotTitle").textContent = sp.title;
    $("#spotRole").textContent = sp.role;
    $("#spotList").innerHTML = sp.points.map((t) => `<li>${t}</li>`).join("");
    $("#shootWrap").style.display = sp.shoot ? "" : "none";
    $("#phoneFollow").style.display = sp.ig ? "" : "none"; // phone = personal Instagram -> real Follow button
  }

  // contact
  const cl = $("#contactLine");
  cl.textContent = r.contact; splitScatter(cl);

  wireScatter();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* picker open / choose */
const picker = $("#picker");
function openPicker() {
  picker.classList.add("open"); picker.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-loading");
  gsap.fromTo(".role", { y: 80, opacity: 0, rotation: () => gsap.utils.random(-8, 8) },
    { y: 0, opacity: 1, rotation: 0, stagger: 0.08, duration: 0.7, ease: "back.out(1.6)" });
  gsap.fromTo(".picker__head > *", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6 });
}
let firstChoice = true;
function chooseRole(key) {
  const r = ROLES[key];
  picker.classList.remove("open"); picker.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-loading");
  applyRole(key);
  scrollTo(0, 0);
  if (reduced) { if (firstChoice) heroIn(true); firstChoice = false; return; }
  $("#flashText").textContent = r.name.toUpperCase() + "!";
  gsap.timeline()
    .set("#flash", { display: "grid", opacity: 1, background: r.c })
    .fromTo("#flash span", { scale: 2.2 }, { scale: 1, duration: 0.35, ease: "power4.out" })
    .to("#flash", { opacity: 0, duration: 0.45 }, "+=0.2")
    .set("#flash", { display: "none" })
    .call(() => {
      if (firstChoice) heroIn(); else gsap.from(".hero__role, .hero__tag, .hero__chips > *", { y: 30, opacity: 0, stagger: 0.06, duration: 0.6, clearProps: "transform,opacity" });
      firstChoice = false;
      toast(r.ico, "Character Selected", `${r.name} mode — scroll to explore`);
    });
}
$("#roleBtn").addEventListener("click", openPicker);
addEventListener("keydown", (e) => {
  if (!picker.classList.contains("open")) return;
  const i = +e.key - 1;
  if (i >= 0 && i < ROLE_KEYS.length) chooseRole(ROLE_KEYS[i]);
  if (e.key === "Escape" && role) { picker.classList.remove("open"); document.body.classList.remove("is-loading"); }
});

/* ============================================================
   LEVELS — nav level, active link, sky colour, achievements
   ============================================================ */
const navLevel = $("#navLevel");
const shownToasts = new Set();
$$("[data-level]").forEach((sec) => {
  ScrollTrigger.create({
    trigger: sec, start: "top 50%", end: "bottom 50%",
    onToggle: (st) => {
      if (!st.isActive || sec.classList.contains("hidden")) return;
      const visible = $$("[data-level]").filter((s) => !s.classList.contains("hidden"));
      navLevel.textContent = `LV.${visible.indexOf(sec) + 1} ${sec.dataset.level}`;
      $$(".nav__links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + sec.id));
      $("#sky").style.background = SKY[+sec.dataset.sky] || SKY[0];
      const key = role + sec.id;
      if (sec.dataset.toast && !shownToasts.has(key) && !picker.classList.contains("open")) { shownToasts.add(key); toast(...sec.dataset.toast.split("|")); }
    },
  });
});
ScrollTrigger.create({ start: 0, end: "max", onUpdate: (st) => {
  $("#xpBar").style.width = st.progress * 100 + "%";
  $("#xpText").textContent = "XP " + Math.round(st.progress * 9999);
}});

/* ============================================================
   INTRO
   ============================================================ */
let introTl, heroTl;
function heroIn(instant) {
  const tl = (heroTl = gsap.timeline());
  tl.from(".hero__line .ch", { yPercent: 120, rotation: 12, opacity: 0, duration: 0.9, stagger: 0.035, ease: "back.out(2)" })
    .from(".hero__chips > *, .hero__role, .hero__tag, .hero__cta > *, .hero__scroll", { y: 30, opacity: 0, stagger: 0.07, duration: 0.6, ease: "power3.out", clearProps: "transform,opacity" }, "-=0.5")
    .from(".orbit", { scale: 0.4, opacity: 0, duration: 1.4, ease: "expo.out" }, 0)
    .from(".nav-wrap", { y: -80, duration: 0.8, ease: "back.out(1.6)" }, 0.2);
  if (instant) tl.progress(1);
  if (!reduced) gsap.to(".hero__line:not(.hero__line--ghost) .ch", { y: -8, duration: 0.6, ease: "sine.inOut", stagger: { each: 0.08, repeat: -1, yoyo: true }, delay: 1.6 });
}
function startSite() {
  // a role in the link (?role=design) skips the picker — handy for sending a specific version to a client
  const fromUrl = new URLSearchParams(location.search).get("role");
  if (fromUrl && ROLES[fromUrl]) { chooseRole(fromUrl); }
  else openPicker();
}
function intro() {
  const o = { v: 0 }, count = $("#loaderCount"), bar = $("#loaderBar"), tip = $("#loaderTip");
  let tipI = 0;
  const tipTimer = setInterval(() => (tip.textContent = LOADER_TIPS[++tipI % LOADER_TIPS.length]), 380);
  introTl = gsap.timeline()
    .to(o, { v: 100, duration: 1.7, ease: "power2.inOut", onUpdate: () => {
      count.textContent = Math.round(o.v) + "%"; bar.style.width = o.v + "%";
    }})
    .call(() => clearInterval(tipTimer))
    .to("#loader", { opacity: 0, duration: 0.35 })
    .set("#loader", { display: "none" })
    .call(startSite);
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
/* Entrance animations run when an element actually appears on screen (IntersectionObserver).
   Content is never pre-hidden, so nothing can get stuck invisible if layout changes after a role switch. */
function onSeen(target, fn, margin = "0px 0px -8% 0px") {
  const el = typeof target === "string" ? $(target) : target;
  if (!el) return;
  if (reduced) { fn(); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); fn(); }
  }, { rootMargin: margin });
  io.observe(el);
}
$$(".section .title").forEach((t) => onSeen(t, () =>
  gsap.from($$(".ch", t), { yPercent: 110, opacity: 0, rotation: () => gsap.utils.random(-20, 20), duration: 0.8, stagger: 0.03, ease: "back.out(2)" })));
$$(".section .chip--pixel, .sub").forEach((el) => onSeen(el, () =>
  gsap.from(el, { y: 30, opacity: 0, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity" })));
gsap.to(".hero__content", { yPercent: -18, opacity: 0.2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
gsap.to(".tape--a", { xPercent: -6, ease: "none", scrollTrigger: { trigger: ".tapes", start: "top bottom", end: "bottom top", scrub: true } });
gsap.to(".tape--b", { xPercent: 6, ease: "none", scrollTrigger: { trigger: ".tapes", start: "top bottom", end: "bottom top", scrub: true } });

// pass
onSeen("#pass", () => {
  $("#pass").classList.add("in");
  gsap.timeline()
    .from("#pass", { y: 120, rotationX: 40, rotationZ: 8, opacity: 0, duration: 1, ease: "back.out(1.4)" })
    .fromTo("#pass", { "--shine": "100%" }, { "--shine": "-50%", duration: 1.2, ease: "power2.inOut" }, "-=0.3")
    .to(".pass__stamp", { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(3)" }, "+=0.2");
});
const pass = $("#pass");
pass.addEventListener("mousemove", (e) => {
  const r = pass.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
  gsap.to(pass, { rotationY: (px - 0.5) * 18, rotationX: -(py - 0.5) * 18, transformPerspective: 900, duration: 0.4 });
  pass.style.setProperty("--shine", 100 - px * 150 + "%");
});
pass.addEventListener("mouseleave", () => gsap.to(pass, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "elastic.out(1,0.5)" }));

// spotlight phone
onSeen(".spot", () => {
  gsap.from(".phone", { y: 120, rotation: -8, opacity: 0, duration: 1, ease: "back.out(1.4)", clearProps: "transform,opacity" });
  gsap.from(".spot__text > *", { x: 60, opacity: 0, stagger: 0.08, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity" });
});

// UFO
gsap.timeline({ scrollTrigger: { trigger: "#work", start: "top 85%", end: "bottom 20%", scrub: 1 } })
  .to(".ufo", { x: () => innerWidth + 360, ease: "none" })
  .to(".ufo", { y: 30, yoyo: true, repeat: 3, ease: "sine.inOut", duration: 0.25 }, 0)
  .to(".ufo__beam", { opacity: 1, duration: 0.1 }, 0.35)
  .to(".ufo__beam", { opacity: 0, duration: 0.1 }, 0.65);

onSeen("#shoot", () => gsap.from(".shoot__item", { y: 80, rotation: () => gsap.utils.random(-10, 10), opacity: 0, stagger: 0.06, duration: 0.7, ease: "back.out(1.6)", clearProps: "transform,opacity" }));

// deck enters
onSeen("#deck", () => gsap.from(".card", { y: 200, rotation: () => gsap.utils.random(-30, 30), opacity: 0, stagger: 0.04, duration: 0.8, ease: "back.out(1.4)", onComplete: () => layoutDeck() }));

// power-ups: values count up and bars charge when the grid appears
function fillPowerups(instant) {
  $$(".pu").forEach((el) => {
    const val = +$(".pu__val", el).dataset.to, segs = $$(".pu__bar i", el), o = { v: 0 };
    const draw = () => {
      $(".pu__val", el).textContent = Math.round(o.v);
      const on = Math.round((o.v / 100) * SEG);
      segs.forEach((s, k) => s.classList.toggle("on", k < on));
    };
    if (instant) { o.v = val; draw(); } else gsap.to(o, { v: val, duration: 1.4, delay: 0.2, ease: "power2.out", onUpdate: draw });
  });
}
onSeen("#powerups", () => { fillPowerups(reduced); gsap.from(".pu", { y: 40, opacity: 0, stagger: 0.04, duration: 0.6, ease: "power3.out", clearProps: "transform,opacity" }); });

// quest line + rocket
gsap.timeline({ scrollTrigger: { trigger: "#quest", start: "top 60%", end: "bottom 60%", scrub: true } })
  .to("#questFill", { height: "100%", ease: "none" }, 0)
  .to("#questRocket", { top: "100%", ease: "none" }, 0);
$$(".qi").forEach((q, i) => onSeen(q, () =>
  gsap.from(q, { x: innerWidth < 800 ? 60 : (i % 2 ? 120 : -120), opacity: 0, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity" })));

// planets + cards
onSeen("#planets", () => gsap.from(".planet", { scale: 0, opacity: 0, stagger: 0.08, duration: 0.8, ease: "back.out(2.2)", clearProps: "transform,opacity" }));
onSeen(".kit__grid", () => gsap.from(".kit__card", { y: 60, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity" }));

// contact
gsap.from(".sun", { y: 200, ease: "none", scrollTrigger: { trigger: ".contact", start: "top 80%", end: "bottom bottom", scrub: true } });
onSeen(".contact__btns", () => gsap.from(".pill", { y: 40, opacity: 0, stagger: 0.08, duration: 0.6, ease: "back.out(2)", clearProps: "transform,opacity" }));

/* ---------- scatter letters in contact ---------- */
function splitScatter(el) {
  // letters grouped per word so a line never breaks inside a word
  el.innerHTML = el.textContent.trim().split(/\s+/)
    .map((w) => `<span class="word">${[...w].map((c) => `<span class="ch">${esc(c)}</span>`).join("")}</span>`)
    .join(" ");
}
$$(".scatter").forEach(splitScatter);
const ct = $(".contact__title");
let chars = [];
function wireScatter() { chars = $$(".contact__title .ch"); }
wireScatter();
if (!reduced && matchMedia("(hover:hover)").matches) {
  ct.addEventListener("mousemove", (e) => chars.forEach((ch) => {
    const r = ch.getBoundingClientRect();
    const ddx = r.left + r.width / 2 - e.clientX, ddy = r.top + r.height / 2 - e.clientY, d = Math.hypot(ddx, ddy) || 1, f = Math.max(0, 1 - d / 200);
    gsap.to(ch, { x: (ddx / d) * f * 70, y: (ddy / d) * f * 70, rotation: (ddx / d) * f * 30, duration: 0.4, ease: "power3.out" });
  }));
  ct.addEventListener("mouseleave", () => gsap.to(chars, { x: 0, y: 0, rotation: 0, duration: 1.1, ease: "elastic.out(1,0.35)" }));
} else if (!reduced) {
  ct.addEventListener("touchstart", () => gsap.timeline()
    .to(chars, { x: () => gsap.utils.random(-90, 90), y: () => gsap.utils.random(-70, 70), rotation: () => gsap.utils.random(-45, 45), duration: 0.35 })
    .to(chars, { x: 0, y: 0, rotation: 0, duration: 1.1, ease: "elastic.out(1,0.35)" }, "+=0.2"), { passive: true });
}
onSeen(".contact__title", () => gsap.from(chars, { yPercent: 110, opacity: 0, stagger: 0.03, duration: 0.8, ease: "back.out(2)" }));

/* ---------- neon Instagram QR code ---------- */
const IG_URL = "https://www.instagram.com/abdullah_al_awamleh_/";
function drawQr() {
  const box = $("#igQr");
  if (!box || typeof qrcode !== "function") return; // library offline: the card still links to Instagram
  const qr = qrcode(0, "H"); // high error correction leaves room for the logo; dark-on-light so every phone camera can read it
  qr.addData(IG_URL); qr.make();
  const n = qr.getModuleCount(), q = 2, size = n + q * 2;
  const finder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
  const hole = (r, c) => Math.abs(r - (n - 1) / 2) < n * 0.16 && Math.abs(c - (n - 1) / 2) < n * 0.16;
  let dots = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++)
    if (qr.isDark(r, c) && !finder(r, c) && !hole(r, c)) dots += `<circle cx="${c + q + 0.5}" cy="${r + q + 0.5}" r="0.42"/>`;
  const eye = (x, y) => `<rect x="${x + 0.5}" y="${y + 0.5}" width="6" height="6" rx="1.8" fill="none" stroke="url(#qrg)" stroke-width="1"/>
    <rect x="${x + 2}" y="${y + 2}" width="3" height="3" rx="0.9" fill="url(#qrg)"/>`;
  const m = size / 2, L = n * 0.26;
  box.insertAdjacentHTML("afterbegin", `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="QR code to Instagram @abdullah_al_awamleh_">
    <defs><linearGradient id="qrg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b0a6b"/><stop offset="1" stop-color="#006d7a"/></linearGradient></defs>
    <rect width="${size}" height="${size}" rx="2" fill="#f5f7fa"/>
    <g fill="url(#qrg)">${dots}</g>
    ${eye(q, q)}${eye(q + n - 7, q)}${eye(q, q + n - 7)}
    <g transform="translate(${m - L / 2} ${m - L / 2})">
      <rect width="${L}" height="${L}" rx="${L * 0.28}" fill="none" stroke="url(#qrg)" stroke-width="${L * 0.09}"/>
      <circle cx="${L / 2}" cy="${L / 2}" r="${L * 0.22}" fill="none" stroke="url(#qrg)" stroke-width="${L * 0.09}"/>
      <circle cx="${L * 0.76}" cy="${L * 0.24}" r="${L * 0.065}" fill="#3b0a6b"/>
    </g></svg>`);
}
drawQr();
// QR card tilts toward the cursor
const igCard = $("#igCard");
if (igCard && !reduced) {
  igCard.addEventListener("mousemove", (e) => {
    const r = igCard.getBoundingClientRect();
    gsap.to(igCard, { rotationY: ((e.clientX - r.left) / r.width - 0.5) * 22, rotationX: -((e.clientY - r.top) / r.height - 0.5) * 22, transformPerspective: 800, duration: 0.4 });
  });
  igCard.addEventListener("mouseleave", () => gsap.to(igCard, { rotationX: 0, rotationY: 0, duration: 0.9, ease: "elastic.out(1,0.45)" }));
  onSeen(igCard, () => gsap.from(igCard, { y: 80, rotationX: 50, opacity: 0, duration: 1, ease: "back.out(1.6)", clearProps: "opacity" }));
}

/* ---------- only play background videos while they are on screen ---------- */
vidIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target;
  if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
}), { rootMargin: "100px" });
$$("video[autoplay]").forEach((v) => vidIO.observe(v));

$$("img").forEach((img) => img.complete || img.addEventListener("load", () => ScrollTrigger.refresh(), { once: true }));
addEventListener("load", () => ScrollTrigger.refresh());

/* ============================================================
   START
   ============================================================ */
gsap.set("#flash", { display: "none" });
if (reduced) { $("#loader").style.display = "none"; startSite(); }
else {
  intro();
  // safety net: if animation frames are paused (background tab), don't leave the loader up
  setTimeout(() => {
    if ($("#loader").style.display === "none") return;
    introTl.progress(1);
  }, 6000);
}
