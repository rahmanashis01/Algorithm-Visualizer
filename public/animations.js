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
  
  // Create multiple sets of floating shapes
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const shapes = ['floating-circle', 'floating-square', 'floating-triangle'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      
      const element = document.createElement('div');
      element.className = `floating-bg ${randomShape}`;
      
      // Random starting positions
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 5 + 's';
      element.style.animationDuration = (Math.random() * 10 + 15) + 's';
      
      container.appendChild(element);
      
      // Remove element after animation completes and create a new one
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
        // Create a new shape to replace it
        createSingleFloatingElement(container);
      }, (15 + Math.random() * 10) * 1000);
    }, i * 2000);
  }
}

// Create individual floating element
function createSingleFloatingElement(container) {
  const shapes = ['floating-circle', 'floating-square', 'floating-triangle'];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  
  const element = document.createElement('div');
  element.className = `floating-bg ${randomShape}`;
  
  // Random starting positions
  element.style.left = Math.random() * 100 + '%';
  element.style.top = Math.random() * 100 + '%';
  element.style.animationDelay = Math.random() * 2 + 's';
  element.style.animationDuration = (Math.random() * 10 + 15) + 's';
  
  container.appendChild(element);
  
  // Remove and recreate after animation
  setTimeout(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    createSingleFloatingElement(container);
  }, (15 + Math.random() * 10) * 1000);
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

// Add hover effects to cards and glassmorphism
function addCardEffects() {
  const cards = document.querySelectorAll('[class*="card"], [class*="Card"]');
  cards.forEach(card => {
    if (!card.classList.contains('card-hover-effect')) {
      card.classList.add('card-hover-effect', 'pulse-hover', 'algorithm-card-glass');
    }
  });
}

// Add animated background
function addAnimatedBackground() {
  const body = document.body;
  const mainDiv = document.querySelector('.min-h-screen');
  
  if (mainDiv && !mainDiv.classList.contains('animated-background')) {
    mainDiv.classList.add('animated-background', 'dots-background', 'geometric-background');
  }
  
  // Add dark blue body background for glassmorphism effect
  if (!body.classList.contains('animated-background')) {
    body.style.background = 'linear-gradient(-45deg, #1e3a8a, #1e40af, #2563eb, #3b82f6, #1d4ed8, #2563eb)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'backgroundShift 20s ease infinite';
  }
}

// Add gradient text effect to main title and developer name
function addGradientText() {
  const mainTitle = document.querySelector('h1');
  if (mainTitle && !mainTitle.classList.contains('gradient-text')) {
    mainTitle.classList.add('gradient-text');
  }
  
  // Add gradient to developer name
  const developerName = document.querySelector('h2');
  if (developerName && developerName.textContent.includes('Ashis Rahman')) {
    developerName.classList.add('developer-name-gradient');
  }
}

// Add colors to algorithm content
function addAlgorithmColors() {
  // Color algorithm card titles
  const algorithmTitles = document.querySelectorAll('[class*="CardTitle"], [class*="card"] h3, [class*="card"] h2');
  algorithmTitles.forEach(title => {
    if (!title.classList.contains('algorithm-title')) {
      title.classList.add('algorithm-title');
    }
  });
  
  // Color algorithm descriptions
  const algorithmDescriptions = document.querySelectorAll('[class*="CardContent"] p, [class*="card"] p');
  algorithmDescriptions.forEach(desc => {
    if (!desc.classList.contains('algorithm-description')) {
      desc.classList.add('algorithm-description');
    }
  });
}

// Add floating animation to images (excluding developer image)
function addFloatingToImages() {
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    // Skip developer image
    if (img.alt === 'Ashis Rahman' || img.src.includes('developer_image')) {
      img.classList.add('developer-image');
      // Remove any existing floating classes
      img.classList.remove('float-animation', 'float-reverse', 'float-slow', 'float-fast');
      return;
    }
    
    const animations = ['float-animation', 'float-reverse', 'float-slow', 'float-fast'];
    const randomAnimation = animations[index % animations.length];
    if (!img.classList.contains('float-animation') && !img.classList.contains('developer-image')) {
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
  
  // Continuously create new floating elements
  setInterval(() => {
    const container = document.querySelector('.particles-container');
    if (container) {
      createSingleFloatingElement(container);
    }
  }, 8000); // Create new shape every 8 seconds
  
  // Create particles periodically
  createParticles();
  setInterval(createParticles, 15000); // Add new particles every 15 seconds
  
  // Add effects to existing elements
  setTimeout(() => {
    addAnimatedBackground();
    addCardEffects();
    addGradientText();
    addFloatingToImages();
    addAlgorithmColors();
  }, 100);
  
  // Re-apply effects when new content loads
  const observer = new MutationObserver(() => {
    addCardEffects();
    addFloatingToImages();
    addAlgorithmColors();
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
