const places = {
  yuyao: {
    index: '02', region: '浙江 · 余姚', name: '余姚', category: '人生地点', status: '生平线索 · 待核',
    description: '余姚是余秋雨的出生地。地图以城市级节点呈现生平线索；与作品中的故乡书写分别阅读，不将地点自动等同于某一篇章。',
    work: '生平线索 · 1946 年出生', address: '浙江省余姚市 · 城市级位置', source: '上海戏剧学院人物简介', sourceUrl: 'https://www.sta.edu.cn/5d/9e/c3457a23966/page.htm',
    sourceText: '查看上海戏剧学院人物简介 ↗'
  },
  shanghai: {
    index: '03', region: '上海 · 城市线索', name: '上海', category: '人生地点', status: '生平线索 · 待核',
    description: '余秋雨 1968 年毕业于上海戏剧学院。这里以城市级节点呈现求学履历，不表示全部人生经历都发生于此。',
    work: '生平线索 · 1968 年毕业', address: '上海市 · 城市级位置', source: '上海戏剧学院人物简介', sourceUrl: 'https://www.sta.edu.cn/5d/9e/c3457a23966/page.htm',
    sourceText: '查看上海戏剧学院人物简介 ↗'
  },
  mogao: {
    index: '01', region: '甘肃 · 敦煌', name: '莫高窟', category: '人文遗产', status: '来源可查 · 关联待核',
    description: '敦煌的文化遗产现场，也是《文化苦旅》地点探索中的一处线索。遗产资料能够确认地点信息；它与具体篇目的对应关系仍需回到作品文本核实。',
    work: '《文化苦旅》· 关联待复核', address: '甘肃省敦煌市 · 区域级位置', source: 'UNESCO 世界遗产中心：莫高窟', sourceUrl: 'https://whc.unesco.org/en/list/440/',
    sourceText: '查看 UNESCO 莫高窟资料 ↗'
  },
  dujiangyan: {
    index: '04', region: '四川 · 都江堰', name: '都江堰', category: '人文遗产', status: '作品出处待核实',
    description: '作为文化遗产地点，它适合作为作品地点探索入口。本页面暂不呈现篇目摘引或确定的作品对应结论，等待资料核实后补充。',
    work: '《文化苦旅》· 关联待复核', address: '四川省都江堰市 · 区域级位置', source: '作品出处与地点说明待核', sourceUrl: '',
    sourceText: '当前没有已核验的篇目来源。'
  },
  overseas: {
    index: '05', region: '海外 · 国家级概览', name: '海外行旅', category: '行旅区域', status: '地点精度待补',
    description: '作品中的海外行旅先以国家与文化区域作为阅读尺度。这里不绘制精确省市路线，也不将作品叙述自动等同于可核定的实际到访轨迹。',
    work: '《行者无疆》· 线索索引', address: '海外国家级概览 · 具体地点待核', source: '路线精度与逐条来源待补录', sourceUrl: 'https://www.chinawriter.com.cn/n1/2019/0320/c405057-30984444.html',
    sourceText: '查看中国作家网相关访谈 ↗'
  },
  greece: {
    index: '06', region: '欧洲 · 国家级地点', name: '希腊', category: '行旅国家', status: '公开报道 · 路线示意',
    description: '公开报道记述余秋雨 2000 年文化行旅从希腊奥林匹亚启程。地图只落到国家层级，虚线用于表达公开行旅线索，不代表全程路线。',
    work: '《千年一叹》· 2000 年行旅', address: '希腊 · 国家级位置', source: '人民网：余秋雨以脚丈量丝路文化', sourceUrl: 'https://cpc.people.com.cn/n1/2017/0606/c179979-29321477.html',
    sourceText: '查看人民网报道 ↗'
  },
  egypt: {
    index: '07', region: '非洲 · 国家级地点', name: '埃及', category: '行旅国家', status: '作品视野 · 路线示意',
    description: '《千年一叹》与《行者无疆》的文化行旅覆盖希腊、埃及等古文明现场。这里以国家尺度补充海外阅读入口，不标示未经核准的城市停留点。',
    work: '《千年一叹》· 古文明行旅', address: '埃及 · 国家级位置', source: '中国作家网：两部行旅作品的文化视野', sourceUrl: 'https://www.chinawriter.com.cn/n1/2023/0131/c448915-32615230.html',
    sourceText: '查看中国作家网文章 ↗'
  },
  hemudu: {
    index: '08', region: '浙江 · 余姚', name: '河姆渡遗址', category: '作品地点', status: '篇目线索 · 公开文本',
    description: '《山居笔记·乡关何处》将河姆渡遗址纳入关于故乡与文化记忆的叙述。地点节点依据公开篇目文本定位，正式出版版页码可再补核。',
    work: '《山居笔记》·《乡关何处》', address: '浙江省余姚市 · 河姆渡遗址', source: '《乡关何处》公开文本', sourceUrl: 'https://99csw.com/book/2238/67125.htm',
    sourceText: '查看篇目文本 ↗'
  },
  huangzhou: {
    index: '09', region: '湖北 · 黄冈', name: '黄州', category: '作品地点', status: '篇目线索 · 公开文本',
    description: '《山居笔记·苏东坡突围》以黄州经历为核心文化现场。页面把篇目地点作为阅读索引，不扩展成未经出处支持的具体游览路线。',
    work: '《山居笔记》·《苏东坡突围》', address: '湖北省黄冈市 · 黄州', source: '《苏东坡突围》公开节选', sourceUrl: 'https://www.sohu.com/a/326058057_498062',
    sourceText: '查看篇目节选 ↗'
  },
  'iran-radish': {
    index: '10', region: '西亚 · 伊朗', name: '伊朗黑萝卜', category: '作品食物线索', status: '原文提及 · 版本待核',
    description: '《千年一叹》自序提到旅途中同伴为作者找到伊朗黑萝卜，并写到其生食口感。此处只记录书中食材线索，不推荐餐馆、做法或产地。',
    work: '《千年一叹》· 自序', address: '伊朗 · 国家级地点线索', source: '《千年一叹》自序公开文本；正式上线前建议以正版版本复核', sourceUrl: 'https://www.kanunu8.com/book/4355/52572.html',
    sourceText: '查看自序文本 ↗'
  },
  'tigris-fish': {
    index: '11', region: '西亚 · 底格里斯河', name: '底格里斯河畔烤鱼', category: '作品食物线索', status: '篇目提及 · 版本待核',
    description: '《千年一叹》相关篇章记有在底格里斯河畔吃烤鱼的旅途场景。页面按作品现场收录，不延伸成菜谱或商业餐饮推荐。',
    work: '《千年一叹》·《河畔烤鱼》', address: '底格里斯河流域 · 城市未在此页定位', source: '《河畔烤鱼》公开文本；正式上线前建议以正版版本复核', sourceUrl: 'https://www.kanunu8.com/book/4355/52624.html',
    sourceText: '查看篇目文本 ↗'
  }
};

