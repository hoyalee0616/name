const STYLE_LABELS = {
  modern: "세련된 도시감",
  soft: "부드럽고 맑은 인상",
  classic: "단정한 클래식",
  smart: "지적인 분위기"
};

const TRAIT_LABELS = {
  wisdom: "지혜",
  warmth: "따뜻함",
  clarity: "맑음",
  grace: "품격",
  joy: "기쁨",
  strength: "강인함"
};

const CHOSUNG = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

const NAME_PARTS = {
  first: [
    { syllable: "서", meanings: ["상서로움", "세련된 시작"], styles: ["modern", "soft"], traits: ["clarity", "grace", "wisdom"], genders: ["girl", "neutral"] },
    { syllable: "하", meanings: ["높고 넓음", "맑은 흐름"], styles: ["modern", "soft"], traits: ["clarity", "joy", "warmth"], genders: ["girl", "boy", "neutral"] },
    { syllable: "윤", meanings: ["빛남", "반듯함"], styles: ["classic", "smart"], traits: ["wisdom", "grace"], genders: ["girl", "boy", "neutral"] },
    { syllable: "지", meanings: ["지혜", "깊이"], styles: ["smart", "classic"], traits: ["wisdom", "clarity"], genders: ["girl", "boy", "neutral"] },
    { syllable: "도", meanings: ["바른 길", "단단함"], styles: ["smart", "classic"], traits: ["strength", "wisdom"], genders: ["boy", "neutral"] },
    { syllable: "이", meanings: ["아름다움", "이로움"], styles: ["soft", "classic"], traits: ["warmth", "grace"], genders: ["girl", "neutral"] },
    { syllable: "준", meanings: ["준수함", "반듯함"], styles: ["modern", "smart"], traits: ["strength", "clarity"], genders: ["boy", "neutral"] },
    { syllable: "가", meanings: ["아름다움", "집안의 빛"], styles: ["modern", "soft"], traits: ["joy", "grace"], genders: ["girl", "neutral"] },
    { syllable: "시", meanings: ["시작", "맑은 기운"], styles: ["modern", "soft"], traits: ["clarity", "joy"], genders: ["girl", "neutral"] },
    { syllable: "태", meanings: ["크고 안정됨", "넓은 품"], styles: ["classic", "smart"], traits: ["strength", "grace"], genders: ["boy", "neutral"] }
  ],
  second: [
    { syllable: "윤", meanings: ["빛남", "균형"], styles: ["modern", "classic"], traits: ["clarity", "wisdom", "grace"], genders: ["girl", "boy", "neutral"] },
    { syllable: "아", meanings: ["우아함", "부드러움"], styles: ["soft", "modern"], traits: ["warmth", "joy", "grace"], genders: ["girl", "neutral"] },
    { syllable: "린", meanings: ["맑은 울림", "세련미"], styles: ["modern", "soft"], traits: ["clarity", "joy"], genders: ["girl", "neutral"] },
    { syllable: "우", meanings: ["넓은 세계", "도움"], styles: ["smart", "classic"], traits: ["strength", "warmth"], genders: ["boy", "neutral"] },
    { syllable: "서", meanings: ["고요한 품위", "정제됨"], styles: ["classic", "modern"], traits: ["grace", "clarity"], genders: ["girl", "neutral"] },
    { syllable: "원", meanings: ["근원", "포용"], styles: ["classic", "smart"], traits: ["warmth", "wisdom"], genders: ["boy", "girl", "neutral"] },
    { syllable: "율", meanings: ["조화", "리듬"], styles: ["modern", "smart"], traits: ["clarity", "strength"], genders: ["boy", "neutral"] },
    { syllable: "현", meanings: ["밝고 슬기로움", "또렷함"], styles: ["smart", "classic"], traits: ["wisdom", "clarity"], genders: ["boy", "girl", "neutral"] },
    { syllable: "온", meanings: ["온전함", "따뜻함"], styles: ["soft", "modern"], traits: ["warmth", "joy"], genders: ["girl", "boy", "neutral"] },
    { syllable: "재", meanings: ["재능", "존재감"], styles: ["smart", "modern"], traits: ["strength", "wisdom"], genders: ["boy", "girl", "neutral"] }
  ]
};

const SPECIAL_NAMES = {
  neutral: [
    { name: "지우", note: "남녀 모두 자연스럽게 쓰이는 대표 중성 이름", accent: "밸런스형" },
    { name: "연우", note: "부드럽고 시적인 감성으로 성별 편향이 적음", accent: "감성형" },
    { name: "서우", note: "짧고 가벼운 발음으로 최근 선호도가 높음", accent: "트렌드형" },
    { name: "지안", note: "선명한 발음과 도시적인 무드를 함께 가짐", accent: "도시형" }
  ],
  pure: [
    { name: "라온", note: "즐거운을 뜻하는 우리말 계열 이름", accent: "밝은 인상" },
    { name: "가온", note: "중심이라는 의미로 상징성이 강함", accent: "상징형" },
    { name: "새봄", note: "계절성과 생기를 담아 감성적인 인상이 강함", accent: "계절형" },
    { name: "다온", note: "좋은 기운이 다 온다는 의미로 선호도가 높음", accent: "따뜻한 의미" }
  ],
  unique: [
    { name: "로운", note: "간결하지만 흔하지 않아 존재감이 강함", accent: "희소형" },
    { name: "새봄", note: "한글 이름 특유의 독창성이 살아남", accent: "우리말형" },
    { name: "태이", note: "짧지만 리듬이 독특한 이름 구조", accent: "리듬형" },
    { name: "시온", note: "또렷하고 상징적인 울림으로 차별화됨", accent: "개성형" }
  ],
  long: [
    { name: "서하윤", note: "세 음절의 부드러운 리듬이 매력적", accent: "부드러운 확장" },
    { name: "이도현", note: "단정한 분위기의 세 음절 구성", accent: "정제형" },
    { name: "한새봄", note: "우리말 감성을 길게 확장한 구조", accent: "자연형" },
    { name: "윤시아", note: "반짝이는 리듬을 가진 세 음절 이름", accent: "트렌디형" }
  ]
};

