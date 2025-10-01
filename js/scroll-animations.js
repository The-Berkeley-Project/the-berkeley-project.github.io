(function () {
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!revealEls.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const supportsObserver = 'IntersectionObserver' in window;

  const showImmediately = () => {
    revealEls.forEach((el) => {
      el.classList.add('is-visible');
    });
  };

  revealEls.forEach((el) => {
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) {
      el.style.setProperty('--reveal-delay', delay);
    }
  });

  if (!supportsObserver || prefersReducedMotion.matches) {
    showImmediately();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  revealEls.forEach((el) => observer.observe(el));

  const handleMotionChange = (event) => {
    if (event.matches) {
      showImmediately();
    }
  };

  if (typeof prefersReducedMotion.addEventListener === 'function') {
    prefersReducedMotion.addEventListener('change', handleMotionChange);
  } else if (typeof prefersReducedMotion.addListener === 'function') {
    prefersReducedMotion.addListener(handleMotionChange);
  }
})();
