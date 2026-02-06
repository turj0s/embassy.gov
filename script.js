const serviceData = [
  {
    title: 'Passport Renewal',
    text: 'MRP/e-passport renewal pathway, document checklist, and appointment guidance.',
    cta: 'Apply process'
  },
  {
    title: 'Visa Services',
    text: 'Tourist, business, and official visa requirements, fees, and issuance timeline.',
    cta: 'Visa details'
  },
  {
    title: 'No Visa Required (NVR)',
    text: 'NVR endorsement information for foreign citizens of Bangladeshi origin.',
    cta: 'NVR requirements'
  },
  {
    title: 'Attestation & POA',
    text: 'Power of attorney, affidavit, and document attestation workflow and fees.',
    cta: 'Attestation guide'
  },
  {
    title: 'Birth Registration',
    text: 'Birth registration and record correction support for expatriate families.',
    cta: 'Registration steps'
  },
  {
    title: 'Trade & Investment Desk',
    text: 'Business facilitation and bilateral trade promotion support contacts.',
    cta: 'Business support'
  },
  {
    title: 'Labor Welfare Support',
    text: 'Support channels for migrant workers and welfare-related emergencies.',
    cta: 'Welfare desk'
  },
  {
    title: 'Appointment Booking',
    text: 'Structured slot-based appointment system for in-person consular services.',
    cta: 'Book appointment'
  }
];

const noticesByTab = {
  consular: [
    { title: 'Updated checklist for MRP/e-passport renewal applications', date: '2026-02-14' },
    { title: 'NVR endorsement appointments open for March slots', date: '2026-02-11' },
    { title: 'Revised attestation counter timing for Thursdays', date: '2026-02-08' }
  ],
  holiday: [
    { title: 'Embassy closure notice for International Mother Language Day', date: '2026-02-21' },
    { title: 'Holiday schedule published for national observances 2026', date: '2026-02-05' },
    { title: 'Emergency hotline service remains active during office closures', date: '2026-02-01' }
  ],
  procurement: [
    { title: 'Tender notice: Annual office maintenance and support services', date: '2026-02-10' },
    { title: 'EOI invited for digital queue management system', date: '2026-02-03' },
    { title: 'Procurement update: stationery and logistics contract award', date: '2026-01-28' }
  ]
};

const galleryData = [
  { label: 'Victory Day Flag Hoisting Ceremony', image: 'linear-gradient(140deg,#0f766e,#14532d)' },
  { label: 'Ambassador Meets U.S. Officials', image: 'linear-gradient(140deg,#155e75,#1e293b)' },
  { label: 'Diaspora Open House Program', image: 'linear-gradient(140deg,#7c2d12,#9a3412)' },
  { label: 'Independence Day Reception', image: 'linear-gradient(140deg,#065f46,#b91c1c)' },
  { label: 'Language Martyrs Day Tribute', image: 'linear-gradient(140deg,#1f2937,#0f766e)' },
  { label: 'Community Cultural Evening', image: 'linear-gradient(140deg,#78350f,#14532d)' }
];

const i18n = {
  bn: {
    brandName: 'বাংলাদেশ দূতাবাস',
    brandPlace: 'ওয়াশিংটন ডিসি, যুক্তরাষ্ট্র',
    heroEyebrow: 'অফিশিয়াল মিশন পোর্টাল',
    heroTitle: 'নাগরিক ও ভিজিটরদের জন্য দূতাবাস সেবার আধুনিক ও সহজ অ্যাক্সেস।',
    heroLead: 'পাসপোর্ট, ভিসা, এনভিআর, অ্যাটেস্টেশন ও কল্যাণসেবা সহজে পাওয়ার জন্য পরিষ্কার তথ্য কাঠামো।'
  },
  en: {
    brandName: 'Embassy of Bangladesh',
    brandPlace: 'Washington, D.C., USA',
    heroEyebrow: 'Official Mission Portal',
    heroTitle: 'Clean, modern access to embassy services for citizens and visitors.',
    heroLead: 'Designed with clear pathways for Passport, Visa, NVR, Attestation, and Welfare support, while keeping official notices, procurement announcements, and event highlights easy to find.'
  }
};

const serviceGrid = document.querySelector('#serviceGrid');
serviceData.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'service-card';
  card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><span>${item.cta} →</span>`;
  serviceGrid.appendChild(card);
});

const noticeList = document.querySelector('#noticeList');
function renderNotices(tab) {
  noticeList.innerHTML = '';
  noticesByTab[tab].forEach((item) => {
    const el = document.createElement('article');
    el.className = 'notice-item';
    const stamp = new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    el.innerHTML = `<p>${item.title}</p><time datetime="${item.date}">${stamp}</time>`;
    noticeList.appendChild(el);
  });
}
renderNotices('consular');

document.querySelectorAll('.tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    renderNotices(btn.dataset.tab);
  });
});

const galleryGrid = document.querySelector('#galleryGrid');
galleryData.forEach((item) => {
  const cell = document.createElement('figure');
  cell.className = 'gallery-item';
  cell.style.background = item.image;
  cell.dataset.label = item.label;
  galleryGrid.appendChild(cell);
});

let currentLang = 'en';
const toggleBtn = document.querySelector('#langToggle');
function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = i18n[lang][key];
  });
}
toggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'bn' : 'en';
  applyLang(currentLang);
  toggleBtn.textContent = currentLang === 'en' ? 'বাংলা' : 'English';
});