// ── 오행(五行) 소리오행 데이터 ──────────────────────────────
const CHOSUNG_OHAENG = {
  "ㄱ": "木", "ㅋ": "木", "ㄲ": "木",
  "ㄴ": "火", "ㄷ": "火", "ㄹ": "火", "ㅌ": "火", "ㄸ": "火",
  "ㅇ": "土", "ㅎ": "土",
  "ㅅ": "金", "ㅈ": "金", "ㅊ": "金", "ㅆ": "金", "ㅉ": "金",
  "ㅁ": "水", "ㅂ": "水", "ㅍ": "水", "ㅃ": "水"
};

const OHAENG = {
  "木": {
    name: "木(목)", element: "나무", cssClass: "ohaeng-mok",
    season: "봄", trait: "성장·창의·인자함",
    desc: "새 시작과 성장의 기운이에요. 창의적이고 따뜻한 품성의 이름과 잘 어울려요.",
    chosungs: ["ㄱ", "ㅋ"],
    syllables: ["가", "강", "건", "경", "겸", "계", "고", "광", "구", "기", "길", "균", "규", "근"],
    names: {
      girl:    [{ name: "가은",  meaning: "木 기운으로 따뜻하게 자라나는 이름이에요." },
                { name: "경서",  meaning: "木의 성장 에너지와 金의 명료함이 어우러져요." },
                { name: "기림",  meaning: "木 기운이 담긴 곧고 창의적인 이름이에요." }],
      boy:     [{ name: "건우",  meaning: "木의 힘찬 기운으로 건강하게 자라날 이름이에요." },
                { name: "규원",  meaning: "木 기운이 담긴 곧고 바른 이름이에요." },
                { name: "강민",  meaning: "木의 생명력이 넘치는 힘찬 이름이에요." }],
      neutral: [{ name: "기온",  meaning: "木 기운이 담겨 싱그럽고 온화한 인상이에요." },
                { name: "가온",  meaning: "木의 중심 에너지로 든든하게 자라날 이름이에요." },
                { name: "규린",  meaning: "木 기운의 균형 잡힌 감성적인 이름이에요." }]
    }
  },
  "火": {
    name: "火(화)", element: "불", cssClass: "ohaeng-hwa",
    season: "여름", trait: "열정·밝음·예의",
    desc: "활기차고 빛나는 기운이에요. 열정적이고 밝은 인상의 이름에서 이 기운이 느껴져요.",
    chosungs: ["ㄴ", "ㄷ", "ㄹ", "ㅌ"],
    syllables: ["나", "남", "달", "단", "담", "대", "도", "동", "라", "래", "련", "린", "태", "탄"],
    names: {
      girl:    [{ name: "다온",  meaning: "火 기운으로 밝은 빛이 가득 찾아오는 이름이에요." },
                { name: "라온",  meaning: "火 기운이 담긴 즐겁고 활기찬 우리말 이름이에요." },
                { name: "린아",  meaning: "火 기운이 담겨 밝고 상냥한 인상이에요." }],
      boy:     [{ name: "도윤",  meaning: "火의 열정 기운으로 빛나는 이름이에요." },
                { name: "태이",  meaning: "火 기운이 주가 되어 크게 빛날 이름이에요." },
                { name: "단우",  meaning: "火의 뚜렷한 기운이 든든함과 어우러져요." }],
      neutral: [{ name: "라온",  meaning: "火 기운이 담겨 즐겁고 빛나는 우리말 이름이에요." },
                { name: "달이",  meaning: "火 기운으로 따뜻하게 빛나는 달빛 같은 이름이에요." },
                { name: "다린",  meaning: "火의 열정 기운이 맑게 흐르는 이름이에요." }]
    }
  },
  "土": {
    name: "土(토)", element: "흙", cssClass: "ohaeng-to",
    season: "환절기", trait: "믿음·안정·포용",
    desc: "든든하고 안정된 기운이에요. 신뢰감을 주고 포용력 있는 이름에서 이 기운이 느껴져요.",
    chosungs: ["ㅇ", "ㅎ"],
    syllables: ["아", "안", "연", "예", "온", "원", "유", "은", "이", "인", "야", "윤", "율", "현", "하", "혜", "한", "호", "향", "희"],
    names: {
      girl:    [{ name: "예온",  meaning: "土 기운이 담겨 따뜻한 품격을 가진 이름이에요." },
                { name: "하윤",  meaning: "土의 안정 기운이 하늘의 맑음과 어우러져요." },
                { name: "연아",  meaning: "土 기운으로 포근하고 사랑스러운 이름이에요." }],
      boy:     [{ name: "윤서",  meaning: "土 기운으로 안정적이고 믿음직한 이름이에요." },
                { name: "현우",  meaning: "土 기운이 담겨 밝고 신뢰감을 주는 이름이에요." },
                { name: "인호",  meaning: "土의 포용 기운으로 사람을 끌어당기는 이름이에요." }],
      neutral: [{ name: "연우",  meaning: "土 기운으로 포근하고 든든한 인상이에요." },
                { name: "이안",  meaning: "土의 포용 기운으로 편안한 인상을 줘요." },
                { name: "온유",  meaning: "土 기운이 담겨 온화하고 부드러운 이름이에요." }]
    }
  },
  "金": {
    name: "金(금)", element: "쇠", cssClass: "ohaeng-geum",
    season: "가을", trait: "의지·결단·청렴",
    desc: "날카롭고 분명한 기운이에요. 의지가 강하고 깔끔한 인상의 이름과 연결돼요.",
    chosungs: ["ㅅ", "ㅈ", "ㅊ"],
    syllables: ["서", "성", "수", "시", "솔", "새", "선", "세", "소", "준", "재", "정", "지", "진", "찬", "채", "청", "초", "천"],
    names: {
      girl:    [{ name: "서연",  meaning: "金 기운으로 선명하고 정갈한 인상이에요." },
                { name: "수아",  meaning: "金의 결단 기운이 부드러운 인상과 어울려요." },
                { name: "채아",  meaning: "金 기운의 빛나고 아름다운 이름이에요." }],
      boy:     [{ name: "지우",  meaning: "金의 명료함이 지혜와 함께 빛나는 이름이에요." },
                { name: "준서",  meaning: "金 기운의 반듯하고 곧은 인상을 담아요." },
                { name: "찬이",  meaning: "金 기운으로 빛나고 의지가 굳건한 이름이에요." }],
      neutral: [{ name: "시윤",  meaning: "金 기운이 맑고 또렷한 개성을 만들어요." },
                { name: "서온",  meaning: "金의 선명함이 土의 온화함과 만나는 이름이에요." },
                { name: "진이",  meaning: "金 기운의 진실하고 곧은 인상을 담아요." }]
    }
  },
  "水": {
    name: "水(수)", element: "물", cssClass: "ohaeng-su",
    season: "겨울", trait: "지혜·유연·사려",
    desc: "깊고 유연한 기운이에요. 사려 깊고 지혜로운 느낌의 이름에서 이 기운이 흘러요.",
    chosungs: ["ㅁ", "ㅂ", "ㅍ"],
    syllables: ["마", "민", "미", "무", "명", "만", "문", "빈", "별", "범", "봄", "복", "방", "파", "편", "풍", "품"],
    names: {
      girl:    [{ name: "미래",  meaning: "水 기운이 담긴 지혜롭고 밝은 내일의 이름이에요." },
                { name: "봄이",  meaning: "水의 깊이 기운으로 새봄처럼 싱그러운 이름이에요." },
                { name: "민아",  meaning: "水 기운으로 지혜롭고 부드러운 이름이에요." }],
      boy:     [{ name: "민준",  meaning: "水 기운으로 지혜롭고 준수한 이름이에요." },
                { name: "범이",  meaning: "水의 깊은 기운으로 넓고 든든한 이름이에요." },
                { name: "문우",  meaning: "水 기운이 담겨 사려 깊고 포근한 이름이에요." }],
      neutral: [{ name: "민서",  meaning: "水 기운으로 유연하고 사려 깊은 이름이에요." },
                { name: "빛나",  meaning: "水의 깊이 기운이 빛을 발하는 이름이에요." },
                { name: "무결",  meaning: "水의 맑고 청결한 기운을 담은 특별한 이름이에요." }]
    }
  }
};

