// ============ DATA & STORAGE KEYS ============

const SB_STORAGE_KEYS = {
  quiz: "sb_quiz_answers",
  saved: "sb_saved_scholarships",
  checklist: "sb_checklist_state",
  parentMode: "sb_parent_mode",
  lang: "sb_lang",
  theme: "sb_theme"
};

// Expanded scholarship list (more realistic, mixed providers/types)
const scholarships = [
  {
    id: "need-ug-india",
    name: "Need-based UG Support Scholarship",
    forYears: "1st–3rd year UG, any stream",
    level: "UG",
    field: "any",
    incomeMax: 300000,
    incomeBandLabel: "Family income below ₹3,00,000",
    location: "India",
    category: "Open",
    amountPerYear: "₹80,000 / year",
    duration: "3 years",
    requiresDocs: [
      "Last year’s mark sheet",
      "Income certificate (latest FY)",
      "Aadhaar-linked bank account in student’s name"
    ],
    redFlags: [
      "You already get a similar government scholarship",
      "Your family income is above ₹3,00,000",
      "You are in final year"
    ],
    difficulty: "moderate",
    deadline: "2025-12-20",
    lastUpdated: "2025-11-15",
    verified: true,
    type: "need", // merit | need | mixed
    provider: "government", // government | private | global
    storyHighlight: "Good for students who are not toppers but have clear financial need."
  },
  {
    id: "merit-12th",
    name: "Merit Scholarship for Class 12",
    forYears: "Class 11–12 students in any board",
    level: "School",
    field: "any",
    incomeMax: 800000,
    incomeBandLabel: "Family income below ₹8,00,000",
    location: "India",
    category: "Open",
    amountPerYear: "₹50,000 / year",
    duration: "2 years",
    requiresDocs: [
      "10th marksheet",
      "Current year fee receipt",
      "Income certificate (if required)"
    ],
    redFlags: [
      "You scored below 70% in the last exam",
      "Your family income is above ₹8,00,000"
    ],
    difficulty: "competitive",
    deadline: "2025-12-12",
    lastUpdated: "2025-11-20",
    verified: false, // example: not yet admin-verified
    type: "merit",
    provider: "government",
    storyHighlight: "Designed for consistent performers, not just state-level toppers."
  },
  {
    id: "women-stem-global",
    name: "Women in STEM Global Grant",
    forYears: "UG / PG students in STEM fields",
    level: "UG+PG",
    field: "STEM",
    incomeMax: null,
    incomeBandLabel: "Need-sensitive, but no fixed income cut-off",
    location: "Global",
    category: "Women",
    amountPerYear: "$5,000 one-time",
    duration: "1 year",
    requiresDocs: [
      "Statement of purpose",
      "Transcript or mark sheets",
      "Proof of admission / enrollment",
      "1–2 recommendation letters"
    ],
    redFlags: [
      "You are not enrolled in a STEM programme",
      "You do not identify as a woman / non-binary (per scheme rules)",
      "You cannot get documents in English"
    ],
    difficulty: "competitive",
    deadline: "2026-01-10",
    lastUpdated: "2025-10-05",
    verified: true,
    type: "mixed",
    provider: "private",
    storyHighlight: "Good early-stage global exposure, even if you don’t get selected."
  },
  {
    id: "central-sector-college",
    name: "Central Sector Scholarship for College Students",
    forYears: "1st–3rd year UG students, any stream",
    level: "UG",
    field: "any",
    incomeMax: 450000,
    incomeBandLabel: "Family income below ₹4,50,000",
    location: "India",
    category: "Open",
    amountPerYear: "₹12,000 / year",
    duration: "3 years (renewable)",
    requiresDocs: [
      "12th board marksheet",
      "College admission proof",
      "Income certificate",
      "Bank passbook copy"
    ],
    redFlags: [
      "You already receive another central government scholarship",
      "Your percentage is below scheme cutoff for your board"
    ],
    difficulty: "competitive",
    deadline: "2025-11-30",
    lastUpdated: "2025-10-28",
    verified: true,
    type: "merit",
    provider: "government",
    storyHighlight:
      "Classic central government scholarship; works well with state-level support when rules allow."
  },
  {
    id: "state-post-matric-need",
    name: "State Post-Matric Scholarship (Need-based)",
    forYears: "UG students enrolled in recognised colleges in your state",
    level: "UG",
    field: "any",
    incomeMax: 250000,
    incomeBandLabel: "Family income below ₹2,50,000 (state-specific)",
    location: "India",
    category: "Reserved / Open (depends on state)",
    amountPerYear: "₹10,000–₹25,000 / year",
    duration: "Till course duration",
    requiresDocs: [
      "Caste / category certificate (if applicable)",
      "Income certificate (tehsildar / SDM)",
      "Bonafide certificate from college",
      "Bank account details"
    ],
    redFlags: [
      "You are studying in a non-recognised institution",
      "You submit documents after the state portal closing date"
    ],
    difficulty: "moderate",
    deadline: "2025-12-31",
    lastUpdated: "2025-11-05",
    verified: true,
    type: "need",
    provider: "government",
    storyHighlight:
      "Bread-and-butter support for many first-gen college students across states."
  },
  {
    id: "private-merit-cum-means-ug",
    name: "National Merit-cum-Means UG Scholarship",
    forYears: "1st–4th year UG, professional & non-professional",
    level: "UG",
    field: "any",
    incomeMax: 600000,
    incomeBandLabel: "Family income below ₹6,00,000",
    location: "India",
    category: "Open",
    amountPerYear: "₹40,000 / year",
    duration: "4 years",
    requiresDocs: [
      "Recent semester marksheet",
      "Income certificate",
      "College fee receipt",
      "One recommendation letter from faculty"
    ],
    redFlags: [
      "CGPA below 6.5 / 65%",
      "Large fee dues / academic backlog (scheme-specific)",
      "You already receive a high-value private scholarship"
    ],
    difficulty: "competitive",
    deadline: "2026-01-15",
    lastUpdated: "2025-11-30",
    verified: true,
    type: "mixed",
    provider: "private",
    storyHighlight:
      "Good balance between marks and need; many mid-tier engineering & commerce students qualify."
  },
  {
    id: "girls-engineering-local",
    name: "Women Engineers – Local City Scholarship",
    forYears: "1st–4th year B.E./B.Tech (girls only)",
    level: "UG",
    field: "STEM",
    incomeMax: 800000,
    incomeBandLabel: "Family income below ₹8,00,000",
    location: "India",
    category: "Women",
    amountPerYear: "₹60,000 / year",
    duration: "4 years",
    requiresDocs: [
      "10th & 12th marksheets",
      "Engineering admission proof",
      "Income certificate",
      "Basic personal statement"
    ],
    redFlags: [
      "You are not enrolled in an engineering course",
      "You are in final semester with no remaining fees"
    ],
    difficulty: "moderate",
    deadline: "2025-11-25",
    lastUpdated: "2025-10-10",
    verified: false,
    type: "mixed",
    provider: "private",
    storyHighlight:
      "Great for women engineers in Tier-2 / Tier-3 cities; covers a meaningful part of hostel or tuition."
  },
  {
    id: "global-ug-exchange",
    name: "Global UG Semester Exchange Scholarship",
    forYears: "2nd–3rd year UG students (any country partner)",
    level: "UG",
    field: "any",
    incomeMax: null,
    incomeBandLabel: "Open to all incomes; competitive selection",
    location: "Abroad",
    category: "Open",
    amountPerYear: "$3,000 travel + stipend",
    duration: "1 semester",
    requiresDocs: [
      "Language test (where applicable)",
      "Transcript (4+ semesters ideally)",
      "Nomination letter from college",
      "Exchange university offer letter"
    ],
    redFlags: [
      "No existing tie-up between your college and the partner university",
      "CGPA significantly below host university expectations"
    ],
    difficulty: "competitive",
    deadline: "2026-02-10",
    lastUpdated: "2025-10-18",
    verified: true,
    type: "merit",
    provider: "global",
    storyHighlight:
      "For students willing to take a bigger leap – often a life-changing exposure opportunity."
  }
];

