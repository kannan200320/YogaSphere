/**
 * YogaSphere - Dashboard State & Interaction Manager
 * Implements: Role switching, Dynamic Bookings, Attendance Chart rendering, Renewal modals, Admin search
 */

document.addEventListener('DOMContentLoaded', () => {
  initRoleToggler();
  initMobileSidebar();
  initBookingSystem();
  initRenewalModal();
  initAdminFeatures();
  renderAttendanceChart();
  initDashboardThemeAndRTL();
});

/* -------------------------------------------------------------
 * 0. Theme & Direction Management (Dashboard)
 * ------------------------------------------------------------- */
function initDashboardThemeAndRTL() {
  const themeToggle = document.getElementById('theme-toggle');
  const rtlToggle = document.getElementById('rtl-toggle');

  // Initial Theme load
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyDashboardTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      applyDashboardTheme(currentTheme);
    });
  }

  function applyDashboardTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-brightness-high-fill text-xl text-violet-400"></i>';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-moon-fill text-xl text-violet-600"></i>';
    }
  }

  // Initial RTL load
  const savedDir = localStorage.getItem('dir') || 'ltr';
  applyDashboardDir(savedDir);

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      applyDashboardDir(currentDir);
    });
  }

  function applyDashboardDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('dir', dir);
    if (rtlToggle) {
      rtlToggle.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
  }
}


// Mock Session State
let dashboardState = {
  remainingCredits: 7,
  renewalDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
  bookings: [], // List of booked session IDs
  messages: [
    { id: 1, sender: 'Emma Watson', subject: 'Membership upgrade question', text: 'Hi, I would like to upgrade from Starter to Yoga Premium. Can you assist?', time: '10:15 AM', read: false },
    { id: 2, sender: 'John Doe', subject: 'Class cancellation credit', text: 'Hello, I cancelled my Hatha class yesterday within the 12h window but credits were still deducted.', time: 'Yesterday', read: false },
    { id: 3, sender: 'Sophia Loren', subject: 'Private lesson request', text: 'Are there slots available for private Hatha alignment workshops with Marcus this weekend?', time: '2 days ago', read: true }
  ]
};

// Load saved state if exists
if (sessionStorage.getItem('dashboard_state')) {
  const saved = JSON.parse(sessionStorage.getItem('dashboard_state'));
  dashboardState.remainingCredits = saved.remainingCredits;
  dashboardState.renewalDate = new Date(saved.renewalDate);
  dashboardState.bookings = saved.bookings;
  dashboardState.messages = saved.messages;
}

function saveState() {
  sessionStorage.setItem('dashboard_state', JSON.stringify(dashboardState));
}

/* -------------------------------------------------------------
 * 1. Admin & Member Panel Role Toggling
 * ------------------------------------------------------------- */
function initRoleToggler() {
  const switchBtns = document.querySelectorAll('.role-btn');
  const panels = document.querySelectorAll('.role-panel');
  const sidebarNavs = document.querySelectorAll('.sidebar-nav-group');

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const role = btn.getAttribute('data-role');
      
      // Update viewport panels
      panels.forEach(panel => {
        if (panel.id === `${role}-panel`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      // Update sidebar nav actions
      sidebarNavs.forEach(nav => {
        if (nav.getAttribute('data-role-nav') === role) {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      });
    });
  });
}