const SEASON_MOOD = {
  "봄":   { icon: "🌸", title: "봄의 기운", desc: "새 시작과 성장의 계절. 생명력 넘치고 따뜻한 이름이 잘 어울려요." },
  "여름": { icon: "☀️", title: "여름의 기운", desc: "열정과 활기가 넘치는 계절. 밝고 에너지 넘치는 이름이 빛나요." },
  "가을": { icon: "🍂", title: "가을의 기운", desc: "성숙과 결실의 계절. 단단하고 의미 깊은 이름이 어울려요." },
  "겨울": { icon: "❄️", title: "겨울의 기운", desc: "고요하고 깊은 계절. 지혜롭고 사려 깊은 인상의 이름이 잘 맞아요." }
};

function getCharOhaeng(char) {
  const code = char.charCodeAt(0) - 44032;
  if (code < 0 || code > 11171) return null;
  const cho = CHOSUNG[Math.floor(code / 588)];
  return CHOSUNG_OHAENG[cho] || null;
}

function analyzeOhaeng(name) {
  const counts = { "木": 0, "火": 0, "土": 0, "金": 0, "水": 0 };
  [...name].forEach((char) => {
    const el = getCharOhaeng(char);
    if (el) counts[el]++;
  });
  return counts;
}

function mergeOhaeng(a, b) {
  const r = { "木": 0, "火": 0, "土": 0, "金": 0, "水": 0 };
  ["木", "火", "土", "金", "水"].forEach((k) => { r[k] = (a[k] || 0) + (b[k] || 0); });
  return r;
}

// ──────────────────────────────────────────────────────────────