// Improved quiz: 7 steps (added “existing support” question)
const quizSteps = [
  {
    key: "level",
    questionEN: "What is your current level?",
    questionHI: "आप अभी किस लेवल पर हैं?",
    options: [
      { value: "School", labelEN: "Class 11–12", labelHI: "कक्षा 11–12" },
      { value: "UG", labelEN: "Undergraduate (UG)", labelHI: "अंडरग्रेजुएट (UG)" },
      { value: "PG", labelEN: "Postgraduate (PG)", labelHI: "पोस्टग्रेजुएट (PG)" }
    ]
  },
  {
    key: "field",
    questionEN: "Which field are you in / planning for?",
    questionHI: "आप किस फील्ड में हैं / सोच रहे हैं?",
    options: [
      { value: "STEM", labelEN: "STEM (Engg, Science, CS, Math)", labelHI: "STEM (इंजीनियरिंग, साइंस, CS, मैथ्स)" },
      { value: "Commerce", labelEN: "Commerce / Management", labelHI: "कॉमर्स / मैनेजमेंट" },
      { value: "Arts", labelEN: "Arts / Humanities", labelHI: "Arts / Humanities" },
      { value: "any", labelEN: "Not sure / any field", labelHI: "पक्का नहीं / कोई भी फील्ड" }
    ]
  },
  {
    key: "income",
    questionEN: "Family income (annual, approx.)?",
    questionHI: "घर की सालाना आय (लगभग)?",
    options: [
      { value: "<3L", labelEN: "Below ₹3L", labelHI: "₹3 लाख से कम" },
      { value: "3-8L", labelEN: "₹3L–₹8L", labelHI: "₹3–8 लाख" },
      { value: ">8L", labelEN: "Above ₹8L", labelHI: "₹8 लाख से ज़्यादा" }
    ]
  },
  {
    key: "marks",
    questionEN: "How were your recent exam marks?",
    questionHI: "आपके हाल के एग्ज़ाम के मार्क्स कैसे थे?",
    options: [
      { value: "<60", labelEN: "Below 60%", labelHI: "60% से कम" },
      { value: "60-80", labelEN: "60% – 80%", labelHI: "60% – 80%" },
      { value: ">80", labelEN: "Above 80%", labelHI: "80% से ज़्यादा" }
    ]
  },
  {
    key: "location",
    questionEN: "Where will you study?",
    questionHI: "आप कहां पढ़ाई करेंगे?",
    options: [
      { value: "India", labelEN: "India", labelHI: "भारत" },
      { value: "Abroad", labelEN: "Outside India", labelHI: "भारत के बाहर" },
      { value: "Either", labelEN: "Either India or abroad", labelHI: "भारत या बाहर – दोनों ठीक हैं" }
    ]
  },
  {
    key: "existingSupport",
    questionEN: "Do you already receive any scholarship support?",
    questionHI: "क्या आपको पहले से कोई स्कॉलरशिप मिल रही है?",
    options: [
      { value: "none", labelEN: "No, nothing yet", labelHI: "नहीं, अभी कुछ नहीं" },
      { value: "partial", labelEN: "Yes, small support (partial fees)", labelHI: "हाँ, थोड़ी मदद (आधा / कुछ फीस)" },
      { value: "full", labelEN: "Yes, major support (most fees covered)", labelHI: "हाँ, ज़्यादातर फीस पहले से कवर है" }
    ]
  },
  {
    key: "pref",
    questionEN: "What do you want to focus on?",
    questionHI: "आप किस प्रकार की स्कॉलरशिप ज़्यादा देखना चाहते हैं?",
    options: [
      { value: "need", labelEN: "Need-based (income-focused)", labelHI: "नीड-बेस्ड (आय पर आधारित)" },
      { value: "merit", labelEN: "Merit-based (marks-focused)", labelHI: "मेरिट-बेस्ड (मार्क्स पर आधारित)" },
      { value: "any", labelEN: "Show me all types", labelHI: "सब प्रकार की दिखाएँ" }
    ]
  }
];

