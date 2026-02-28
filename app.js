const LS_LANG = "gadgetshop_lang_v1";
const LS_USERS = "gadgetshop_users_v1";
const LS_CURRENT_USER = "gadgetshop_current_user_v1";

const getLang = () => localStorage.getItem(LS_LANG) || "ru";
const setLang = (lang) => {
  localStorage.setItem(LS_LANG, lang);
  document.documentElement.setAttribute("lang", lang === "kz" ? "kk" : "ru");
  window.dispatchEvent(new CustomEvent("gs:lang", { detail: { lang } }));
};

const dict = {
  ru: {
    ui: {
      lblSearch: "Поиск",
      phSearch: "Например: iPhone, Samsung, наушники...",
      lblCategory: "Категория",
      optAll: "Все",
      optPhone: "Телефоны",
      optAudio: "Аудио",
      optWatch: "Часы",
      optAccessory: "Аксессуары",
      lblSort: "Сортировка",
      sortPopular: "Популярные",
      sortPriceAsc: "Цена: по возрастанию",
      sortPriceDesc: "Цена: по убыванию",
      sortRating: "Рейтинг: высокий",
      lblMaxPrice: "Макс. цена (₸)",
      lblQuickFilters: "Быстрые фильтры",

      cartTitle: "🛒 Корзина",
      closeCartBtn: "Закрыть",
      cartEmpty: "Корзина пустая. Добавь товары из каталога.",
      sumGoods: "Товары",
      sumDelivery: "Доставка",
      sumTotal: "Итого",
      checkoutLabel: "Оформление (демо)",
      namePh: "Имя",
      phonePh: "Телефон",
      addressPh: "Адрес доставки",
      checkoutBtn: "Оформить заказ",
      checkoutNeedItems: "Добавь товары в корзину перед оформлением.",
      checkoutFill: "Заполни имя, телефон и адрес.",
      checkoutDonePrefix: "Заказ оформлен (демо). Сумма: ",
      notFound: "Ничего не найдено. Попробуй другой поиск/фильтр.",

      btnAdd: "Добавить",
      btnOpen: "Открыть",
      btnRemove: "Удалить",
      inCart: "В корзине: ",
      priceDemo: "Цена (демо)",
      popularity: "Популярность ",
      perItem: "за 1 шт.",

      authTitle: "👤 Аккаунт",
      authClose: "Закрыть",
      tabLogin: "Войти",
      tabRegister: "Регистрация",
      loginBtn: "Войти",
      registerBtn: "Создать аккаунт",
      authOk: "Готово.",
      authNeed: "Заполни все поля.",
      authBadEmail: "Неверный email.",
      authPassShort: "Пароль минимум 6 символов.",
      authEmailExists: "Этот email уже зарегистрирован.",
      authWrong: "Неверный email или пароль.",
      authHello: "Привет, ",
      authLogout: "Выйти",
      authNeedLoginForCheckout: "Сначала войди, чтобы оформить заказ."
    },
    categories: {
      phone: "Телефон",
      audio: "Аудио",
      watch: "Часы",
      accessory: "Аксессуар"
    },
    chips: {
      apple: "Apple",
      samsung: "Samsung",
      xiaomi: "Xiaomi",
      premium: "Premium",
      value: "До 150k",
      audio: "Аудио"
    },
    product: {
      added: "Добавлено ✓",
      addToCart: "Добавить в корзину",
      back: "Назад",
      notFound: "Товар не найден."
    },
    admin: {
      loginOk: "Вход выполнен.",
      loginBad: "Неверный логин или пароль.",
      openEdit: "Открыл товар для редактирования.",
      deleted: "Удалено.",
      saved: "Сохранено. Проверь каталог.",
      resetSeed: "Сброшено к дефолтным товарам.",
      idBad: "ID неправильный. Пример: p11",
      nameEmpty: "Название пустое.",
      priceBad: "Цена должна быть > 0",
      ratingBad: "Рейтинг 0–5",
      popularBad: "Популярность >= 0",
      imageNeed: "Укажи путь картинки, например img/x.jpg",
      btnEdit: "Редактировать",
      btnDelete: "Удалить",
      idPrefix: "id: ",
      usersEmpty: "Пока нет зарегистрированных пользователей.",
      usersCleared: "Все пользователи удалены."
    }
  },
  kz: {
    ui: {
      lblSearch: "Іздеу",
      phSearch: "Мысалы: iPhone, Samsung, құлаққап...",
      lblCategory: "Санат",
      optAll: "Барлығы",
      optPhone: "Телефондар",
      optAudio: "Аудио",
      optWatch: "Сағат",
      optAccessory: "Аксессуарлар",
      lblSort: "Сұрыптау",
      sortPopular: "Танымал",
      sortPriceAsc: "Баға: өсуі",
      sortPriceDesc: "Баға: кемуі",
      sortRating: "Рейтинг: жоғары",
      lblMaxPrice: "Макс. баға (₸)",
      lblQuickFilters: "Жылдам сүзгілер",

      cartTitle: "🛒 Себет",
      closeCartBtn: "Жабу",
      cartEmpty: "Себет бос. Каталогтан тауар қос.",
      sumGoods: "Тауарлар",
      sumDelivery: "Жеткізу",
      sumTotal: "Жалпы",
      checkoutLabel: "Рәсімдеу (демо)",
      namePh: "Аты",
      phonePh: "Телефон",
      addressPh: "Жеткізу мекенжайы",
      checkoutBtn: "Тапсырыс беру",
      checkoutNeedItems: "Алдымен себетке тауар қос.",
      checkoutFill: "Аты-жөні, телефон және мекенжайды толтыр.",
      checkoutDonePrefix: "Тапсырыс рәсімделді (демо). Сома: ",
      notFound: "Ештеңе табылмады. Басқа сүзгі/іздеуді көр.",

      btnAdd: "Қосу",
      btnOpen: "Ашу",
      btnRemove: "Жою",
      inCart: "Себетте: ",
      priceDemo: "Баға (демо)",
      popularity: "Танымалдық ",
      perItem: "1 данаға",

      authTitle: "👤 Аккаунт",
      authClose: "Жабу",
      tabLogin: "Кіру",
      tabRegister: "Тіркелу",
      loginBtn: "Кіру",
      registerBtn: "Аккаунт ашу",
      authOk: "Дайын.",
      authNeed: "Барлығын толтыр.",
      authBadEmail: "Email қате.",
      authPassShort: "Құпиясөз кемі 6 таңба.",
      authEmailExists: "Бұл email тіркелген.",
      authWrong: "Email немесе құпиясөз қате.",
      authHello: "Сәлем, ",
      authLogout: "Шығу",
      authNeedLoginForCheckout: "Тапсырыс үшін алдымен кір."
    },
    categories: {
      phone: "Телефон",
      audio: "Аудио",
      watch: "Сағат",
      accessory: "Аксессуар"
    },
    chips: {
      apple: "Apple",
      samsung: "Samsung",
      xiaomi: "Xiaomi",
      premium: "Premium",
      value: "150k дейін",
      audio: "Аудио"
    },
    product: {
      added: "Қосылды ✓",
      addToCart: "Себетке қосу",
      back: "Артқа",
      notFound: "Тауар табылмады."
    },
    admin: {
      loginOk: "Кіру орындалды.",
      loginBad: "Логин немесе құпиясөз қате.",
      openEdit: "Өңдеуге ашылды.",
      deleted: "Жойылды.",
      saved: "Сақталды. Каталогты тексер.",
      resetSeed: "Әдепкі тауарларға қайтарылды.",
      idBad: "ID қате. Мысалы: p11",
      nameEmpty: "Атауы бос.",
      priceBad: "Баға > 0 болуы керек",
      ratingBad: "Рейтинг 0–5",
      popularBad: "Танымалдық >= 0",
      imageNeed: "Сурет жолын жаз, мысалы img/x.jpg",
      btnEdit: "Өңдеу",
      btnDelete: "Жою",
      idPrefix: "id: ",
      usersEmpty: "Әзірше тіркелген қолданушы жоқ.",
      usersCleared: "Барлық қолданушы жойылды."
    }
  }
};