const relationData = {
  literary: { index: '01', name: '文学艺术交往', description: '从作者回忆与公开报道可查的文艺交往切入，先列出黄佐临、谢晋两位人物支点。每条关系说明都注明资料性质与出处。', status: '2 位人物 · 依据已链接', guide: '点选姓名，查看这段文化交往在公开文字中的具体出处。', people: ['huangzuolin', 'xiejin'] },
  academic: { index: '02', name: '师友与学术背景', description: '王元化与张可出现在余秋雨回忆学术往来的文字中。这里将作者回忆与第三方背景资料分开标注，避免把单一来源说成完整关系史。', status: '2 位人物 · 作者回忆与背景资料', guide: '阅读关系节点时，请同时看清它来自作者回忆还是机构背景资料。', people: ['wangyuanhua', 'zhangke'] },
  life: { index: '03', name: '家庭与人生', description: '马兰是余秋雨的伴侣，也是公开报道所述的艺术同行者；相关报道还记录她陪同 2000 年文化行旅。页面只呈现公开资料提到的部分。', status: '1 位人物 · 公开报道已链接', guide: '从公开报道了解同行与伴侣身份，不延伸推断私人生活细节。', people: ['malan'] }
};

const personData = {
  huangzuolin: { name: '黄佐临', category: 'literary', role: '导演 · 文艺交往', description: '余秋雨在《何谓文化》相关篇章中回忆与导演黄佐临的忘年交往。此关系标签依据作者本人的回忆文字。', source: '中国作家网：《黄佐临与我的忘年情》', url: 'https://www.chinawriter.com.cn/bk/2012-12-11/68097.html' },
  xiejin: { name: '谢晋', category: 'literary', role: '导演 · 文化交往', description: '关于余秋雨新作《门孔》的报道提及书中写到谢晋等文化人物。此处作为公开写作与文化记忆的阅读支点，不据此扩写未被该文支持的交往细节。', source: '中国作家网：《余秋雨新作〈门孔〉述说记忆与情感》', url: 'https://www.chinawriter.com.cn/n1/2017/0825/c405167-29493214.html' },
  wangyuanhua: { name: '王元化', category: 'academic', role: '学者 · 学术往来', description: '余秋雨在《长者》中回忆与王元化的交往交流。页面将其归入师友与学术背景，并明确关系说明来自作者回忆。', source: '爱思想：余秋雨《长者》', url: 'https://www.aisixiang.com/data/76764.html' },
  zhangke: { name: '张可', category: 'academic', role: '教师 · 学术背景', description: '余秋雨在《长者》中回忆与张可的交往；华东师范大学相关纪念文章介绍张可曾任上海戏剧学院英语教师。关系类别依据作者回忆，身份信息另有机构资料参照。', source: '余秋雨《长者》与华东师范大学相关资料', url: 'https://www.ecnu.edu.cn/info/1095/1934.htm' },
  malan: { name: '马兰', category: 'life', role: '伴侣 · 艺术同行', description: '人民日报报道称马兰是余秋雨的妻子、黄梅戏演员，并记述她陪同余秋雨进行 2000 年文化行旅。说明限于该公开报道的内容。', source: '人民网：《余秋雨：以脚丈量丝路文化》', url: 'https://cpc.people.com.cn/n1/2017/0606/c179979-29321477.html' }
};