let quizAnswers = {};
let currentStep = 0;
let compareSelection = new Set();
let currentLang = "EN";

// ============ HELPERS ============

const $ = (id) => document.getElementById(id);

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function daysUntil(dateStr) {
  const today = new Date();
  const target = new Date(dateStr + "T23:59:59");
  const diffMs = target - today;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

// ============ THEME & PARENT MODE & LANG ============

function applyParentModeFromStorage() {
  const val = loadJSON(SB_STORAGE_KEYS.parentMode, false);
  if (val) document.body.classList.add("parent-mode");
  const toggle = $("parentModeToggle");
  if (toggle) toggle.checked = !!val;
}

function toggleParentMode(val) {
  if (val) document.body.classList.add("parent-mode");
  else document.body.classList.remove("parent-mode");
  saveJSON(SB_STORAGE_KEYS.parentMode, !!val);
}

function applyLangFromStorage() {
  const stored = loadJSON(SB_STORAGE_KEYS.lang, "EN");
  currentLang = stored === "HI" ? "HI" : "EN";
  const btn = $("langToggleBtn");
  if (btn) btn.textContent = currentLang === "EN" ? "🌐 EN" : "🌐 HI";

  const quizTitle = $("quizTitle");
  const quizSubtitle = $("quizSubtitle");
  if (quizTitle && quizSubtitle) {
    if (currentLang === "HI") {
      quizTitle.textContent = "अपनी स्थिति बताइए";
      quizSubtitle.textContent =
        "6–7 छोटे सवालों के जवाब दें और देखें कि आपके लिए कौन-सी स्कॉलरशिप ज़्यादा फिट हैं।";
    } else {
      quizTitle.textContent = "Tell us about your current situation";
      quizSubtitle.textContent =
        "6–7 quick questions. No documents needed – just profile details. You can change answers later.";
    }
  }
}

function toggleLang() {
  currentLang = currentLang === "EN" ? "HI" : "EN";
  saveJSON(SB_STORAGE_KEYS.lang, currentLang);
  applyLangFromStorage();
  if (document.body.classList.contains("page-quiz")) {
    renderQuizStep(currentStep);
  }
}

function applyThemeFromStorage() {
  const stored = loadJSON(SB_STORAGE_KEYS.theme, "light");
  const theme = stored === "dark" ? "dark" : "light";
  if (theme === "dark") document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");

  const btn = $("themeToggleBtn");
  if (btn) btn.textContent = theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  saveJSON(SB_STORAGE_KEYS.theme, isDark ? "dark" : "light");
  applyThemeFromStorage();
}

// ============ QUIZ LOGIC ============

function currentIncomeMax(band) {
  if (band === "<3L") return 300000;
  if (band === "3-8L") return 800000;
  return Infinity;
}

function computeFit(s, answers) {
  let score = 0;

  // Level
  if (s.level === "UG+PG") {
    if (answers.level === "UG" || answers.level === "PG") score += 2;
  } else if (s.level === "School" && answers.level === "School") {
    score += 2;
  } else if (s.level === answers.level) {
    score += 2;
  }

  // Field
  if (s.field === "any" || answers.field === "any") score += 1;
  else if (s.field === answers.field) score += 2;

  // Income vs need-based
  const userMax = currentIncomeMax(answers.income);
  if (s.incomeMax == null) {
    score += 1; // no strict cap
  } else if (userMax <= s.incomeMax) {
    score += 2;
  }

  // Marks vs merit-based
  if (s.type === "merit") {
    if (answers.marks === ">80") score += 3;
    else if (answers.marks === "60-80") score += 2;
  } else if (s.type === "need") {
    if (answers.income === "<3L") score += 3;
    else if (answers.income === "3-8L") score += 2;
  } else {
    score += 1;
  }

  // Location
  if (answers.location === "Either") {
    score += 1;
  } else if (answers.location === s.location) {
    score += 2;
  } else if (s.location === "Global" && answers.location === "Abroad") {
    score += 2;
  }

  // Existing support (many need-based schemes avoid double funding)
  if (answers.existingSupport) {
    if (answers.existingSupport === "none" && s.type === "need") {
      score += 2;
    } else if (answers.existingSupport === "full" && s.type === "need") {
      score -= 2;
    }
  }

  // Preference
  if (answers.pref && answers.pref !== "any") {
    if (answers.pref === s.type) score += 2;
  }

  let label;
  if (score >= 10) label = "Very likely eligible";
  else if (score >= 6) label = "Good fit – check carefully";
  else label = "Unclear – read rules carefully";

  return { score, label };
}

function renderQuizStep(stepIndex) {
  const step = quizSteps[stepIndex];
  if (!step) return;
  const body = $("wizardBody");
  const langKey = currentLang === "HI" ? "HI" : "EN";

  body.innerHTML = "";
  const q = document.createElement("div");
  q.className = "wizard-question";
  q.textContent = step["question" + langKey];
  body.appendChild(q);

  const row = document.createElement("div");
  row.className = "options-row";

  step.options.forEach((opt) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = opt["label" + langKey];
    if (quizAnswers[step.key] === opt.value) chip.classList.add("selected");

    chip.addEventListener("click", () => {
      quizAnswers[step.key] = opt.value;
      [...row.children].forEach((c) => c.classList.remove("selected"));
      chip.classList.add("selected");
    });
    row.appendChild(chip);
  });

  body.appendChild(row);

  const stepLabel = $("stepLabel");
  if (stepLabel)
    stepLabel.textContent = `Step ${stepIndex + 1} of ${quizSteps.length}`;

  const dots = document.querySelectorAll("[data-step-dot]");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i <= stepIndex);
  });

  const progress = ((stepIndex + 1) / quizSteps.length) * 100;
  const progFill = $("wizardProgressFill");
  if (progFill) progFill.style.width = progress + "%";

  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  if (prevBtn) prevBtn.disabled = stepIndex === 0;
  if (nextBtn)
    nextBtn.textContent =
      stepIndex === quizSteps.length - 1
        ? currentLang === "HI"
          ? "स्कॉलरशिप देखें"
          : "See scholarships"
        : currentLang === "HI"
        ? "आगे"
        : "Next";
}

