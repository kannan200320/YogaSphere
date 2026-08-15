// 15 Unique Class Formats, Therapies, and Specialty Workshops
const servicesData = {
  hatha: {
    title: "Hatha Core Alignment",
    tagline: "Focuses on static posture alignment and pelvic stability.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    desc1: "Hatha Core Alignment is a steady, foundation-building yoga style focusing on deep static posture alignment, core activation, and basic breathwork (pranayama). In Hatha classes, postures are held for longer periods to build stamina, stretch tissue, and ensure correct skeletal posture.",
    desc2: "This alignment-based focus is excellent for minimizing injuries and promoting body awareness. Under the instruction of our certified trainers, you will learn how to safely position joints, align the pelvis, and control muscles to support the spine.",
    benefits: [
      "Strengthens deep core muscle walls, lower back, and hips.",
      "Increases core alignment stability and posture awareness.",
      "Calms nervous strain through longer, static breath holds."
    ],
    expect: "Class begins with a gentle neck and shoulder warm-up, followed by standing and seated postures with props (blocks/straps) for safe alignments. We conclude with deep hamstring stretches and a final savasana rest. Please wear comfortable, fitted clothing.",
    duration: "60 Minutes",
    intensity: "Beginner Friendly",
    temp: "Room Temp (21°C)",
    price: "$20.00",
    instructor: "Marcus Vance"
  },
  vinyasa: {
    title: "Vinyasa Flow",
    tagline: "Synchronize dynamic postures and breath patterns in an active studio space.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    desc1: "Vinyasa Flow is a highly popular contemporary yoga style characterized by stringing postures together so that you move from one to another seamlessly, using breath control (pranayama). Often referred to as 'flow' yoga, Vinyasa classes offer a variety of postures and no two classes are ever exactly alike.",
    desc2: "The variable structure of Vinyasa prevents repetitive stress injuries that can occur if you perform the exact same movements every day. It serves as an excellent cardiovascular movement practice while helping build core control, posture resilience, and muscular endurance.",
    benefits: [
      "Strengthens core muscle walls, upper body joints, and leg stability.",
      "Increases active flexibility and spinal mobility range.",
      "Promotes stress reduction and mental stamina through continuous focus."
    ],
    expect: "Class typically begins with a warm-up, followed by progressively energetic sun salutations and flow sequences. It concludes with cool-down stretching and a deep, quiet savasana (resting posture). Please bring a yoga mat, a hand towel, and a water flask. We recommend wearing comfortable, sweat-wicking clothing.",
    duration: "75 Minutes",
    intensity: "Medium - High",
    temp: "Warm (24°C)",
    price: "$22.00",
    instructor: "Priya Patel"
  },
  yin: {
    title: "Yin Restore Stretch",
    tagline: "Deep passive stretching targeting joint fascia and deep connective tissues.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    desc1: "Yin Restore Stretch is a slow, quiet yoga class that focuses on passive, long-held postures. Postures are typically held for 3 to 5 minutes, targeting the deep connective tissues of the body, such as fascia, ligaments, joints, and bones.",
    desc2: "By applying gentle, steady pressure to these tissues, Yin yoga increases flexibility, improves joint mobility, and stimulates circulation. It serves as an excellent meditative counterpart to active ('yang') physical exercises.",
    benefits: [
      "Improves joint lubrication, connective tissue elasticity, and range.",
      "Reduces chronic physical stress and calms hyperactive adrenaline.",
      "Fosters a deep sense of internal meditation and self-reflection."
    ],
    expect: "All postures are practiced on the floor (sitting or lying down) with bolster pillows and blankets for support. Postures are held in stillness, accompanied by quiet, soothing ambient sounds. Bring warm layers, as the body cools down during passive holds.",
    duration: "90 Minutes",
    intensity: "All Levels",
    temp: "Warm (23°C)",
    price: "$20.00",
    instructor: "Priya Patel"
  },
  prenatal: {
    title: "Gentle Prenatal",
    tagline: "Nourishing movements tailored for expecting mothers.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80",
    desc1: "Gentle Prenatal yoga is specifically designed to support mothers-to-be during all trimesters of pregnancy. The class focuses on building strength, improving flexibility, and learning breathing techniques that assist during pregnancy and labor.",
    desc2: "Our prenatal classes provide a safe, supportive environment for pregnant women to connect with their changing bodies and with other expectant mothers in the community. Postures are carefully modified to ensure the safety of both mother and baby.",
    benefits: [
      "Decompresses loaded lower back joints, hips, and knees.",
      "Reduces swelling, water retention, and improves circulation.",
      "Teaches deep breathing and relaxation techniques for labor prep."
    ],
    expect: "Class is gentle and utilizes props like yoga bolsters, blocks, and straps to ensure maximum comfort and support. We focus on hip opening, posture support, and breathing exercises. Consult your physician before starting.",
    duration: "60 Minutes",
    intensity: "Specialty",
    temp: "Room Temp (22°C)",
    price: "$25.00",
    instructor: "Sarah Jenkins"
  },
  ashtanga: {
    title: "Ashtanga Vinyasa",
    tagline: "A highly structured, dynamic series of progressive poses.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80",
    desc1: "Ashtanga Vinyasa is a traditional, highly structured form of yoga. It follows a set sequence of postures (the Primary Series) that are linked together dynamically using breath and focused gaze points (drishti).",
    desc2: "This demanding practice is designed to build heat in the body, which aids in cellular purification and detoxification of muscles and joints. It is ideal for individuals looking for a consistent, structured, and physically challenging practice.",
    benefits: [
      "Builds significant upper body, core, and leg strength.",
      "Promotes deep concentration and mindfulness through consistent sequencing.",
      "Detoxifies the body through deep physical sweat."
    ],
    expect: "Class moves at a continuous pace following the traditional Sanskrit count. It is physically demanding, involving multiple chaturangas, arm balances, and deep folds. Bring a towel and a water bottle.",
    duration: "75 Minutes",
    intensity: "Advanced",
    temp: "Warm (24°C)",
    price: "$24.00",
    instructor: "Marcus Vance"
  },
  kundalini: {
    title: "Kundalini Awakening",
    tagline: "Combines breath, movement, and chanting to restore mental clarity.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=1200&q=80",
    desc1: "Kundalini Awakening yoga combines specific physical postures, pranayama breathing patterns, hand gestures (mudras), vocal chanting (mantra), and meditation to stimulate energy channels.",
    desc2: "Often referred to as the 'yoga of awareness,' Kundalini aims to activate energy at the base of the spine and guide it upward through the chakras, promoting clarity, emotional balance, and cellular energy flow.",
    benefits: [
      "Stimulates glandular and nervous system functions.",
      "Releases deep emotional blocks and chronic brain fog.",
      "Improves resilience and stress management capacity."
    ],
    expect: "Classes involve repetitive movements (kriyas) performed for several minutes, combined with intense breath patterns. We chant mantras at the beginning and end, followed by a long restorative rest.",
    duration: "60 Minutes",
    intensity: "All Levels",
    temp: "Room Temp (21°C)",
    price: "$22.00",
    instructor: "Priya Patel"
  },
  nidra: {
    title: "Yoga Nidra Sleep",
    tagline: "Guided sleep meditation in deep rest. Helps balance chronic insomnia.",
    category: "Yoga Practice",
    photo: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80",
    desc1: "Yoga Nidra, often called 'yogic sleep,' is a powerful guided meditation technique practiced lying down. It guides you into a state of conscious relaxation that sits on the boundary between waking and sleeping.",
    desc2: "During Yoga Nidra, the body rests deeply while the mind remains awake and receptive. It is highly effective for reducing anxiety, processing emotional trauma, and alleviating chronic sleep disorders.",
    benefits: [
      "Promotes deep restorative sleep equivalent to several hours of rest.",
      "Reduces physical stress levels, lowering cortisol and blood pressure.",
      "Reprograms negative subconscious patterns through focus (Sankalpa)."
    ],
    expect: "You will spend the entire session lying down in a comfortable position supported by blankets, bolsters, and eye pillows. The instructor will guide your awareness through the body. No movement required.",
    duration: "60 Minutes",
    intensity: "All Levels",
    temp: "Room Temp (21°C)",
    price: "$20.00",
    instructor: "Priya Patel"
  },
  "hot-stone": {
    title: "Hot Stone Massage",
    tagline: "Basalt warm stones placed on energy meridians to relieve muscle stress.",
    category: "Therapies & Massages",
    photo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    desc1: "Our Hot Stone Massage is a premium therapeutic treatment utilizing smooth, heated basalt stones. The therapist places the warm stones on specific meridian points of the body to ground and warm the nervous system.",
    desc2: "The local heat of the stones dilates blood vessels, promoting lymphatic flow and circulation. This allows the therapist to access deeper muscle layers without applying excessive pressure, easing muscle stiffness.",
    benefits: [
      "Promotes intense muscle relaxation, melting away chronic tension.",
      "Improves blood circulation and lymphatic drainage.",
      "Calms nervous system strain and lowers anxiety."
    ],
    expect: "You will lie on a warm massage table. The therapist will use natural oils to glide heated stones along your muscles, combining heat therapy with traditional massage strokes.",
    duration: "60 Minutes",
    intensity: "Therapy Session",
    temp: "Warm Room (25°C)",
    price: "$85.00",
    instructor: "Therapist Staff"
  },
  spinal: {
    title: "Spinal Adjustment",
    tagline: "Chiropractic joint manipulations focusing on chronic spine aches.",
    category: "Therapies & Massages",
    photo: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
    desc1: "Spinal Adjustment sessions utilize specialized, manual chiropractic adjustments to correct spinal subluxations and misalignment of the joints.",
    desc2: "By restoring proper alignment to the skeletal system, these adjustments reduce pressure on sensitive nerves, alleviate pain, improve joint mobility, and support the body's natural healing abilities.",
    benefits: [
      "Reduces chronic neck, back, and hip joint pain.",
      "Improves overall posture, flexibility, and athletic range.",
      "Optimizes nervous system pathway communication."
    ],
    expect: "A licensed chiropractor will examine your alignment, test range of motion, and perform targeted, safe manual joint manipulations on an adjustment table.",
    duration: "45 Minutes",
    intensity: "Chiropractic",
    temp: "Room Temp (21°C)",
    price: "$95.00",
    instructor: "Dr. Finch"
  },
  acupuncture: {
    title: "Acupuncture Session",
    tagline: "Micro-needle placement along energy nodes to resolve chronic stress.",
    category: "Therapies & Massages",
    photo: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80",
    desc1: "Acupuncture is an ancient healing therapy from Traditional Chinese Medicine. It involves the insertion of extremely thin, sterile needles into specific acupuncture points along the body's energy channels (meridians).",
    desc2: "These micro-needles stimulate nerves, muscles, and connective tissue, triggering the release of natural painkillers (endorphins) and improving blood flow to resolve chronic pain and localized swelling.",
    benefits: [
      "Alleviates chronic headaches, back aches, and joint stiffness.",
      "Balances cortisol, promoting a calm nervous state.",
      "Speeds up tissue repair and reduces inflammation."
    ],
    expect: "You will rest on a comfortable treatment table. The acupuncturist will gently insert micro-needles at targeted points. The needles will remain in place for 20-30 minutes while you rest.",
    duration: "60 Minutes",
    intensity: "Therapy Session",
    temp: "Room Temp (22°C)",
    price: "$90.00",
    instructor: "Therapist Staff"
  },
  "deep-tissue": {
    title: "Deep Tissue Recovery",
    tagline: "Focused pressure targeting internal muscle layers. Ideal for recovery.",
    category: "Therapies & Massages",
    photo: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    desc1: "Deep Tissue Recovery is a therapeutic massage technique designed to access the deeper layers of muscle tissue and myofascial connections.",
    desc2: "The therapist uses slow, intense strokes and friction across the grain of the muscle to break down adhesions (muscle knots) that limit movement, cause pain, and restrict circulation.",
    benefits: [
      "Releases chronic muscle knots, tightness, and adhesions.",
      "Enhances range of motion and joint flexibility.",
      "Speeds up muscle recovery times after heavy physical strain."
    ],
    expect: "The therapist will apply firm, localized pressure using their hands, forearms, and elbows. Some discomfort may occur as tight areas are worked, but communication will ensure a safe intensity.",
    duration: "60 Minutes",
    intensity: "Therapy Session",
    temp: "Room Temp (22°C)",
    price: "$80.00",
    instructor: "Therapist Staff"
  },
  ayurvedic: {
    title: "Ayurvedic Consultation",
    tagline: "Constitutional evaluations based on Doshas. Custom diet plans.",
    category: "Therapies & Massages",
    photo: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1200&q=80",
    desc1: "An Ayurvedic Consultation is a holistic wellness assessment based on the ancient Indian system of medicine (Ayurveda). It maps your current physical state to your natural constitution (Prakriti) and current imbalances (Vikriti).",
    desc2: "By examining your unique energetic blend of Doshas (Vata, Pitta, Kapha), the consultant designs a customized wellness plan focusing on dietary adjustments, lifestyle routines, herbal remedies, and detoxification practices.",
    benefits: [
      "Identifies the root causes of digestive, energy, and sleep imbalances.",
      "Provides a personalized, easy-to-follow organic nutrition guideline.",
      "Balances mind and body using natural circadian rhythms."
    ],
    expect: "A detailed interview reviewing your health history, dietary patterns, sleep cycles, tongue, and pulse reading. You will receive a written report with custom dietary and herbal recommendations.",
    duration: "75 Minutes",
    intensity: "Ayurvedic",
    temp: "Room Temp (21°C)",
    price: "$110.00",
    instructor: "Dr. Shastri"
  },
  breathwork: {
    title: "Somatic Breathwork",
    tagline: "Active respiration techniques designed to release stress triggers.",
    category: "Workshops & Events",
    photo: "https://images.unsplash.com/photo-1506126893602-d30903ec8338?auto=format&fit=crop&w=1200&q=80",
    desc1: "Somatic Breathwork is an experiential workshop utilizing deep, rhythmic breathing patterns to access the subconscious mind, clear physical stress, and release suppressed emotional tension.",
    desc2: "By temporarily shifting blood chemistry through active breathing, the practice triggers the release of endorphins, lowers mental chatter, and allows the body to release stored somatic trauma.",
    benefits: [
      "Discharges stored physical tension and somatic anxiety.",
      "Provides profound emotional clarity and stress relief.",
      "Improves lung capacity and oxygenates the blood system."
    ],
    expect: "You will lie down on a mat. The facilitator will guide you through a circular breathing pattern, supported by a powerful, evocative soundtrack. Facilitators will support your journey.",
    duration: "120 Minutes",
    intensity: "Monthly Workshop",
    temp: "Room Temp (21°C)",
    price: "$45.00",
    instructor: "Sarah Jenkins"
  },
  "sound-bath": {
    title: "Sound Bath Healing",
    tagline: "Acoustic waves utilizing crystal singing bowls. Induces deep meditation.",
    category: "Workshops & Events",
    photo: "https://images.unsplash.com/photo-1596305589440-2e180399a760?auto=format&fit=crop&w=1200&q=80",
    desc1: "Sound Bath Healing is a deeply relaxing, passive meditation event. You lie down and let acoustic sound waves from crystal singing bowls, gongs, and chimes wash over you.",
    desc2: "The therapeutic vibrations of the instruments slow down your brain waves from active beta states to deep, meditative alpha and theta states, promoting profound relaxation and tissue healing.",
    benefits: [
      "Induces a state of deep, effortless meditation.",
      "Reduces chronic physical stress, anxiety, and heart rate values.",
      "Improves mental clarity and matches energetic wavelengths."
    ],
    expect: "You will lie comfortably in Savasana on a yoga mat with bolsters and eye masks. The practitioner will play Tibetan singing bowls and gongs. You just listen and relax.",
    duration: "90 Minutes",
    intensity: "Weekly Event",
    temp: "Room Temp (22°C)",
    price: "$40.00",
    instructor: "Priya Patel"
  },
  pilates: {
    title: "Pilates Core Sculpt",
    tagline: "Posture structural strengthening using resistance and control to correct spine alignment.",
    category: "Workshops & Events",
    photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    desc1: "Pilates Core Sculpt is a precise, low-impact exercise class focusing on core strength, muscle balance, and postural alignment. It targets the deep stabilizer muscles of the abdomen, lower back, and pelvis.",
    desc2: "Using body weight resistance, the exercises emphasize control, precision, and alignment. This helps correct muscle imbalances, support the spine, tone muscle groups, and improve overall functional mobility.",
    benefits: [
      "Significantly strengthens the abdominal wall, obliques, and pelvic floor.",
      "Improves posture, spine alignment, and skeletal stability.",
      "Tones muscle groups without adding joint strain."
    ],
    expect: "Class is practiced on a mat, sometimes incorporating resistance rings, bands, or light weights. Movements are slow, controlled, and focused on breath coordination. Wear form-fitting athletic wear.",
    duration: "60 Minutes",
    intensity: "Physical Sculpting",
    temp: "Room Temp (21°C)",
    price: "$30.00",
    instructor: "Sarah Jenkins"
  }
};

