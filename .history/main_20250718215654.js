import './style.css'
import { inView, animate, stagger } from 'motion'


const menuButton = document.querySelector('#menu-button')
const arrow = document.querySelector('#arrow')
const menuList = document.getElementById('menu-list');
const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");
const linkContainerLinks = document.querySelectorAll(".link-container li")
const linkContentInfoLinks = document.querySelectorAll(".link-content")




// Modern scroll progress bar
function updateScrollProgress() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = document.getElementById("myBar");
  if (progressBar) {
    progressBar.style.height = scrolled + "%";
  }
}

// Use modern event listener
window.addEventListener('scroll', updateScrollProgress, { passive: true });

menuButton.addEventListener('click', () => {
  const isVisible = menuList.classList.contains('show');
  
  if (isVisible) {
    // Hide menu
    menuList.classList.remove('show');
    arrow.classList.remove('rotated');
  } else {
    // Show menu
    menuList.classList.add('show');
    arrow.classList.add('rotated');
  }
})

document.addEventListener("DOMContentLoaded", function() {
  // Check if device supports touch (mobile/tablet)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Only initialize custom cursor on non-touch devices
  if (!isTouchDevice) {
    const cursor = document.querySelector(".custom-cursor");

    function handleMouseMove(e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    }

    function handleHover(e) {
      const isHovering = e.type === "mouseover";
      
      if (isHovering) {
        cursor.classList.add("clickable");
        cursor.classList.remove("hovered");
      } else {
        cursor.classList.remove("clickable");
        cursor.classList.remove("hovered");
      }
    }

    function handleTextHover(e) {
      const isHovering = e.type === "mouseover";
      
      if (isHovering) {
        cursor.classList.add("hovered");
        cursor.classList.remove("clickable");
      } else {
        cursor.classList.remove("hovered");
        cursor.classList.remove("clickable");
      }
    }

    // Add event listener for mousemove event
    document.addEventListener("mousemove", handleMouseMove);

    // For clickable elements (buttons, links, menu items)
    buttons.forEach(button => {
        button.addEventListener("mouseover", handleHover);
        button.addEventListener("mouseout", handleHover);
    });

    links.forEach(link => {
        link.addEventListener("mouseover", handleHover);
        link.addEventListener("mouseout", handleHover);
    });

    // For discipline menu items
    linkContainerLinks.forEach(item => {
        item.addEventListener("mouseover", handleHover);
        item.addEventListener("mouseout", handleHover);
    });

    // For text elements that should show small cursor
    const textElements = document.querySelectorAll('h1, h2, h3, h4, p');
    textElements.forEach(element => {
        element.addEventListener("mouseover", handleTextHover);
        element.addEventListener("mouseout", handleTextHover);
    });
  } else {
    // Hide custom cursor on touch devices
    const cursor = document.querySelector(".custom-cursor");
    if (cursor) cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
  }

  // GSAP Animations
  const bigText = document.querySelector('.big-hero-text');
  const mainContentSection = document.querySelector('.main-content');

  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContentSection,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        ease: 'power1.inOut'
      }
    });

    tl.to(bigText, {
      y: '-30%',
      opacity: 0.8
    });
  }
});


linkContainerLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    linkContentInfoLinks.forEach((content) => {
      content.classList.remove('active');
      content.classList.add('hidden');
    })
    link.classList.add('active');
    linkContentInfoLinks[index].classList.remove('hidden'); 
    linkContentInfoLinks[index].classList.add('active');
  })
})


//ANIMATION - MOTION 

// About section animations
inView('.about-grid .left-container', () => {
  animate('.about-grid .left-container h3', {
    opacity: [0, 1],
    translateX: [-50, 0]
  }, {
    duration: 0.8,
    delay: stagger(0.2)
  })
})

inView('.about-grid .right-container', () => {
  animate('.about-grid .right-container h2', {
    opacity: [0, 1],
    translateY: [50, 0]
  }, {
    duration: 1,
    delay: 0.3
  })
  
  animate('.about-grid .right-container h3', {
    opacity: [0, 1],
    translateY: [30, 0]
  }, {
    duration: 0.8,
    delay: 0.6
  })
  
  animate('.about-grid .right-container a', {
    opacity: [0, 1],
    translateY: [20, 0]
  }, {
    duration: 0.6,
    delay: 0.9
  })
})

// Disciplines section animations
inView('.main-grid .top-left-container', () => {
  animate('.main-grid .top-left-container h3', {
    opacity: [0, 1],
    translateX: [-50, 0]
  }, {
    duration: 0.8,
    delay: 0.2
  })
})

inView('.main-grid .top-right-container', () => {
  animate('.main-grid .top-right-container h4', {
    opacity: [0, 1],
    translateY: [30, 0]
  }, {
    duration: 1,
    delay: 0.3
  })
})

inView('.link-container', () => {
  animate('.link-container li', {
    opacity: [0, 1],
    translateX: [100, 0]
  }, {
    duration: 0.8,
    delay: stagger(0.15)
  })
})

inView('.bottom-left-container', () => {
  animate('.bottom-left-container .link-content.active img', {
    opacity: [0, 1],
    scale: [0.9, 1]
  }, {
    duration: 0.8,
    delay: 0.2
  })
  
  animate('.bottom-left-container .link-content.active p', {
    opacity: [0, 1],
    translateY: [20, 0]
  }, {
    duration: 0.6,
    delay: 0.5
  })
})

// Recent work animations
inView('.recent-work h2', () => {
  animate('.recent-work h2', {
    opacity: [0, 1],
    translateX: [-100, 0]
  }, {
    duration: 1,
    delay: 0.2,
  })
})

inView('.work-card', () => {
  animate('.work-card', {
    opacity: [0, 1],
    translateY: [100, 0]
  }, {
    duration: 1,
    delay: stagger(0.2)
   })
})

// Blog section animations
inView('.blog h2', () => {
  animate('.blog h2', {
    opacity: [0, 1],
    translateX: [100, 0]
  }, {
    duration: 1,
    delay: 0.2
  })
})

inView('.blog-card', () => {
  animate('.blog-card', {
    opacity: [0, 1],
    translateY: [80, 0]
  }, {
    duration: 0.8,
    delay: stagger(0.15)
  })
})

// Footer animation
inView('.footer-grid', () => {
  animate('.footer-grid .footer', {
    opacity: [0, 1],
    translateY: [-50, 0]
  }, {
    duration: 0.8,
    delay: stagger(0.1)
  })
})