const storagePrefix = 'walker-world-v1';
let activePlaceId = 'mogao';
let previousFocus = null;

function readLocal(key, fallback) {
  try {
    const value = localStorage.getItem(`${storagePrefix}:${key}`);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) { return fallback; }
}

function writeLocal(key, value) {
  try { localStorage.setItem(`${storagePrefix}:${key}`, JSON.stringify(value)); return true; }
  catch (error) { return false; }
}

function setText(id, value) { const element = document.getElementById(id); if (element) element.textContent = value; }

function selectPlace(id) {
  const place = places[id];
  if (!place) return;
  activePlaceId = id;
  document.querySelectorAll('.map-node').forEach(node => node.classList.toggle('selected', node.dataset.place === id));
  setText('place-index', place.index);
  setText('place-status', place.status);
  setText('place-region', place.region);
  setText('place-name', place.name);
  setText('place-description', place.description);
  setText('place-work', place.work);
  setText('place-source', place.source);
  const expand = document.querySelector('[data-open-place]');
  if (expand) expand.dataset.openPlace = id;
}

function openPlace(id) {
  const place = places[id];
  if (!place) return;
  selectPlace(id);
  const backdrop = document.getElementById('place-modal');
  previousFocus = document.activeElement;
  setText('modal-index', place.index);
  setText('modal-type', place.category);
  setText('modal-status', place.status);
  setText('modal-region', place.region);
  setText('modal-title', place.name);
  setText('modal-summary', place.description);
  setText('modal-work', place.work);
  setText('modal-address', place.address);
  setText('modal-source', place.source);
  const sourceLink = document.getElementById('modal-source-link');
  sourceLink.replaceChildren();
  if (place.sourceUrl) {
    const link = document.createElement('a');
    link.href = place.sourceUrl;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = place.sourceText;
    sourceLink.append(link);
  } else sourceLink.textContent = place.sourceText;
  renderInteractions(id);
  backdrop.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => backdrop.querySelector('.modal-close').focus());
}

function closePlace() {
  const backdrop = document.getElementById('place-modal');
  if (backdrop.hidden) return;
  backdrop.hidden = true;
  document.body.classList.remove('modal-open');
  if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
}

function renderInteractions(id) {
  const likes = readLocal('likes', {});
  const saved = readLocal('saved', {});
  const liked = Boolean(likes[id]?.on);
  const likeButton = document.getElementById('like-button');
  likeButton.classList.toggle('is-on', liked);
  likeButton.setAttribute('aria-pressed', String(liked));
  setText('like-label', liked ? '已喜欢' : '喜欢');
  setText('like-count', String(likes[id]?.count || 0));
  const saveButton = document.getElementById('save-button');
  saveButton.classList.toggle('is-on', Boolean(saved[id]));
  saveButton.setAttribute('aria-pressed', String(Boolean(saved[id])));
  setText('save-label', saved[id] ? '已收藏' : '收藏');
  saveButton.querySelector('span').textContent = saved[id] ? '★' : '☆';
  const input = document.getElementById('comment-input');
  input.value = '';
  setText('comment-feedback', '留言保存在此浏览器，不会公开展示。');
  document.getElementById('comment-feedback').className = 'form-feedback';
  renderComments(id);
}

