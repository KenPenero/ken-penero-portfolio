(() => {
  "use strict";

  const S = window.SITE;
  if (!S) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (v) =>
    String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fmtDate = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  const hashOf = (str) => {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
    return h;
  };
  const shortHash = (str) => hashOf(str).toString(16).padStart(7, "0").slice(0, 7);

  /* ---------- Placeholder certificate image (used until a real image exists) ---------- */
  const placeholder = (label) => {
    const hue = hashOf(label) % 360;
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="hsl(${hue},45%,17%)"/><stop offset="1" stop-color="hsl(${(hue + 55) % 360},50%,8%)"/>` +
      `</linearGradient></defs>` +
      `<rect width="800" height="600" fill="url(#g)"/>` +
      `<rect x="36" y="36" width="728" height="528" fill="none" stroke="hsl(${hue},70%,62%)" stroke-opacity=".55" stroke-dasharray="9 9"/>` +
      `<text x="400" y="285" text-anchor="middle" font-family="monospace" font-size="34" font-weight="700" fill="hsl(${hue},85%,74%)">CERTIFICATE</text>` +
      `<text x="400" y="332" text-anchor="middle" font-family="monospace" font-size="20" fill="#9aa7b4">${esc(label.slice(0, 40))}</text>` +
      `<text x="400" y="520" text-anchor="middle" font-family="monospace" font-size="15" fill="#6f7c89">add your image in assets/certs/</text>` +
      `</svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };

  const imgTag = (src, fallback, alt) =>
    `<img src="${esc(src || fallback)}" data-fallback="${esc(fallback)}" alt="${esc(alt)}" loading="lazy">`;

  // If a real image file is missing, swap in the generated placeholder.
  document.addEventListener(
    "error",
    (e) => {
      const t = e.target;
      if (t && t.tagName === "IMG" && t.dataset.fallback && !t.dataset.failed) {
        t.dataset.failed = "1";
        t.src = t.dataset.fallback;
      }
    },
    true
  );

  /* ---------- Home ---------- */
  const o = S.owner;
  $("#tagline").textContent = o.tagline;
  $("#about").innerHTML = o.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#facts").innerHTML = [
    ["program", `${o.program} - ${o.section}`],
    ["school", o.school],
    ["based in", o.location]
  ]
    .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`)
    .join("");
  $("#skills").innerHTML = o.skills.map((s) => `<li>${esc(s)}</li>`).join("");

  const topics = new Set([...S.certificates.map((c) => c.topic), ...S.seminars.map((s) => s.topic)]);
  const totalHours = S.seminars.reduce((n, s) => n + (Number(s.hours) || 0), 0);
  const stats = [
    [S.certificates.length, "certificates"],
    [S.seminars.length, "seminars attended"],
    [totalHours, "hours of learning"],
    [topics.size, "topics explored"]
  ];
  $("#stats").innerHTML = stats
    .map(([n, label]) => `<div class="stat reveal"><b data-count="${n}">0</b><span>${esc(label)}</span></div>`)
    .join("");

  const countUp = (el) => {
    const end = Number(el.dataset.count);
    if (reduceMotion || !end) { el.textContent = end; return; }
    const start = performance.now(), dur = 900;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const val = end * (1 - Math.pow(1 - p, 3));
      el.textContent = Number.isInteger(end) ? Math.round(val) : val.toFixed(1);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = end;
    };
    requestAnimationFrame(tick);
  };

  /* ---------- Typed roles ---------- */
  const roleEl = $("#role");
  if (reduceMotion || !o.roles.length) {
    roleEl.textContent = o.roles[0] || "";
  } else {
    let ri = 0, ci = 0, deleting = false;
    const step = () => {
      const word = o.roles[ri];
      ci += deleting ? -1 : 1;
      roleEl.textContent = word.slice(0, ci);
      let delay = deleting ? 38 : 85;
      if (!deleting && ci === word.length) { deleting = true; delay = 1600; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % o.roles.length; delay = 350; }
      setTimeout(step, delay);
    };
    step();
  }

  /* ---------- Lightbox ---------- */
  const lb = $("#lightbox");
  const lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbPrev = $("#lbPrev"), lbNext = $("#lbNext");
  let lbItems = [], lbIndex = 0;

  const lbRender = () => {
    const it = lbItems[lbIndex];
    lbImg.dataset.failed = "";
    lbImg.dataset.fallback = it.fallback || "";
    lbImg.src = it.src || it.fallback;
    lbImg.alt = it.caption || "";
    lbCap.textContent = lbItems.length > 1 ? `${it.caption}  (${lbIndex + 1}/${lbItems.length})` : it.caption;
    lbPrev.hidden = lbNext.hidden = lbItems.length < 2;
  };
  const lbOpen = (items, index = 0) => {
    lbItems = items; lbIndex = index; lbRender();
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
  };
  const lbStep = (d) => { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; lbRender(); };
  $("#lbClose").addEventListener("click", () => lb.close());
  lbPrev.addEventListener("click", () => lbStep(-1));
  lbNext.addEventListener("click", () => lbStep(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => {
    if (lbItems.length < 2) return;
    if (e.key === "ArrowLeft") lbStep(-1);
    if (e.key === "ArrowRight") lbStep(1);
  });

  /* ---------- Certificates ---------- */
  const certById = Object.fromEntries(S.certificates.map((c) => [c.id, c]));
  const certItem = (c) => ({ src: c.image, fallback: placeholder(c.title), caption: `${c.title} - ${c.issuer}` });
  // A certificate opens as a small gallery: the certificate itself, plus its badge if it has one.
  const certItems = (c) => {
    const items = [certItem(c)];
    if (c.badge) items.push({ src: c.badge, fallback: placeholder(c.title), caption: `${c.title} - digital badge` });
    return items;
  };

  const grid = $("#certGrid"), empty = $("#certEmpty"), search = $("#search"), filterBox = $("#filters");
  let activeTopic = "All";

  const renderCerts = () => {
    const q = search.value.trim().toLowerCase();
    const list = S.certificates.filter(
      (c) =>
        (activeTopic === "All" || c.topic === activeTopic) &&
        (!q || `${c.title} ${c.issuer} ${c.topic}`.toLowerCase().includes(q))
    );
    grid.innerHTML = list
      .map(
        (c) => `
      <article class="card reveal" data-id="${esc(c.id)}">
        <button class="card-media" type="button" data-open="${esc(c.id)}" aria-label="View certificate: ${esc(c.title)}">
          ${c.sample ? '<span class="badge">SAMPLE</span>' : ""}
          ${imgTag(c.image, placeholder(c.title), c.title)}
          ${c.badge ? `<img class="card-badge" src="${esc(c.badge)}" alt="Digital badge for ${esc(c.title)}" loading="lazy">` : ""}
        </button>
        <div class="card-body">
          <h3>${esc(c.title)}</h3>
          <p class="card-meta">${esc(c.issuer)} &middot; ${esc(fmtDate(c.date))}</p>
          ${c.type ? `<p class="card-meta">${esc(c.type)}</p>` : ""}
          ${c.credentialId ? `<p class="card-id" title="Credential ID">ID: ${esc(c.credentialId)}</p>` : ""}
          <div class="card-foot">
            <span class="tag">${esc(c.topic)}</span>
            ${c.verifyUrl ? `<a class="btn small" href="${esc(c.verifyUrl)}" target="_blank" rel="noopener">Verify &nearr;</a>` : ""}
          </div>
        </div>
      </article>`
      )
      .join("");
    empty.hidden = list.length > 0;
    observeReveal();
  };

  const certTopics = ["All", ...new Set(S.certificates.map((c) => c.topic))];
  filterBox.innerHTML = certTopics
    .map((t) => `<button type="button" class="filter" data-topic="${esc(t)}" aria-pressed="${t === "All"}">${esc(t)}</button>`)
    .join("");
  filterBox.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    activeTopic = b.dataset.topic;
    $$(".filter", filterBox).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    renderCerts();
  });
  search.addEventListener("input", renderCerts);
  grid.addEventListener("click", (e) => {
    const b = e.target.closest("[data-open]");
    if (!b) return;
    lbOpen(certItems(certById[b.dataset.open]), 0);
  });

  /* ---------- Seminars ---------- */
  const logList = $("#logList");
  const seminars = [...S.seminars].sort((a, b) => (a.date < b.date ? 1 : -1));
  logList.innerHTML = seminars
    .map((s, i) => {
      const cert = s.certId ? certById[s.certId] : null;
      const shots = (s.screenshots || [])
        .map((src, k) => `<button type="button" data-shot="${i}:${k}" aria-label="View screenshot ${k + 1}"><img src="${esc(src)}" alt="Screenshot ${k + 1} of ${esc(s.title)}" loading="lazy"></button>`)
        .join("");
      return `
      <article class="log reveal">
        <div class="log-head"><span class="hash">${shortHash(s.title)}</span><span>${esc(fmtDate(s.date))}</span>${s.sample ? '<span class="tag">SAMPLE</span>' : ""}</div>
        <div class="log-card">
          <h3>${esc(s.title)}</h3>
          <div class="log-meta"><span>by ${esc(s.organizer)}</span><span>${esc(s.duration)}</span><span class="tag">${esc(s.topic)}</span></div>
          <p class="log-summary">${esc(s.summary)}</p>
          ${s.takeaways && s.takeaways.length ? `<details><summary>key takeaways</summary><ul class="takeaways">${s.takeaways.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></details>` : ""}
          ${s.reflection ? `<div class="reflection"><span class="reflection-label">// reflection</span>${s.reflection.split("\n\n").map((p) => `<p>${esc(p)}</p>`).join("")}</div>` : ""}
          ${shots ? `<div class="shots">${shots}</div>` : ""}
          ${cert || s.link ? `<div class="log-actions">
            ${cert ? `<button class="btn small" type="button" data-cert="${esc(cert.id)}">View certificate</button>` : ""}
            ${s.link ? `<a class="btn small" href="${esc(s.link)}" target="_blank" rel="noopener">Event page &nearr;</a>` : ""}
          </div>` : ""}
        </div>
      </article>`;
    })
    .join("");

  logList.addEventListener("click", (e) => {
    const c = e.target.closest("[data-cert]");
    if (c) return lbOpen(certItems(certById[c.dataset.cert]), 0);
    const sh = e.target.closest("[data-shot]");
    if (sh) {
      const [si, k] = sh.dataset.shot.split(":").map(Number);
      const s = seminars[si];
      lbOpen(s.screenshots.map((src, n) => ({ src, fallback: "", caption: `${s.title} - screenshot ${n + 1}` })), k);
    }
  });

  /* ---------- Journey + Contact ---------- */
  $("#phases").innerHTML = S.journey
    .map(
      (p) => `
    <li class="phase reveal">
      <span class="num" aria-hidden="true">${esc(p.phase)}</span>
      <span class="tag">${esc(p.tag)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>
    </li>`
    )
    .join("");

  $("#contactList").innerHTML = S.contact
    .map((c) => `<a href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><span class="k">${esc(c.label)}</span><span class="v">${esc(c.value)}</span></a>`)
    .join("");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Sidebar nav (built from <section data-nav>) ---------- */
  const sections = $$("main > section[data-nav]");
  const nav = $("#nav");
  nav.innerHTML = sections
    .map((s) => {
      const full = s.dataset.nav, dot = full.lastIndexOf(".");
      const name = dot > 0 ? full.slice(0, dot) : full, ext = dot > 0 ? full.slice(dot) : "";
      return `<a href="#${esc(s.id)}" data-id="${esc(s.id)}"><span class="ico">${s.dataset.ico || "&gt;"}</span><span class="lbl">${esc(name)}<span class="ext">${esc(ext)}</span></span></a>`;
    })
    .join("");

  const pathEl = $("#path");
  const setActive = (id) => {
    $$("a", nav).forEach((a) => a.classList.toggle("active", a.dataset.id === id));
    const sec = sections.find((s) => s.id === id);
    if (sec) pathEl.textContent = `${o.handle}@learning-log:~/${sec.dataset.nav}`;
  };
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
    { rootMargin: "-35% 0px -60% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
  setActive("home");

  /* ---------- Reveal on scroll ---------- */
  let revealObs = null;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            en.target.classList.add("in");
            const num = $("[data-count]", en.target);
            if (num) countUp(num);
            revealObs.unobserve(en.target);
          }),
        { threshold: 0.12 }
      );
    }
    $$(".reveal:not(.in)").forEach((el) => revealObs.observe(el));
  }
  renderCerts();
  observeReveal();

  /* ---------- Theme toggle ---------- */
  $("#themeBtn").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#0a0e13" : "#f3f1ea");
  });
})();
