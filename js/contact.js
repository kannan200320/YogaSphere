/**
 * YogaSphere - Contact Page JavaScript Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const responseMsg = document.getElementById('contact-response');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset messages
    if (responseMsg) {
      responseMsg.style.display = 'none';
      responseMsg.className = 'contact-msg';
    }

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showResponse('Please fill in all required fields.', 'error');
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showResponse('Please provide a valid email address.', 'error');
      return;
    }

    // Simulate successful form transmission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      showResponse('Thank you! Your message has been sent successfully. We will respond within 24 hours.', 'success');
      contactForm.reset();
    }, 1500);
  });

  function showResponse(text, type) {
    if (!responseMsg) return;
    responseMsg.textContent = text;
    responseMsg.style.display = 'block';
    
    if (type === 'success') {
      responseMsg.style.color = '#ffffff';
      responseMsg.style.backgroundColor = 'var(--success)';
      responseMsg.style.borderColor = 'var(--success)';
    } else {
      responseMsg.style.color = '#ffffff';
      responseMsg.style.backgroundColor = 'var(--danger)';
      responseMsg.style.borderColor = 'var(--danger)';
    }
  }
});
