/**
 * IMKON PLATFORMASI — Ultra-modern On-Demand Platform
 * 2026 Modern Design Architecture (Dynamic Island & Live Matching)
 * 1. Yordamchi (tozalaydi, necha soat ishlashi aniq)
 * 2. Ish haqi (bir kunda 150 ming gacha to'lash kerak)
 * 3. Qayerga borish (Farg'ona viloyati ichida)
 */

// 1. DATA REPOSITORY
const IMKON_STATE = {
  activeMode: 'client', // 'client' (Yordamchi chaqirish) or 'worker' (Kunlik ishlar)
  service: 'tozalash',
  hours: 6,
  city: 'Farg‘ona',
  wage: 150000,
  filterWorkerCity: 'all',
  filterWorkerCategory: 'all',
  
  // Real-time active orders (Kunlik ishlar tasmasi)
  tasks: [
    {
      id: 'task-1',
      title: 'Xonadon va derazalarni sarishta tozalash',
      category: 'tozalash',
      categoryName: 'Uylarni tozalash',
      icon: '🧹',
      employer: 'Shaxnoza opa (Xonadon egasi)',
      phone: '+998 90 555-12-34',
      telegram: 'shaxnoza_fargona',
      city: 'Farg‘ona',
      location: 'Farg‘ona sh., Sayilgoh ko‘chasi, Viloyat teatri ro‘parasida',
      hours: 5,
      hoursText: '5 soat (13:00 dan 18:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payType: 'Kun yakunida naqd / karta',
      duty: '4 xonali uyning pollari, derazalari va changlarini tozalash. Barcha vositalar uyda bor.',
      perks: ['Issiq choy va tushlik', 'Kafolatlangan to‘lov'],
      urgency: 'Bugun zudlik bilan',
      timeAgo: '5 daqiqa oldin',
      isHot: true
    },
    {
      id: 'task-2',
      title: 'Hovlini xazondan tozalash va daraxt oqlash',
      category: 'hovli',
      categoryName: 'Hovli & Bog‘',
      icon: '🏡',
      employer: 'Mansurbek aka',
      phone: '+998 91 120-44-55',
      telegram: 'mansur_aka_margilon',
      city: 'Marg‘ilon',
      location: 'Marg‘ilon sh., Yangi bozor yaqini, Mustaqillik MFY',
      hours: 6,
      hoursText: '6 soat (09:00 dan 15:00 gacha)',
      wage: 140000,
      wageText: '140 000 so‘m',
      payType: 'Ish tugashi bilan naqd',
      duty: 'Katta hovlidagi to‘kilgan barglarni tozalash, ariqlarni ochish va 12 tup daraxtni oqlash.',
      perks: ['Tushlik beriladi', 'Erkin grafik'],
      urgency: 'Ertaga ertalab',
      timeAgo: '18 daqiqa oldin',
      isHot: false
    },
    {
      id: 'task-3',
      title: 'Ulgurji do‘konga qutilarni tushirish va taxlash',
      category: 'yuk',
      categoryName: 'Do‘kon & Yuk',
      icon: '📦',
      employer: '«Baraka Savdo» ulgurji bazasi',
      phone: '+998 93 456-78-90',
      telegram: 'baraka_savdo_qoqon',
      city: 'Qo‘qon',
      location: 'Qo‘qon sh., Temiryo‘l vokzali yonida',
      hours: 4,
      hoursText: '4 soat (14:00 dan 18:00 gacha)',
      wage: 120000,
      wageText: '120 000 so‘m',
      payType: 'Kun oxirida naqd',
      duty: 'Yengil maishiy mahsulotlar qutilarini yuk mashinasidan tushirib javonlarga terish.',
      perks: ['Do‘kondan mahsulotlarga chegirma'],
      urgency: 'Hozir kerak',
      timeAgo: '30 daqiqa oldin',
      isHot: true
    },
    {
      id: 'task-4',
      title: 'To‘y marosimi: oshxona yordamchisi va idish yuvish',
      category: 'oshxona',
      categoryName: 'Oshxona & Idish',
      icon: '🍽️',
      employer: '«Ziyofat Saroyi» ma’muriyati',
      phone: '+998 73 244-11-22',
      telegram: 'ziyofat_restoran',
      city: 'Farg‘ona',
      location: 'Farg‘ona sh., Al-Farg‘oniy ko‘chasi, 65-uy',
      hours: 8,
      hoursText: '8 soat (11:00 dan 19:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payType: 'Soat 19:00 da qo‘lga naqd',
      duty: 'Restoran oshxonasida tozalikni saqlash, idish-tovoqlarni yuvish va oshpazga yordam.',
      perks: ['2 mahal bepul to‘y taomlari'],
      urgency: 'Bugun',
      timeAgo: '1 soat oldin',
      isHot: false
    },
    {
      id: 'task-5',
      title: 'Usta yordamchisi (Gipsokarton va devor shpaklyovka)',
      category: 'usta',
      categoryName: 'Usta yordami',
      icon: '🔨',
      employer: 'Ravshan usta',
      phone: '+998 90 777-33-11',
      telegram: 'ravshan_usta_rishton',
      city: 'Rishton',
      location: 'Rishton tumani, Chinorlar ko‘chasi',
      hours: 7,
      hoursText: '7 soat (09:00 dan 16:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payType: 'Kun yakunida to‘liq hisob-kitob',
      duty: 'Qorishmalarni aralashtirish, asboblarni uzatish va maydonni toza saqlash.',
      perks: ['Choyxona tushligi', 'Hunar o‘rganish'],
      urgency: 'Ertaga',
      timeAgo: '2 soat oldin',
      isHot: false
    },
    {
      id: 'task-6',
      title: 'Mebel sexida qadoqlash va ko‘tarishga yordamchi',
      category: 'yuk',
      categoryName: 'Do‘kon & Yuk',
      icon: '📦',
      employer: '«Quvasoy Mebel Servis»',
      phone: '+998 91 988-77-66',
      telegram: 'quvasoy_mebel',
      city: 'Quvasoy',
      location: 'Quvasoy sh., Sanoatchilar ko‘chasi',
      hours: 6,
      hoursText: '6 soat (13:00 dan 19:00 gacha)',
      wage: 150000,
      wageText: '150 000 so‘m',
      payType: 'Darhol to‘lanadi',
      duty: 'Tayyor yumshoq mebellarni plyonka bilan qadoqlash va furgonga joylash.',
      perks: ['Issiq choy va shirinliklar'],
      urgency: 'Bugun',
      timeAgo: '3 soat oldin',
      isHot: false
    }
  ],

  // Live verified helpers (Bo'sh va onlayn yordamchilar)
  helpers: [
    {
      id: 'hlp-1',
      name: 'Nodiraxon Karimova',
      role: 'Professional tozalash (Cleaning)',
      status: 'Hozir bo‘sh',
      isOnline: true,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&q=80',
      city: 'Farg‘ona',
      area: 'Farg‘ona shahar (Markaz, Kirguli, Aeroport)',
      rating: '5.0',
      jobsDone: 42,
      hoursDay: '4 - 8 soat',
      rate: '150 000 so‘mgacha / kun',
      phone: '+998 90 123-45-01',
      telegram: 'nodira_cleaning_uz',
      skills: ['Uylarni tozalash', 'Deraza oynalari', 'Dazmollash', 'Oshxona yuvish'],
      bio: 'Farg‘ona bo‘ylab xonadonlarni o‘z uyimdek toza va ozoda qilib beraman. Mas’uliyatli va chaqqonman.'
    },
    {
      id: 'hlp-2',
      name: 'Bahodir Yusupov',
      role: 'Hovli, bog‘ va yuk yordamchisi',
      status: 'Hozir bo‘sh',
      isOnline: true,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&q=80',
      city: 'Marg‘ilon',
      area: 'Marg‘ilon va Farg‘ona shaharlari',
      rating: '4.95',
      jobsDone: 56,
      hoursDay: '5 - 8 soat',
      rate: '140 000 - 150 000 so‘m',
      phone: '+998 91 345-67-02',
      telegram: 'bahodir_yordam_uz',
      skills: ['Hovli tozalash', 'Daraxt oqlash', 'Yuk tushirish', 'Usta ko‘magi'],
      bio: 'Har qanday jismoniy ish, hovli tartibga solish va remontga yordamchilik qilaman. Belgilangan vaqtda yetib boraman.'
    },
    {
      id: 'hlp-3',
      name: 'Gulnoza Mamajonova',
      role: 'Oshxona va to‘yxona yordamchisi',
      status: 'Hozir bo‘sh',
      isOnline: true,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&q=80',
      city: 'Qo‘qon',
      area: 'Qo‘qon shahar va atrof tumanlar',
      rating: '4.9',
      jobsDone: 31,
      hoursDay: '4 - 8 soat',
      rate: '130 000 - 150 000 so‘m',
      phone: '+998 93 890-12-03',
      telegram: 'gulnoza_oshxona_uz',
      skills: ['Idish yuvish', 'Sabzavot tozalash', 'To‘y xizmati', 'Oshxona tartibi'],
      bio: 'To‘y va tadbirlarda, kafelarda oshxona tozaligi va oshpazga yordam berish bo‘yicha katta tajribam bor.'
    },
    {
      id: 'hlp-4',
      name: 'Sherzodbek Oripov',
      role: 'Usta yordamchisi va duradgor',
      status: 'Buyurtmada',
      isOnline: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&q=80',
      city: 'Rishton',
      area: 'Rishton, Bag‘dod tumanlari',
      rating: '4.88',
      jobsDone: 27,
      hoursDay: '6 - 8 soat',
      rate: '150 000 so‘m / kun',
      phone: '+998 90 444-11-22',
      telegram: 'sherzod_usta_uz',
      skills: ['Gipsokarton', 'Qurilish yordami', 'Bo‘yoq ishlari'],
      bio: 'Qurilish va ta’mirlashda ustalar bilan birga ishlayman. Perforator va asboblarni yaxshi bilaman.'
    }
  ],

  // Useful knowledge base
  guides: [
    {
      id: 'g-1',
      icon: '✨',
      tag: 'Professional Tozalik',
      title: 'Uylarni tez va iz qoldirmasdan tozalash sirlari',
      readTime: '3 daqiqa',
      summary: 'Derazalarni dog‘siz artish, mikrofibra matolardan to‘g‘ri foydalanish va xonadonni 4 soatda yaltiratish qoidalari.'
    },
    {
      id: 'g-2',
      icon: '🤝',
      tag: 'Ishonch & Odob',
      title: 'Ish beruvchi bilan qanday kelishish kerak?',
      readTime: '2 daqiqa',
      summary: 'Birinchi qo‘ng‘iroq odobi, manzilni aniqlashtirish va 150 000 so‘mgacha bo‘lgan haqni aniq tasdiqlash yo‘riqnomasi.'
    },
    {
      id: 'g-3',
      icon: '🛠️',
      tag: 'Usta Shogirdi',
      title: 'Qurilish asboblari va xavfsizlik choralari',
      readTime: '4 daqiqa',
      summary: 'Perforator, bolgarka va asboblar bilan ishlaganda xavfsizlik ko‘zoynagi, qo‘lqop kiyish va ustaga sifatli ko‘maklashish.'
    }
  ]
};