const t = () => dict[getLang()] || dict.ru;

const fmtKZT = (n) => {
  const lang = getLang();
  const locale = lang === "kz" ? "kk-KZ" : "ru-RU";
  return new Intl.NumberFormat(locale).format(Math.round(n)) + " ₸";
};

const LS_CART = "gadgetshop_cart_v1";
const LS_THEME = "gadgetshop_theme_v1";
const LS_PRODUCTS = "gadgetshop_products_v1";
const LS_ADMIN_SESSION = "gadgetshop_admin_session_v1";
const LS_ADMIN_USER = "gadgetshop_admin_user_v1";
const LS_ADMIN_PASS = "gadgetshop_admin_pass_v1";

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "iPhone 15 Pro 128GB",
    category: "phone",
    price: 599990,
    rating: 4.9,
    popular: 98,
    tags: ["apple", "premium"],
    image: "img/iphone15.jpg",
    desc: "Флагманский смартфон с мощным процессором, качественной камерой и плавной работой.",
    specs: { "Память": "128GB", "Экран": "6.1\"", "Камера": "48MP", "Батарея": "до 1 дня" }
  },
  {
    id: "p2",
    name: "Samsung Galaxy S24 256GB",
    category: "phone",
    price: 499990,
    rating: 4.8,
    popular: 92,
    tags: ["samsung", "android"],
    image: "img/s24.jpg",
    desc: "Современный Android-флагман: яркий экран, отличная камера, быстрая зарядка.",
    specs: { "Память": "256GB", "Экран": "6.2\"", "Камера": "50MP", "Батарея": "до 1.5 дня" }
  },
  {
    id: "p3",
    name: "Xiaomi Redmi Note 13 256GB",
    category: "phone",
    price: 139990,
    rating: 4.6,
    popular: 88,
    tags: ["xiaomi", "value"],
    image: "img/redmi13.jpg",
    desc: "Лучшее соотношение цены и возможностей: большой экран, быстрая работа, достойная камера.",
    specs: { "Память": "256GB", "Экран": "6.67\"", "Камера": "108MP", "Батарея": "до 2 дней" }
  },
  {
    id: "p4",
    name: "AirPods Pro (2nd gen)",
    category: "audio",
    price: 129990,
    rating: 4.7,
    popular: 90,
    tags: ["apple", "audio"],
    image: "img/airpods.jpg",
    desc: "Беспроводные наушники с шумоподавлением и удобной посадкой для повседневного использования.",
    specs: { "Тип": "TWS", "Шумодав": "есть", "Заряд": "до 6 ч", "Кейс": "да" }
  },
  {
    id: "p5",
    name: "Sony WH-1000XM5",
    category: "audio",
    price: 179990,
    rating: 4.8,
    popular: 85,
    tags: ["sony", "premium"],
    image: "img/sonyxm5.jpg",
    desc: "Топовые полноразмерные наушники с очень сильным шумоподавлением и крутым звуком.",
    specs: { "Тип": "Over-ear", "Шумодав": "лучший", "Заряд": "до 30 ч", "Bluetooth": "5.x" }
  },
  {
    id: "p6",
    name: "Apple Watch Series 9",
    category: "watch",
    price: 219990,
    rating: 4.7,
    popular: 80,
    tags: ["apple", "watch"],
    image: "img/watch9.jpg",
    desc: "Умные часы для спорта и повседневности: уведомления, здоровье, тренировки.",
    specs: { "Экран": "Always-on", "Защита": "WR", "Датчики": "пульс/SpO2", "Заряд": "1 день" }
  },
  {
    id: "p7",
    name: "Samsung Galaxy Watch 6",
    category: "watch",
    price: 169990,
    rating: 4.6,
    popular: 74,
    tags: ["samsung", "watch"],
    image: "img/watch6.jpg",
    desc: "Смарт-часы на Wear OS: удобные виджеты, спорт, сон, уведомления.",
    specs: { "Экран": "AMOLED", "Защита": "WR", "Датчики": "пульс/сон", "Заряд": "1–2 дня" }
  },
  {
    id: "p8",
    name: "Power Bank 20000mAh",
    category: "accessory",
    price: 19990,
    rating: 4.4,
    popular: 70,
    tags: ["battery", "travel"],
    image: "img/powerbank.jpg",
    desc: "Большая ёмкость для поездок и учебы: заряди телефон 2–4 раза.",
    specs: { "Ёмкость": "20000mAh", "Выход": "USB/Type-C", "Быстрая зарядка": "есть", "Вес": "средний" }
  },
  {
    id: "p9",
    name: "Чехол MagSafe",
    category: "accessory",
    price: 14990,
    rating: 4.3,
    popular: 62,
    tags: ["case", "apple"],
    image: "img/case.jpg",
    desc: "Надёжная защита и удобное крепление MagSafe.",
    specs: { "Материал": "силикон", "Совместимость": "iPhone", "MagSafe": "да", "Цвет": "разный" }
  },
  {
    id: "p10",
    name: "Зарядка USB-C 45W",
    category: "accessory",
    price: 11990,
    rating: 4.5,
    popular: 67,
    tags: ["charger", "usb-c"],
    image: "img/charger.jpg",
    desc: "Быстрая зарядка для телефонов/планшетов/ноутбуков (если поддерживается).",
    specs: { "Мощность": "45W", "Порт": "USB-C", "PD": "есть", "Кабель": "не всегда" }
  }
];

