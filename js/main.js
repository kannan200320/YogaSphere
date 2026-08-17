/**
 * YogaSphere - Main Global JavaScript File
 * Handles: Sticky header scroll classes, Back-to-top elements, theme toggling,
 * avatar syncing, custom modal dialogs, and RTL layout toggles.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initBackToTop();
  initThemeAndAvatar();
});

/* -------------------------------------------------------------
 * 1. Sticky Header Scroll Actions
 * ------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('mainNavbar');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-[0_10px_30px_rgba(124,58,237,0.08)]');
      header.classList.replace('bg-white/85', 'bg-white/98');
      header.classList.replace('dark:bg-[#090A0F]/85', 'dark:bg-[#090A0F]/98');
    } else {
      header.classList.remove('shadow-[0_10px_30px_rgba(124,58,237,0.08)]');
      header.classList.replace('bg-white/98', 'bg-white/85');
      header.classList.replace('dark:bg-[#090A0F]/98', 'dark:bg-[#090A0F]/85');
    }
  });
}

/* -------------------------------------------------------------
 * 2. Back To Top button handler (Dynamic Inject)
 * ------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'fixed bottom-6 right-6 w-12 h-12 bg-violet-600 hover:bg-violet-750 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 translate-y-10 pointer-events-none z-50';
  btn.innerHTML = `<i class="bi bi-arrow-up text-xl"></i>`;
  btn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
    } else {
      btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------
 * 3. Theme & RTL initialization & Toggle Handler
 * ------------------------------------------------------------- */
