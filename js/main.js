// Denshaj Enterprise Limited - shared interactions
(function(){
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  // mobile nav
  const btn=$('#navToggle'), nav=$('#mainNav');
  if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');});}
  // dropdowns (click + keyboard)
  $$('.has-drop > .dropbtn').forEach(b=>{
    b.addEventListener('click',(e)=>{e.stopPropagation();const li=b.parentElement;const was=li.classList.contains('open');$$('.has-drop.open').forEach(x=>x.classList.remove('open'));if(!was)li.classList.add('open');b.setAttribute('aria-expanded',String(!was));});
  });
  document.addEventListener('click',()=>$$('.has-drop.open').forEach(x=>x.classList.remove('open')));
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){$$('.has-drop.open').forEach(x=>x.classList.remove('open'));closeLightbox();}});
  // active nav
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  $$('#mainNav a').forEach(a=>{const h=(a.getAttribute('href')||'').toLowerCase();if(h===path||(path===''&&h==='index.html'))a.classList.add('active');});
  // back to top
  const top=$('#backTop');window.addEventListener('scroll',()=>{if(!top)return;top.classList.toggle('show',window.scrollY>600);},{passive:true});
  if(top)top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  // cookie consent
  const ck=$('#cookieBar');try{if(ck&&!localStorage.getItem('del-cookie'))ck.classList.add('show');}catch(e){if(ck)ck.classList.add('show');}
  const ok=$('#cookieOk');if(ok)ok.addEventListener('click',()=>{try{localStorage.setItem('del-cookie','1');}catch(e){}ck.classList.remove('show');});
  // gallery filters
  $$('[data-filter-btn]').forEach(b=>b.addEventListener('click',()=>{
    $$('[data-filter-btn]').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    const f=b.getAttribute('data-filter-btn');
    $$('[data-cat]').forEach(it=>{it.style.display=(f==='all'||it.getAttribute('data-cat')===f)?'':'none';});
  }));
  // lightbox
  const lb=$('#lightbox'), lbImg=$('#lightboxImg');
  function closeLightbox(){if(lb)lb.classList.remove('open');}
  window.closeLightbox=closeLightbox;
  if(lb)lb.addEventListener('click',closeLightbox);
  $$('[data-lightbox]').forEach(el=>el.addEventListener('click',(e)=>{e.preventDefault();const src=el.getAttribute('data-full')||el.querySelector('img')?.src;if(src&&lbImg){lbImg.src=src;lbImg.alt=el.querySelector('img')?.alt||'Denshaj site photograph enlarged';lb.classList.add('open');}}));
  // reveal on scroll (subtle)
  const io=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.style.opacity='1';en.target.style.transform='none';io.unobserve(en.target);}}),{threshold:.12}):null;
  $$('[data-reveal]').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(14px)';el.style.transition='opacity .5s ease,transform .5s ease';if(io)io.observe(el);else{el.style.opacity='1';el.style.transform='none';}});
  // forms: front-end validation + direct email draft to Denshaj team
  $$('form[data-enquiry]').forEach(f=>{
    f.addEventListener('submit',(e)=>{
      e.preventDefault();
      const fd=new FormData(f);let errs=[];
      const need=['name','phone','message'];
      need.forEach(n=>{const v=(fd.get(n)||'').toString().trim();if(!v)errs.push(n+' is required.');});
      const email=(fd.get('email')||'').toString().trim();
      if(email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))errs.push('Enter a valid email address.');
      const box=$('#formMsg',f)||document.createElement('div');
      box.id='formMsg';box.setAttribute('role','status');
      if(errs.length){box.className='error';box.innerHTML=errs.map(x=>'<div>'+x.replace(/</g,'&lt;')+'</div>').join('');f.appendChild(box);return;}
      // Direct to team: build enquiry email addressed to Denshaj
      const subject=encodeURIComponent('Project enquiry from website: '+(fd.get('name')||''));
      const body=encodeURIComponent('Name: '+fd.get('name')+'\nPhone: '+fd.get('phone')+'\nEmail: '+email+'\nService: '+(fd.get('service')||'-')+'\n\nMessage:\n'+fd.get('message')+'\n\n— Sent from Denshaj website enquiry form.');
      box.className='success';
      box.innerHTML='Thanks — your enquiry is ready. Click <a href="mailto:denshajenterprise@gmail.com?subject='+subject+'&body='+body+'">Send via your email app to denshajenterprise@gmail.com</a> or call <a href="tel:+254702735769">+254 702 735 769</a> — we reply with a quotation within 48 hours.';
      f.appendChild(box);
    });
  });
  // year
  $$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  // floating WhatsApp + AI assistant (auto-inject on every page)
  if(!$('#waFloat')){
    const wa=document.createElement('a');
    wa.id='waFloat';wa.className='wa-float';wa.href='https://wa.me/254702735769?text='+encodeURIComponent('Hello Denshaj! I would like a quotation for my project.');
    wa.target='_blank';wa.rel='noopener';wa.setAttribute('aria-label','Chat with Denshaj on WhatsApp');
    wa.innerHTML='<span class="wa-pulse" aria-hidden="true"></span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 2 6.5L4 29l7.7-2c1.8 1 3.9 1.5 4.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.5c-1.3 0-2.6-.3-3.7-1l-.3-.2-4.6 1.2 1.2-4.5-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1C7.2 10.3 10.7 6.5 16 6.5S24.8 10.3 24.8 15 21.3 24.5 16 24.5zm4.6-6.9c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L14.5 9c-.1-.3-.4-.3-.6-.3h-.5c-.2 0-.5.2-.7.5-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.9 4.5 3.9 1.7.7 2.3.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.5-.3z"/></svg>';
    document.body.appendChild(wa);
  }
  if(!$('#aiFloat')){
    const wrap=document.createElement('div');wrap.id='aiFloat';wrap.className='ai-float';
    wrap.innerHTML='<div class="ai-panel" id="aiPanel" role="dialog" aria-label="Denshaj AI assistant"><div class="ai-head"><span class="ai-dot"></span><div><strong>Denshaj AI Assistant</strong><small>Online · replies instantly</small></div></div><div class="ai-body" id="aiBody"></div><div class="ai-quick" id="aiQuick"></div><div class="ai-input"><input id="aiText" type="text" placeholder="Ask about services, projects…" aria-label="Ask the assistant"><button class="btn btn-dark" id="aiSend" style="padding:10px 14px">Send</button></div></div><button class="ai-btn" id="aiBtn" aria-label="Open AI assistant" aria-expanded="false">✨</button>';
    document.body.appendChild(wrap);
    const panel=$('#aiPanel',wrap),btn=$('#aiBtn',wrap),body=$('#aiBody',wrap),quick=$('#aiQuick',wrap),input=$('#aiText',wrap);
    const WA='https://wa.me/254702735769';
    function addMsg(t,who){const d=document.createElement('div');d.className='ai-msg ai-'+who;d.innerHTML=t;body.appendChild(d);body.scrollTop=body.scrollHeight;}
    function answer(q){
      q=(q||'').toLowerCase();
      if(/quote|price|cost|boq|48/.test(q))return 'Great choice! Send your BOQ, drawings or pin-location and we quote <strong>within 48 hours</strong>. Call <a href="tel:+254702735769">+254 702 735 769</a> or <a href="contact.html#quote">request a quote →</a>';
      if(/service|offer|do you do/.test(q))return 'We deliver <strong>building construction</strong> (villas, apartments, offices, warehouses, schools, hospitals), <strong>civil works</strong> (roads, drainage, retaining walls, water & sewer) and <strong>bulk materials</strong> plus excavation, structural & MEP. See <a href="services.html">services →</a>';
      if(/project|pipeline|portfolio|stall/.test(q))return 'Signature build: <strong>Pipeline Onestop Shop — 36 retail stalls</strong>, gated entrance, cabro walkway, toilets + rooftop tanks. <a href="project-pipeline.html">View detail →</a>';
      if(/material|supply|ballast|sand|murram|cement|steel|concrete/.test(q))return 'Daily capacity: <strong>1,200t ballast · 900t sand · 800t murram · 480m³ ready-mix · 2,000 cement bags · 150t steel</strong>. Same-day Nairobi metro, 24-hr up-country. <a href="supply.html">Supply →</a>';
      if(/fleet|equipment|tipper|excavator|plant/.test(q))return 'Own fleet: <strong>18 tippers · 6 mixers · batching plant 60m³/hr · 3 excavators · rollers · grader</strong>, GPS-tracked. <a href="fleet.html">Fleet →</a>';
      if(/contact|phone|email|location|address|where/.test(q))return 'We are in <strong>Eldoret — Off Uganda Rd, Oloo St</strong>. Call <a href="tel:+254702735769">+254 702 735 769</a> / <a href="tel:+254707135624">+254 707 135 624</a> or <a href="mailto:denshajenterprise@gmail.com">denshajenterprise@gmail.com</a>. <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp us →</a>';
      if(/hello|hi|hey|jambo|habari/.test(q))return 'Jambo! Welcome to <strong>Denshaj — Tested · Trusted · For Better</strong>. Ask me about services, projects, supply or getting a 48-hour quote.';
      if(/who|about|company|denshaj/.test(q))return '<strong>Denshaj Enterprise Ltd</strong> is 100% Kenyan-owned, founded 2024 — building construction, civil engineering & materials supply under one accountable partner. <a href="about.html">About us →</a>';
      return 'I can help with <strong>services, projects, materials, fleet or quotes</strong>. For a fast human reply, <a href="'+WA+'" target="_blank" rel="noopener">chat on WhatsApp →</a> or call <a href="tel:+254702735769">+254 702 735 769</a>.';
    }
    function ask(t){if(!t.trim())return;addMsg(t.replace(/</g,'&lt;'),'user');setTimeout(()=>addMsg(answer(t),'bot'),350);input.value='';}
    btn.addEventListener('click',()=>{const o=panel.classList.toggle('open');btn.setAttribute('aria-expanded',String(o));btn.textContent=o?'✕':'✨';if(o&&!body.children.length){addMsg('Jambo! I\'m the <strong>Denshaj AI assistant</strong>. Ask about our builds, materials or 48-hour quotes — or tap below.','bot');}});
    ['Get a 48h quote','Our services','Pipeline project','Talk on WhatsApp'].forEach(q=>{const b=document.createElement('button');b.textContent=q;b.addEventListener('click',()=>{if(/whatsapp/i.test(q)){window.open(WA,'_blank','noopener');}else ask(q);});quick.appendChild(b);});
    $('#aiSend',wrap).addEventListener('click',()=>ask(input.value));
    input.addEventListener('keydown',(e)=>{if(e.key==='Enter')ask(input.value);});
  }
})();