const q = (sel) => document.querySelector(sel);
const safeId = (s) => /^[a-z0-9_-]+$/i.test(s);

const getTheme = () => localStorage.getItem(LS_THEME) || "dark";
const setTheme = (t0) => {
  document.documentElement.setAttribute("data-theme", t0);
  localStorage.setItem(LS_THEME, t0);
};

const loadCartMap = () => {
  const m = new Map();
  const raw = localStorage.getItem(LS_CART);
  if (!raw) return m;
  try {
    const obj = JSON.parse(raw);
    for (const [id, qty] of Object.entries(obj)) {
      const n = Number(qty);
      if (Number.isFinite(n) && n > 0) m.set(id, n);
    }
  } catch {}
  return m;
};

const saveCartMap = (m) => {
  const obj = {};
  for (const [id, qty] of m.entries()) obj[id] = qty;
  localStorage.setItem(LS_CART, JSON.stringify(obj));
};

const loadProducts = () => {
  const raw = localStorage.getItem(LS_PRODUCTS);
  if (!raw) return DEFAULT_PRODUCTS.slice();
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return DEFAULT_PRODUCTS.slice();
    return arr.filter(p => p && typeof p.id === "string" && typeof p.name === "string");
  } catch {
    return DEFAULT_PRODUCTS.slice();
  }
};

const saveProducts = (arr) => localStorage.setItem(LS_PRODUCTS, JSON.stringify(arr));
const resetProducts = () => localStorage.removeItem(LS_PRODUCTS);

const categoryLabel = (c) => {
  const m = t().categories;
  if (c === "phone") return m.phone;
  if (c === "audio") return m.audio;
  if (c === "watch") return m.watch;
  if (c === "accessory") return m.accessory;
  return c;
};

const getCartCount = (cart) => {
  let count = 0;
  for (const qty of cart.values()) count += qty;
  return count;
};

const loadUsers = () => {
  const raw = localStorage.getItem(LS_USERS);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.filter(u => u && typeof u.id === "string" && typeof u.email === "string");
  } catch {
    return [];
  }
};

const saveUsers = (arr) => localStorage.setItem(LS_USERS, JSON.stringify(arr));

const currentUser = () => {
  const raw = localStorage.getItem(LS_CURRENT_USER);
  if (!raw) return null;
  try {
    const u = JSON.parse(raw);
    if (!u || typeof u.id !== "string") return null;
    return u;
  } catch {
    return null;
  }
};

const setCurrentUser = (u) => {
  if (!u) localStorage.removeItem(LS_CURRENT_USER);
  else localStorage.setItem(LS_CURRENT_USER, JSON.stringify(u));
  window.dispatchEvent(new CustomEvent("gs:user"));
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email||"").trim().toLowerCase());

const nowIso = () => new Date().toISOString();

const mountLangSwitch = () => {
  const buttons = document.querySelectorAll(".langBtn");
  if (!buttons.length) return;
  const saved = getLang();
  buttons.forEach(b => b.classList.toggle("active", b.dataset.lang === saved));
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setLang(lang);
    });
  });
};

const mountHeaderCommon = (cart) => {
  const cartCountEl = q("#cartCount");
  if (cartCountEl) cartCountEl.textContent = String(getCartCount(cart));

  const themeBtn = q("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = getTheme();
      setTheme(cur === "dark" ? "light" : "dark");
    });
  }

  mountLangSwitch();
  mountUserBox();
};

const mountUserBox = () => {
  const box = q("#userBox");
  if (!box) return;

  const u = currentUser();
  box.innerHTML = "";

  if (!u) {
    const btn = document.createElement("button");
    btn.id = "loginOpenBtn";
    btn.type = "button";
    btn.className = "btn btn--ghost btn--icon btn--appleIcon";
    btn.setAttribute("aria-label", "Войти");
    btn.innerHTML = `<span class="icon" aria-hidden="true">👤</span>`;
    btn.addEventListener("click", openAuth);
    box.appendChild(btn);
    return;
  }

  const chip = document.createElement("div");
  chip.className = "userChip";
  chip.innerHTML = `
    <div>
      <div class="userChip__name">${t().ui.authHello}${u.name || u.email}</div>
      <div class="userChip__meta">${u.email}</div>
    </div>
  `;

  const out = document.createElement("button");
  out.type = "button";
  out.className = "userChip__btn";
  out.textContent = t().ui.authLogout;
  out.addEventListener("click", () => {
    setCurrentUser(null);
    mountUserBox();
  });

  chip.appendChild(out);
  box.appendChild(chip);
};

const openAuth = () => {
  const modal = q("#authModal");
  if (!modal) return;
  modal.classList.add("modal--open");
  modal.setAttribute("aria-hidden", "false");
};

const closeAuth = () => {
  const modal = q("#authModal");
  if (!modal) return;
  modal.classList.remove("modal--open");
  modal.setAttribute("aria-hidden", "true");
};