function initThemeAndAvatar() {
  const htmlEl = document.documentElement;
  
  // Theme Toggle Elements
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  const darkSetting = localStorage.getItem("darkModeEnabled");
  
  const updateThemeUI = (isDark) => {
    if (isDark) {
      htmlEl.classList.add("dark");
      if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
      if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      htmlEl.classList.remove("dark");
      if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
      if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  };
  
  updateThemeUI(darkSetting === "true");
  
  // RTL Toggle Elements
  const langToggle = document.getElementById("lang-toggle");
  const mobileLangToggle = document.getElementById("mobile-lang-toggle");
  const rtlSetting = localStorage.getItem("rtlEnabled");

  if (rtlSetting === "true") {
    htmlEl.dir = "rtl";
  } else {
    htmlEl.dir = "ltr";
  }

  // Only bind click listeners if we are NOT on a landing page with the public navbar.
  const hasPublicNavbar = document.getElementById("navbar") !== null;

  if (!hasPublicNavbar) {
    const handleThemeClick = () => {
      const isDark = htmlEl.classList.contains("dark");
      if (isDark) {
        updateThemeUI(false);
        localStorage.setItem("darkModeEnabled", "false");
      } else {
        updateThemeUI(true);
        localStorage.setItem("darkModeEnabled", "true");
      }
    };
    if (themeToggle) themeToggle.addEventListener("click", handleThemeClick);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", handleThemeClick);

    const handleLangClick = () => {
      const isRTL = htmlEl.dir === "rtl";
      if (isRTL) {
        htmlEl.dir = "ltr";
        localStorage.setItem("rtlEnabled", "false");
      } else {
        htmlEl.dir = "rtl";
        localStorage.setItem("rtlEnabled", "true");
      }
    };
    if (langToggle) langToggle.addEventListener("click", handleLangClick);
    if (mobileLangToggle) mobileLangToggle.addEventListener("click", handleLangClick);
  }

  // Mobile sidebar navigation drawer setup
  const openSidebarBtn = document.getElementById("openSidebarBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const sidebarMenu = document.getElementById("sidebarMenu");

  if (openSidebarBtn && sidebarMenu) {
    // Dynamic overlay generation
    let overlay = document.getElementById("sidebarOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "sidebarOverlay";
      overlay.className = "fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 hidden transition-opacity duration-300";
      sidebarMenu.parentNode.insertBefore(overlay, sidebarMenu);
    }

    const openSidebar = () => {
      sidebarMenu.classList.remove("-translate-x-full");
      sidebarMenu.classList.add("translate-x-0");
      overlay.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    };

    const closeSidebar = () => {
      sidebarMenu.classList.add("-translate-x-full");
      sidebarMenu.classList.remove("translate-x-0");
      overlay.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    openSidebarBtn.addEventListener("click", openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
  }

  // Global avatar sync execution
  window.syncAvatar();
}

/* -------------------------------------------------------------
 * 4. Global Profile Picture/Initials Sync
 * ------------------------------------------------------------- */
window.syncAvatar = function() {
  const avatarEl = document.getElementById("userAvatarText");
  const headerNameEl = document.getElementById("userHeaderName");
  
  if (!avatarEl) return;
  
  const name = localStorage.getItem("userName") || "Sarah Mitchell";
  if (headerNameEl) {
    headerNameEl.textContent = name;
  }
  
  const avatarUrl = localStorage.getItem("userAvatarUrl");
  if (avatarUrl) {
    avatarEl.innerHTML = `<img src="${avatarUrl}" class="w-full h-full rounded-full object-cover" alt="User Profile Pic">`;
    avatarEl.classList.remove("bg-blue-600", "text-white");
    avatarEl.classList.add("bg-transparent");
  } else {
    const names = name.split(" ");
    const initials = names.length > 1 ? names[0].charAt(0) + names[1].charAt(0) : names[0].charAt(0);
    avatarEl.textContent = initials.toUpperCase();
    avatarEl.classList.add("bg-blue-600", "text-white");
    avatarEl.classList.remove("bg-transparent");
  }
};

/* -------------------------------------------------------------
 * 5. Reusable Custom Modal Dialogs (Alert & Confirm)
 * ------------------------------------------------------------- */
let modalContainer = null;

function createModalContainer() {
  if (modalContainer) return;
  modalContainer = document.createElement('div');
  modalContainer.id = 'custom-dialog-container';
  modalContainer.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300';
  modalContainer.innerHTML = `
    <div id="custom-dialog-box" class="bg-white dark:bg-[#11131E] border border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-2xl p-6 max-w-sm w-full space-y-4 scale-95 transition-all duration-300 text-center">
      <div id="custom-dialog-icon" class="text-violet-600 dark:text-violet-400 text-4xl flex justify-center mb-1">
        <i class="bi bi-question-circle-fill"></i>
      </div>
      <h4 id="custom-dialog-title" class="text-base font-bold font-serif text-slate-900 dark:text-white">Confirm Action</h4>
      <p id="custom-dialog-message" class="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-sans"></p>
      <div class="flex items-center gap-3 pt-2" id="custom-dialog-buttons">
        <button id="custom-dialog-cancel" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs transition-all flex-1">Cancel</button>
        <button id="custom-dialog-ok" class="px-4 py-2.5 bg-violet-600 hover:bg-violet-750 text-white font-bold rounded-xl text-xs transition-all flex-1">Confirm</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);
}

window.showConfirm = function(message, onConfirm, onCancel, title = "Confirm Action") {
  createModalContainer();
  const box = document.getElementById('custom-dialog-box');
  const icon = document.getElementById('custom-dialog-icon');
  const titleEl = document.getElementById('custom-dialog-title');
  const msgEl = document.getElementById('custom-dialog-message');
  const cancelBtn = document.getElementById('custom-dialog-cancel');
  const okBtn = document.getElementById('custom-dialog-ok');

  titleEl.textContent = title;
  msgEl.textContent = message;
  icon.innerHTML = `<i class="bi bi-question-circle-fill"></i>`;
  cancelBtn.style.display = 'block';

  modalContainer.classList.remove('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-95');

  const newOk = okBtn.cloneNode(true);
  const newCancel = cancelBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOk, okBtn);
  cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

  newOk.addEventListener('click', () => {
    closeModal();
    if (onConfirm) onConfirm();
  });

  newCancel.addEventListener('click', () => {
    closeModal();
    if (onCancel) onCancel();
  });
};

window.showAlert = function(message, onClose, title = "Alert Notification") {
  createModalContainer();
  const box = document.getElementById('custom-dialog-box');
  const icon = document.getElementById('custom-dialog-icon');
  const titleEl = document.getElementById('custom-dialog-title');
  const msgEl = document.getElementById('custom-dialog-message');
  const cancelBtn = document.getElementById('custom-dialog-cancel');
  const okBtn = document.getElementById('custom-dialog-ok');

  titleEl.textContent = title;
  msgEl.textContent = message;
  icon.innerHTML = `<i class="bi bi-info-circle-fill"></i>`;
  cancelBtn.style.display = 'none';

  modalContainer.classList.remove('opacity-0', 'pointer-events-none');
  box.classList.remove('scale-95');

  const newOk = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOk, okBtn);

  newOk.addEventListener('click', () => {
    closeModal();
    if (onClose) onClose();
  });
};

function closeModal() {
  if (!modalContainer) return;
  const box = document.getElementById('custom-dialog-box');
  modalContainer.classList.add('opacity-0', 'pointer-events-none');
  box.classList.add('scale-95');
}

// Global auto-disappearing Toast Notification
window.showToast = function(message, duration = 3000, type = 'success') {
  let container = document.getElementById('custom-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'custom-toast-container';
    container.className = 'fixed top-5 right-5 left-5 sm:left-auto z-[9999] flex flex-col gap-3 font-sans max-w-[calc(100vw-40px)] sm:max-w-md';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-emerald-600' : (type === 'error' ? 'bg-rose-600' : 'bg-amber-500');
  toast.className = `${bgColor} text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-bold transition-all duration-300 transform translate-y-[-20px] opacity-0`;
  toast.innerHTML = `
    <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} text-lg"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger entrance transition
  setTimeout(() => {
    toast.classList.remove('translate-y-[-20px]', 'opacity-0');
  }, 10);

  // Auto dismiss
  setTimeout(() => {
    toast.classList.add('translate-y-[-20px]', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
};
