// 1st Phorm Resume - Enhanced JavaScript
// ==========================================

// Configuration - API key can be set here or via environment
const CONFIG = {
  GEMINI_API_KEY: '', // Add your key here for testing, or use environment variable in production
  GEMINI_MODEL: 'gemini-1.5-flash',
  API_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models'
};

// Context about Jeramie for the AI
const JERAMIE_CONTEXT = `
BACKGROUND & EXPERIENCE:
- 25+ years of entrepreneurship, reselling, and business operations
- Self-taught AI Engineer specializing in autonomous agent systems
- Location: Benton Harbor, Michigan
- Currently seeking AI/Tech roles that leverage both business acumen and technical skills

FLAGSHIP PROJECTS:
1. NEURUH - Autonomous B2B Outreach Swarm
   - Three specialized agents: Scraper, Researcher, Copywriter
   - Tech: Python, LangChain, Pinecone, React, FastAPI
   - Results: 99% time reduction, 450+ leads/day capacity
   
2. ARB-BOT - Physical Goods Arbitrage System
   - Scrapes marketplace APIs, compares eBay sold data
   - Alerts when profit margin exceeds 40%
   - Tech: Selenium, PostgreSQL, Twilio, Pandas

TECHNICAL SKILLS:
- Languages: Python, TypeScript, JavaScript
- Frameworks: React, Next.js, FastAPI, Node.js
- AI/ML: LangChain, OpenAI/Anthropic APIs, RAG pipelines, Pinecone, prompt engineering
- Databases: PostgreSQL, MongoDB, Vector DBs
- Tools: Docker, Git, Notion (systems architecture), Zapier/Make automation

BUSINESS SKILLS:
- Sales psychology and closing
- CRM architecture (HubSpot)
- ROI analysis and process optimization
- 25 years of real revenue generation experience

WHY 1ST PHORM:
- "Personal Excellence is the Ultimate Rebellion" resonates deeply
- Builder mentality - ships working products, not just concepts
- Bridges the gap between business strategy and technical execution
- Understands fitness/supplement industry from personal experience
`;

// AI System Prompt - Professional, High-Agency, Genuine
const SYSTEM_PROMPT = `You are an AI assistant representing Jeramie Hicks for professional inquiries.

VOICE & TONE:
- Confident but approachable, never arrogant
- Strategic and articulate, like a seasoned entrepreneur
- Genuine enthusiasm for building things that work
- Honest about capabilities and growth areas
- Professional and warm, NOT aggressive or "military cosplay"

CORE VALUES YOU EMBODY:
- Execution over excuses - you ship working products
- Personal excellence as a daily practice
- Real-world results, not just technical demos
- Continuous learning and adaptation

WHEN ANSWERING:
- Use specific examples from projects when relevant
- Be concise but thorough
- If asked about weaknesses, be honest but frame constructively  
- Connect business experience with technical capabilities
- Show genuine interest in the company/role being discussed

CONTEXT ABOUT JERAMIE:
${JERAMIE_CONTEXT}

Remember: You're representing a professional who bridges 25 years of business hustle with cutting-edge AI engineering. Be helpful, be real, and show the unique value that combination brings.`;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initGitGrid();
  initArbLog();
  initScrollAnimations();
  initNavHighlight();
  initParallax();
});

// ==========================================
// TAB SWITCHING FUNCTIONALITY
// ==========================================
function switchTab(tabId) {
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Remove active class from all tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // Add active class to clicked button
  event.currentTarget.classList.add('active');
  
  // Show the corresponding tab content
  document.getElementById(tabId).classList.add('active');
}

// ==========================================
// PARTICLE CANVAS SYSTEM
// ==========================================
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.7 ? '#E5562C' : '#1033CF'
    };
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < Math.min(count, 100); i++) {
      particles.push(createParticle());
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Update position
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();

      // Draw connections
      particles.slice(i + 1).forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (1 - dist / 120) * 0.15;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(drawParticles);
  }

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  resize();
  initParticles();
  drawParticles();

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==========================================
// GITHUB CONTRIBUTION GRID
// ==========================================
function initGitGrid() {
  const grid = document.getElementById('git-grid');
  if (!grid) return;

  // Create 364 cells (52 weeks * 7 days)
  for (let i = 0; i < 364; i++) {
    const div = document.createElement('div');
    div.className = 'git-cell';

    // Randomize activity levels
    const rand = Math.random();
    if (rand > 0.85) div.classList.add('git-l4');
    else if (rand > 0.7) div.classList.add('git-l3');
    else if (rand > 0.5) div.classList.add('git-l2');
    else if (rand > 0.25) div.classList.add('git-l1');

    grid.appendChild(div);
  }
}