const page = document.body.dataset.page;
const data = window.__BABY_NAME_DATA__ || null;

if (page === "generator") initGenerator();
if (page === "search") initSearch();
if (page === "ranking") initRanking();
if (page === "seasonal") initSeasonal();
if (page === "insights") initInsights();
if (page === "special") initSpecial();
if (page === "saju") initSaju();

function initGenerator() {
  const form = document.querySelector("#name-form");
  const nameList = document.querySelector("#name-list");
  const resultSummary = document.querySelector("#result-summary");
  const shuffleButton = document.querySelector("#shuffle-button");
  let activeTrait = "wisdom";
  let lastRequest = null;

  document.querySelector("#traits").addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#traits .chip").forEach((button) => button.classList.toggle("is-active", button === chip));
    activeTrait = chip.dataset.trait;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const request = readRequest(activeTrait);
    lastRequest = request;
    renderNames(request);
  });

  shuffleButton.addEventListener("click", () => renderNames(lastRequest || readRequest(activeTrait)));
  renderNames(readRequest(activeTrait));

  function readRequest(trait) {
    return {
      surname: document.querySelector("#surname").value.trim() || "김",
      gender: document.querySelector("#gender").value,
      style: document.querySelector("#style").value,
      preferredSyllable: document.querySelector("#preferred-syllable").value.trim(),
      trait
    };
  }

  function renderNames(request) {
    const names = generateNames(request);
    resultSummary.textContent = `${request.surname} 성과 ${STYLE_LABELS[request.style]} 흐름에 맞춰 ${TRAIT_LABELS[request.trait]} 중심 후보 ${names.length}개를 골랐어요.`;
    nameList.innerHTML = names.map((item) => `
      <article class="card-item">
        <div class="name-head">
          <div>
            <p class="name-title">${request.surname}${item.name}</p>
            <p>${item.summary}</p>
          </div>
          <div class="score">${item.score}점</div>
        </div>
        <div class="meta-row">
          <span class="meta">${STYLE_LABELS[item.style]}</span>
          <span class="meta">${TRAIT_LABELS[item.trait]}</span>
          <span class="meta">${item.balance}</span>
        </div>
        <p>${item.meaning}</p>
      </article>
    `).join("");
  }
}

function generateNames(request) {
  const firstPool = NAME_PARTS.first.filter((part) => {
    const genderOk = request.gender === "neutral" || part.genders.includes(request.gender) || part.genders.includes("neutral");
    const preferredOk = !request.preferredSyllable || part.syllable.startsWith(request.preferredSyllable);
    return genderOk && preferredOk;
  });
  const secondPool = NAME_PARTS.second.filter((part) => request.gender === "neutral" || part.genders.includes(request.gender) || part.genders.includes("neutral"));
  const combos = [];

  firstPool.forEach((first) => {
    secondPool.forEach((second) => {
      if (first.syllable === second.syllable) return;
      combos.push({
        name: `${first.syllable}${second.syllable}`,
        style: first.styles.includes(request.style) || second.styles.includes(request.style) ? request.style : first.styles[0],
        trait: first.traits.includes(request.trait) || second.traits.includes(request.trait) ? request.trait : first.traits[0],
        score: Math.min(98, 72 + Math.floor(Math.random() * 22)),
        balance: describeBalance(request.surname, `${first.syllable}${second.syllable}`),
        summary: createSummary(`${first.syllable}${second.syllable}`, request.style, request.trait),
        meaning: `${first.syllable}의 ${first.meanings[0]}과 ${second.syllable}의 ${second.meanings[0]}이 만나 부드럽고 인상적인 이름이 됩니다.`
      });
    });
  });

  return shuffle(combos).slice(0, 8);
}

function initSearch() {
  if (!data) return;
  const nameInput = document.querySelector("#name-search-input");
  const nameResult = document.querySelector("#name-search-result");
  const chosungInput = document.querySelector("#chosung-input");
  const chosungResult = document.querySelector("#chosung-result");
  const suggestions = document.querySelector("#chosung-suggestions");

  document.querySelector("#name-search-button").addEventListener("click", () => renderName(nameInput.value.trim()));
  document.querySelector("#name-search-random").addEventListener("click", () => {
    const names = getAllKnownNames();
    const randomName = names[Math.floor(Math.random() * names.length)];
    nameInput.value = randomName;
    renderName(randomName);
  });
  document.querySelector("#chosung-button").addEventListener("click", () => renderChosung(chosungInput.value.trim()));

  const chosungList = [...new Set(getAllKnownNames().map((name) => getChosung(name)))].slice(0, 12);
  suggestions.innerHTML = chosungList.map((item) => `<button type="button" class="chip" data-chosung="${item}">${item}</button>`).join("");
  suggestions.addEventListener("click", (event) => {
    const target = event.target.closest("[data-chosung]");
    if (!target) return;
    chosungInput.value = target.dataset.chosung;
    renderChosung(target.dataset.chosung);
  });

  renderName("서윤");
  renderChosung("ㅅㅇ");

  function renderName(name) {
    const detail = getNameDetail(name);
    if (!detail.exists) {
      nameResult.innerHTML = "<p>데이터에서 이름을 찾지 못했어요.</p>";
      return;
    }
    nameResult.innerHTML = `
      <div class="name-head">
        <div>
          <p class="name-title">${name}</p>
          <p>전체 순위와 연도별 흐름을 한 번에 보여줘요.</p>
        </div>
        <div class="score">${detail.bestCategory}</div>
      </div>
      <div class="meta-row">
        <span class="meta">전체 남아 ${detail.overallBoyRank || "미집계"}</span>
        <span class="meta">전체 여아 ${detail.overallGirlRank || "미집계"}</span>
        <span class="meta">${detail.trendLabel}</span>
      </div>
      <p>첫 등장 연도 ${detail.firstYear || "-"} / 최고점 ${detail.peakYear || "-"} / 최신 이름수 ${detail.latestYearCount.toLocaleString()}</p>
    `;
  }

  function renderChosung(keyword) {
    const names = getAllKnownNames().filter((name) => getChosung(name).startsWith(keyword)).slice(0, 20);
    chosungResult.innerHTML = names.map((name) => `
      <article class="card-item">
        <div class="rank-head">
          <strong>${name}</strong>
          <span class="meta">${getChosung(name)}</span>
        </div>
        <p>최신 연도 이름수 ${getLatestYearCount(name).toLocaleString()}</p>
      </article>
    `).join("");
  }
}