// ============ SCHOLARSHIP RENDERING ============

function renderScholarshipList(containerId, opts = {}) {
  const el = $(containerId);
  if (!el) return;

  const quiz = loadJSON(SB_STORAGE_KEYS.quiz, null);
  const filters = opts.filters || {};
  let list = scholarships.map((s) => ({ ...s }));

  // Compute fit if quiz available
  if (quiz) {
    list = list
      .map((s) => {
        const { score, label } = computeFit(s, quiz);
        return { ...s, fitScore: score, fitLabel: label };
      })
      .sort((a, b) => (b.fitScore || 0) - (a.fitScore || 0));
  }

  // Apply filters
  if (filters.level && filters.level !== "any") {
    list = list.filter((s) =>
      filters.level === "UG"
        ? s.level === "UG" || s.level === "UG+PG"
        : filters.level === "PG"
        ? s.level === "UG+PG"
        : s.level === "School"
    );
  }
  if (filters.location && filters.location !== "any") {
    list = list.filter(
      (s) => s.location === filters.location || s.location === "Global"
    );
  }
  if (filters.difficulty && filters.difficulty !== "any") {
    list = list.filter((s) => s.difficulty === filters.difficulty);
  }
  if (filters.type && filters.type !== "any") {
    list = list.filter((s) => s.type === filters.type);
  }
  if (filters.provider && filters.provider !== "any") {
    list = list.filter((s) => s.provider === filters.provider);
  }
  if (filters.verified && filters.verified !== "any") {
    list = list.filter((s) =>
      filters.verified === "verified" ? s.verified : !s.verified
    );
  }
  if (filters.search && filters.search.trim().length > 0) {
    const q = filters.search.toLowerCase();
    list = list.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.forYears.toLowerCase().includes(q)
    );
  }

  const savedIds = new Set(loadJSON(SB_STORAGE_KEYS.saved, []));

  el.innerHTML = "";
  if (!list.length) {
    el.innerHTML =
      '<p class="muted-text">No scholarships match these filters. Try broadening your search.</p>';
    return;
  }

  list.forEach((s) => {
    const card = document.createElement("article");
    card.className = "scholarship-card";

    if (s.fitLabel?.startsWith("Very")) card.classList.add("fit-very-likely");
    else if (s.fitLabel?.startsWith("Good")) card.classList.add("fit-good");
    else if (s.fitLabel) card.classList.add("fit-unclear");

    const top = document.createElement("div");
    top.className = "scholarship-top";

    const left = document.createElement("div");
    const name = document.createElement("div");
    name.className = "scholarship-name";
    name.textContent = s.name;
    const small = document.createElement("div");
    small.className = "scholarship-small";
    small.textContent = `${s.forYears} • ${s.amountPerYear} • ${s.duration}`;
    left.appendChild(name);
    left.appendChild(small);

    const right = document.createElement("div");
    right.className = "scholarship-meta-right";

    if (s.fitLabel) {
      const fitBadge = document.createElement("div");
      fitBadge.className = "badge";
      if (s.fitLabel.startsWith("Very")) fitBadge.classList.add("badge-success");
      else if (s.fitLabel.startsWith("Good")) fitBadge.classList.add("badge-warning");
      else fitBadge.classList.add("badge-danger");
      fitBadge.textContent = s.fitLabel;
      right.appendChild(fitBadge);
    }

    const days = daysUntil(s.deadline);
    const dLabel = document.createElement("div");
    dLabel.className = "scholarship-small";
    dLabel.textContent =
      days < 0 ? "Closed" : `Deadline in ${days} day${days === 1 ? "" : "s"}`;
    if (days >= 0 && days <= 7) dLabel.classList.add("deadline-soon");
    right.appendChild(dLabel);

    top.appendChild(left);
    top.appendChild(right);

    const tagsRow = document.createElement("div");
    tagsRow.className = "scholarship-tags";

    const t1 = document.createElement("span");
    t1.className = "tag";
    t1.textContent =
      s.difficulty === "competitive" ? "Competitive" : "Moderate difficulty";
    tagsRow.appendChild(t1);

    const t2 = document.createElement("span");
    t2.className = "tag-soft";
    t2.textContent =
      s.type === "need"
        ? "Need-based"
        : s.type === "merit"
        ? "Merit-based"
        : "Need + merit mix";
    tagsRow.appendChild(t2);

    const t3 = document.createElement("span");
    t3.className = "tag-soft";
    t3.textContent =
      `${s.location} • ${
        s.provider === "government"
          ? "Government"
          : s.provider === "private"
          ? "Private / NGO"
          : "Global"
      }`;
    tagsRow.appendChild(t3);

    const t4 = document.createElement("span");
    t4.className = "tag-soft";
    t4.textContent = s.incomeBandLabel;
    tagsRow.appendChild(t4);

    const verifyTag = document.createElement("span");
    verifyTag.className = "tag";
    if (s.verified) {
      verifyTag.textContent = "✅ Verified by admin";
    } else {
      verifyTag.textContent = "⚠ Not verified yet";
      verifyTag.classList.add("tag-warning");
    }
    tagsRow.appendChild(verifyTag);

    const footer = document.createElement("div");
    footer.className = "scholarship-footer";

    const leftFoot = document.createElement("div");
    leftFoot.className = "scholarship-small";
    leftFoot.textContent = s.storyHighlight;

    const rightFoot = document.createElement("div");
    rightFoot.className = "scholarship-footer-right";

    const explainBtn = document.createElement("button");
    explainBtn.className = "btn btn-outline btn-sm";
    explainBtn.textContent = "Explain eligibility";
    explainBtn.addEventListener("click", () => openModalExplain(s, s.fitLabel || ""));

    const saveBtn = document.createElement("button");
    saveBtn.className = "btn btn-primary btn-sm";
    saveBtn.textContent = savedIds.has(s.id) ? "Saved" : "Save";
    saveBtn.addEventListener("click", () => {
      const saved = new Set(loadJSON(SB_STORAGE_KEYS.saved, []));
      if (saved.has(s.id)) saved.delete(s.id);
      else saved.add(s.id);
      saveJSON(SB_STORAGE_KEYS.saved, [...saved]);
      renderScholarshipList(containerId, opts);
      if (document.body.classList.contains("page-dashboard")) {
        renderDashboardSaved();
      }
    });

    const compareBtn = document.createElement("button");
    compareBtn.className = "btn btn-ghost btn-sm";
    compareBtn.textContent = compareSelection.has(s.id)
      ? "Remove from compare"
      : "Compare";
    compareBtn.addEventListener("click", () => {
      if (compareSelection.has(s.id)) compareSelection.delete(s.id);
      else {
        if (compareSelection.size >= 3) {
          alert("You can compare up to 3 scholarships at a time.");
          return;
        }
        compareSelection.add(s.id);
      }
      renderScholarshipList(containerId, opts);
      renderCompareDrawer();
    });

    rightFoot.appendChild(explainBtn);
    rightFoot.appendChild(saveBtn);
    rightFoot.appendChild(compareBtn);

    footer.appendChild(leftFoot);
    footer.appendChild(rightFoot);

    card.appendChild(top);
    card.appendChild(tagsRow);
    card.appendChild(footer);

    el.appendChild(card);
  });

  renderCompareDrawer();
}