// Category FAQs map
const categoryFAQs = {
  yoga: [
    { q: "What should I bring to class?", a: "We provide professional yoga mats, blocks, and towels free of charge. We recommend bringing a personal water bottle and wearing comfortable, flexible athletic wear." },
    { q: "How early should I arrive?", a: "To preserve the serene atmosphere of our studio, class doors close exactly 2 minutes before the scheduled start time. We recommend arriving 10-15 minutes early." },
    { q: "Can beginners join this format?", a: "Yes! Our certified instructors provide custom modifications for all experience levels so you can practice safely at your own pace." }
  ],
  therapy: [
    { q: "Is booking cancellation free?", a: "You can reschedule or cancel your therapy appointment free of charge up to 12 hours before your scheduled time. Late cancellations will forfeit the session credit." },
    { q: "What should I expect during my session?", a: "Your therapist will review your health profile and adjust treatment pressure to your comfort level. Clean towels, robes, and storage lockers are provided." },
    { q: "How often should I book treatments?", a: "For chronic muscle stiffness or postural stress recovery, we recommend bi-weekly sessions. For general relaxation, a monthly session is ideal." }
  ],
  workshops: [
    { q: "Are workshop tickets refundable?", a: "Due to limited spaces, workshop tickets are non-refundable but can be transferred to another member if you notify us at least 24 hours in advance." },
    { q: "Do I need prior experience?", a: "No prior experience is required for our specialty workshops. They are designed as deep, educational, and restorative experiences for everyone." },
    { q: "What should I bring with me?", a: "Bring a notebook if you wish to take notes, and dress in warm layers as body temperature can shift during breathwork and sound baths." }
  ]
};