function initRanking() {
  if (!data) return;
  const yearEl = document.querySelector("#ranking-year");
  const genderEl = document.querySelector("#ranking-gender");
  const listEl = document.querySelector("#ranking-list");
  const summaryEl = document.querySelector("#ranking-summary");
  const years = Object.keys(data.annual).map(Number).sort((a, b) => b - a);
  yearEl.innerHTML = years.map((year) => `<option value="${year}">${year}년</option>`).join("");
  yearEl.value = String(years[0]);

  const render = () => {
    const year = yearEl.value;
    const gender = genderEl.value;
    const list = getAnnualRanking(year, gender).slice(0, 10);
    listEl.innerHTML = list.map((item) => `
      <article class="card-item">
        <div class="rank-head">
          <strong>${item.rank}위 ${item.name}</strong>
          <span class="score">${item.count.toLocaleString()}</span>
        </div>
        <p>${year}년 ${genderLabel(gender)} 기준</p>
      </article>
    `).join("");

    const change = findMostRisingName(gender);
    summaryEl.innerHTML = `
      <article><strong>${list[0].name}</strong><span>${year}년 1위 이름</span></article>
      <article><strong>${list[0].count.toLocaleString()}</strong><span>1위 이름수</span></article>
      <article><strong>${change.name}</strong><span>${change.delta >= 0 ? "가파른 상승" : "큰 하락"}</span></article>
      <article><strong>${years[years.length - 1]}-${years[0]}</strong><span>연도별 데이터 범위</span></article>
    `;
  };

  yearEl.addEventListener("change", render);
  genderEl.addEventListener("change", render);
  render();
}

function initSeasonal() {
  if (!data) return;
  const seasonEl = document.querySelector("#seasonal-season");
  const genderEl = document.querySelector("#seasonal-gender");
  const listEl = document.querySelector("#seasonal-list");
  const summaryEl = document.querySelector("#seasonal-summary");

  const render = () => {
    const season = seasonEl.value;
    const gender = genderEl.value;
    const list = data.seasonal[season][gender].slice(0, 10);
    listEl.innerHTML = list.map((item) => `
      <article class="card-item">
        <div class="rank-head">
          <strong>${item.rank}위 ${item.name}</strong>
          <span class="score">${item.count.toLocaleString()}</span>
        </div>
        <p>${season} 계절 ${genderLabel(gender)} 이름</p>
      </article>
    `).join("");

    summaryEl.innerHTML = `
      <article><strong>${list[0].name}</strong><span>${season} 1위</span></article>
      <article><strong>${list[0].count.toLocaleString()}</strong><span>계절 집계 이름수</span></article>
      <article><strong>${list[1].name}</strong><span>2위 이름</span></article>
      <article><strong>${season}</strong><span>계절감 있는 이름 모음</span></article>
    `;
  };

  seasonEl.addEventListener("change", render);
  genderEl.addEventListener("change", render);
  render();
}