// ============ MODAL ============

function openModalExplain(s, fitLabel) {
  const backdrop = $("modalBackdrop");
  if (!backdrop) return;
  $("modalTitle").textContent = s.name;
  $("modalSubtitle").textContent = `${s.forYears} • ${s.amountPerYear} • ${s.duration}`;

  const fitTag = $("modalFitTag");
  fitTag.textContent = fitLabel || "Check eligibility";
  fitTag.className = "badge";
  if (fitLabel.startsWith("Very")) fitTag.classList.add("badge-success");
  else if (fitLabel.startsWith("Good")) fitTag.classList.add("badge-warning");
  else fitTag.classList.add("badge-danger");

  $("modalEligibility").innerHTML =
    `<h3>Plain-language eligibility</h3>
     <p>For: ${s.forYears}</p>
     <p>Income: ${s.incomeBandLabel}</p>
     <p>Type: ${
       s.type === "need"
         ? "Need-based"
         : s.type === "merit"
         ? "Merit-based"
         : "Need + merit mix"
     }</p>`;

  $("modalDocs").innerHTML =
    "<h3>What you’ll need</h3><ul class='hint-list'>" +
    s.requiresDocs.map((d) => `<li>${d}</li>`).join("") +
    "</ul>";

  $("modalRedFlags").innerHTML =
    "<h3>You may not be eligible if…</h3><ul class='hint-list'>" +
    s.redFlags.map((r) => `<li>${r}</li>`).join("") +
    "</ul>";

  $("modalTrust").innerHTML =
    `<h3>Trust & freshness</h3>
     <p>${s.verified ? "✅ This record is marked as verified by an admin." : "⚠ This record is not yet verified by our team."}</p>
     <p>Last updated: ${s.lastUpdated}</p>`;

  backdrop.classList.add("show");
  backdrop.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const backdrop = $("modalBackdrop");
  if (!backdrop) return;
  backdrop.classList.remove("show");
  backdrop.setAttribute("aria-hidden", "true");
}

