// Logique du site : langue, rendu du contenu, navigation, animation d'accueil
const ICONS = {
  drum: '<path d="M4 9c0-2 3.6-3 8-3s8 1 8 3v7c0 2-3.6 3-8 3s-8-1-8-3zM4 9c0 2 3.6 3 8 3s8-1 8-3M9 3l3 6M15 3l-3 6"/>',
  ball: '<circle cx="12" cy="12" r="9"/><path d="M12 8l3.5 2.5-1.3 4h-4.4l-1.3-4zM12 3v5M20 9.5l-4.5 1M17 19l-2.8-4.5M7 19l2.8-4.5M4 9.5l4.5 1"/>',
  book: '<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1zM12 6v13"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.1M12 17v-6M12 13c0-2.5 5-3 5 0v4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  tel: '<path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10 19 5 14 4 5a2 2 0 0 1 2-2z"/>'
};
const svg = n => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const $ = s => document.querySelector(s);
const tags = a => a && a.length ? `<div class="tags">${a.map(t => `<span>${typeof t === "object" ? t[lang] : t}</span>`).join("")}</div>` : ""; // bulle : texte, ou { fr: "…", en: "…" }
const dt = d => !d ? "" : typeof d === "object" ? (d[lang] || "") : d; // date : texte, ou { fr: "…", en: "…" }
const link = (e, x) => e.link ? `<a class="more" href="${e.link}" target="_blank" rel="noopener noreferrer">${e.linkLabel || x.title || "Lien / Link"}</a>` : "";
let lang = "fr";
try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("en") ? "en" : "fr"); } catch (e) {}

const imgTag = (src, cls) => `<img class="${cls}" src="${src}" alt="" loading="lazy" onerror="this.style.display='none'">`;
function card(e) {
  const x = e[lang];
  const head = (x.title || e.logo) ? `<div class="chead">${x.title ? `<h3>${x.title}</h3>` : ""}${e.logo ? imgTag(e.logo, "clogo") : ""}</div>` : "";
  const inner = `${dt(e.date) ? `<span class="date">${dt(e.date)}</span>` : ""}${head}${x.org ? `<p class="org">${x.org}</p>` : ""}${x.desc ? `<p>${x.desc}</p>` : ""}${tags(e.tags)}${link(e, x)}`;
  return e.image ? `<article class="card hasimg"><div class="body">${inner}</div>${imgTag(e.image, "media")}</article>` : `<article class="card">${inner}</article>`;
}