function initInsights() {
  if (!data) return;
  const trendName = document.querySelector("#trend-name");
  const trendChart = document.querySelector("#trend-chart");
  const trendSummary = document.querySelector("#trend-summary");
  const statsOverview = document.querySelector("#stats-overview");
  const styleDistribution = document.querySelector("#style-distribution");
  const insightGender = document.querySelector("#insight-gender");
  const yearlyBoard = document.querySelector("#yearly-top100-board");

  const names = getAllKnownNames().slice(0, 120);
  trendName.innerHTML = names.map((name) => `<option value="${name}">${name}</option>`).join("");
  trendName.value = names.includes("서윤") ? "서윤" : names[0];

  const renderTrend = () => {
    const series = getYearlySeries(trendName.value);
    const max = Math.max(...series.map((item) => item.count));
    const step = series.length > 1 ? 240 / (series.length - 1) : 240;
    const points = series.map((item, index) => `${30 + index * step},${160 - Math.round((item.count / max) * 120)}`).join(" ");
    trendChart.innerHTML = `<svg viewBox="0 0 300 180"><polyline fill="none" stroke="#1f1a17" stroke-width="5" points="${points}"></polyline>${series.map((item, index) => `<circle cx="${30 + index * step}" cy="${160 - Math.round((item.count / max) * 120)}" r="4" fill="#7bf0d0" stroke="#1f1a17" stroke-width="2"></circle>`).join("")}</svg>`;
    trendSummary.textContent = `${trendName.value}은(는) ${series[0].year}년 ${series[0].count.toLocaleString()}명에서 ${series.at(-1).year}년 ${series.at(-1).count.toLocaleString()}명으로 ${series.at(-1).count >= series[0].count ? "증가" : "감소"}했어요.`;
  };

  const renderYearlyBoard = () => {
    const years = Object.keys(data.annual).map(Number).sort((a, b) => b - a);
    const gender = insightGender.value;
    yearlyBoard.innerHTML = years.map((year) => {
      const list = getAnnualRanking(String(year), gender).slice(0, 100);
      return `
        <section class="year-column">
          <div class="year-column-head">
            <strong>${year}년</strong>
            <span>${genderLabel(gender)} 1~100위</span>
          </div>
          <div class="year-column-body">
            ${list.map((item) => `
              <article class="year-rank-row">
                <span>${item.rank}</span>
                <strong>${item.name}</strong>
                <em>${item.count.toLocaleString()}</em>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    }).join("");
  };

  const years = Object.keys(data.annual).map(Number).sort((a, b) => a - b);
  const latest = String(years.at(-1));
  const latestTop = getAnnualRanking(latest, "all");
  statsOverview.innerHTML = `
    <article><strong>${latestTop[0].name}</strong><span>${latest} 통합 1위</span></article>
    <article><strong>${getAllKnownNames().length}</strong><span>고유 이름 수</span></article>
    <article><strong>${data.overall.boy[0].name}</strong><span>남자 전체 1위</span></article>
    <article><strong>${data.overall.girl[0].name}</strong><span>여자 전체 1위</span></article>
  `;

  const seasonDistribution = Object.entries(data.seasonal).map(([season, set]) => ({ season, count: set.boy[0].count + set.girl[0].count }));
  const total = seasonDistribution.reduce((sum, item) => sum + item.count, 0);
  styleDistribution.innerHTML = seasonDistribution.map((item, index) => `
    <article class="bar-row">
      <div class="bar-label"><strong>${item.season}</strong><span>${item.count.toLocaleString()}</span></div>
      <div class="bar-track"><div class="bar-fill ${["bar-modern","bar-soft","bar-smart","bar-classic"][index]}" style="width:${Math.round((item.count / total) * 100)}%"></div></div>
    </article>
  `).join("");

  trendName.addEventListener("change", renderTrend);
  insightGender.addEventListener("change", renderYearlyBoard);
  renderTrend();
  renderYearlyBoard();
}

function initSpecial() {
  const filter = document.querySelector("#special-filter");
  const list = document.querySelector("#special-list");
  let active = "neutral";
  const render = () => {
    list.innerHTML = SPECIAL_NAMES[active].map((item) => `
      <article class="card-item">
        <span class="meta">${item.accent}</span>
        <h3>${item.name}</h3>
        <p>${item.note}</p>
      </article>
    `).join("");
  };
  filter.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#special-filter .chip").forEach((button) => button.classList.toggle("is-active", button === chip));
    active = chip.dataset.category;
    render();
  });
  render();
}

function getAnnualRanking(year, gender) {
  const annual = data.annual[String(year)];
  if (gender === "all") return [...annual.boy, ...annual.girl].sort((a, b) => b.count - a.count);
  return annual[gender];
}

function getYearlySeries(name) {
  return Object.keys(data.annual).map(Number).sort((a, b) => a - b).map((year) => {
    const annual = data.annual[String(year)];
    const item = [...annual.boy, ...annual.girl].find((entry) => entry.name === name);
    return item ? { year, count: item.count } : null;
  }).filter(Boolean);
}

function getAllKnownNames() {
  const names = new Set();
  data.overall.boy.forEach((item) => names.add(item.name));
  data.overall.girl.forEach((item) => names.add(item.name));
  Object.values(data.annual).forEach((set) => {
    set.boy.forEach((item) => names.add(item.name));
    set.girl.forEach((item) => names.add(item.name));
  });
  Object.values(data.seasonal).forEach((set) => {
    set.boy.forEach((item) => names.add(item.name));
    set.girl.forEach((item) => names.add(item.name));
  });
  return [...names];
}

function getNameDetail(name) {
  const series = getYearlySeries(name);
  const overallBoyRank = getOverallRank(name, "boy");
  const overallGirlRank = getOverallRank(name, "girl");
  if (!series.length && !overallBoyRank && !overallGirlRank) return { exists: false };
  const peak = [...series].sort((a, b) => b.count - a.count)[0];
  return {
    exists: true,
    overallBoyRank,
    overallGirlRank,
    bestCategory: overallBoyRank && overallGirlRank ? "겸용" : overallGirlRank ? "여아" : "남아",
    trendLabel: series.length >= 2 && series.at(-1).count >= series[0].count ? "상승 흐름" : "조정 흐름",
    firstYear: series[0]?.year,
    latestYearCount: series.at(-1)?.count || 0,
    peakYear: peak ? `${peak.year}년` : ""
  };
}

function getOverallRank(name, gender) {
  const item = data.overall[gender].find((entry) => entry.name === name);
  return item ? `${item.rank}위` : "";
}

function getLatestYearCount(name) {
  const series = getYearlySeries(name);
  return series.length ? series.at(-1).count : 0;
}