function renderComments(id) {
  const list = document.getElementById('comment-list');
  list.replaceChildren();
  const comments = readLocal('comments', {})[id] || [];
  for (const comment of comments.slice().reverse()) {
    const row = document.createElement('div'); row.className = 'comment-item';
    const time = document.createElement('time'); time.textContent = comment.time;
    const text = document.createElement('p'); text.textContent = comment.text;
    row.append(time, text); list.append(row);
  }
}

function selectRelation(id) {
  const item = relationData[id];
  if (!item) return;
  document.querySelectorAll('.category-node').forEach(node => node.classList.toggle('active', node.dataset.relation === id));
  document.querySelectorAll('.person-node').forEach(node => node.classList.toggle('active', false));
  setText('relation-count', `${item.index} / 03`);
  setText('relation-kicker', '关系类别');
  setText('relation-name', item.name);
  setText('relation-description', item.description);
  setText('relation-status', item.status);
  setText('guide-copy', item.guide);
  const people = document.getElementById('relation-people');
  people.replaceChildren();
  item.people.forEach(personId => {
    const person = personData[personId];
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'relation-person-chip'; button.dataset.person = personId;
    const name = document.createElement('strong'); name.textContent = person.name;
    const role = document.createElement('span'); role.textContent = person.role;
    button.append(name, role);
    button.addEventListener('click', () => selectPerson(personId));
    people.append(button);
  });
  renderRelationSourceList(item.people);
}

function renderRelationSourceList(personIds) {
  const list = document.getElementById('relation-sources');
  list.replaceChildren();
  const label = document.createElement('span'); label.className = 'relation-source-heading'; label.textContent = '资料出处'; list.append(label);
  personIds.forEach(personId => {
    const person = personData[personId];
    const link = document.createElement('a'); link.href = person.url; link.target = '_blank'; link.rel = 'noreferrer'; link.textContent = `${person.name} · ${person.source} ↗`;
    list.append(link);
  });
}

function selectPerson(id) {
  const person = personData[id];
  if (!person) return;
  const category = relationData[person.category];
  document.querySelectorAll('.category-node').forEach(node => node.classList.toggle('active', node.dataset.relation === person.category));
  document.querySelectorAll('.person-node').forEach(node => node.classList.toggle('active', node.dataset.person === id));
  setText('relation-count', `${category.index} / 03 · 人物支点`);
  setText('relation-kicker', category.name);
  setText('relation-name', person.name);
  setText('relation-description', person.description);
  setText('relation-status', person.role);
  setText('guide-copy', '此节点的关系描述按公开来源限定范围；打开出处可阅读原文语境。');
  const people = document.getElementById('relation-people');
  people.replaceChildren();
  const back = document.createElement('button'); back.type = 'button'; back.className = 'relation-person-chip is-current'; back.textContent = `查看「${category.name}」全部人物`;
  back.addEventListener('click', () => selectRelation(person.category)); people.append(back);
  renderRelationSourceList([id]);
}

document.querySelectorAll('.map-node').forEach(node => {
  node.addEventListener('click', () => selectPlace(node.dataset.place));
  node.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectPlace(node.dataset.place); } });
});
document.querySelectorAll('[data-place]').forEach(button => {
  if (button.matches('.map-node')) return;
  button.addEventListener('click', () => openPlace(button.dataset.place));
});
document.querySelectorAll('[data-open-place]').forEach(button => button.addEventListener('click', () => openPlace(button.dataset.openPlace)));

const range = document.getElementById('year-range');
const timelineEvents = {
  1946: { places: ['yuyao'], route: null, text: '1946 年：余秋雨出生于浙江余姚。余姚节点已亮起。' },
  1968: { places: ['shanghai'], route: 'yuyao', text: '1968 年：余秋雨毕业于上海戏剧学院。上海节点已亮起。' },
  2000: { places: ['greece', 'egypt'], route: 'overseas', text: '2000 年行旅线索：从希腊奥林匹亚启程，并记录埃及等古文明现场。对应国家节点已亮起。' }
};

function updateTimeline(year) {
  const numericYear = Number(year);
  setText('year-value', String(numericYear));
  document.querySelectorAll('.map-node').forEach(node => node.classList.remove('year-highlight'));
  document.querySelectorAll('.route-segment').forEach(path => path.classList.remove('route-active'));
  const event = timelineEvents[numericYear];
  if (!event) {
    document.querySelectorAll('.map-node').forEach(node => node.classList.remove('selected'));
    setText('timeline-message-text', `${numericYear} 年：目前没有单年地点记录。拖到标记年份可查看对应地点。`);
    return;
  }
  event.places.forEach(placeId => document.querySelector(`.map-node[data-place="${placeId}"]`)?.classList.add('year-highlight'));
  if (event.route) document.querySelectorAll(`.route-${event.route}`).forEach(path => path.classList.add('route-active'));
  setText('timeline-message-text', event.text);
  selectPlace(event.places[0]);
}