// Contact : mail et téléphone encodés dans content.js, affichés seulement après un clic (anti-robots)
const shown = { mail: false, tel: false };
function squares() {
  const c = CONTENT.contact, t = TR[lang];
  const dec = s => { try { return atob(s); } catch (e) { return ""; } };
  const val = (k, enc) => shown[k] ? `<span class="copy">${dec(enc)}</span>` : `<span class="hint">${t["c.show"]}</span>`;
  $("#squares").innerHTML =
    `<a class="sq" href="${c.linkedin}" target="_blank" rel="noopener noreferrer">${svg("linkedin")}<strong>${t["c.linkedin"]}</strong></a>` +
    `<div class="sq" role="button" tabindex="0" data-k="mail">${svg("mail")}<strong>${t["c.mail"]}</strong>${val("mail", c.mailEnc)}</div>` +
    `<div class="sq" role="button" tabindex="0" data-k="tel">${svg("tel")}<strong>${t["c.tel"]}</strong>${val("tel", c.telEnc)}</div>`;
  document.querySelectorAll(".sq[data-k]").forEach(el => {
    const open = () => { if (shown[el.dataset.k]) return; shown[el.dataset.k] = true; squares(); $(`.sq[data-k="${el.dataset.k}"]`).focus(); };
    el.addEventListener("click", open);
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

function render() {
  document.documentElement.lang = lang;
  document.title = lang === "fr" ? "Edgar Cayzac – E-portfolio" : "Edgar Cayzac – Portfolio";
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = TR[lang][el.dataset.i18n]);
  document.querySelectorAll("[data-i18n-label]").forEach(el => el.setAttribute("aria-label", TR[lang][el.dataset.i18nLabel]));
  document.querySelectorAll("[data-i18n-alt]").forEach(el => el.alt = TR[lang][el.dataset.i18nAlt]);
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  $("#acts").innerHTML = (CONTENT.activities || []).map((a, i) => `<div class="act" data-i="${i}"><div class="ahead">${svg(a.icon)}${a.image ? imgTag(a.image, "aimg") : ""}</div><h3>${a[lang].title}</h3><p>${a[lang].desc}</p></div>`).join("");
  galleries();
  $("#career").innerHTML = (CONTENT.career || []).map(card).join("");
  $("#personal").innerHTML = (CONTENT.personal || []).map(card).join("");
  const cm = CONTENT.commit || []; // Engagements : section masquée si la liste est vide
  $("#commit").innerHTML = cm.map(card).join("");
  $("#engagements").hidden = !cm.length;
  document.querySelector('#menu a[href="#engagements"]').hidden = !cm.length;
  $(".wave.top").classList.toggle("noeng", !cm.length);
  $("#eng").innerHTML = (CONTENT.eng || []).map(e => `<details><summary><span class="stitle">${e[lang].title}</span>${dt(e.date) ? `<span class="sdate">${dt(e.date)}</span>` : ""}</summary><div class="dwrap${e.image || (e.tags || []).length ? "" : " solo"}"><div class="dbody"><p>${e[lang].desc}</p>${link(e, e[lang])}</div>${e.image ? imgTag(e.image, "dimg") : ""}${(e.tags || []).length ? `<div class="dtags">${tags(e.tags)}</div>` : ""}</div></details>`).join("");
  const sk = (CONTENT.skills || []).map(s => typeof s === "object" ? s[lang] : s).filter(Boolean); // compétences : section masquée si vide
  $("#skills").innerHTML = sk.map(s => `<span>${s}</span>`).join("");
  $("#skills").hidden = $("#skillsTitle").hidden = !sk.length;
  $("#langs").innerHTML = (CONTENT.languages || []).map(l => `<span>${l[lang]}</span>`).join("");
  const c = CONTENT.contact, t = TR[lang];
  squares();
  $("#cvs").innerHTML = ["fr", "en"].map(k => `<a class="btn" href="${CONTENT.cv[k]}" target="_blank" rel="noopener noreferrer">${t["cv." + k]}</a>`).join("") + (CONTENT.video ? `<a class="btn" href="${CONTENT.video}" target="_blank" rel="noopener noreferrer">${t["cv.video"]}</a>` : "");
  $("#mobProject").textContent = (CONTENT.mobilityProject || {})[lang] || "";
  document.querySelectorAll("[data-flag]").forEach(el => el.innerHTML = flag(el.dataset.flag));
  drawMap();
  if (!$("#mpanel").hidden) fillPanel();
  if (!$("#gal").hidden) galRefresh();
}

const proj = (k, lon, lat) => [k.tx + k.S * lon * Math.PI / 180, k.ty - k.S * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
function drawMap() { // cartes générées dans js/map-data.js ; points placés par latitude / longitude
  ["eu", "us", "ca"].forEach(k => {
    const M = MAPS[k], s = $({ eu: "#mapEu", us: "#mapUs", ca: "#mapCa" }[k]);
    s.setAttribute("viewBox", `0 0 ${M.w} ${M.h}`);
    let h = `<path class="land" d="${M.land}"/><path class="vis" d="${M.visited}"/>`;
    (CONTENT.mobility || []).forEach((p, i) => {
      if (p.map !== k) return;
      const [x, y] = proj(M, p.lon, p.lat);
      h += `<circle class="pt" data-i="${i}" tabindex="0" role="button" aria-label="${p[lang].title}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${k === "eu" ? 6 : 5}"/>`;
    });
    s.innerHTML = h;
  });
  const tip = $("#tip"), box = $("#mapbox"), hide = () => tip.classList.remove("on");
  box.onclick = e => { if (!e.target.classList.contains("pt")) hide(); };
  document.querySelectorAll(".pt").forEach(p => {
    const show = () => {
      const mo = CONTENT.mobility[p.dataset.i], t = mo[lang], r = p.getBoundingClientRect(), b = box.getBoundingClientRect();
      tip.innerHTML = `<strong>${flag(mo.flag)}${t.title}</strong>${t.desc}`;
      tip.style.left = Math.min(Math.max(r.left - b.left + r.width / 2, 110), b.width - 110) + "px";
      tip.style.top = (r.top - b.top + (r.top - b.top < 90 ? r.height : 0)) + "px";
      tip.classList.toggle("below", r.top - b.top < 90);
      tip.classList.add("on");
    };
    ["mouseenter", "focus", "click"].forEach(ev => p.addEventListener(ev, show));
    p.addEventListener("click", () => { tipHide(); openPanel(+p.dataset.i); });
    p.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tipHide(); openPanel(+p.dataset.i); } });
    ["mouseleave", "blur"].forEach(ev => p.addEventListener(ev, hide));
  });
}

