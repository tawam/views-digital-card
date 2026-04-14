const hero = document.getElementById('hero');
const canvas = document.getElementById('hero-particles');
const ctx = canvas.getContext('2d');
const infoGrid = document.getElementById('info-grid');
const socialSection = document.getElementById('social-section');
const companyTabs = Array.from(document.querySelectorAll('.company-tab'));

const fields = {
  name: document.getElementById('company-name'),
  cnpj: document.getElementById('company-cnpj'),
  insc: document.getElementById('company-insc'),
  address: document.getElementById('company-address'),
  cep: document.getElementById('company-cep'),
  city: document.getElementById('company-city'),
  bank: document.getElementById('bank-name'),
  branch: document.getElementById('bank-branch'),
  account: document.getElementById('bank-account'),
  pix: document.getElementById('bank-pix'),
  holder: document.getElementById('bank-holder')
};

const socialLinks = {
  site: document.getElementById('social-site'),
  linkedin: document.getElementById('social-linkedin'),
  instagram: document.getElementById('social-instagram'),
  whatsapp1: document.getElementById('social-whatsapp-1'),
  whatsapp2: document.getElementById('social-whatsapp-2')
};

const socialIcons = {
  site: `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" fill="currentColor"><path d="M350,55.72c-162.52,0-294.28,131.75-294.28,294.28s131.75,294.28,294.28,294.28,294.28-131.75,294.28-294.28S512.52,55.72,350,55.72ZM546.64,370c-59.24,36.11-127.27,55.23-196.64,55.27-69.37-.05-137.4-19.16-196.64-55.27l-45.91-27.98,45.91-27.98c27.77-16.93,57.49-30.07,88.35-39.31,13.75,47.52,56.6,82.61,108.04,84.74v.02c.08,0,.16,0,.25-.01.08,0,.16,0,.25.01v-.02c51.44-2.13,94.29-37.22,108.04-84.74,30.87,9.24,60.58,22.39,88.35,39.31l45.91,27.98-45.91,27.98Z"/></svg>`,
  linkedin: `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" fill="currentColor"><path d="M350,54.4c-163.25,0-295.6,132.34-295.6,295.6s132.34,295.6,295.6,295.6,295.6-132.34,295.6-295.6S513.25,54.4,350,54.4ZM254.72,524.54c0,6.98-5.66,12.64-12.64,12.64h-53.81c-6.98,0-12.64-5.66-12.64-12.64v-225.58c0-6.98,5.66-12.64,12.64-12.64h53.81c6.98,0,12.64,5.66,12.64,12.64v225.58ZM215.18,265.06c-28.23,0-51.12-22.89-51.12-51.12s22.89-51.12,51.12-51.12,51.12,22.89,51.12,51.12-22.89,51.12-51.12,51.12ZM535.95,416.39v109.18c0,6.42-5.2,11.62-11.62,11.62h-57.74c-6.42,0-11.62-5.2-11.62-11.62v-105.81c0-15.78,4.63-69.17-41.25-69.17-35.59,0-42.81,36.54-44.26,52.94v122.04c0,6.42-5.2,11.62-11.62,11.62h-55.85c-6.42,0-11.62-5.2-11.62-11.62v-227.62c0-6.42,5.2-11.62,11.62-11.62h55.85c6.42,0,11.62,5.2,11.62,11.62v19.68c13.2-19.8,32.81-35.09,74.56-35.09,92.46,0,91.93,86.38,91.93,133.85Z"/></svg>`,
  instagram: `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" fill="currentColor"><path d="M350,259.81c-49.84,0-90.19,40.35-90.19,90.19s40.35,90.19,90.19,90.19,90.19-40.35,90.19-90.19-40.35-90.19-90.19-90.19Z"/><path d="M449.68,231.33c-13.29,0-23.73,10.44-23.73,23.73s10.44,23.73,23.73,23.73,23.73-10.44,23.73-23.73-10.44-23.73-23.73-23.73Z"/><path d="M350,54.4c-163.25,0-295.6,132.34-295.6,295.6s132.34,295.6,295.6,295.6,295.6-132.34,295.6-295.6S513.25,54.4,350,54.4ZM535.13,425.95c0,60.28-48.9,109.18-109.18,109.18h-151.9c-60.28,0-109.18-48.9-109.18-109.18v-151.9c0-60.28,48.9-109.18,109.18-109.18h151.9c60.28,0,109.18,48.9,109.18,109.18v151.9Z"/></svg>`,
  whatsapp1: `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" fill="currentColor"><path d="M514.25,466.28c-6.8,19.25-33.83,35.17-55.39,39.83-14.76,3.13-34,5.62-98.84-21.26-72.83-30.17-173.95-137.65-173.95-209.17,0-36.41,20.99-78.81,57.7-78.81,17.66,0,21.56.34,27.37,14.29,6.8,16.42,23.39,56.9,25.37,61.05,8.15,17.02-8.3,26.98-20.23,41.8-3.81,4.46-8.13,9.29-3.3,17.58,4.8,8.13,21.39,35.17,45.77,56.87,31.49,28.06,57.02,37.01,66.17,40.82,6.8,2.81,14.93,2.16,19.89-3.14,6.29-6.81,14.11-18.09,22.06-29.21,5.62-7.96,12.75-8.96,20.23-6.13,5.05,1.75,69.24,31.56,71.95,36.33,2,3.47,2,19.89-4.8,39.14M350.06,67.84h-.14c-155.56,0-282.08,126.56-282.08,282.16,0,61.7,19.89,118.94,53.72,165.37l-35.16,104.85,108.43-34.65c44.61,29.52,97.85,46.6,155.22,46.6,155.56,0,282.1-126.56,282.1-282.16S505.61,67.84,350.06,67.84"/></svg>`,
  whatsapp2: `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" fill="currentColor"><path d="M514.25,466.28c-6.8,19.25-33.83,35.17-55.39,39.83-14.76,3.13-34,5.62-98.84-21.26-72.83-30.17-173.95-137.65-173.95-209.17,0-36.41,20.99-78.81,57.7-78.81,17.66,0,21.56.34,27.37,14.29,6.8,16.42,23.39,56.9,25.37,61.05,8.15,17.02-8.3,26.98-20.23,41.8-3.81,4.46-8.13,9.29-3.3,17.58,4.8,8.13,21.39,35.17,45.77,56.87,31.49,28.06,57.02,37.01,66.17,40.82,6.8,2.81,14.93,2.16,19.89-3.14,6.29-6.81,14.11-18.09,22.06-29.21,5.62-7.96,12.75-8.96,20.23-6.13,5.05,1.75,69.24,31.56,71.95,36.33,2,3.47,2,19.89-4.8,39.14M350.06,67.84h-.14c-155.56,0-282.08,126.56-282.08,282.16,0,61.7,19.89,118.94,53.72,165.37l-35.16,104.85,108.43-34.65c44.61,29.52,97.85,46.6,155.22,46.6,155.56,0,282.1-126.56,282.1-282.16S505.61,67.84,350.06,67.84"/></svg>`
};