const mountAuthModal = () => {
  const modal = q("#authModal");
  if (!modal) return;

  const overlay = q("#authOverlay");
  const closeBtn = q("#authCloseBtn");
  const tabLogin = q("#tabLogin");
  const tabRegister = q("#tabRegister");
  const loginForm = q("#loginForm");
  const registerForm = q("#registerForm");
  const msg = q("#authMsg");

  const loginEmail = q("#loginEmail");
  const loginPassword = q("#loginPassword");
  const doLoginBtn = q("#doLoginBtn");

  const regName = q("#regName");
  const regEmail = q("#regEmail");
  const regPassword = q("#regPassword");
  const doRegisterBtn = q("#doRegisterBtn");

  const setMsg = (text, ok) => {
    if (!msg) return;
    msg.textContent = text;
    msg.className = ok ? "hint hint--ok" : "hint hint--bad";
    if (!text) msg.className = "hint";
  };

  const showLogin = () => {
    tabLogin.classList.add("authTab--on");
    tabRegister.classList.remove("authTab--on");
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    setMsg("", true);
  };

  const showRegister = () => {
    tabRegister.classList.add("authTab--on");
    tabLogin.classList.remove("authTab--on");
    registerForm.style.display = "flex";
    loginForm.style.display = "none";
    setMsg("", true);
  };

  tabLogin.addEventListener("click", showLogin);
  tabRegister.addEventListener("click", showRegister);

  const doLogin = () => {
    const email = String(loginEmail.value || "").trim().toLowerCase();
    const pass = String(loginPassword.value || "").trim();

    if (!email || !pass) { setMsg(t().ui.authNeed, false); return; }
    if (!isValidEmail(email)) { setMsg(t().ui.authBadEmail, false); return; }

    const users = loadUsers();
    const u = users.find(x => String(x.email||"").toLowerCase() === email && String(x.password||"") === pass);
    if (!u) { setMsg(t().ui.authWrong, false); return; }

    setCurrentUser({ id: u.id, name: u.name, email: u.email });
    setMsg(t().ui.authOk, true);
    mountUserBox();
    setTimeout(closeAuth, 350);
  };

  const doRegister = () => {
    const name = String(regName.value || "").trim();
    const email = String(regEmail.value || "").trim().toLowerCase();
    const pass = String(regPassword.value || "").trim();

    if (!name || !email || !pass) { setMsg(t().ui.authNeed, false); return; }
    if (!isValidEmail(email)) { setMsg(t().ui.authBadEmail, false); return; }
    if (pass.length < 6) { setMsg(t().ui.authPassShort, false); return; }

    const users = loadUsers();
    if (users.some(x => String(x.email||"").toLowerCase() === email)) {
      setMsg(t().ui.authEmailExists, false);
      return;
    }

    const id = "u_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16);
    const user = { id, name, email, password: pass, createdAt: nowIso() };
    users.push(user);
    saveUsers(users);

    setCurrentUser({ id: user.id, name: user.name, email: user.email });
    setMsg(t().ui.authOk, true);
    mountUserBox();
    setTimeout(closeAuth, 350);
  };

  doLoginBtn.addEventListener("click", doLogin);
  doRegisterBtn.addEventListener("click", doRegister);

  overlay.addEventListener("click", closeAuth);
  closeBtn.addEventListener("click", closeAuth);

  window.addEventListener("gs:lang", () => {
    const u = t().ui;
    const title = q("#authTitle");
    if (title) title.textContent = u.authTitle;
    if (closeBtn) closeBtn.textContent = u.authClose;
    if (tabLogin) tabLogin.textContent = u.tabLogin;
    if (tabRegister) tabRegister.textContent = u.tabRegister;
    if (doLoginBtn) doLoginBtn.textContent = u.loginBtn;
    if (doRegisterBtn) doRegisterBtn.textContent = u.registerBtn;
  });

  window.addEventListener("gs:user", mountUserBox);
};

const applyStaticUITexts = () => {
  const u = t().ui;
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setPlaceholder = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
  };

  setText("lblSearch", u.lblSearch);
  setPlaceholder("searchInput", u.phSearch);

  setText("lblCategory", u.lblCategory);
  setText("optAll", u.optAll);
  setText("optPhone", u.optPhone);
  setText("optAudio", u.optAudio);
  setText("optWatch", u.optWatch);
  setText("optAccessory", u.optAccessory);

  setText("lblSort", u.lblSort);
  setText("sortPopular", u.sortPopular);
  setText("sortPriceAsc", u.sortPriceAsc);
  setText("sortPriceDesc", u.sortPriceDesc);
  setText("sortRating", u.sortRating);

  setText("lblMaxPrice", u.lblMaxPrice);
  setText("lblQuickFilters", u.lblQuickFilters);

  setText("cartTitle", u.cartTitle);
  const closeBtn = document.getElementById("closeCartBtn");
  if (closeBtn) closeBtn.textContent = u.closeCartBtn;

  setText("sumGoods", u.sumGoods);
  setText("sumDelivery", u.sumDelivery);
  setText("sumTotal", u.sumTotal);

  setText("checkoutLabel", u.checkoutLabel);
  setPlaceholder("nameInput", u.namePh);
  setPlaceholder("phoneInput", u.phonePh);
  setPlaceholder("addressInput", u.addressPh);

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) checkoutBtn.textContent = u.checkoutBtn;

  const authTitle = document.getElementById("authTitle");
  if (authTitle) authTitle.textContent = u.authTitle;
  const authCloseBtn = document.getElementById("authCloseBtn");
  if (authCloseBtn) authCloseBtn.textContent = u.authClose;
  const tabLogin = document.getElementById("tabLogin");
  if (tabLogin) tabLogin.textContent = u.tabLogin;
  const tabRegister = document.getElementById("tabRegister");
  if (tabRegister) tabRegister.textContent = u.tabRegister;

  const doLoginBtn = document.getElementById("doLoginBtn");
  if (doLoginBtn) doLoginBtn.textContent = u.loginBtn;
  const doRegisterBtn = document.getElementById("doRegisterBtn");
  if (doRegisterBtn) doRegisterBtn.textContent = u.registerBtn;
};

const chipDefs = () => {
  const c = t().chips;
  return [
    { key: "apple", label: c.apple },
    { key: "samsung", label: c.samsung },
    { key: "xiaomi", label: c.xiaomi },
    { key: "premium", label: c.premium },
    { key: "value", label: c.value },
    { key: "audio", label: c.audio }
  ];
};