// ---------- Fenêtres : panneau de la carte + galerie des activités ----------
const tipHide = () => $("#tip").classList.remove("on");
const focusables = root => [...root.querySelectorAll("button:not([hidden])")].filter(b => b.offsetParent !== null);
let panelIdx = -1, panelImg = 0;
function fillPanel() {
  const mo = (CONTENT.mobility || [])[panelIdx];
  if (!mo) return;
  const t = mo[lang];
  const imgs = [].concat(mo.image || []).filter(Boolean), n = imgs.length; // image : texte ou liste de photos
  panelImg = n ? (panelImg + n) % n : 0;
  $("#mpImg").innerHTML = n ? `<div class="mpslide">${imgTag(imgs[panelImg], "mpimg")}${n > 1 ? `<button type="button" class="mpnav prev" data-d="-1" aria-label="${TR[lang]["g.prev"]}">‹</button><button type="button" class="mpnav next" data-d="1" aria-label="${TR[lang]["g.next"]}">›</button><span class="mpcount">${panelImg + 1} / ${n}</span>` : ""}</div>` : "";
  const mv = $("#mpVid"), key = mo.video || "";
  if (mv.dataset.s !== key) { mv.dataset.s = key; mv.innerHTML = key ? media(key) : ""; } // ne recharge pas la vidéo au changement de langue
  $("#mpTitle").innerHTML = flag(mo.flag) + t.title;
  $("#mpText").textContent = t.text || t.desc || "";
}
function openPanel(i) {
  panelIdx = i; panelImg = 0; fillPanel();
  $("#mpanel").hidden = false; document.documentElement.classList.add("lock");
  $("#mpClose").focus();
}
function closePanel() {
  $("#mpVid").innerHTML = ""; $("#mpVid").dataset.s = "";
  $("#mpanel").hidden = true; document.documentElement.classList.remove("lock");
  const el = document.querySelector(`.pt[data-i="${panelIdx}"]`); panelIdx = -1;
  if (el) { el.focus({ preventScroll: true }); tipHide(); }
}
function panelGo(d) {
  panelImg += d; fillPanel();
  const b = document.querySelector(`#mpImg .mpnav[data-d="${d}"]`); if (b) b.focus();
}
$("#mpImg").addEventListener("click", e => { const b = e.target.closest(".mpnav"); if (b) panelGo(+b.dataset.d); });
let px0 = null;
$("#mpImg").addEventListener("touchstart", e => { px0 = e.touches[0].clientX; }, { passive: true });
$("#mpImg").addEventListener("touchend", e => {
  if (px0 === null) return;
  const dx = e.changedTouches[0].clientX - px0; px0 = null;
  if (Math.abs(dx) > 50 && document.querySelector("#mpImg .mpnav")) panelGo(dx < 0 ? 1 : -1);
});
$("#mpClose").addEventListener("click", closePanel);
$("#mpanel").addEventListener("click", e => { if (e.target === e.currentTarget) closePanel(); });