const companies = {
  locacoes: {
    name: 'Views Locações e Produções LTDA',
    cnpj: '25.321.330/0001-00',
    insc: '17 10 750.520-0',
    address: 'Rua Estrada da Graciosa 362 - Atuba',
    cep: '82840-360',
    city: 'Curitiba',
    bank: 'Sicredi',
    branch: '0730',
    account: '17766-7',
    pix: '25321330000100',
    holder: 'Views Locações',
    social: {
      site: 'https://viewsstudios.com.br/',
      linkedin: 'https://www.linkedin.com/company/views-producoes-artisticas/about/',
      instagram: 'https://www.instagram.com/viewsproducoesartisticas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      whatsapp1: 'https://wa.me/554197675393?text=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20cart%C3%A3o%20digital%2C%20gostaria%20de%20pedir%20algumas%20informa%C3%A7%C3%B5es.',
      whatsapp2: 'https://wa.me/554199197983?text=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20cart%C3%A3o%20digital%2C%20gostaria%20de%20pedir%20algumas%20informa%C3%A7%C3%B5es.'
    }
  },
  studios: {
    name: 'Views Studios Co. LTDA',
    cnpj: '52.980.858/0001-63',
    insc: '17 10 1.132.241-9',
    address: 'Rua Estrada da Graciosa 362 - Atuba',
    cep: '82840-360',
    city: 'Curitiba',
    bank: 'Sicredi',
    branch: '0730',
    account: '26916-0',
    pix: 'camila@viewsproducoes.com.br',
    holder: 'Views Studios',
    social: {
      site: 'https://viewsstudios.com.br/',
      linkedin: 'https://www.linkedin.com/company/views-producoes-artisticas/about/',
      instagram: 'https://www.instagram.com/viewsproducoesartisticas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      whatsapp1: 'https://wa.me/554197675393?text=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20cart%C3%A3o%20digital%2C%20gostaria%20de%20pedir%20algumas%20informa%C3%A7%C3%B5es.',
      whatsapp2: 'https://wa.me/554199197983?text=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20cart%C3%A3o%20digital%2C%20gostaria%20de%20pedir%20algumas%20informa%C3%A7%C3%B5es.'
    }
  }
};

let activeCompany = 'studios';
let switchTimeout;
let revealTimeout;

function syncTabs(key) {
  companyTabs.forEach((tab) => {
    const isActive = tab.dataset.company === key;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });
}

function renderSocialLinks(links) {
  Object.entries(socialLinks).forEach(([key, element]) => {
    element.href = links[key] || '#';
  });
}

function renderSocialIcons() {
  Object.entries(socialLinks).forEach(([key, element]) => {
    const iconContainer = element.querySelector('.social-icon');
    if (iconContainer) iconContainer.innerHTML = socialIcons[key];
  });
}

function renderCompany(key) {
  const data = companies[key];
  if (!data) return;

  document.body.dataset.company = key;

  Object.entries(fields).forEach(([field, element]) => {
    element.textContent = data[field];
  });

  renderSocialLinks(data.social);
  syncTabs(key);
  activeCompany = key;
}

function triggerCompanySwitch(key) {
  if (!companies[key] || key === activeCompany) return;

  clearTimeout(switchTimeout);
  clearTimeout(revealTimeout);

  syncTabs(key);
  fields.name.classList.add('is-switching');
  infoGrid.classList.remove('is-revealed');
  infoGrid.classList.add('is-switching');
  socialSection.classList.remove('is-revealed');

  switchTimeout = window.setTimeout(() => {
    renderCompany(key);
    fields.name.classList.remove('is-switching');
    infoGrid.classList.remove('is-switching');
    infoGrid.classList.add('is-revealed');
    socialSection.classList.add('is-revealed');

    revealTimeout = window.setTimeout(() => {
      infoGrid.classList.remove('is-revealed');
      socialSection.classList.remove('is-revealed');
    }, 620);
  }, 170);
}

companyTabs.forEach((tab) => {
  tab.addEventListener('click', () => triggerCompanySwitch(tab.dataset.company));
});

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

renderSocialIcons();
renderCompany('studios');
resize();
requestAnimationFrame(animate);