// ============ COMPARE DRAWER ============

function renderCompareDrawer() {
  const drawer = $("compareDrawer");
  const table = $("compareTable");
  if (!drawer || !table) return;

  if (compareSelection.size === 0) {
    drawer.style.display = "none";
    table.innerHTML = "";
    return;
  }

  drawer.style.display = "block";
  const selected = scholarships.filter((s) => compareSelection.has(s.id));
  const headers = [
    "Scholarship",
    "Type",
    "Provider",
    "Amount",
    "Duration",
    "Difficulty",
    "Docs (summary)",
    "Eligibility summary"
  ];

  table.innerHTML = "";
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  headers.forEach((h) => {
    const th = document.createElement("th");
    th.textContent = h;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  selected.forEach((s) => {
    const row = document.createElement("tr");
    const providerLabel =
      s.provider === "government"
        ? "Government"
        : s.provider === "private"
        ? "Private / NGO"
        : "Global";
    const typeLabel =
      s.type === "need"
        ? "Need-based"
        : s.type === "merit"
        ? "Merit-based"
        : "Mixed";

    const cells = [
      s.name,
      typeLabel,
      providerLabel,
      s.amountPerYear,
      s.duration,
      s.difficulty === "competitive" ? "Competitive" : "Moderate",
      `${s.requiresDocs[0]} + ${s.requiresDocs.length - 1} more`,
      `${s.forYears}; ${s.incomeBandLabel}`
    ];
    cells.forEach((val) => {
      const td = document.createElement("td");
      td.textContent = val;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
}

// ============ DEADLINES ============

function renderDeadlineList(containerId, list) {
  const el = $(containerId);
  if (!el) return;
  el.innerHTML = "";
  list
    .slice()
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .forEach((s) => {
      const div = document.createElement("div");
      div.className = "deadline-item";
      const left = document.createElement("span");
      left.textContent = s.name;
      const right = document.createElement("span");
      const d = daysUntil(s.deadline);
      right.textContent = d < 0 ? "Closed" : `${d} days left`;
      if (d >= 0 && d <= 7) {
        right.classList.add("deadline-soon");
      }
      div.appendChild(left);
      div.appendChild(right);
      el.appendChild(div);
    });
}

// ============ CHECKLIST (PERSONALISED) ============

function buildChecklistFromSaved() {
  const container = $("checklist");
  if (!container) return;
  const hint = $("checklistHint");
  const savedIds = new Set(loadJSON(SB_STORAGE_KEYS.saved, []));
  const saved = scholarships.filter((s) => savedIds.has(s.id));
  const savedState = loadJSON(SB_STORAGE_KEYS.checklist, {});

  let items = [];
  if (saved.length) {
    const docsSet = new Set();
    saved.forEach((s) => s.requiresDocs.forEach((d) => docsSet.add(d)));
    items = Array.from(docsSet);
    if (hint)
      hint.textContent =
        "Checklist built from documents required across the scholarships you’ve saved.";
  } else {
    items = [
      "Create account on official scholarship portal",
      "Upload 10th & 12th marksheets or latest semester marks",
      "Upload income certificate (latest financial year)",
      "Get college bonafide certificate",
      "Check bank details for Direct Benefit Transfer (DBT)"
    ];
    if (hint)
      hint.textContent =
        "Generic checklist – once you save scholarships, this becomes personalised based on their document requirements.";
  }

  container.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.className = "checklist-item";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!savedState[text];

    cb.addEventListener("change", () => {
      const st = loadJSON(SB_STORAGE_KEYS.checklist, {});
      st[text] = cb.checked;
      saveJSON(SB_STORAGE_KEYS.checklist, st);
      updateChecklistProgress();
    });

    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(cb);
    li.appendChild(span);
    container.appendChild(li);
  });

  updateChecklistProgress();
}

function renderChecklist() {
  // For backward compatibility, just build from saved
  buildChecklistFromSaved();
}

function updateChecklistProgress() {
  const checkboxes = document.querySelectorAll(
    "#checklist input[type='checkbox']"
  );
  if (!checkboxes.length) return;
  let done = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) done++;
  });
  const total = checkboxes.length;
  const percent = Math.round((done / total) * 100);
  const fill = $("checklistProgressFill");
  const label = $("checklistProgressLabel");
  if (fill) fill.style.width = percent + "%";
  if (label) label.textContent = `${percent}% ready to apply`;
}

// ============ DASHBOARD (SAVED) ============

function renderDashboardSaved() {
  const container = $("savedList");
  if (!container) return;
  const savedIds = new Set(loadJSON(SB_STORAGE_KEYS.saved, []));
  const saved = scholarships.filter((s) => savedIds.has(s.id));

  container.innerHTML = "";
  if (!saved.length) {
    container.innerHTML =
      '<p class="muted-text">You haven’t saved any scholarships yet. Go to the “Scholarships” page and tap “Save”.</p>';
    renderDeadlineList("dashboardDeadlines", []);
    buildChecklistFromSaved();
    return;
  }

  saved.forEach((s) => {
    const div = document.createElement("div");
    div.className = "scholarship-card scholarship-card--mini";

    const left = document.createElement("div");
    const title = document.createElement("div");
    title.className = "scholarship-name";
    title.textContent = s.name;

    const small = document.createElement("div");
    small.className = "scholarship-small";
    const d = daysUntil(s.deadline);
    small.textContent = `${s.forYears} • Deadline: ${
      d < 0 ? "Closed" : d + " days left"
    }`;

    left.appendChild(title);
    left.appendChild(small);

    const right = document.createElement("div");
    right.className = "scholarship-meta-right";

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-ghost btn-xs";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      const current = new Set(loadJSON(SB_STORAGE_KEYS.saved, []));
      current.delete(s.id);
      saveJSON(SB_STORAGE_KEYS.saved, [...current]);
      renderDashboardSaved();
    });

    right.appendChild(removeBtn);

    div.appendChild(left);
    div.appendChild(right);
    container.appendChild(div);
  });

  renderDeadlineList("dashboardDeadlines", saved);
  buildChecklistFromSaved();
}