// Galerie : activities[i].photos = ["assets/a.jpg", { src, fr, en }, …] et activities[i].video = "assets/v.mp4" ou lien YouTube (texte ou liste) ; rien = activité non cliquable
const probeCache = {};
const probe = src => probeCache[src] || (probeCache[src] = new Promise(res => { const im = new Image(); im.onload = () => res(true); im.onerror = () => res(false); im.src = src; }));
const ytId = s => (String(s).match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/) || [])[1];
const isVid = s => /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(s) || !!ytId(s);
const media = src => ytId(src)
  ? `<iframe src="https://www.youtube-nocookie.com/embed/${ytId(src)}" title="" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
  : `<video controls playsinline preload="metadata" src="${src}"></video>`;
const normPhoto = p => typeof p === "string" ? (isVid(p) ? { video: p } : { src: p }) : p;
let gal = { list: [], i: 0, act: -1 };
function galleries() {
  (CONTENT.activities || []).forEach((a, i) => {
    const raw = [...(a.photos || []), ...[].concat(a.video || [])].map(normPhoto).filter(p => p && (p.src || p.video)); // photos puis vidéos
    if (!raw.length) return;
    Promise.all(raw.map(p => p.video ? true : probe(p.src))).then(ok => {
      const list = raw.filter((p, k) => ok[k]); // les photos introuvables sont ignorées
      const el = document.querySelector(`#acts .act[data-i="${i}"]`);
      if (!list.length || !el || el.classList.contains("has-gal")) return;
      const open = () => openGallery(i, list), t = TR[lang];
      el.classList.add("has-gal"); el.tabIndex = 0; el.setAttribute("role", "button");
      el.setAttribute("aria-label", `${a[lang].title} – ${t["g.open"]}`);
      el.insertAdjacentHTML("beforeend", `<span class="gal-hint">${t["g.open"]} · ${list.length}</span>`);
      el.addEventListener("click", open);
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  });
}
function galRefresh() {
  const a = (CONTENT.activities || [])[gal.act]; if (!a) return;
  const p = gal.list[gal.i];
  $("#galTitle").textContent = a[lang].title;
  $("#galCap").textContent = p[lang] || "";
  $("#galCount").textContent = `${gal.i + 1} / ${gal.list.length}`;
  $("#galImg").alt = p[lang] || a[lang].title;
}
function galShow(i) {
  const n = gal.list.length; gal.i = (i + n) % n;
  const p = gal.list[gal.i], img = $("#galImg"), v = $("#galVid");
  v.innerHTML = "";
  if (p.video) { img.hidden = true; v.hidden = false; v.innerHTML = media(p.video); }
  else { v.hidden = true; img.hidden = false; img.classList.remove("in"); img.src = p.src; void img.offsetWidth; img.classList.add("in"); }
  galRefresh();
  document.querySelectorAll("#galThumbs button").forEach((b, k) => {
    b.setAttribute("aria-current", k === gal.i);
    if (k === gal.i) { try { b.scrollIntoView({ block: "nearest", inline: "center" }); } catch (e) {} }
  });
  [1, -1].forEach(d => { const q = gal.list[(gal.i + d + n) % n]; if (q.src) new Image().src = q.src; }); // précharge les voisines
}
function openGallery(i, list) {
  gal = { list, i: 0, act: i };
  const multi = list.length > 1;
  $("#galPrev").hidden = $("#galNext").hidden = $("#galThumbs").hidden = !multi;
  $("#galThumbs").innerHTML = list.map((p, k) => `<button type="button" data-k="${k}" aria-label="${k + 1}"${p.video ? ' class="vthumb"' : ""}>${p.video ? "▶" : `<img src="${p.src}" alt="">`}</button>`).join("");
  $("#gal").hidden = false; document.documentElement.classList.add("lock");
  galShow(0); $("#galClose").focus();
}
function closeGallery() {
  $("#galVid").innerHTML = "";
  $("#gal").hidden = true; document.documentElement.classList.remove("lock");
  const el = document.querySelector(`#acts .act[data-i="${gal.act}"]`); gal.act = -1;
  if (el) el.focus({ preventScroll: true });
}
$("#galClose").addEventListener("click", closeGallery);
$("#galPrev").addEventListener("click", () => galShow(gal.i - 1));
$("#galNext").addEventListener("click", () => galShow(gal.i + 1));
$("#galThumbs").addEventListener("click", e => { const b = e.target.closest("button"); if (b) galShow(+b.dataset.k); });
$("#gal").addEventListener("click", e => { if (e.target === e.currentTarget || e.target.classList.contains("gmain") || e.target.classList.contains("gfig")) closeGallery(); });
let tx0 = null;
$("#gal").addEventListener("touchstart", e => { tx0 = e.touches[0].clientX; }, { passive: true });
$("#gal").addEventListener("touchend", e => {
  if (tx0 === null || gal.list.length < 2) return;
  const dx = e.changedTouches[0].clientX - tx0; tx0 = null;
  if (Math.abs(dx) > 50) galShow(gal.i + (dx < 0 ? 1 : -1));
});
document.addEventListener("keydown", e => {
  const g = !$("#gal").hidden, p = !$("#mpanel").hidden;
  if (!g && !p) return;
  if (e.key === "Escape") { g ? closeGallery() : closePanel(); return; }
  if (g && e.key === "ArrowLeft") galShow(gal.i - 1);
  if (g && e.key === "ArrowRight") galShow(gal.i + 1);
  if (p && e.key === "ArrowLeft" && document.querySelector("#mpImg .mpnav")) panelGo(-1);
  if (p && e.key === "ArrowRight" && document.querySelector("#mpImg .mpnav")) panelGo(1);
  if (e.key === "Tab") { // le focus reste dans la fenêtre ouverte
    const f = focusables(g ? $("#gal") : $("#mpanel")); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
}));
$("#burger").addEventListener("click", () => {
  const o = $("#nav").classList.toggle("open");
  $("#burger").setAttribute("aria-expanded", o);
});
document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("open")));
$("#y").textContent = new Date().getFullYear();

