// 1st Phorm Resume - Main JavaScript
document.addEventListener('DOMContentLoaded', () => {
  initGitGrid();
  initArbLog();
  initScrollAnimations();
  initNavHighlight();
});

// Smooth scroll
function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// GitHub contribution grid
function initGitGrid() {
  const grid = document.getElementById('git-grid');
  if (!grid) return;
  for (let i = 0; i < 364; i++) {
    const div = document.createElement('div');
    div.className = 'git-cell';
    const rand = Math.random();
    if (rand > 0.85) div.classList.add('git-l4');
    else if (rand > 0.7) div.classList.add('git-l3');
    else if (rand > 0.5) div.classList.add('git-l2');
    else if (rand > 0.2) div.classList.add('git-l1');
    grid.appendChild(div);
  }
}

// ARB-BOT terminal simulation
function initArbLog() {
  const terminal = document.getElementById('arb-log');
  if (!terminal) return;
  const items = ['Gym Equipment', 'Vintage Audio', 'Camera Lens', 'Server Rack', 'Office Chair', 'Power Tools', 'Electronics'];
  
  function addLog() {
    const item = items[Math.floor(Math.random() * items.length)];
    const price = Math.floor(Math.random() * 500) + 50;
    const profit = Math.floor(price * 0.4);
    const time = new Date().toLocaleTimeString();
    
    const div = document.createElement('div');
    div.innerHTML = `<span style="color:#6b7280">[${time}]</span> <span style="color:#3b82f6">SCAN:</span> ${item} @ $${price} <span style="color:#22c55e;margin-left:8px">+$${profit}</span>`;
    terminal.insertBefore(div, terminal.firstChild);
    if (terminal.children.length > 8) terminal.lastChild.remove();
    setTimeout(addLog, Math.random() * 2500 + 1500);
  }
  addLog();
}

// Scroll animations with IntersectionObserver
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Nav highlight on scroll
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navBtns = document.querySelectorAll('.nav-links button');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (scrollY >= top) current = section.id;
    });
    navBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.section === current) btn.classList.add('active');
    });
  });
}

// Chat functionality
const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');

const systemPrompt = `You are Jeramie Hicks' professional AI representative.

VOICE: Confident but approachable. Strategic but human. You speak like a seasoned entrepreneur who's been in the trenches for 25 years.

BACKGROUND:
- 25 years of entrepreneurship, reselling, and business operations
- Self-taught AI Engineer building autonomous agent systems
- Projects: NEURUH (B2B outreach swarm), ARB-BOT (arbitrage automation)
- Skills: Python, TypeScript, React, LangChain, RAG pipelines, Vector DBs, Prompt Engineering
- Currently seeking AI/Tech role at 1st Phorm

CORE VALUES (align with 1st Phorm):
- "Personal Excellence is the Ultimate Rebellion" - you embody this
- Execution over excuses - you ship working products
- No shortcuts - you do the work that others won't

STYLE:
- Professional and articulate, NOT aggressive or "military cosplay"
- Use specific examples from projects when relevant
- Be honest about capabilities and growth areas
- Show genuine enthusiasm for building things that work

When asked about fit with 1st Phorm, emphasize:
- Real-world business experience (not just theory)
- Builder mentality (full-stack, end-to-end)
- Revenue focus (everything built to generate results)`;

function handleKeyPress(e) {
  if (e.key === 'Enter') sendQuery();
}

async function sendQuery() {
  const query = userInput.value.trim();
  if (!query) return;
  
  appendMessage('user', query);
  userInput.value = '';
  
  const loadingId = appendMessage('ai', '<i class="fas fa-circle-notch fa-spin"></i> Thinking...', true);
  
  // For now, use a mock response - API key would be injected in production
  setTimeout(() => {
    document.getElementById(loadingId)?.remove();
    const responses = [
      "I've spent 25 years in the trenches - from reselling and arbitrage to building AI systems that automate entire workflows. When I say I understand ROI, it's because I've lived it, not just studied it.",
      "NEURUH is my flagship project - an autonomous B2B outreach swarm. Three specialized agents working in parallel to identify leads, enrich data, and draft personalized outreach. It reduced what took hours to seconds.",
      "What draws me to 1st Phorm? The 'Personal Excellence is the Ultimate Rebellion' philosophy isn't just a slogan to me - it's how I've operated my entire career. I don't do excuses. I ship working products.",
      "My tech stack covers the full spectrum: Python for AI/ML, TypeScript for frontend, LangChain for agent orchestration, Pinecone for vector storage. But more importantly, I understand WHY to use each tool.",
      "The gap I bridge is rare: decades of real business experience combined with cutting-edge AI engineering. I don't just build cool tech - I build systems that generate revenue."
    ];
    typeWriter('ai', responses[Math.floor(Math.random() * responses.length)]);
  }, 1500);
}

function appendMessage(sender, text, isLoading = false) {
  const div = document.createElement('div');
  const id = 'msg-' + Math.random().toString(36).substr(2, 9);
  div.id = id;
  div.className = sender === 'user' ? 'msg msg-user' : 'msg msg-ai';
  
  const label = sender === 'user' ? 'YOU' : 'JERAMIE_AI';
  div.innerHTML = `<div class="msg-sender">${label}</div>${text}`;
  
  chatOutput.appendChild(div);
  chatOutput.scrollTop = chatOutput.scrollHeight;
  return id;
}

function typeWriter(sender, text) {
  const div = document.createElement('div');
  div.className = 'msg msg-ai';
  div.innerHTML = '<div class="msg-sender">JERAMIE_AI</div><span class="type-text"></span>';
  chatOutput.appendChild(div);
  
  const span = div.querySelector('.type-text');
  let i = 0;
  function type() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
      chatOutput.scrollTop = chatOutput.scrollHeight;
      setTimeout(type, 20);
    }
  }
  type();
}