// ============ CONTACT PAGE ============

function initContactPage() {
  const form = $("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "This is a demo. In a real portal, this form would send your query to the Scholarship Buddy team."
    );
    form.reset();
  });
}

// ============ PAGE INITIALISERS ============

function initLandingPage() {
  // static content for now
}

function initQuizPage() {
  quizAnswers = loadJSON(SB_STORAGE_KEYS.quiz, {});
  currentStep = 0;
  renderQuizStep(currentStep);

  const nextBtn = $("nextBtn");
  const prevBtn = $("prevBtn");
  const resetBtn = $("resetQuizBtn");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const step = quizSteps[currentStep];
      if (!quizAnswers[step.key]) {
        alert("Please choose an option to continue.");
        return;
      }
      if (currentStep < quizSteps.length - 1) {
        currentStep++;
        renderQuizStep(currentStep);
      } else {
        saveJSON(SB_STORAGE_KEYS.quiz, quizAnswers);
        window.location.href = "scholarships.html";
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        renderQuizStep(currentStep);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      quizAnswers = {};
      currentStep = 0;
      renderQuizStep(currentStep);
    });
  }
}

function initScholarshipsPage() {
  const quiz = loadJSON(SB_STORAGE_KEYS.quiz, null);
  if (!quiz) {
    const msg = $("noQuizMsg");
    if (msg) msg.style.display = "block";
  }

  const levelFilter = $("filterLevel");
  const locFilter = $("filterLocation");
  const diffFilter = $("filterDifficulty");
  const typeFilter = $("filterType");
  const providerFilter = $("filterProvider");
  const verifiedFilter = $("filterVerified");
  const searchInput = $("filterSearch");

  function currentFilters() {
    return {
      level: levelFilter?.value || "any",
      location: locFilter?.value || "any",
      difficulty: diffFilter?.value || "any",
      type: typeFilter?.value || "any",
      provider: providerFilter?.value || "any",
      verified: verifiedFilter?.value || "any",
      search: searchInput?.value || ""
    };
  }

  function rerender() {
    renderScholarshipList("scholarshipList", { filters: currentFilters() });
    renderDeadlineList("deadlineList", scholarships);
  }

  [levelFilter, locFilter, diffFilter, typeFilter, providerFilter, verifiedFilter].forEach(
    (el) => {
      if (!el) return;
      el.addEventListener("change", rerender);
    }
  );
  if (searchInput) {
    searchInput.addEventListener("input", rerender);
  }

  const clearCompareBtn = $("clearCompareBtn");
  if (clearCompareBtn) {
    clearCompareBtn.addEventListener("click", () => {
      compareSelection = new Set();
      rerender();
      renderCompareDrawer();
    });
  }

  rerender();
}