// Lien actif selon la section visible
const links = [...document.querySelectorAll("#menu a")];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));

// Accueil : écoulement potentiel autour du cadre photo (ellipse autour de la photo)
const cssv = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const rgba = (h, a) => { if (h.length === 4) h = "#" + [...h.slice(1)].map(c => c + c).join(""); const n = parseInt(h.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
const PET = cssv("--pet") || "#12263F", SAND = cssv("--sand") || "#F4F1EA"; // couleurs de style.css (format #RRGGBB)
const cv = $("#flow"), cx = cv.getContext("2d"), fr = $(".stack");
let W, H, P = [], ox, oy, ax, ay, sx, sy, bw, bh;
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
function spawn(p) { p.x = 0; p.y = Math.random() * H; }
function size() {
  W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight;
  const a = cv.getBoundingClientRect(), b = fr.getBoundingClientRect();
  bw = b.width; bh = b.height; ox = b.left - a.left + bw / 2; oy = b.top - a.top + bh / 2;
  ax = bw / 2 * 1.12; ay = bh / 2 * 1.08; sx = ax / ((ax + ay) / 2); sy = ay / ((ax + ay) / 2);
  cx.fillStyle = PET; cx.fillRect(0, 0, W, H);
  P = Array.from({ length: 150 }, () => ({ x: Math.random() * W, y: Math.random() * H }));
}
function step() {
  cx.fillStyle = rgba(PET, .07); cx.fillRect(0, 0, W, H);
  cx.strokeStyle = rgba(SAND, .55); cx.lineWidth = 1;
  P.forEach(p => {
    const dx = (p.x - ox) / ax, dy = (p.y - oy) / ay, r2 = dx * dx + dy * dy; // ellipse autour de la photo + bannière
    if (r2 < 1 || p.x > W || (Math.abs(p.x - ox) < bw / 2 && Math.abs(p.y - oy) < bh / 2)) return spawn(p);
    const r4 = r2 * r2, u = 1 - (dx * dx - dy * dy) / r4, v = -2 * dx * dy / r4;
    cx.beginPath(); cx.moveTo(p.x, p.y); p.x += u * 2.2 * sx; p.y += v * 2.2 * sy; cx.lineTo(p.x, p.y); cx.stroke();
  });
}
function loop() { step(); requestAnimationFrame(loop); }
size(); addEventListener("resize", size); addEventListener("load", size);
if (still) { for (let n = 0; n < 250; n++) step(); } else loop();
render();