function initMobileSidebar() {
  const trigger = document.getElementById('dash-menu-trigger');
  const sidebar = document.querySelector('.dash-sidebar');

  if (!trigger || !sidebar) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !trigger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

/* -------------------------------------------------------------
 * 2. Class Timetable Booking System (Member)
 * ------------------------------------------------------------- */
const timetableData = {
  Mon: [
    { id: 'm1', name: 'Morning Vinyasa Flow', time: '07:00 AM', instructor: 'Priya Patel', level: 'Intermediate' },
    { id: 'm2', name: 'Hatha Core Alignment', time: '09:30 AM', instructor: 'Marcus Vance', level: 'Beginner' },
    { id: 'm3', name: 'Yin Restore Stretch', time: '06:00 PM', instructor: 'Priya Patel', level: 'All Levels' }
  ],
  Tue: [
    { id: 't1', name: 'Prenatal Comfort Stretch', time: '10:00 AM', instructor: 'Sarah Jenkins', level: 'Specialty' },
    { id: 't2', name: 'Vinyasa Cardio Flow', time: '05:30 PM', instructor: 'Priya Patel', level: 'Intermediate' }
  ],
  Wed: [
    { id: 'w1', name: 'Morning Vinyasa Flow', time: '07:00 AM', instructor: 'Priya Patel', level: 'Intermediate' },
    { id: 'w2', name: 'Restorative Nidra Meditation', time: '07:00 PM', instructor: 'Marcus Vance', level: 'All Levels' }
  ],
  Thu: [
    { id: 'th1', name: 'Hatha Alignment Foundations', time: '09:30 AM', instructor: 'Marcus Vance', level: 'Beginner' },
    { id: 'th2', name: 'Prenatal Core Flow', time: '04:30 PM', instructor: 'Sarah Jenkins', level: 'Specialty' }
  ],
  Fri: [
    { id: 'f1', name: 'Pranayama & Meditation', time: '07:00 AM', instructor: 'Marcus Vance', level: 'All Levels' },
    { id: 'f2', name: 'Yin & Restorative Yoga', time: '06:00 PM', instructor: 'Priya Patel', level: 'All Levels' }
  ]
};

function initBookingSystem() {
  const dayButtons = document.querySelectorAll('.day-btn');
  const slotsList = document.getElementById('booking-slots');

  if (!slotsList) return;

  // Render Day Timetable function
  function renderTimetable(day) {
    slotsList.innerHTML = '';
    const classes = timetableData[day] || [];

    if (classes.length === 0) {
      slotsList.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 2rem;">No classes scheduled for today.</p>`;
      return;
    }

    classes.forEach(cls => {
      const isBooked = dashboardState.bookings.includes(cls.id);
      
      const card = document.createElement('div');
      card.className = 'booking-slot-card';
      card.innerHTML = `
        <div class="slot-details">
          <h4>${cls.name}</h4>
          <div class="slot-meta">
            <span>⏰ ${cls.time}</span>
            <span>👤 ${cls.instructor}</span>
            <span class="badge" style="background-color: var(--primary-light); color: var(--primary); font-size: 0.75rem; padding: 0.15rem 0.5rem; margin-bottom: 0;">${cls.level}</span>
          </div>
        </div>
        <div>
          <button class="btn ${isBooked ? 'btn-secondary' : 'btn-primary'}" data-slot-id="${cls.id}" style="padding: 0.5rem 1.25rem; font-size: 0.8rem;">
            ${isBooked ? 'Cancel Spot' : 'Book Class'}
          </button>
        </div>
      `;

      slotsList.appendChild(card);
    });

    // Add event listeners to booking buttons
    const bookButtons = slotsList.querySelectorAll('[data-slot-id]');
    bookButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const slotId = btn.getAttribute('data-slot-id');
        toggleBooking(slotId, day);
      });
    });
  }

  function toggleBooking(slotId, currentDay) {
    const isBooked = dashboardState.bookings.includes(slotId);

    if (isBooked) {
      // Cancel class booking
      dashboardState.bookings = dashboardState.bookings.filter(id => id !== slotId);
      dashboardState.remainingCredits += 1;
      alert('Booking cancelled. 1 Class credit returned to your pack.');
    } else {
      // Book class
      if (dashboardState.remainingCredits <= 0) {
        alert('Insufficient credits! Please renew your membership package to book further classes.');
        openRenewalModalDirect();
        return;
      }
      dashboardState.bookings.push(slotId);
      dashboardState.remainingCredits -= 1;
      alert('Spot booked! A reservation email has been sent.');
    }

    saveState();
    updateUIWidgetStats();
    renderTimetable(currentDay);
  }

  // Bind Day Button clicks
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimetable(btn.getAttribute('data-day'));
    });
  });

  // Default initial render today
  renderTimetable('Mon');
  updateUIWidgetStats();
}

function updateUIWidgetStats() {
  const creditsVal = document.getElementById('member-credits-val');
  const dateVal = document.getElementById('member-renewal-val');
  const bookingsVal = document.getElementById('member-bookings-val');

  if (creditsVal) creditsVal.textContent = dashboardState.remainingCredits;
  if (dateVal) dateVal.textContent = dashboardState.renewalDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  if (bookingsVal) bookingsVal.textContent = dashboardState.bookings.length;
}

