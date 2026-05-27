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

const page = document.body.dataset.page;
const data = window.__BABY_NAME_DATA__ || null;

if (page === "generator") initGenerator();
if (page === "search") initSearch();
if (page === "ranking") initRanking();
if (page === "seasonal") initSeasonal();
if (page === "insights") initInsights();
if (page === "special") initSpecial();

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
