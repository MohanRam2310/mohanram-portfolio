// Smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Typewriter for hero lines
const line1 = "I don't just market.";
const line2 = "I automate growth.";
function typeText(el, text, delay=0){
  setTimeout(()=>{
    let i=0;
    const interval = setInterval(()=>{
      el.textContent = text.slice(0,i++);
      if(i>text.length) clearInterval(interval);
    },80);
  },delay);
}
const l1 = document.querySelector('.type-line1');
const l2 = document.querySelector('.type-line2');
typeText(l1,line1,200);
typeText(l2,line2,1200);

// Scramble Name
const scrambleEl = document.querySelector('.scramble');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function scramble(text){
  let iteration=0;
  const original = text;
  const interval = setInterval(()=>{
    scrambleEl.textContent = original.split('').map((letter, idx)=>{
      if(idx < iteration) return original[idx];
      return letters[Math.floor(Math.random()*26)];
    }).join('');
    if(iteration >= original.length){ clearInterval(interval); }
    iteration += 1/3;
  },30);
}
setTimeout(()=>scramble(scrambleEl.textContent),2200);

// Intersection Observers
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('reveal-in'); }
  });
},{ threshold:0.1 });

document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Counter animation
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const el = entry.target;
      const target = +el.dataset.target;
      let count = 0;
      const step = target / 100;
      const update = () => {
        count += step;
        if(count < target){
          el.textContent = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      };
      update();
      counterObserver.unobserve(el);
    }
  });
},{threshold:0.5});

document.querySelectorAll('.counter').forEach(el=>counterObserver.observe(el));

// Timeline stroke animation
const line = document.querySelector('.timeline-line');
if(line){
  line.style.height = '0%';
  const timelineObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        line.style.transition = 'height 2s ease';
        line.style.height = '100%';
        timelineObserver.disconnect();
      }
    });
  },{threshold:0.2});
  timelineObserver.observe(line);
}

// Icon sheen on hover
const sheenIcons = document.querySelectorAll('.icon-sheen');
sheenIcons.forEach(icon=>{
  icon.addEventListener('mouseenter',()=>icon.classList.add('sheen'));
  icon.addEventListener('animationend',()=>icon.classList.remove('sheen'));
});

// WhatsApp FAB tooltip (simple title attribute handled by browser) and pulse is CSS

// Button press effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn=>{
  btn.addEventListener('mousedown',()=>btn.classList.add('pressed'));
  btn.addEventListener('mouseup',()=>btn.classList.remove('pressed'));
  btn.addEventListener('mouseleave',()=>btn.classList.remove('pressed'));
});

// Reduced motion
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(prefersReduced){
  document.querySelectorAll('*').forEach(el=>{
    el.style.animationDuration = '0s';
    el.style.transitionDuration = '0s';
  });
}
