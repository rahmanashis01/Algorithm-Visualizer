// Custom animations and effects for Algorithm Visualizer

// Cursor Trail Effect
let cursorTrails = [];

function createCursorTrail(e) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
  document.body.appendChild(trail);
  
  // Remove trail after animation
  setTimeout(() => {
    if (trail.parentNode) {
      trail.parentNode.removeChild(trail);
    }
  }, 600);
}

// Create floating background elements
function createFloatingElements() {
  const container = document.createElement('div');
  container.className = 'particles-container';
  document.body.appendChild(container);
  
  // Create floating shapes
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const shapes = ['floating-circle', 'floating-square', 'floating-triangle'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      
      const element = document.createElement('div');
      element.className = `floating-bg ${randomShape}`;
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(element);
    }, i * 1000);
  }
}

// Create floating particles
function createParticles() {
  const container = document.querySelector('.particles-container') || document.createElement('div');
  if (!container.parentNode) {
    container.className = 'particles-container';
    document.body.appendChild(container);
  }
  
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 15000);
    }, i * 500);
  }
}

// Add hover effects to cards
function addCardEffects() {
  const cards = document.querySelectorAll('[class*="card"], [class*="Card"]');
  cards.forEach(card => {
    if (!card.classList.contains('card-hover-effect')) {
      card.classList.add('card-hover-effect', 'pulse-hover');
    }
  });
}

// Add gradient text effect to main title
function addGradientText() {
  const mainTitle = document.querySelector('h1');
  if (mainTitle && !mainTitle.classList.contains('gradient-text')) {
    mainTitle.classList.add('gradient-text');
  }
}

// Add floating animation to images
function addFloatingToImages() {
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    const animations = ['float-animation', 'float-reverse', 'float-slow', 'float-fast'];
    const randomAnimation = animations[index % animations.length];
    if (!img.classList.contains('float-animation')) {
      img.classList.add(randomAnimation);
    }
  });
}

// Initialize all animations
function initializeAnimations() {
  // Add cursor trail effect
  let isTrailActive = false;
  document.addEventListener('mousemove', (e) => {
    if (!isTrailActive) {
      isTrailActive = true;
      createCursorTrail(e);
      setTimeout(() => {
        isTrailActive = false;
      }, 50); // Throttle trail creation
    }
  });
  
  // Create background elements
  createFloatingElements();
  
  // Create particles periodically
  createParticles();
  setInterval(createParticles, 15000); // Add new particles every 15 seconds
  
  // Add effects to existing elements
  setTimeout(() => {
    addCardEffects();
    addGradientText();
    addFloatingToImages();
  }, 100);
  
  // Re-apply effects when new content loads
  const observer = new MutationObserver(() => {
    addCardEffects();
    addFloatingToImages();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Start animations when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
  initializeAnimations();
}

// Export for use in components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeAnimations,
    createCursorTrail,
    createFloatingElements,
    createParticles
  };
}