// ==========================================
// ARB-BOT TERMINAL SIMULATION
// ==========================================
function initArbLog() {
  const terminal = document.getElementById('arb-log');
  if (!terminal) return;

  const items = [
    'Gym Equipment',
    'Vintage Audio',
    'Camera Lens',
    'Server Rack',
    'Office Chair',
    'Power Tools',
    'Electronics',
    'Fitness Gear',
    'Studio Monitor',
    'Gaming PC'
  ];

  function addLog() {
    const item = items[Math.floor(Math.random() * items.length)];
    const price = Math.floor(Math.random() * 500) + 50;
    const profit = Math.floor(price * (0.3 + Math.random() * 0.3));
    const time = new Date().toLocaleTimeString();

    const div = document.createElement('div');
    div.style.opacity = '0';
    div.style.transform = 'translateX(-10px)';
    div.style.transition = 'all 0.3s ease';
    div.innerHTML = `<span style="color:#5d6580">[${time}]</span> <span style="color:#1033CF">SCAN:</span> ${item} @ $${price} <span style="color:#22c55e;margin-left:8px">+$${profit}</span>`;

    terminal.insertBefore(div, terminal.firstChild);

    // Animate in
    requestAnimationFrame(() => {
      div.style.opacity = '1';
      div.style.transform = 'translateX(0)';
    });

    // Remove old entries
    if (terminal.children.length > 8) {
      const last = terminal.lastChild;
      last.style.opacity = '0';
      setTimeout(() => last.remove(), 300);
    }

    setTimeout(addLog, Math.random() * 2500 + 1500);
  }

  addLog();
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        setTimeout(() => {
          entry.target.classList.add('animate-fade-up');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ==========================================
// PARALLAX EFFECT
// ==========================================
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scroll = window.scrollY;
        document.documentElement.style.setProperty('--scroll', scroll);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ==========================================
// NAV HIGHLIGHT ON SCROLL
// ==========================================
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navBtns = document.querySelectorAll('.nav-links button');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navBtns.forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.section === entry.target.id) {
            btn.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// ==========================================
// AI CHAT FUNCTIONALITY
// ==========================================
const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');

function handleKeyPress(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendQuery();
  }
}

async function sendQuery() {
  const query = userInput.value.trim();
  if (!query) return;

  appendMessage('user', query);
  userInput.value = '';
  userInput.disabled = true;

  const loadingId = appendMessage('ai', '<div class="typing-indicator"><span></span><span></span><span></span></div>', true);

  try {
    const response = await callGeminiAPI(query);
    document.getElementById(loadingId)?.remove();
    typeWriter('ai', response);
  } catch (error) {
    console.error('Chat error:', error);
    document.getElementById(loadingId)?.remove();
    appendMessage('ai', "I'm having trouble connecting right now. Feel free to reach out directly at Jeramieshicks@gmail.com or call 269-500-1768.");
  }

  userInput.disabled = false;
  userInput.focus();
}

async function callGeminiAPI(userMessage) {
  // Check if API key is configured
  if (!CONFIG.GEMINI_API_KEY) {
    // Fallback to intelligent mock responses
    return getMockResponse(userMessage);
  }

  const url = `${CONFIG.API_ENDPOINT}/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `${SYSTEM_PROMPT}\n\nUser question: ${userMessage}\n\nProvide a helpful, professional response.`
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
        topP: 0.9
      }
    })
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "I'd be happy to discuss that. Could you rephrase your question?";
}

function getMockResponse(query) {
  const q = query.toLowerCase();

  // Context-aware responses
  if (q.includes('experience') || q.includes('background')) {
    return "I've spent 25 years in the trenches of entrepreneurship—from reselling and arbitrage to building AI systems. What sets me apart is that I've lived the business problems I now solve with technology. When I build an outreach automation system, it's because I've manually done thousands of cold calls and understand what actually converts.";
  }

  if (q.includes('neuruh') || q.includes('project')) {
    return "NEURUH is my flagship project—an autonomous B2B outreach swarm. Three specialized AI agents work in parallel: one scrapes and identifies leads, another enriches data via LinkedIn and company research, and the third drafts hyper-personalized outreach. The result? What used to take a team hours now happens in seconds, with 450+ qualified leads processed daily.";
  }

  if (q.includes('1st phorm') || q.includes('first phorm') || q.includes('fit') || q.includes('why')) {
    return "Honestly? 'Personal Excellence is the Ultimate Rebellion' isn't just a tagline to me—it's how I've operated my entire career. I've spent 25 years grinding in businesses where excuses don't pay bills. Now I build AI systems that embody that same mentality. I'm not just looking for a job; I'm looking for a mission that aligns with how I already live.";
  }

  if (q.includes('tech') || q.includes('stack') || q.includes('skill')) {
    return "My core stack is Python for AI/ML work—LangChain for agent orchestration, Pinecone for vector storage, FastAPI for backends. On the frontend, I work in React/Next.js with TypeScript. But honestly, the tool matters less than understanding WHY you're using it. My 25 years of business experience means I build systems that generate revenue, not just technically impressive demos.";
  }

  if (q.includes('weakness') || q.includes('improve') || q.includes('growth')) {
    return "Self-taught means I sometimes have gaps in traditional CS foundations—but that's also made me resourceful and constantly learning. I'm actively deepening my understanding of system design patterns and working through Kubernetes for better deployment workflows. I believe in honest self-assessment; it's how you actually grow.";
  }

  if (q.includes('hire') || q.includes('value') || q.includes('bring')) {
    return "What I bring is rare: decades of real business experience combined with cutting-edge AI engineering capabilities. I understand revenue, sales psychology, and what makes customers convert—because I've lived it. Then I can build the technical systems to scale that knowledge. Most engineers understand code; I understand code AND why the business needs it.";
  }

  // Default response
  return "Great question. I'd love to dive deeper into that. My background spans 25 years of entrepreneurship and hands-on AI engineering. Whether we're talking about my technical projects like NEURUH, my business philosophy, or how I can contribute to your team's mission—I'm happy to explore any direction. What specifically would be most valuable for you to understand?";
}

function appendMessage(sender, text, isLoading = false) {
  const div = document.createElement('div');
  const id = 'msg-' + Math.random().toString(36).substr(2, 9);
  div.id = id;
  div.className = sender === 'user' ? 'msg msg-user' : 'msg msg-ai';

  // Add entrance animation
  div.style.opacity = '0';
  div.style.transform = 'translateY(10px)';

  const label = sender === 'user' ? 'YOU' : 'JERAMIE_AI';
  div.innerHTML = `<div class="msg-sender">${label}</div>${text}`;

  chatOutput.appendChild(div);

  // Trigger animation
  requestAnimationFrame(() => {
    div.style.transition = 'all 0.3s ease';
    div.style.opacity = '1';
    div.style.transform = 'translateY(0)';
  });

  chatOutput.scrollTop = chatOutput.scrollHeight;
  return id;
}

function typeWriter(sender, text) {
  const div = document.createElement('div');
  div.className = 'msg msg-ai';
  div.style.opacity = '0';
  div.style.transform = 'translateY(10px)';
  div.innerHTML = '<div class="msg-sender">JERAMIE_AI</div><span class="type-text"></span><span class="cursor">|</span>';

  chatOutput.appendChild(div);

  // Animate in
  requestAnimationFrame(() => {
    div.style.transition = 'all 0.3s ease';
    div.style.opacity = '1';
    div.style.transform = 'translateY(0)';
  });

  const span = div.querySelector('.type-text');
  const cursor = div.querySelector('.cursor');
  let i = 0;

  function type() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
      chatOutput.scrollTop = chatOutput.scrollHeight;
      setTimeout(type, 15 + Math.random() * 15);
    } else {
      // Remove cursor after typing
      cursor.style.animation = 'none';
      setTimeout(() => cursor.remove(), 500);
    }
  }

  type();
}

// Add CSS for typing indicator and cursor
const style = document.createElement('style');
style.textContent = `
  .typing-indicator {
    display: flex;
    gap: 4px;
    padding: 4px 0;
  }
  .typing-indicator span {
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.6);
    border-radius: 50%;
    animation: typingBounce 1.4s infinite ease-in-out;
  }
  .typing-indicator span:nth-child(1) { animation-delay: 0s; }
  .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
  .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
  
  @keyframes typingBounce {
    0%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-6px); }
  }
  
  .cursor {
    animation: blink 1s infinite;
    font-weight: 300;
    margin-left: 2px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;
document.head.appendChild(style);
