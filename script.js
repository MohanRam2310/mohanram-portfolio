// Smooth scroll for anchors
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typewriter effect
function typewriter(el) {
  const lines = JSON.parse(el.dataset.lines);
  let line = 0;
  let char = 0;
  function type() {
    if (line >= lines.length) return;
    const currentLine = lines[line];
    if (char < currentLine.length) {
      el.innerHTML = currentLine.slice(0, char + 1);
      char++;
      setTimeout(type, 90);
    } else {
      el.innerHTML += '<br>';
      line++;
      char = 0;
      setTimeout(type, 600);
    }
  }
  type();
}

const typeEl = document.querySelector('.typewriter');
if (typeEl) typewriter(typeEl);

// Scramble text
function scramble(el) {
  const text = el.dataset.text;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let frame = 0;
  const interval = setInterval(() => {
    const displayed = text
      .split('')
      .map((letter, idx) => {
        if (idx < frame / 3) return text[idx];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    el.textContent = displayed;
    frame++;
    if (frame / 3 >= text.length) {
      el.textContent = text;
      clearInterval(interval);
    }
  }, 40);
}
const scrambleEl = document.querySelector('.scramble');
if (scrambleEl) scramble(scrambleEl);

// Intersection Observer for reveal
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-in');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Counters
function startCount(el) {
  const target = parseInt(el.dataset.count, 10);
  let current = 0;
  const step = target / 100;
  function update() {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  update();
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// Timeline stroke animation
const timelinePath = document.querySelector('.timeline-line path');
if (timelinePath) {
  const tlObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timelinePath.style.transition = 'stroke-dashoffset 2s ease';
        timelinePath.style.strokeDashoffset = '0';
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  tlObserver.observe(timelinePath);
}

// Icon sheen on hover
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.classList.add('icon-sheen'));
  icon.addEventListener('mouseleave', () => icon.classList.remove('icon-sheen'));
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => {
    el.style.animationDuration = '0ms';
    el.style.transitionDuration = '0ms';
  });
}
