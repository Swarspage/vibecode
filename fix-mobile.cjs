const fs = require('fs');
const path = require('path');

const dir = 'public/previews';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const mediaQueries = `
    /* INJECTED MOBILE STYLES */
    @media (max-width: 768px) {
      /* Typography */
      h1, .hero-title, .hero-headline, .hero h1 { font-size: clamp(2.5rem, 8vw, 4rem) !important; line-height: 1.1 !important; }
      h2, .section-title, .ed-heading, .title-large { font-size: clamp(2rem, 6vw, 3rem) !important; line-height: 1.2 !important; }
      h3 { font-size: clamp(1.5rem, 5vw, 2rem) !important; }

      /* Grids & Layouts */
      .grid, .features-grid, .stats-grid, .ed-grid, .demo-grid, .pricing-grid, [class*="-grid"] { 
        grid-template-columns: 1fr !important; gap: 24px !important; 
      }
      .hero, .hero-section { display: flex !important; flex-direction: column !important; }
      .feature-card, .stat-panel, .stat-item, .card { width: 100% !important; border-right: none !important; }
      
      /* Width and Overflow */
      body, html { overflow-x: hidden !important; width: 100%; }
      .container, header, footer { padding-left: 20px !important; padding-right: 20px !important; width: 100% !important; max-width: 100% !important; box-sizing: border-box; }
      
      /* Decorative */
      .hero-bg-text, .blur-shape, .bg-shape, .decorative-shape, .hero-graphic, .bg-element { display: none !important; }
      
      /* Images */
      img, iframe, video { max-width: 100% !important; height: auto !important; }

      /* Touch Targets */
      button, .btn, a.btn, .btn-primary, .btn-outline, .btn-filled, .btn-tonal, .btn-text-primary, nav a {
        min-height: 44px !important; 
      }
      .hero-ctas, .cta-group { display: flex !important; flex-direction: column !important; width: 100%; gap: 16px !important; align-items: stretch !important; }
      .hero-ctas a, .hero-ctas button, .cta-group a, .cta-group button { width: 100% !important; text-align: center; justify-content: center; display: inline-flex; }
      
      /* Specific fixes */
      .final-cta, .cta-section { padding: 80px 20px !important; }
      footer { display: flex !important; flex-direction: column !important; text-align: center; gap: 16px !important; padding: 32px 20px !important; }
    }

    @media (max-width: 480px) {
      h1, .hero-headline, .hero h1 { font-size: clamp(2rem, 8vw, 2.5rem) !important; }
      .container, header, footer { padding-left: 16px !important; padding-right: 16px !important; }
    }
`;

const navFixScript = `
  <!-- Injected Mobile Nav Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const header = document.querySelector('header');
      const nav = document.querySelector('header nav');
      const hasToggle = document.querySelector('.menu-toggle, #mobile-menu-checkbox, .mobile-menu-btn, .nav-toggle');
      
      if (header && nav && !hasToggle) {
        // Create hamburger button
        const btn = document.createElement('button');
        btn.innerHTML = '&#9776;';
        btn.style.cssText = 'display: none; background: transparent; border: none; font-size: 24px; cursor: pointer; color: inherit; padding: 8px; min-height: 44px; min-width: 44px; z-index: 1000; align-items: center; justify-content: center;';
        btn.className = 'injected-mobile-toggle';
        
        header.insertBefore(btn, nav);
        
        const style = document.createElement('style');
        style.textContent = \`
          @media (max-width: 768px) {
            .injected-mobile-toggle { display: flex !important; }
            header nav {
              position: absolute; top: 100%; left: 0; right: 0;
              background: var(--bg, #fff);
              flex-direction: column; padding: 20px;
              border-bottom: 1px solid var(--border, #eee);
              display: none !important; width: 100%; z-index: 999;
            }
            header nav.is-open { display: flex !important; }
            header nav ul { flex-direction: column; gap: 16px; width: 100%; display: flex; }
            header nav a { padding: 12px; display: block; min-height: 44px; text-align: left; }
            header { position: relative; flex-wrap: wrap; }
          }
        \`;
        document.head.appendChild(style);
        
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          nav.classList.toggle('is-open');
        });
      }
    });
  </script>
`;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (!content.includes('<meta name="viewport"')) {
    content = content.replace('<head>', '<head>\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    changed = true;
  }

  if (!content.includes('/* INJECTED MOBILE STYLES */')) {
    if (content.includes('</style>')) {
      content = content.replace('</style>', mediaQueries + '\\n  </style>');
      changed = true;
    }
  }

  if (!content.includes('<!-- Injected Mobile Nav Script -->')) {
    if (content.includes('</body>')) {
      content = content.replace('</body>', navFixScript + '\\n</body>');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  }
}
