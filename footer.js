document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-slate-800 dark:bg-[#090A0F] dark:text-slate-200 w-full border-t border-slate-200 dark:border-slate-800/80 transition-all duration-300">

  <!-- Newsletter Section -->
  <div class="border-b border-slate-200 dark:border-slate-800/80">
    <div class="max-w-7xl mx-auto px-6 py-12 text-center">
      <h3 class="text-xl font-bold font-serif text-slate-900 dark:text-white mb-2">Join Our Newsletter</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">Get weekly mindfulness tips and updates on our class schedules.</p>
      
      <div id="newsletter-form-container" class="max-w-md mx-auto flex flex-col sm:flex-row gap-3 justify-center items-center">
        <input type="email" id="newsletter-email" placeholder="Email Address" required 
          class="w-full sm:flex-1 px-4 py-2.5 bg-violet-50 dark:bg-slatecharcoal border border-slate-200 dark:border-slate-800 rounded-xl text-sm outline-none text-slate-900 dark:text-white focus:border-violet-605">
        <button id="newsletter-subscribe-btn" 
          class="w-full sm:w-auto px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-bold transition hover:bg-violet-550">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6 py-16">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      <!-- Column 1: Brand Intro -->
      <div class="space-y-6">
        <h1 class="text-2xl font-bold text-violet-600 dark:text-violet-400">
          <a href="index.html" class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-violet-600 dark:text-violet-400"><path d="M12 3a9 9 0 0 0-9 9v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4v-2a8 8 0 0 1 16 0v2h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7a9 9 0 0 0-9-9z"></path></svg>
            <span class="tracking-tight text-violet-605 dark:text-violet-400">Yoga<span class="font-normal text-black dark:text-slate-400">Sphere</span></span>
          </a>
        </h1>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
          Discover a high-end wellness sanctuary designed for physical restoration, energetic alignment, and mental quiet. Experience world-class guides and customized therapies.
        </p>

        <!-- Social Icons (Bootstrap Icons style) -->
        <div class="flex gap-4 mt-6 text-xl text-slate-400 dark:text-slate-500">
          <a href="https://www.instagram.com" aria-label="Instagram link" class="hover:text-violet-600 dark:hover:text-violet-450 transition"><i class="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com" aria-label="Facebook link" class="hover:text-violet-600 dark:hover:text-violet-450 transition"><i class="bi bi-facebook"></i></a>
          <a href="https://www.x.com" aria-label="Twitter link" class="hover:text-violet-600 dark:hover:text-violet-450 transition"><i class="bi bi-twitter-x"></i></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn link" class="hover:text-violet-600 dark:hover:text-violet-450 transition"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <!-- Column 2: Service Classes -->
      <div>
        <h3 class="text-sm font-bold mb-5 text-violet-600 dark:text-violet-400 uppercase tracking-widest font-sans">
          Yoga & Healing
        </h3>
        <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400 list-none p-0">
          <li><a href="classes.html?style=Hatha" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Hatha Core Alignment</a></li>
          <li><a href="classes.html?style=Vinyasa" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Vinyasa Dynamic Flow</a></li>
          <li><a href="classes.html?style=Yin" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Yin Restorative Stretch</a></li>
          <li><a href="classes.html?style=Meditation" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Somatic Meditation</a></li>
        </ul>
      </div>

      <!-- Column 3: Quick Links -->
      <div>
        <h3 class="text-sm font-bold mb-5 text-violet-600 dark:text-violet-400 uppercase tracking-widest font-sans">
          Quick Links
        </h3>
        <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400 list-none p-0">
          <li><a href="about.html" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Our Story</a></li>
          <li><a href="instructors.html" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Our Instructors</a></li>
          <li><a href="pricing.html" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Membership Plans</a></li>
          <li><a href="login.html" class="hover:text-violet-600 dark:hover:text-violet-400 transition">Member Login</a></li>
        </ul>
      </div>

      <!-- Column 4: Contact -->
      <div>
        <h3 class="text-sm font-bold mb-5 text-violet-600 dark:text-violet-400 uppercase tracking-widest font-sans">
          Get In Touch
        </h3>
        <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400 list-none p-0">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-violet-500 text-lg mt-0.5"></i>
            <span>108 Prana Boulevard, Wellness Valley, CA 90210</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-violet-500 text-lg"></i>
            <span>+1 (555) 964-2774</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope-fill text-violet-500 text-lg"></i>
            <span>hello@yogaspherecentre.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <!-- Footer Bottom -->
  <div class="footer-bottom border-t border-slate-200 dark:border-slate-800 py-8 text-center text-slate-500 dark:text-slate-400 text-xs px-4">
    <p class="tracking-widest uppercase font-sans">
      © ${new Date().getFullYear()} YogaSphere Wellness Centre. All Rights Reserved.
    </p>
  </div>

</footer>
`;

  // Bind newsletter events
  const emailInput = document.getElementById("newsletter-email");
  const subscribeBtn = document.getElementById("newsletter-subscribe-btn");

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && emailRegex.test(email)) {
        emailInput.value = "";
        if (typeof window.showToast === "function") {
          window.showToast("Thanks for Subscribing!");
        }
      } else {
        emailInput.classList.add("border-red-500");
        setTimeout(() => emailInput.classList.remove("border-red-500"), 2000);
        if (typeof window.showToast === "function") {
          window.showToast("Please enter a valid email address.", 3000, "error");
        } else {
          alert("Please enter a valid email address.");
        }
        emailInput.focus();
      }
    });
  }
});