/* -------------------------------------------------------------
 * 3. Membership Renewal System Modal (Member)
 * ------------------------------------------------------------- */
function initRenewalModal() {
  const openBtn = document.getElementById('btn-renew-membership');
  const modal = document.getElementById('renewal-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('renewal-form');

  if (!modal) return;

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Processing Renewal...';
      submitBtn.disabled = true;

      // Simulate payment network
      setTimeout(() => {
        dashboardState.remainingCredits = 15; // Set classes count to full
        dashboardState.renewalDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days renewal cycle
        saveState();

        // Close modal
        modal.classList.remove('active');
        
        // Reset form button
        submitBtn.textContent = 'Complete Renewal ($79.00)';
        submitBtn.disabled = false;
        form.reset();

        alert('Success! Your membership has been renewed. 15 Class credits added to your account.');
        updateUIWidgetStats();
      }, 2000);
    });
  }
}

function openRenewalModalDirect() {
  const modal = document.getElementById('renewal-modal');
  if (modal) modal.classList.add('active');
}

/* -------------------------------------------------------------
 * 4. Render Attendance History Chart (Member)
 * ------------------------------------------------------------- */
function renderAttendanceChart() {
  const chartWrapper = document.getElementById('attendance-chart');
  if (!chartWrapper) return;

  // Mock attendance data (sessions attended per month)
  const data = [
    { label: 'Mar', val: 4 },
    { label: 'Apr', val: 8 },
    { label: 'May', val: 12 },
    { label: 'Jun', val: 10 },
    { label: 'Jul', val: 14 }
  ];

  chartWrapper.innerHTML = '';
  
  data.forEach(item => {
    const barHeightPct = (item.val / 16) * 100; // max attendance 16 sessions
    
    const wrapper = document.createElement('div');
    wrapper.className = 'chart-bar-wrapper';
    wrapper.innerHTML = `
      <div class="chart-bar" style="height: ${barHeightPct}%;">
        <span class="chart-bar-val">${item.val}</span>
      </div>
      <span class="chart-label">${item.label}</span>
    `;

    chartWrapper.appendChild(wrapper);
  });
}

/* -------------------------------------------------------------
 * 5. Admin Panel Functions (Search and Message Inbox)
 * ------------------------------------------------------------- */
function initAdminFeatures() {
  // Members List Search
  const adminSearch = document.getElementById('admin-member-search');
  const tableRows = document.querySelectorAll('#admin-members-table tbody tr');

  if (adminSearch && tableRows) {
    adminSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();

      tableRows.forEach(row => {
        const name = row.querySelector('.member-name').textContent.toLowerCase();
        const email = row.querySelector('.member-email').textContent.toLowerCase();

        if (name.includes(q) || email.includes(q)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  // Messages Inbox click handler
  const messageItems = document.querySelectorAll('.message-item');
  const messageDetailBody = document.getElementById('message-detail-body');

  if (messageItems && messageDetailBody) {
    messageItems.forEach(item => {
      item.addEventListener('click', () => {
        // Toggle Active
        messageItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const messageId = parseInt(item.getAttribute('data-message-id'));
        const msg = dashboardState.messages.find(m => m.id === messageId);

        if (msg) {
          msg.read = true;
          saveState();
          
          // Render detailed view in right card
          messageDetailBody.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1rem;">
              <div>
                <h4 style="font-family:var(--font-body); font-weight:700;">${msg.sender}</h4>
                <span style="font-size:0.8rem; color:var(--text-muted);">${msg.time}</span>
              </div>
              <button class="btn btn-outline" onclick="replyMessage('${msg.sender}')" style="padding: 0.4rem 1rem; font-size: 0.8rem;">Reply</button>
            </div>
            <h5 style="color:var(--primary); margin-bottom:1rem; font-weight:700;">Subject: ${msg.subject}</h5>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--text-muted);">${msg.text}</p>
          `;
          
          // Remove unread dots
          const unreadBadge = item.querySelector('.unread-badge');
          if (unreadBadge) unreadBadge.style.display = 'none';
        }
      });
    });
  }
}

// Reply simulated function
window.replyMessage = function(sender) {
  const reply = prompt(`Type reply response to ${sender}:`);
  if (reply && reply.trim() !== '') {
    alert(`Success! Email reply sent to ${sender}.`);
  }
};