const createCard = (p, inCartQty, onAdd, onOpen) => {
  const u = t().ui;

  const card = document.createElement("article");
  card.className = "card card--click";
  card.tabIndex = 0;

  const img = document.createElement("div");
  img.className = "card__img";
  img.innerHTML = `<img src="${p.image}" alt="${p.name}" loading="lazy">`;

  const top = document.createElement("div");
  top.className = "card__top";
  top.innerHTML = `
    <div class="card__title">${p.name}</div>
    <div class="card__meta">
      <span class="pill">${categoryLabel(p.category)}</span>
      <span class="pill">★ ${Number(p.rating||0).toFixed(1)}</span>
      <span class="pill">${u.popularity}${Number(p.popular||0)}</span>
    </div>
  `;

  const body = document.createElement("div");
  body.className = "card__body";

  const priceRow = document.createElement("div");
  priceRow.className = "priceRow";
  priceRow.innerHTML = `
    <div>
      <div class="price">${fmtKZT(p.price)}</div>
      <div class="small">${u.priceDemo}</div>
    </div>
    <div class="small">${inCartQty > 0 ? (u.inCart + inCartQty) : ""}</div>
  `;

  const actions = document.createElement("div");
  actions.className = "card__actions";

  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.className = "btn btn--primary";
  addBtn.textContent = u.btnAdd;
  addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    onAdd();
  });

  const detailsBtn = document.createElement("button");
  detailsBtn.type = "button";
  detailsBtn.className = "btn btn--ghost";
  detailsBtn.textContent = u.btnOpen;
  detailsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    onOpen();
  });

  actions.appendChild(addBtn);
  actions.appendChild(detailsBtn);

  body.appendChild(priceRow);
  body.appendChild(actions);

  card.appendChild(img);
  card.appendChild(top);
  card.appendChild(body);

  card.addEventListener("click", onOpen);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") onOpen();
  });

  return card;
};

const initIndexPage = () => {
  const els = {
    grid: q("#productGrid"),
    search: q("#searchInput"),
    category: q("#categorySelect"),
    sort: q("#sortSelect"),
    maxPrice: q("#maxPrice"),
    chips: q("#chips"),
    cartBtn: q("#cartBtn"),
    cartModal: q("#cartModal"),
    cartOverlay: q("#cartOverlay"),
    closeCartBtn: q("#closeCartBtn"),
    cartItems: q("#cartItems"),
    cartSubtotal: q("#cartSubtotal"),
    cartShipping: q("#cartShipping"),
    cartTotal: q("#cartTotal"),
    checkoutBtn: q("#checkoutBtn"),
    checkoutMsg: q("#checkoutMsg"),
    nameInput: q("#nameInput"),
    phoneInput: q("#phoneInput"),
    addressInput: q("#addressInput")
  };

  const state = { chip: null, cart: loadCartMap(), products: loadProducts() };

  const updateCartBadge = () => {
    const cartCountEl = q("#cartCount");
    if (cartCountEl) cartCountEl.textContent = String(getCartCount(state.cart));
  };

  const saveCart = () => saveCartMap(state.cart);

  const cartTotals = () => {
    let subtotal = 0;
    for (const [id, qty] of state.cart.entries()) {
      const p = state.products.find(x => x.id === id);
      if (p) subtotal += Number(p.price||0) * qty;
    }
    const shipping = subtotal > 0 ? (subtotal >= 200000 ? 0 : 2500) : 0;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  };

  const renderCart = () => {
    const u = t().ui;
    els.cartItems.innerHTML = "";

    if (state.cart.size === 0) {
      const d = document.createElement("div");
      d.className = "empty";
      d.textContent = u.cartEmpty;
      els.cartItems.appendChild(d);
    } else {
      for (const [id, qty] of state.cart.entries()) {
        const p = state.products.find(x => x.id === id);
        if (!p) continue;

        const row = document.createElement("div");
        row.className = "cartItem";

        const left = document.createElement("div");
        left.className = "cartItem__left";
        left.innerHTML = `
          <div class="cartItem__name">${p.name}</div>
          <div class="cartItem__meta">${categoryLabel(p.category)} • ★ ${Number(p.rating||0).toFixed(1)}</div>
          <div class="cartItem__meta">${fmtKZT(p.price)} ${u.perItem}</div>
        `;

        const right = document.createElement("div");
        right.className = "cartItem__right";

        const qtyBox = document.createElement("div");
        qtyBox.className = "qty";

        const minus = document.createElement("button");
        minus.type = "button";
        minus.className = "btn qty__btn";
        minus.textContent = "−";
        minus.addEventListener("click", () => {
          const cur = state.cart.get(id) || 0;
          if (cur <= 1) state.cart.delete(id);
          else state.cart.set(id, cur - 1);
          saveCart();
          updateCartBadge();
          renderCart();
          renderProducts();
        });

        const num = document.createElement("div");
        num.className = "qty__num";
        num.textContent = String(qty);

        const plus = document.createElement("button");
        plus.type = "button";
        plus.className = "btn qty__btn";
        plus.textContent = "+";
        plus.addEventListener("click", () => {
          state.cart.set(id, (state.cart.get(id) || 0) + 1);
          saveCart();
          updateCartBadge();
          renderCart();
          renderProducts();
        });

        qtyBox.appendChild(minus);
        qtyBox.appendChild(num);
        qtyBox.appendChild(plus);

        const line = document.createElement("div");
        line.style.fontWeight = "900";
        line.textContent = fmtKZT(Number(p.price||0) * qty);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "btn btn--danger";
        remove.textContent = u.btnRemove;
        remove.addEventListener("click", () => {
          state.cart.delete(id);
          saveCart();
          updateCartBadge();
          renderCart();
          renderProducts();
        });

        right.appendChild(qtyBox);
        right.appendChild(line);
        right.appendChild(remove);

        row.appendChild(left);
        row.appendChild(right);

        els.cartItems.appendChild(row);
      }
    }

    const { subtotal, shipping, total } = cartTotals();
    els.cartSubtotal.textContent = fmtKZT(subtotal);
    els.cartShipping.textContent = fmtKZT(shipping);
    els.cartTotal.textContent = fmtKZT(total);
  };

  const openCart = () => {
    els.cartModal.classList.add("modal--open");
    els.cartModal.setAttribute("aria-hidden", "false");
    renderCart();
  };

  const closeCart = () => {
    els.cartModal.classList.remove("modal--open");
    els.cartModal.setAttribute("aria-hidden", "true");
    els.checkoutMsg.textContent = "";
    els.checkoutMsg.className = "hint";
  };

  const checkout = () => {
    const u = t().ui;

    if (!currentUser()) {
      els.checkoutMsg.textContent = u.authNeedLoginForCheckout;
      els.checkoutMsg.className = "hint hint--bad";
      openAuth();
      return;
    }

    const name = (els.nameInput.value || "").trim();
    const phone = (els.phoneInput.value || "").trim();
    const address = (els.addressInput.value || "").trim();

    if (state.cart.size === 0) {
      els.checkoutMsg.textContent = u.checkoutNeedItems;
      els.checkoutMsg.className = "hint hint--bad";
      return;
    }
    if (name.length < 2 || phone.length < 5 || address.length < 5) {
      els.checkoutMsg.textContent = u.checkoutFill;
      els.checkoutMsg.className = "hint hint--bad";
      return;
    }

    const { total } = cartTotals();
    els.checkoutMsg.textContent = `${u.checkoutDonePrefix}${fmtKZT(total)}.`;
    els.checkoutMsg.className = "hint hint--ok";

    state.cart.clear();
    saveCart();
    updateCartBadge();
    renderCart();
    renderProducts();

    els.nameInput.value = "";
    els.phoneInput.value = "";
    els.addressInput.value = "";
  };

  const getFilteredProducts = () => {
    const query0 = (els.search.value || "").trim().toLowerCase();
    const cat = els.category.value;
    const maxP = Number(els.maxPrice.value || 0);
    const chip = state.chip;

    let list = state.products.slice();

    if (query0.length > 0) list = list.filter(p => (p.name||"").toLowerCase().includes(query0));
    if (cat !== "all") list = list.filter(p => p.category === cat);
    if (maxP > 0) list = list.filter(p => Number(p.price||0) <= maxP);

    if (chip) {
      if (chip === "value") list = list.filter(p => Number(p.price || 0) <= 150000);
      else if (chip === "audio") list = list.filter(p => p.category === "audio");
      else list = list.filter(p => (Array.isArray(p.tags) ? p.tags : []).includes(chip));
    }

    const sort = els.sort.value;
    if (sort === "popular") list.sort((a,b) => Number(b.popular||0) - Number(a.popular||0));
    if (sort === "priceAsc") list.sort((a,b) => Number(a.price||0) - Number(b.price||0));
    if (sort === "priceDesc") list.sort((a,b) => Number(b.price||0) - Number(a.price||0));
    if (sort === "ratingDesc") list.sort((a,b) => Number(b.rating||0) - Number(a.rating||0));

    return list;
  };

  const renderChips = () => {
    els.chips.innerHTML = "";
    const defs = chipDefs();

    for (const def of defs) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (state.chip === def.key ? " chip--on" : "");
      b.textContent = def.label;
      b.addEventListener("click", () => {
        state.chip = state.chip === def.key ? null : def.key;
        renderChips();
        renderProducts();
      });
      els.chips.appendChild(b);
    }
  };

  const openProduct = (id) => {
    window.location.href = `product.html?id=${encodeURIComponent(id)}`;
  };

  const renderProducts = () => {
    const u = t().ui;
    const list = getFilteredProducts();
    els.grid.innerHTML = "";

    if (list.length === 0) {
      const d = document.createElement("div");
      d.className = "empty";
      d.textContent = u.notFound;
      els.grid.appendChild(d);
      return;
    }

    for (const p of list) {
      const inCartQty = state.cart.get(p.id) || 0;
      const card = createCard(
        p,
        inCartQty,
        () => {
          state.cart.set(p.id, (state.cart.get(p.id) || 0) + 1);
          saveCart();
          updateCartBadge();
          renderProducts();
        },
        () => openProduct(p.id)
      );
      els.grid.appendChild(card);
    }
  };

  els.search.addEventListener("input", renderProducts);
  els.category.addEventListener("change", renderProducts);
  els.sort.addEventListener("change", renderProducts);
  els.maxPrice.addEventListener("input", renderProducts);

  els.cartBtn.addEventListener("click", openCart);
  els.cartOverlay.addEventListener("click", closeCart);
  els.closeCartBtn.addEventListener("click", closeCart);
  els.checkoutBtn.addEventListener("click", checkout);

  mountHeaderCommon(state.cart);
  applyStaticUITexts();
  mountAuthModal();
  renderChips();
  renderProducts();

  window.addEventListener("gs:lang", () => {
    applyStaticUITexts();
    renderChips();
    renderProducts();
    if (els.cartModal.classList.contains("modal--open")) renderCart();
    mountUserBox();
  });

  window.addEventListener("gs:user", () => {
    mountUserBox();
  });
};