// 2. CONTROLLER & ANIMATED LOGIC
class ImkonApp {
  constructor() {
    this.savedIds = JSON.parse(localStorage.getItem('imkon_v3_saved')) || ['task-1', 'task-2'];
    this.callHistory = JSON.parse(localStorage.getItem('imkon_v3_calls')) || [];
    this.currentWageTarget = 150000;
    this.displayWage = 150000;
  }

  init() {
    this.bindEvents();
    this.renderTasks();
    this.renderHelpers();
    this.renderGuides();
    this.updateWageDisplay(true);
    this.updateCounters();
  }

  bindEvents() {
    // Mode Switcher (Mijoz vs Yordamchi)
    const btnClient = document.getElementById('switch-mode-client');
    const btnWorker = document.getElementById('switch-mode-worker');
    const viewClient = document.getElementById('view-client-mode');
    const viewWorker = document.getElementById('view-worker-mode');

    if (btnClient && btnWorker) {
      btnClient.addEventListener('click', () => {
        IMKON_STATE.activeMode = 'client';
        btnClient.className = 'flex-1 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-emerald-600 text-white shadow-md transition-all flex items-center justify-center gap-2';
        btnWorker.className = 'flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-700 hover:text-slate-900 transition-all flex items-center justify-center gap-2';
        viewClient.classList.remove('hidden');
        viewWorker.classList.add('hidden');
      });

      btnWorker.addEventListener('click', () => {
        IMKON_STATE.activeMode = 'worker';
        btnWorker.className = 'flex-1 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-indigo-600 text-white shadow-md transition-all flex items-center justify-center gap-2';
        btnClient.className = 'flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-700 hover:text-slate-900 transition-all flex items-center justify-center gap-2';
        viewClient.classList.add('hidden');
        viewWorker.classList.remove('hidden');
        this.renderTasks();
      });
    }

    // Service Selector Pills
    document.querySelectorAll('.service-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.service-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        IMKON_STATE.service = btn.getAttribute('data-service');
      });
    });

    // Hours Selector Buttons
    document.querySelectorAll('.hours-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.hours-pill-btn').forEach(b => {
          b.className = 'hours-pill-btn px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all';
        });
        btn.className = 'hours-pill-btn px-4 py-2.5 rounded-xl text-xs font-black bg-emerald-600 text-white shadow-sm transition-all';
        
        const hrs = parseInt(btn.getAttribute('data-hours'), 10);
        IMKON_STATE.hours = hrs;
        this.calculateWage(hrs);
      });
    });

    // City Dropdown
    const citySelect = document.getElementById('builder-city-select');
    if (citySelect) {
      citySelect.addEventListener('change', (e) => {
        IMKON_STATE.city = e.target.value;
      });
    }

    // Fast order CTA
    const mainOrderBtn = document.getElementById('builder-order-btn');
    if (mainOrderBtn) {
      mainOrderBtn.addEventListener('click', () => {
        this.openOrderModal();
      });
    }

    // Worker Filter Buttons
    document.querySelectorAll('[data-filter-city]').forEach(btn => {
      btn.addEventListener('click', () => {
        IMKON_STATE.filterWorkerCity = btn.getAttribute('data-filter-city');
        document.querySelectorAll('[data-filter-city]').forEach(b => {
          b.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:border-emerald-400 transition-all';
        });
        btn.className = 'px-4 py-2 rounded-xl text-xs font-black bg-emerald-600 text-white shadow-sm';
        this.renderTasks();
      });
    });

    document.querySelectorAll('[data-filter-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        IMKON_STATE.filterWorkerCategory = btn.getAttribute('data-filter-cat');
        document.querySelectorAll('[data-filter-cat]').forEach(b => {
          b.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all';
        });
        btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black bg-slate-900 text-white';
        this.renderTasks();
      });
    });

    // Modal Close
    document.querySelectorAll('[data-close-modal]').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
      });
    });

    // Order Submission Form
    const orderForm = document.getElementById('form-confirm-order');
    if (orderForm) {
      orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('input-order-name').value;
        const phone = document.getElementById('input-order-phone').value;
        const address = document.getElementById('input-order-address').value;

        const serviceNames = {
          tozalash: 'Uylarni tozalash',
          hovli: 'Hovli & Bog‘ ishlari',
          yuk: 'Do‘kon & Yuk tushirish',
          oshxona: 'Oshxona & Idish yuvish',
          usta: 'Usta yordami'
        };

        const newTask = {
          id: 'task-' + Date.now(),
          title: `${serviceNames[IMKON_STATE.service]} (${IMKON_STATE.hours} soatlik)`,
          category: IMKON_STATE.service,
          categoryName: serviceNames[IMKON_STATE.service],
          icon: '🧹',
          employer: name,
          phone: phone,
          telegram: '',
          city: IMKON_STATE.city,
          location: `${IMKON_STATE.city} shahar, ${address}`,
          hours: IMKON_STATE.hours,
          hoursText: `${IMKON_STATE.hours} soatlik ish`,
          wage: this.currentWageTarget,
          wageText: `${this.currentWageTarget.toLocaleString('uz-UZ')} so‘m`,
          payType: 'Kun oxirida darhol',
          duty: `${serviceNames[IMKON_STATE.service]} xizmati. ${address} manzilida.`,
          perks: ['Kafolatlangan haq'],
          urgency: 'Zudlik bilan',
          timeAgo: 'Hozirgina',
          isHot: true
        };

        IMKON_STATE.tasks.unshift(newTask);
        document.getElementById('modal-order-confirm').classList.add('hidden');
        this.showToast('Buyurtmangiz Farg‘onadagi yordamchilarga yuborildi!', 'success');
        orderForm.reset();
        this.renderTasks();
      });
    }
  }

  calculateWage(hours) {
    // Whiteboard formula: Bir kunda 150 ming gacha
    let w = Math.min(150000, Math.round((hours / 8) * 150000 / 10000) * 10000);
    if (w < 60000) w = 60000;
    this.currentWageTarget = w;
    this.animateWageCounter(w);
  }

  animateWageCounter(target) {
    const el = document.getElementById('live-wage-counter');
    const hoursLabel = document.getElementById('live-hours-label');
    if (!el) return;

    if (hoursLabel) {
      hoursLabel.textContent = `${IMKON_STATE.hours} soat`;
    }

    const start = this.displayWage;
    const diff = target - start;
    const duration = 250;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      this.displayWage = Math.round(start + diff * progress);
      el.textContent = `${this.displayWage.toLocaleString('uz-UZ')} so‘m`;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

  updateWageDisplay(immediate) {
    const el = document.getElementById('live-wage-counter');
    if (el) el.textContent = `${this.currentWageTarget.toLocaleString('uz-UZ')} so‘m`;
  }

  renderTasks() {
    const container = document.getElementById('worker-feed-container');
    if (!container) return;

    const filtered = IMKON_STATE.tasks.filter(t => {
      const cityMatch = IMKON_STATE.filterWorkerCity === 'all' || t.city === IMKON_STATE.filterWorkerCity;
      const catMatch = IMKON_STATE.filterWorkerCategory === 'all' || t.category === IMKON_STATE.filterWorkerCategory;
      return cityMatch && catMatch;
    });

    const countEl = document.getElementById('worker-tasks-count');
    if (countEl) countEl.textContent = `${filtered.length} ta faol e’lon`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-card rounded-3xl p-10 text-center">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm font-bold text-slate-800">Ushbu shartlar bo‘yicha hozircha e’lon yo‘q</p>
          <button onclick="app.resetWorkerFilters()" class="mt-3 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold">Barchasini ko‘rish</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(t => `
      <div class="glass-card rounded-3xl p-5 sm:p-6 hover:border-emerald-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        
        <div class="space-y-3 flex-grow">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[11px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200">
              ${t.icon} ${t.categoryName}
            </span>
            <span class="px-3 py-1 rounded-full text-[11px] font-black bg-indigo-50 text-indigo-700 border border-indigo-100">
              ⏱️ ${t.hoursText}
            </span>
            ${t.isHot ? '<span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-50 text-rose-600 border border-rose-200 animate-pulse">🔥 Shoshilinch</span>' : ''}
            <span class="text-[11px] text-slate-400 font-medium ml-auto sm:ml-0">${t.timeAgo}</span>
          </div>

          <div>
            <h3 class="text-base sm:text-lg font-black text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer" onclick="app.openTaskDetails('${t.id}')">
              ${t.title}
            </h3>
            <p class="text-xs text-slate-500 mt-0.5">👤 <strong>Buyurtmachi:</strong> ${t.employer}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-slate-50/90 p-3 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span class="text-[10px] font-bold uppercase text-slate-400 block">1. Vazifasi:</span>
              <span class="font-bold text-slate-800 leading-tight">${t.duty}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase text-slate-400 block">2. Necha soat:</span>
              <span class="font-extrabold text-indigo-600">⏱️ ${t.hours} soat davomida</span>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase text-slate-400 block">3. Qayerga borish:</span>
              <span class="font-bold text-slate-800">📍 ${t.location}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center sm:flex-col justify-between sm:justify-center items-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
          <div class="text-left sm:text-right">
            <span class="text-[10px] font-black uppercase text-slate-400 block">Kunlik haq:</span>
            <span class="text-xl sm:text-2xl font-black text-emerald-600">${t.wageText}</span>
            <span class="text-[10px] text-slate-400 font-bold block">${t.payType}</span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="app.toggleSave('${t.id}')" class="p-3 rounded-2xl border border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all" title="Saqlash">
              <svg class="w-5 h-5 ${this.savedIds.includes(t.id) ? 'fill-rose-500 text-rose-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
            <a href="tel:${t.phone}" onclick="app.recordCall('${t.employer}', '${t.title}', '${t.phone}')" class="btn-shimmer px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2">
              <span>📞 Qo‘ng‘iroq</span>
            </a>
          </div>
        </div>

      </div>
    `).join('');
  }

  renderHelpers() {
    const container = document.getElementById('helpers-showcase-container');
    if (!container) return;

    container.innerHTML = IMKON_STATE.helpers.map(h => `
      <div class="glass-card rounded-3xl p-6 hover:border-emerald-300 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img src="${h.avatar}" alt="${h.name}" class="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-100 shadow-xs">
                ${h.isOnline ? '<span class="radar-ping absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white" title="Hozir onlayn"></span>' : ''}
              </div>
              <div>
                <h3 class="text-sm font-black text-slate-900">${h.name}</h3>
                <p class="text-xs font-bold text-emerald-700">${h.role}</p>
                <div class="flex items-center gap-1 text-[11px] text-amber-500 font-bold mt-0.5">
                  <span>★ ${h.rating}</span>
                  <span class="text-slate-400">(${h.jobsDone} ta xonadon)</span>
                </div>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-black ${h.isOnline ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-slate-500'} shrink-0">
              ${h.status}
            </span>
          </div>

          <div class="space-y-2 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
            <div class="flex items-start gap-1.5">
              <span class="text-slate-400 font-bold shrink-0">📍 Hududi:</span>
              <span class="font-bold text-slate-800">${h.area}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-slate-400 font-bold shrink-0">⏱️ Ish vaqti:</span>
              <span class="font-extrabold text-indigo-600">${h.hoursDay}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-slate-400 font-bold shrink-0">💰 Ish haqi:</span>
              <span class="font-black text-emerald-600">${h.rate}</span>
            </div>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">${h.bio}</p>

          <div class="flex flex-wrap gap-1.5 mb-5">
            ${h.skills.map(s => `<span class="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-lg">${s}</span>`).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <a href="https://t.me/${h.telegram}" target="_blank" class="px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5">
            <span>✈️ Telegram</span>
          </a>
          <a href="tel:${h.phone}" onclick="app.recordCall('${h.name}', '${h.role}', '${h.phone}')" class="btn-shimmer flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black text-center transition-all shadow-md shadow-emerald-600/20">
            📞 Chaqirish
          </a>
        </div>
      </div>
    `).join('');
  }

  renderGuides() {
    const container = document.getElementById('guides-showcase-container');
    if (!container) return;

    container.innerHTML = IMKON_STATE.guides.map(g => `
      <div class="glass-card rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full text-[10px] font-black bg-indigo-50 text-indigo-700 border border-indigo-100">${g.tag}</span>
            <span class="text-[11px] font-bold text-slate-400">⏱️ ${g.readTime}</span>
          </div>
          <div class="text-3xl mb-2">${g.icon}</div>
          <h3 class="text-base font-black text-slate-900 mb-2 leading-snug">${g.title}</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-5">${g.summary}</p>
        </div>

        <button onclick="app.showToast('Yo‘riqnoma ochilmoqda...', 'info')" class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all">
          O‘qish
        </button>
      </div>
    `).join('');
  }

  openOrderModal() {
    const modal = document.getElementById('modal-order-confirm');
    if (!modal) return;

    const names = {
      tozalash: '🧹 Uylarni tozalash (pol, deraza)',
      hovli: '🏡 Hovli & Bog‘ (xazon, ariq)',
      yuk: '📦 Do‘kon & Yuk tushirish',
      oshxona: '🍽️ Oshxona & Idish yuvish',
      usta: '🔨 Usta yordami'
    };

    document.getElementById('modal-summary-service').textContent = names[IMKON_STATE.service] || 'Tozalash';
    document.getElementById('modal-summary-hours').textContent = `${IMKON_STATE.hours} soatlik ish`;
    document.getElementById('modal-summary-city').textContent = `${IMKON_STATE.city} viloyati ichida`;
    document.getElementById('modal-summary-wage').textContent = `${this.currentWageTarget.toLocaleString('uz-UZ')} so‘m`;

    modal.classList.remove('hidden');
  }

  openTaskDetails(id) {
    const task = IMKON_STATE.tasks.find(t => t.id === id);
    if (!task) return;

    const modal = document.getElementById('modal-task-details');
    const body = document.getElementById('modal-task-details-body');
    if (!modal || !body) return;

    body.innerHTML = `
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-800">${task.icon} ${task.categoryName}</span>
          <span class="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700">⏱️ ${task.hoursText}</span>
        </div>
        <h3 class="text-xl font-black text-slate-900">${task.title}</h3>
        <p class="text-xs text-slate-500 mt-1">👤 Buyurtmachi: <strong>${task.employer}</strong></p>
      </div>

      <div class="space-y-3 mb-6">
        <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
          <span class="text-[10px] font-black uppercase text-slate-400 block">1. Vazifasi:</span>
          <p class="text-sm font-bold text-slate-800 mt-0.5">${task.duty}</p>
        </div>

        <div class="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-100">
          <span class="text-[10px] font-black uppercase text-indigo-500 block">2. Necha soat ishlashi:</span>
          <p class="text-sm font-black text-indigo-800 mt-0.5">⏱️ ${task.hoursText}</p>
        </div>

        <div class="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100">
          <span class="text-[10px] font-black uppercase text-emerald-600 block">3. Ish haqi:</span>
          <p class="text-lg font-black text-emerald-700 mt-0.5">${task.wageText}</p>
          <span class="text-[11px] text-emerald-800 font-bold">${task.payType}</span>
        </div>

        <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
          <span class="text-[10px] font-black uppercase text-slate-400 block">4. Qayerga borish:</span>
          <p class="text-sm font-bold text-slate-800 mt-0.5">📍 ${task.location}</p>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button onclick="app.toggleSave('${task.id}')" class="px-4 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700">
          ${this.savedIds.includes(task.id) ? '❤️ Saqlangan' : '🤍 Saqlash'}
        </button>
        <a href="tel:${task.phone}" onclick="app.recordCall('${task.employer}', '${task.title}', '${task.phone}')" class="btn-shimmer flex-1 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black text-center shadow-lg shadow-emerald-600/20">
          📞 Qo‘ng‘iroq qilish (${task.phone})
        </a>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  toggleSave(id) {
    if (this.savedIds.includes(id)) {
      this.savedIds = this.savedIds.filter(item => item !== id);
      this.showToast('Saqlanganlardan olib tashlandi', 'info');
    } else {
      this.savedIds.push(id);
      this.showToast('E’lon saqlab qo‘yildi!', 'success');
    }
    localStorage.setItem('imkon_v3_saved', JSON.stringify(this.savedIds));
    this.updateCounters();
    this.renderTasks();
  }

  recordCall(name, title, phone) {
    this.callHistory.unshift({ name, title, phone, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    localStorage.setItem('imkon_v3_calls', JSON.stringify(this.callHistory));
    this.showToast(`${name} bilan bog‘lanilmoqda: ${phone}`, 'info');
  }

  updateCounters() {
    document.querySelectorAll('.saved-counter-badge').forEach(el => {
      el.textContent = this.savedIds.length;
      el.classList.toggle('hidden', this.savedIds.length === 0);
    });
  }

  resetWorkerFilters() {
    IMKON_STATE.filterWorkerCity = 'all';
    IMKON_STATE.filterWorkerCategory = 'all';
    this.renderTasks();
  }

  showToast(text, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-600 text-white' : (type === 'info' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white');
    toast.className = `toast px-5 py-3.5 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2.5 ${bg}`;
    toast.innerHTML = `
      <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-black text-[11px]">✓</span>
      <span>${text}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

const app = new ImkonApp();
document.addEventListener('DOMContentLoaded', () => app.init());