range.addEventListener('input', () => updateTimeline(range.value));
document.querySelectorAll('[data-year]').forEach(button => button.addEventListener('click', () => {
  range.value = button.dataset.year;
  updateTimeline(range.value);
}));

document.querySelectorAll('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
  const filter = chip.dataset.filter;
  document.querySelectorAll('.filter-chip').forEach(item => {
    const active = item === chip;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visibleCount = 0;
  document.querySelectorAll('.work-card').forEach(card => {
    const rows = [...card.querySelectorAll('.place-row')];
    rows.forEach(row => { const visible = filter === 'all' || row.dataset.category === filter; row.hidden = !visible; if (visible) visibleCount++; });
    card.hidden = !rows.some(row => filter === 'all' || row.dataset.category === filter);
  });
  document.getElementById('empty-filter').hidden = filter !== 'food' || visibleCount !== 0;
  document.getElementById('works-grid').hidden = false;
}));
document.querySelector('[data-reset-filter]').addEventListener('click', () => document.querySelector('[data-filter="all"]').click());

document.querySelectorAll('.category-node').forEach(node => {
  node.addEventListener('click', () => selectRelation(node.dataset.relation));
  node.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectRelation(node.dataset.relation); } });
});
document.querySelectorAll('.person-node').forEach(node => {
  node.addEventListener('click', () => selectPerson(node.dataset.person));
  node.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectPerson(node.dataset.person); } });
});

const modal = document.getElementById('place-modal');
modal.addEventListener('click', event => { if (event.target === modal) closePlace(); });
modal.querySelector('.modal-close').addEventListener('click', closePlace);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closePlace();
  if (event.key === 'Tab' && !modal.hidden) {
    const focusables = [...modal.querySelectorAll('button, input, a[href]')].filter(el => !el.disabled);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.getElementById('like-button').addEventListener('click', () => {
  const likes = readLocal('likes', {}); const state = likes[activePlaceId] || { count: 0, on: false };
  const next = { count: Math.max(0, state.count + (state.on ? -1 : 1)), on: !state.on };
  likes[activePlaceId] = next;
  const feedback = writeLocal('likes', likes);
  renderInteractions(activePlaceId);
  if (!feedback) { const el = document.getElementById('comment-feedback'); el.textContent = '当前浏览器无法保存互动状态；关闭后可能丢失。'; el.className = 'form-feedback error'; }
});
document.getElementById('save-button').addEventListener('click', () => {
  const saved = readLocal('saved', {}); saved[activePlaceId] = !saved[activePlaceId];
  if (!saved[activePlaceId]) delete saved[activePlaceId];
  const ok = writeLocal('saved', saved); renderInteractions(activePlaceId);
  const feedback = document.getElementById('comment-feedback');
  feedback.textContent = ok ? (saved[activePlaceId] ? '已保存在此浏览器。' : '已取消收藏。') : '当前浏览器无法保存收藏；刷新后可能丢失。';
  feedback.className = `form-feedback ${ok ? 'success' : 'error'}`;
});
document.getElementById('comment-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('comment-input'); const value = input.value.trim();
  const feedback = document.getElementById('comment-feedback');
  if (!value) { feedback.textContent = '写点内容再发布。'; feedback.className = 'form-feedback error'; input.focus(); return; }
  if (value.length > 140) { feedback.textContent = '留言最多 140 字。'; feedback.className = 'form-feedback error'; input.focus(); return; }
  const comments = readLocal('comments', {}); comments[activePlaceId] ||= [];
  comments[activePlaceId].push({ text: value, time: new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit' }).format(new Date()) });
  const ok = writeLocal('comments', comments);
  if (!ok) { feedback.textContent = '当前浏览器无法保存留言，请稍后重试。'; feedback.className = 'form-feedback error'; return; }
  input.value = ''; renderComments(activePlaceId); feedback.textContent = '已保存在此浏览器。'; feedback.className = 'form-feedback success';
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');
menuToggle.addEventListener('click', () => {
  const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', '展开导航'); }));

if ('IntersectionObserver' in window) {
  const sections = ['journey', 'works', 'people'].map(id => document.getElementById(id));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  }), { rootMargin: '-28% 0px -62% 0px' });
  sections.forEach(section => observer.observe(section));
}

document.body.classList.remove('modal-open');
updateTimeline(range.value);
selectRelation('literary');