// Loader Logic
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = urlParams.get('id') || 'vinyasa';
  
  const service = servicesData[serviceKey];
  if (!service) {
    console.warn(`Service key "${serviceKey}" not found. Falling back to default.`);
    return;
  }
  
  // 1. Text elements
  document.getElementById('service-category').textContent = service.category;
  document.getElementById('service-title').textContent = service.title;
  document.getElementById('service-tagline').textContent = service.tagline;
  document.getElementById('service-desc1').textContent = service.desc1;
  document.getElementById('service-desc2').textContent = service.desc2;
  document.getElementById('service-expect').textContent = service.expect;
  
  // 2. Specifications elements
  document.getElementById('service-duration').textContent = service.duration;
  document.getElementById('service-intensity').textContent = service.intensity;
  document.getElementById('service-temp').textContent = service.temp;
  document.getElementById('service-price').textContent = service.price;
  document.getElementById('service-instructor').textContent = service.instructor;
  
  // 3. Photo elements
  const photoImg = document.getElementById('service-photo');
  photoImg.src = service.photo;
  photoImg.alt = `${service.title} Details`;
  
  // 4. Adapt Headings for Therapies vs Yoga Practices
  const catLower = service.category.toLowerCase();
  const isPractice = catLower.includes('yoga') || catLower.includes('pilates');
  document.getElementById('about-heading').textContent = isPractice ? 'About the Practice' : 'About the Treatment';
  document.getElementById('sidebar-heading').textContent = isPractice ? 'Class Specifications' : 'Session Specifications';
  
  // 5. Dynamic Benefits list
  const benefitsContainer = document.getElementById('service-benefits');
  benefitsContainer.innerHTML = '';
  service.benefits.forEach(benefit => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2.5';
    li.innerHTML = `<strong class="text-violet-600 dark:text-violet-400 text-lg leading-none">✓</strong> <span>${benefit}</span>`;
    benefitsContainer.appendChild(li);
  });

  // 6. Dynamic FAQs list
  const faqContainer = document.getElementById('faq-container');
  if (faqContainer) {
    let faqKey = 'yoga';
    if (catLower.includes('therap') || catLower.includes('mass')) {
      faqKey = 'therapy';
    } else if (catLower.includes('work') || catLower.includes('event')) {
      faqKey = 'workshops';
    }
    
    const faqs = categoryFAQs[faqKey];
    faqContainer.innerHTML = '';
    
    faqs.forEach((faq, index) => {
      const details = document.createElement('details');
      details.className = "group bg-white dark:bg-[#11131E] rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-all duration-300";
      if (index === 0) details.setAttribute('open', '');
      
      details.innerHTML = `
        <summary class="flex justify-between items-center p-6 font-bold text-base cursor-pointer select-none text-slate-900 dark:text-slate-100">
          <span>${faq.q}</span>
          <span class="faq-icon text-xl text-violet-600 dark:text-violet-400 transition-transform duration-300">&plus;</span>
        </summary>
        <div class="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-850 pt-4">
          ${faq.a}
        </div>
      `;
      faqContainer.appendChild(details);
    });
  }
});