function findMostRisingName(gender) {
  const years = Object.keys(data.annual).map(Number).sort((a, b) => a - b);
  const prev = String(years.at(-2));
  const latest = String(years.at(-1));
  return getAnnualRanking(latest, gender).map((item) => ({
    name: item.name,
    delta: item.count - (getAnnualRanking(prev, gender).find((row) => row.name === item.name)?.count || 0)
  })).sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))[0];
}

function genderLabel(gender) {
  return { girl: "여아", boy: "남아", all: "통합" }[gender];
}

function getChosung(text) {
  return [...text].map((char) => {
    const code = char.charCodeAt(0) - 44032;
    if (code < 0 || code > 11171) return char;
    return CHOSUNG[Math.floor(code / 588)];
  }).join("");
}

function describeBalance(surname, name) {
  if (surname.length + name.length <= 3) return "짧고 선명한 리듬";
  if (/[윤율린]/.test(name)) return "부드럽게 이어지는 발음";
  if (/[준도태재]/.test(name)) return "힘 있게 마무리되는 인상";
  return "안정적으로 균형 잡힌 흐름";
}

function createSummary(name, style, trait) {
  const tone = {
    modern: "도시적이고 세련된",
    soft: "맑고 부드러운",
    classic: "단정하고 깊이 있는",
    smart: "또렷하고 지적인"
  }[style];
  return `${tone} 분위기에 ${TRAIT_LABELS[trait]} 이미지를 담아낸 이름이에요. ${name} 특유의 울림이 오래 남습니다.`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

// ── 오행·사주 페이지 ─────────────────────────────────────────
function initSaju() {
  const form = document.querySelector("#saju-form");
  const resultEl = document.querySelector("#saju-result");
  const introEl = document.querySelector("#ohaeng-intro");
  const EL_ORDER = ["木", "火", "土", "金", "水"];

  // 오행 소개 카드 렌더링
  introEl.innerHTML = EL_ORDER.map((key) => {
    const info = OHAENG[key];
    return `
      <div class="ohaeng-intro-item ${info.cssClass}">
        <strong>${info.name} · ${info.element}</strong>
        <span>초성: ${info.chosungs.join("·")} | ${info.season}</span>
        <p>${info.trait}</p>
      </div>
    `;
  }).join("");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const mom = document.querySelector("#saju-mom").value.trim();
    const dad = document.querySelector("#saju-dad").value.trim();
    const gender = document.querySelector("#saju-gender").value;
    const season = document.querySelector("#saju-season").value;
    if (!mom && !dad) { document.querySelector("#saju-mom").focus(); return; }
    renderSaju({ mom, dad, gender, season });
  });

  function renderSaju({ mom, dad, gender, season }) {
    const momCounts = mom ? analyzeOhaeng(mom) : null;
    const dadCounts = dad ? analyzeOhaeng(dad) : null;
    const combined = mergeOhaeng(momCounts || {}, dadCounts || {});
    const total = EL_ORDER.reduce((s, k) => s + combined[k], 0);

    const sorted = EL_ORDER.slice().sort((a, b) => combined[b] - combined[a]);
    const dominant = sorted[0];
    // 부족한 오행: 0개인 것 → 없으면 가장 적은 것
    const zeros = sorted.filter((k) => combined[k] === 0);
    const missing = zeros.length > 0 ? zeros.slice(0, 2) : [sorted[sorted.length - 1]];

    resultEl.innerHTML = `
      <div class="saju-result-wrap">
        ${renderParentSection(mom, momCounts, dad, dadCounts)}
        ${renderBalanceSection(combined, total, dominant, missing, EL_ORDER)}
        ${renderRecommendSection(missing, gender)}
        ${renderMoodSection(dominant, season)}
      </div>
    `;
    resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderParentSection(mom, momC, dad, dadC) {
    const card = (name, counts, role) => {
      if (!name) return "";
      const hasData = counts && EL_ORDER.some((k) => counts[k] > 0);
      if (!hasData) return `
        <div class="ohaeng-parent-card">
          <p class="section-mini">${role}</p>
          <h3>${name}</h3>
          <p>한글 이름에서만 분석할 수 있어요.</p>
        </div>`;
      const topEl = EL_ORDER.slice().sort((a, b) => counts[b] - counts[a])[0];
      return `
        <div class="ohaeng-parent-card ${OHAENG[topEl].cssClass}-light">
          <p class="section-mini">${role}</p>
          <h3>${name}</h3>
          <div class="ohaeng-mini-row">
            ${EL_ORDER.map((key) => `
              <div class="ohaeng-mini ${counts[key] > 0 ? OHAENG[key].cssClass : "ohaeng-empty"}">
                <span>${OHAENG[key].element}</span>
                <strong>${counts[key]}</strong>
              </div>`).join("")}
          </div>
          <p style="font-size:0.9rem;font-weight:700">주 기운: <strong>${OHAENG[topEl].name}</strong> · ${OHAENG[topEl].trait.split("·")[0]}</p>
        </div>`;
    };
    return `
      <div class="panel">
        <div class="panel-head"><div><p class="section-mini">부모 오행 분석</p><h2>엄마·아빠 이름의 기운</h2></div></div>
        <div class="saju-parent-row">
          ${card(mom, momC, "엄마")}
          ${card(dad, dadC, "아빠")}
        </div>
      </div>`;
  }

  function renderBalanceSection(combined, total, dominant, missing, order) {
    return `
      <div class="panel">
        <div class="panel-head"><div><p class="section-mini">오행 균형</p><h2>두 이름의 기운 합산</h2></div></div>
        <div class="ohaeng-balance-grid">
          ${order.map((key) => {
            const info = OHAENG[key];
            const cnt = combined[key];
            const pct = total > 0 ? Math.round((cnt / total) * 100) : 0;
            const isMissing = missing.includes(key);
            return `
              <div class="ohaeng-balance-item ${info.cssClass}${isMissing ? " ohaeng-missing" : ""}">
                <div class="ohaeng-icon">${info.element}</div>
                <div class="ohaeng-el-name">${info.name}</div>
                <div class="ohaeng-bar-wrap">
                  <div class="ohaeng-bar-fill" style="width:${pct}%"></div>
                </div>
                <div class="ohaeng-pct">${cnt > 0 ? pct + "%" : "없음"}</div>
              </div>`;
          }).join("")}
        </div>
        <p class="panel-note" style="margin-top:14px">
          주 기운은 <strong>${OHAENG[dominant].name}</strong>(${OHAENG[dominant].trait})이에요.
          ${missing.some((k) => combined[k] === 0)
            ? ` <strong>${missing.map((k) => OHAENG[k].name).join("·")}</strong> 기운이 없으니 이를 보완하는 이름이 좋아요.`
            : ` <strong>${missing.map((k) => OHAENG[k].name).join("·")}</strong> 기운이 상대적으로 약해요.`}
        </p>
      </div>`;
  }

  function renderRecommendSection(missing, gender) {
    const gKey = gender === "neutral" ? "neutral" : gender;
    const allSyls = [...new Set(missing.flatMap((el) => OHAENG[el].syllables.slice(0, 8)))];
    const allNames = missing.flatMap((el) => {
      const pool = OHAENG[el].names[gKey] || OHAENG[el].names.neutral;
      return pool.map((item) => ({ ...item, element: el }));
    });

    return `
      <div class="panel">
        <div class="panel-head"><div><p class="section-mini">이름 추천</p><h2>보완 기운을 담은 이름</h2></div></div>
        <div class="saju-element-tags">
          <p>보완할 기운:
            ${missing.map((el) => `<span class="ohaeng-tag ${OHAENG[el].cssClass}">${OHAENG[el].name}</span>`).join("")}
          </p>
        </div>
        <p class="panel-note" style="margin-top:10px">${missing.map((el) => OHAENG[el].desc).join(" ")}</p>

        <h3 style="margin:20px 0 10px;font-size:1rem;font-weight:900">보완 기운 음절 (초성 기준)</h3>
        <div class="chip-group">
          ${allSyls.map((syl) => `<span class="chip">${syl}</span>`).join("")}
        </div>

        <h3 style="margin:22px 0 12px;font-size:1rem;font-weight:900">추천 이름 조합</h3>
        <div class="card-list">
          ${allNames.map((item) => `
            <article class="card-item">
              <div class="name-head">
                <div>
                  <p class="name-title">${item.name}</p>
                  <p>${item.meaning}</p>
                </div>
                <span class="ohaeng-badge ${OHAENG[item.element].cssClass}">${OHAENG[item.element].name}</span>
              </div>
            </article>`).join("")}
        </div>
      </div>`;
  }

  function renderMoodSection(dominant, season) {
    const elInfo = OHAENG[dominant];
    const seasonInfo = SEASON_MOOD[season];
    const NEXT_EL = { "木": "火", "火": "土", "土": "金", "金": "水", "水": "木" };
    const complementEl = NEXT_EL[dominant];
    const advice = `부모 이름에 ${elInfo.name} 기운이 강해요. 아이 이름에 ${OHAENG[complementEl].name}(${OHAENG[complementEl].element}) 기운을 더하면 오행의 흐름이 자연스럽게 이어져요.`;

    return `
      <div class="panel">
        <div class="panel-head"><div><p class="section-mini">사주 느낌</p><h2>이름에 담을 기운의 방향</h2></div></div>
        <div class="saju-mood-grid">
          <div class="saju-mood-card ${elInfo.cssClass}">
            <p class="section-mini">부모 주 기운</p>
            <div class="saju-mood-icon">${elInfo.element}</div>
            <h3>${elInfo.name}</h3>
            <p>${elInfo.trait}</p>
            <p style="font-size:0.88rem;margin-top:8px;opacity:0.85">${elInfo.desc}</p>
          </div>
          ${seasonInfo ? `
          <div class="saju-mood-card">
            <p class="section-mini">태어날 계절</p>
            <div class="saju-mood-icon">${seasonInfo.icon}</div>
            <h3>${season}</h3>
            <p>${seasonInfo.title}</p>
            <p style="font-size:0.88rem;margin-top:8px;opacity:0.85">${seasonInfo.desc}</p>
          </div>` : ""}
          <div class="saju-mood-card ${OHAENG[complementEl].cssClass}-light">
            <p class="section-mini">추천 방향</p>
            <div class="saju-mood-icon">✨</div>
            <h3>${OHAENG[complementEl].name} 보완</h3>
            <p>${OHAENG[complementEl].trait}</p>
            <p style="font-size:0.88rem;margin-top:8px;opacity:0.85">${advice}</p>
          </div>
        </div>
      </div>`;
  }
}
