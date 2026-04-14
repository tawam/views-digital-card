const hero = document.getElementById('hero');
const canvas = document.getElementById('hero-particles');
const ctx = canvas.getContext('2d');

const state = {
  width: 0,
  height: 0,
  mouseX: 0,
  mouseY: 0,
  particles: [],
  interactive: true
};

function resize() {
  state.width = hero.clientWidth;
  state.height = hero.clientHeight;
  canvas.width = state.width;
  canvas.height = state.height;
  state.mouseX = state.width * 0.5;
  state.mouseY = state.height * 0.4;
  state.interactive = window.matchMedia('(pointer:fine)').matches && window.innerWidth > 900;
  state.particles = Array.from({ length: 128 }, createParticle);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle() {
  return {
    x: random(0, state.width),
    y: random(state.height * 0.15, state.height * 1.05),
    speedY: random(0.18, 0.62),
    drift: random(-0.18, 0.18),
    radius: random(0.35, 1.05),
    alpha: random(0.16, 0.42),
    phase: random(0, Math.PI * 2)
  };
}

function resetParticle(p) {
  p.x = random(0, state.width);
  p.y = state.height + random(20, 160);
  p.speedY = random(0.18, 0.62);
  p.drift = random(-0.18, 0.18);
  p.radius = random(1.2, 3.2);
  p.alpha = random(0.16, 0.42);
  p.phase = random(0, Math.PI * 2);
}

function drawGlow() {
  const mx = state.interactive ? state.mouseX / state.width : 0.5;
  const my = state.interactive ? state.mouseY / state.height : 0.4;

  const radialA = ctx.createRadialGradient(
    state.width * (0.26 + mx * 0.08),
    state.height * (0.22 + my * 0.06),
    0,
    state.width * (0.26 + mx * 0.08),
    state.height * (0.22 + my * 0.06),
    state.width * 0.34
  );
  radialA.addColorStop(0, 'rgba(45, 168, 255, 0.18)');
  radialA.addColorStop(1, 'rgba(45, 168, 255, 0)');
  ctx.fillStyle = radialA;
  ctx.fillRect(0, 0, state.width, state.height);

  const radialB = ctx.createRadialGradient(
    state.width * (0.74 - mx * 0.06),
    state.height * (0.28 + my * 0.04),
    0,
    state.width * (0.74 - mx * 0.06),
    state.height * (0.28 + my * 0.04),
    state.width * 0.26
  );
  radialB.addColorStop(0, 'rgba(20, 72, 255, 0.18)');
  radialB.addColorStop(1, 'rgba(20, 72, 255, 0)');
  ctx.fillStyle = radialB;
  ctx.fillRect(0, 0, state.width, state.height);
}

function drawParticles(time) {
  ctx.clearRect(0, 0, state.width, state.height);
  drawGlow();
  ctx.globalCompositeOperation = 'screen';

  state.particles.forEach((p) => {
    p.y -= p.speedY;
    p.x += Math.sin(time * 0.0007 + p.phase) * 0.22 + p.drift;

    if (p.y < -20) resetParticle(p);

    const mousePullX = (state.mouseX - p.x) * 0.00025;
    p.x += mousePullX;

    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.1);
    gradient.addColorStop(0, `rgba(252, 206, 63, ${p.alpha})`);
    gradient.addColorStop(0.28, `rgba(243, 242, 238, ${p.alpha * 0.82})`);
    gradient.addColorStop(0.72, `rgba(45, 168, 255, ${p.alpha * 0.18})`);
    gradient.addColorStop(1, 'rgba(45, 168, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius * 2.1, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalCompositeOperation = 'source-over';
}

function animate(time) {
  drawParticles(time);
  requestAnimationFrame(animate);
}

hero.addEventListener('mousemove', (event) => {
  if (!state.interactive) return;
  const rect = hero.getBoundingClientRect();
  state.mouseX = event.clientX - rect.left;
  state.mouseY = event.clientY - rect.top;
});

hero.addEventListener('mouseleave', () => {
  state.mouseX = state.width * 0.5;
  state.mouseY = state.height * 0.4;
});

window.addEventListener('resize', resize);

resize();
requestAnimationFrame(animate);