const initProductPage = () => {
  const cart = loadCartMap();
  const products = loadProducts();
  mountHeaderCommon(cart);
  mountAuthModal();

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = products.find(p => p.id === id);

  const titleEl = q("#pTitle");
  const imgEl = q("#pImage");
  const priceEl = q("#pPrice");
  const metaEl = q("#pMeta");
  const descEl = q("#pDesc");
  const specsEl = q("#pSpecs");
  const addBtn = q("#pAddBtn");
  const backBtn = q("#backBtn");
  const notFoundEl = q("#notFound");

  const updateBadge = () => {
    const cartCountEl = q("#cartCount");
    if (cartCountEl) cartCountEl.textContent = String(getCartCount(cart));
  };

  const applyProductTexts = () => {
    const ptxt = t().product;
    if (addBtn) addBtn.textContent = ptxt.addToCart;
    if (backBtn) backBtn.textContent = ptxt.back;
    if (notFoundEl && !product) notFoundEl.textContent = ptxt.notFound;
  };

  const goBack = () => { window.location.href = "index.html"; };

  if (!product) {
    if (notFoundEl) {
      notFoundEl.style.display = "block";
      notFoundEl.textContent = t().product.notFound;
    }
    if (backBtn) backBtn.addEventListener("click", goBack);
    applyProductTexts();
    return;
  }

  document.title = product.name + " — GadgetShop";
  if (titleEl) titleEl.textContent = product.name;
  if (imgEl) { imgEl.src = product.image || ""; imgEl.alt = product.name || ""; }
  if (priceEl) priceEl.textContent = fmtKZT(Number(product.price||0));

  if (metaEl) {
    metaEl.innerHTML = `
      <span class="pill">${categoryLabel(product.category)}</span>
      <span class="pill">★ ${Number(product.rating||0).toFixed(1)}</span>
      <span class="pill">${t().ui.popularity}${Number(product.popular||0)}</span>
    `;
  }

  if (descEl) descEl.textContent = product.desc || "";

  if (specsEl) {
    specsEl.innerHTML = "";
    const specs = product.specs && typeof product.specs === "object" ? product.specs : {};
    for (const [k, v] of Object.entries(specs)) {
      const row = document.createElement("div");
      row.className = "specRow";
      row.innerHTML = `<div class="specKey">${k}</div><div class="specVal">${v}</div>`;
      specsEl.appendChild(row);
    }
  }

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      cart.set(product.id, (cart.get(product.id) || 0) + 1);
      saveCartMap(cart);
      updateBadge();
      const ptxt = t().product;
      addBtn.textContent = ptxt.added;
      setTimeout(() => (addBtn.textContent = ptxt.addToCart), 900);
    });
  }

  if (backBtn) backBtn.addEventListener("click", goBack);

  applyProductTexts();
  updateBadge();

  window.addEventListener("gs:lang", () => {
    applyProductTexts();
    if (priceEl) priceEl.textContent = fmtKZT(Number(product.price||0));
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="pill">${categoryLabel(product.category)}</span>
        <span class="pill">★ ${Number(product.rating||0).toFixed(1)}</span>
        <span class="pill">${t().ui.popularity}${Number(product.popular||0)}</span>
      `;
    }
    mountUserBox();
  });
};

const parseSpecs = (text) => {
  const obj = {};
  const lines = String(text || "").split("\n");
  for (const line of lines) {
    const s = line.trim();
    if (!s) continue;
    const idx = s.indexOf(":");
    if (idx === -1) continue;
    const k = s.slice(0, idx).trim();
    const v = s.slice(idx + 1).trim();
    if (k) obj[k] = v;
  }
  return obj;
};

const initAdminPage = () => {
  const loginBox = q("#loginBox");
  const adminBox = q("#adminBox");
  const loginUser = q("#loginUser");
  const loginPass = q("#loginPass");
  const loginBtn = q("#loginBtn");
  const loginMsg = q("#loginMsg");
  const logoutBtn = q("#logoutBtn");

  if (!localStorage.getItem(LS_ADMIN_USER)) localStorage.setItem(LS_ADMIN_USER, "admin");
  if (!localStorage.getItem(LS_ADMIN_PASS)) localStorage.setItem(LS_ADMIN_PASS, "1234");

  const setLoginMsg = (t0, ok) => {
    if (!loginMsg) return;
    loginMsg.textContent = t0;
    loginMsg.className = ok ? "hint hint--ok" : "hint hint--bad";
    if (!t0) loginMsg.className = "hint";
  };

  const isAuthed = () => localStorage.getItem(LS_ADMIN_SESSION) === "1";

  const showAdmin = () => {
    if (loginBox) loginBox.style.display = "none";
    if (adminBox) adminBox.style.display = "block";
  };

  const showLogin = () => {
    if (adminBox) adminBox.style.display = "none";
    if (loginBox) loginBox.style.display = "flex";
    setLoginMsg("", true);
    if (loginUser) loginUser.value = "";
    if (loginPass) loginPass.value = "";
  };

  const doLogin = () => {
    const u0 = (loginUser?.value || "").trim();
    const p0 = (loginPass?.value || "").trim();
    const ru = localStorage.getItem(LS_ADMIN_USER);
    const rp = localStorage.getItem(LS_ADMIN_PASS);

    if (u0 === ru && p0 === rp) {
      localStorage.setItem(LS_ADMIN_SESSION, "1");
      showAdmin();
      setLoginMsg(t().admin.loginOk, true);
      renderList();
      renderUsers();
    } else {
      setLoginMsg(t().admin.loginBad, false);
    }
  };

  const doLogout = () => {
    localStorage.removeItem(LS_ADMIN_SESSION);
    showLogin();
  };

  if (loginBtn) loginBtn.addEventListener("click", doLogin);
  if (logoutBtn) logoutBtn.addEventListener("click", doLogout);

  if (isAuthed()) showAdmin();
  else showLogin();

  const msg = q("#adminMsg");
  const listEl = q("#adminList");

  const aId = q("#aId");
  const aName = q("#aName");
  const aCategory = q("#aCategory");
  const aPrice = q("#aPrice");
  const aRating = q("#aRating");
  const aPopular = q("#aPopular");
  const aImage = q("#aImage");
  const aDesc = q("#aDesc");
  const aSpecs = q("#aSpecs");

  const setMsg = (text, ok) => {
    if (!msg) return;
    msg.textContent = text;
    msg.className = ok ? "hint hint--ok" : "hint hint--bad";
    if (!text) msg.className = "hint";
  };

  const clearForm = () => {
    if (aId) aId.value = "";
    if (aName) aName.value = "";
    if (aCategory) aCategory.value = "phone";
    if (aPrice) aPrice.value = "";
    if (aRating) aRating.value = "";
    if (aPopular) aPopular.value = "";
    if (aImage) aImage.value = "";
    if (aDesc) aDesc.value = "";
    if (aSpecs) aSpecs.value = "";
    if (msg) {
      msg.textContent = "";
      msg.className = "hint";
    }
  };

  const fillForm = (p) => {
    if (aId) aId.value = p.id || "";
    if (aName) aName.value = p.name || "";
    if (aCategory) aCategory.value = p.category || "phone";
    if (aPrice) aPrice.value = String(p.price || "");
    if (aRating) aRating.value = String(p.rating || "");
    if (aPopular) aPopular.value = String(p.popular || "");
    if (aImage) aImage.value = p.image || "";
    if (aDesc) aDesc.value = p.desc || "";
    const sp = p.specs && typeof p.specs === "object" ? p.specs : {};
    if (aSpecs) aSpecs.value = Object.entries(sp).map(([k,v]) => `${k}:${v}`).join("\n");
  };

  const renderList = () => {
    if (!listEl) return;
    listEl.innerHTML = "";
    const arr = loadProducts();
    const A = t().admin;

    for (const p of arr) {
      const item = document.createElement("div");
      item.className = "adminItem";

      const left = document.createElement("div");
      left.className = "adminItemLeft";
      left.innerHTML = `
        <div class="adminItemName">${p.name}</div>
        <div class="adminItemMeta">${A.idPrefix}${p.id} • ${categoryLabel(p.category)} • ${fmtKZT(Number(p.price||0))}</div>
      `;

      const right = document.createElement("div");
      right.className = "adminItemBtns";

      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "btn btn--ghost";
      edit.textContent = A.btnEdit;
      edit.addEventListener("click", () => {
        fillForm(p);
        setMsg(A.openEdit, true);
      });

      const del = document.createElement("button");
      del.type = "button";
      del.className = "btn btn--danger";
      del.textContent = A.btnDelete;
      del.addEventListener("click", () => {
        const next = arr.filter(x => x.id !== p.id);
        saveProducts(next);
        renderList();
        setMsg(A.deleted, true);
      });

      right.appendChild(edit);
      right.appendChild(del);

      item.appendChild(left);
      item.appendChild(right);

      listEl.appendChild(item);
    }
  };

  const usersList = q("#usersList");
  const usersMsg = q("#usersMsg");
  const clearUsersBtn = q("#clearUsersBtn");

  const setUsersMsg = (text, ok) => {
    if (!usersMsg) return;
    usersMsg.textContent = text;
    usersMsg.className = ok ? "hint hint--ok" : "hint hint--bad";
    if (!text) usersMsg.className = "hint";
  };

  const renderUsers = () => {
    if (!usersList) return;
    usersList.innerHTML = "";

    const users = loadUsers();
    if (!users.length) {
      const d = document.createElement("div");
      d.className = "empty";
      d.textContent = t().admin.usersEmpty;
      usersList.appendChild(d);
      return;
    }

    users.sort((a,b) => String(b.createdAt||"").localeCompare(String(a.createdAt||"")));

    for (const u of users) {
      const item = document.createElement("div");
      item.className = "adminItem";

      const left = document.createElement("div");
      left.className = "adminItemLeft";
      const date = u.createdAt ? new Date(u.createdAt) : null;
      const nice = date && !isNaN(date.getTime())
        ? date.toLocaleString(getLang()==="kz" ? "kk-KZ" : "ru-RU")
        : "";
      left.innerHTML = `
        <div class="userRow__name">${u.name || "User"}</div>
        <div class="userRow__meta">${u.email}</div>
        <div class="userRow__meta">${nice}</div>
      `;

      const right = document.createElement("div");
      right.className = "adminItemBtns";

      const del = document.createElement("button");
      del.type = "button";
      del.className = "btn btn--danger";
      del.textContent = t().admin.btnDelete;
      del.addEventListener("click", () => {
        const next = loadUsers().filter(x => x.id !== u.id);
        saveUsers(next);
        const cu = currentUser();
        if (cu && cu.id === u.id) setCurrentUser(null);
        renderUsers();
        setUsersMsg(t().admin.deleted, true);
      });

      right.appendChild(del);
      item.appendChild(left);
      item.appendChild(right);
      usersList.appendChild(item);
    }
  };

  const saveBtn = q("#saveBtn");
  const resetBtn = q("#resetBtn");
  const seedBtn = q("#seedBtn");

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const A = t().admin;

      const id = (aId?.value || "").trim();
      const name = (aName?.value || "").trim();
      const category = aCategory?.value || "phone";
      const price = Number(aPrice?.value || 0);
      const rating = Number(aRating?.value || 0);
      const popular = Number(aPopular?.value || 0);
      const image = (aImage?.value || "").trim();
      const desc = (aDesc?.value || "").trim();
      const specs = parseSpecs(aSpecs?.value || "");

      if (!id || !safeId(id)) { setMsg(A.idBad, false); return; }
      if (!name) { setMsg(A.nameEmpty, false); return; }
      if (!Number.isFinite(price) || price <= 0) { setMsg(A.priceBad, false); return; }
      if (!Number.isFinite(rating) || rating < 0 || rating > 5) { setMsg(A.ratingBad, false); return; }
      if (!Number.isFinite(popular) || popular < 0) { setMsg(A.popularBad, false); return; }
      if (!image) { setMsg(A.imageNeed, false); return; }

      const arr = loadProducts();
      const idx = arr.findIndex(x => x.id === id);

      const tags = [];
      const lower = name.toLowerCase();
      if (lower.includes("iphone") || lower.includes("apple")) tags.push("apple");
      if (lower.includes("samsung")) tags.push("samsung");
      if (lower.includes("xiaomi") || lower.includes("redmi")) tags.push("xiaomi");
      if (price >= 300000) tags.push("premium");
      if (price <= 150000) tags.push("value");
      if (category === "audio") tags.push("audio");
      if (category === "watch") tags.push("watch");
      if (category === "accessory") tags.push("case");

      const item = { id, name, category, price, rating, popular, image, desc, specs, tags };

      if (idx >= 0) arr[idx] = item;
      else arr.push(item);

      saveProducts(arr);
      renderList();
      setMsg(A.saved, true);
    });
  }

  if (resetBtn) resetBtn.addEventListener("click", clearForm);

  if (seedBtn) {
    seedBtn.addEventListener("click", () => {
      resetProducts();
      renderList();
      clearForm();
      setMsg(t().admin.resetSeed, true);
    });
  }

  if (clearUsersBtn) {
    clearUsersBtn.addEventListener("click", () => {
      localStorage.removeItem(LS_USERS);
      setCurrentUser(null);
      renderUsers();
      setUsersMsg(t().admin.usersCleared, true);
    });
  }

  mountHeaderCommon(new Map());
  renderList();
  renderUsers();

  window.addEventListener("gs:lang", () => {
    renderList();
    renderUsers();
  });
};

const boot = () => {
  setTheme(getTheme());
  document.documentElement.setAttribute("lang", getLang() === "kz" ? "kk" : "ru");

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const path = window.location.pathname.toLowerCase();
  if (path.endsWith("admin.html")) initAdminPage();
  else if (path.endsWith("product.html")) initProductPage();
  else initIndexPage();
};

boot();
/* ===== ULTRA FIXED 3D TILT ===== */

function applyTiltToCard(card){

  if(card.dataset.tiltInit === "1") return;
  card.dataset.tiltInit = "1";

  card.style.transformStyle = "preserve-3d";
  card.style.transition = "transform 0.15s ease";

  card.addEventListener("mousemove", (e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 14;
    const rotateY = (x - centerX) / 14;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  });

  card.addEventListener("mouseleave", ()=>{
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
}

function initAllTiltCards(){
  document.querySelectorAll(".card").forEach(applyTiltToCard);
}

/* запуск при загрузке */
window.addEventListener("load", initAllTiltCards);

/* перезапуск после перерендера каталога */
const gridObserverTarget = document.querySelector("#productGrid");

if(gridObserverTarget){
  const tiltObserver = new MutationObserver(()=>{
    initAllTiltCards();
  });

  tiltObserver.observe(gridObserverTarget, { childList: true });
}