function initDashboardPage() {
  renderDashboardSaved();
  renderChecklist(); // builds personalised or generic checklist
}

function initAuthPage() {
  const loginForm = $("loginForm");
  const signupForm = $("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demo only: login would validate and redirect in a real app.");
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demo only: sign-up would create an account in a real app.");
    });
  }
}

// ============ GLOBAL EVENTS ============

document.addEventListener("DOMContentLoaded", () => {
  applyParentModeFromStorage();
  applyLangFromStorage();
  applyThemeFromStorage();

  const parentToggle = $("parentModeToggle");
  if (parentToggle) {
    parentToggle.addEventListener("change", (e) => toggleParentMode(e.target.checked));
  }

  const langBtn = $("langToggleBtn");
  if (langBtn) langBtn.addEventListener("click", toggleLang);

  const themeBtn = $("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const modalCloseBtn = $("modalCloseBtn");
  const backdrop = $("modalBackdrop");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (document.body.classList.contains("page-landing")) initLandingPage();
  if (document.body.classList.contains("page-quiz")) initQuizPage();
  if (document.body.classList.contains("page-scholarships")) initScholarshipsPage();
  if (document.body.classList.contains("page-dashboard")) initDashboardPage();
  if (document.body.classList.contains("page-contact")) initContactPage();
  if (document.body.classList.contains("page-auth")) initAuthPage();
});
