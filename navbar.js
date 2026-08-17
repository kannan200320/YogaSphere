document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-white/85 text-slate-900 dark:bg-[#090A0F]/85 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800/80 backdrop-blur-md transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    <!-- Logo Brand -->
    <h1 class="text-2xl font-bold text-violet-600 dark:text-violet-400">
      <a href="index.html" class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-violet-600 dark:text-violet-400"><path d="M12 3a9 9 0 0 0-9 9v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4v-2a8 8 0 0 1 16 0v2h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7a9 9 0 0 0-9-9z"></path></svg>
        <span class="tracking-tight text-violet-605 dark:text-violet-400">Yoga<span class="font-normal text-black dark:text-slate-400">Sphere</span></span>
      </a>
    </h1>

    <!-- Desktop Navigation Links -->
    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-8 font-semibold text-sm" id="navLinks">
        
        <!-- Home Dropdown -->
        <li class="relative group">
          <button id="homeDropdownBtn"
            class="flex items-center gap-1 transition hover:text-violet-600 dark:hover:text-violet-400 focus:outline-none">
            Home <i class="bi bi-chevron-down text-xs"></i>
          </button>
          
          <ul id="homeDropdownMenu"
            class="absolute left-1/2 -translate-x-1/2 mt-3 w-44 bg-white dark:bg-[#11131E] text-slate-800 dark:text-slate-100 rounded-xl shadow-xl hidden group-hover:block z-50 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <li>
              <a href="index.html" class="block px-4 py-2.5 transition hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:text-violet-600">Home 1</a>
            </li>
            <li>
              <a href="home-2.html" class="block px-4 py-2.5 transition hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:text-violet-600">Home 2</a>
            </li>
          </ul>
        </li>

        <li><a href="about.html" class="transition hover:text-violet-600 dark:hover:text-violet-400">About</a></li>
        <li><a href="classes.html" class="transition hover:text-violet-600 dark:hover:text-violet-400">Classes</a></li>
        <li><a href="instructors.html" class="transition hover:text-violet-600 dark:hover:text-violet-400">Instructors</a></li>
        <li><a href="pricing.html" class="transition hover:text-violet-600 dark:hover:text-violet-400">Pricing</a></li>
        <li><a href="blog.html" class="transition hover:text-violet-600 dark:hover:text-violet-400">Blog</a></li>
        <li><a href="contact.html" class="transition hover:text-violet-600 dark:hover:text-violet-400">Contact</a></li>
      </ul>
    </div>

    <!-- Actions & Right Buttons -->
    <div id="rightButtons" class="hidden lg:flex items-center gap-5">
      
      <!-- Theme Switcher Button -->
      <button id="theme-toggle" class="text-xl hover:text-violet-600 dark:hover:text-violet-400 transition" aria-label="Toggle dark mode">
        <i class="bi bi-moon-fill"></i>
      </button>

      <!-- RTL Switcher Button -->
      <button id="rtlToggle" class="text-xl font-bold hover:text-violet-600 dark:hover:text-violet-400 transition" aria-label="Toggle layout direction">
        ⇄
      </button>

      <!-- Member Portal Redirections -->
      <div class="flex items-center gap-3 ml-2">
        <a href="login.html" 
           class="px-5 py-2.5 rounded-xl bg-violet-600 dark:bg-violet-500 text-white font-semibold text-sm transition hover:bg-violet-750 dark:hover:bg-violet-450 shadow-md">
           Member Login
        </a>
      </div>
    </div>

    <!-- Mobile Hamburger Button -->
    <button id="hamburgerBtn"
      class="lg:hidden text-3xl text-violet-600 dark:text-violet-400 hover:text-violet-500 transition" aria-label="Toggle mobile menu">
      <i class="bi bi-list"></i>
    </button>

  </div>
</header>

<!-- Mobile Drawer Overlay -->
<div id="mobileMenuOverlay"
  class="fixed inset-0 bg-[#090A0F]/60 hidden lg:hidden z-40 backdrop-blur-sm"></div>

<!-- Mobile Sliding Drawer -->
<div id="mobileMenu"
  class="fixed top-0 right-0 h-full w-72 bg-white dark:bg-[#11131E] text-slate-900 dark:text-slate-100 z-50
          transform translate-x-full transition-transform duration-300 lg:hidden shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800">

  <div class="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
    <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100 font-serif">Menu</h2>
    <button id="closeMenuBtn" class="text-slate-700 dark:text-slate-300 text-3xl hover:text-violet-600 dark:hover:text-violet-400 transition">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <div class="p-6 overflow-y-auto flex-grow">
    <ul class="space-y-4">
      <li>
        <button id="mobileDropdownBtn"
          class="w-full flex items-center justify-between py-2 text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition font-semibold">
          <span>Home</span>
          <i id="mobileHomeChevron" class="bi bi-chevron-down"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 border-l border-slate-200 dark:border-slate-800 pl-4">
          <li><a href="index.html" class="block py-1 text-sm text-slate-605 dark:text-slate-300 hover:text-violet-606 dark:hover:text-violet-400">Home 1</a></li>
          <li><a href="home-2.html" class="block py-1 text-sm text-slate-605 dark:text-slate-300 hover:text-violet-606 dark:hover:text-violet-400">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2 text-slate-700 dark:text-slate-200 hover:text-violet-606 dark:hover:text-violet-400 transition font-semibold">About</a></li>
      <li><a href="classes.html" class="block py-2 text-slate-700 dark:text-slate-200 hover:text-violet-606 dark:hover:text-violet-400 transition font-semibold">Classes</a></li>
      <li><a href="instructors.html" class="block py-2 text-slate-700 dark:text-slate-200 hover:text-violet-606 dark:hover:text-violet-400 transition font-semibold">Instructors</a></li>
      <li><a href="pricing.html" class="block py-2 text-slate-700 dark:text-slate-200 hover:text-violet-606 dark:hover:text-violet-400 transition font-semibold">Pricing</a></li>
      <li><a href="blog.html" class="block py-2 text-slate-700 dark:text-slate-200 hover:text-violet-606 dark:hover:text-violet-400 transition font-semibold">Blog</a></li>
      <li><a href="contact.html" class="block py-2 text-slate-700 dark:text-slate-200 hover:text-violet-606 dark:hover:text-violet-400 transition font-semibold">Contact</a></li>

      <li class="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
         <a href="login.html" class="block w-full text-center py-2.5 bg-violet-600 text-white rounded-xl font-bold text-sm shadow-md hover:bg-violet-750 transition">Member Login</a>
      </li>

      <li class="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-around text-slate-500 dark:text-slate-400">
        <button id="mobile-theme-toggle" class="text-2xl hover:text-violet-600 dark:hover:text-violet-400 transition" aria-label="Toggle dark mode">
          <i class="bi bi-moon-fill"></i>
        </button>
        <button id="mobile-rtl-toggle" class="text-2xl hover:text-violet-600 dark:hover:text-violet-400 transition" aria-label="Toggle RTL direction">
          ⇄
        </button>
      </li>
    </ul>
  </div>
</div>
`;

  // Desktop Dropdown Events (Click trigger)
  const homeDropdownBtn = document.getElementById("homeDropdownBtn");
  const homeDropdownMenu = document.getElementById("homeDropdownMenu");

  if (homeDropdownBtn) {
    homeDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      homeDropdownMenu.classList.toggle("hidden");
    });
    
    document.addEventListener("click", (e) => {
      if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
        homeDropdownMenu.classList.add("hidden");
      }
    });
  }

  // Mobile Menu Drawer Control Actions
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenuOverlay.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMobileMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  // Mobile Dropdown toggler
  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
  const mobileHomeChevron = document.getElementById('mobileHomeChevron');

  if (mobileDropdownBtn) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdownMenu.classList.toggle('hidden');
      mobileHomeChevron.classList.toggle('rotate-180');
    });
  }

  // Global Theme Toggler (Desktop & Mobile)
  const toggleBtn = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  
  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkModeEnabled", "true");
      if (toggleBtn) toggleBtn.innerHTML = `<i class="bi bi-sun-fill"></i>`;
      if (mobileThemeToggle) mobileThemeToggle.innerHTML = `<i class="bi bi-sun-fill"></i>`;
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkModeEnabled", "false");
      if (toggleBtn) toggleBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
      if (mobileThemeToggle) mobileThemeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }
  }

  // Load Saved Preference
  const savedTheme = localStorage.getItem("darkModeEnabled") === "true";
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(!isDark);
    });
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(!isDark);
    });
  }

  // Global LTR / RTL Direction Toggler
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobile-rtl-toggle");

  function applyDirection(isRTL) {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    localStorage.setItem("rtlEnabled", isRTL ? "true" : "false");
  }

  const savedDir = localStorage.getItem("rtlEnabled") === "true";
  applyDirection(savedDir);

  if (rtlToggle) {
    rtlToggle.addEventListener("click", () => {
      const isRTL = document.documentElement.dir === "rtl";
      applyDirection(!isRTL);
    });
  }

  if (mobileRtlToggle) {
    mobileRtlToggle.addEventListener("click", () => {
      const isRTL = document.documentElement.dir === "rtl";
      applyDirection(!isRTL);
    });
  }

  // Active Link Tracking classes
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('#navLinks a, #mobileMenu a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("text-violet-600", "dark:text-violet-400", "font-bold");
    }
  });
});
