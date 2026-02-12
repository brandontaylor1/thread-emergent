import './style.css'
import { inView, animate, stagger } from 'motion'


const menuButton = document.querySelector('#menu-button')
const arrow = document.querySelector('#arrow')
const menuList = document.getElementById('menu-list');
const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");
const linkContainerLinks = document.querySelectorAll(".link-container li")
const linkContentInfoLinks = document.querySelectorAll(".link-content")




window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

menuButton.addEventListener('click', () => {
  menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
})

document.addEventListener("DOMContentLoaded", function() {
  const cursor = document.querySelector(".custom-cursor");

  function handleMouseMove(e) {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
  }

  function handleHover(e) {
    cursor.classList.toggle("hovered", e.type === "mouseover");
}
  // Add event listener for mousemove event
  document.addEventListener("mousemove", handleMouseMove);

  buttons.forEach(button => {
      button.addEventListener("mouseover", handleHover);
      button.addEventListener("mouseout", handleHover);
  });

  links.forEach(link => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseout", handleHover);
  });
});


linkContainerLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    linkContentInfoLinks.forEach((link) => {
      link.classList.remove('active');
    })
    link.classList.add('active');
    linkContentInfoLinks.forEach((content) => {
      content.classList.add('hidden');
    })
    linkContentInfoLinks[index].classList.remove('hidden'); 
  })
})

document.addEventListener('DOMContentLoaded', function() {
  // Get references to the big text container and the main-content section
  const bigText = document.querySelector('.big-hero-text');
  const mainContentSection = document.querySelector('.main-content');

  // Create a GSAP animation timeline
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mainContentSection, // The main-content section triggers the animation
      start: 'top bottom', // Start the animation when the top of the trigger element hits the top of the viewport
      end: 'bottom bottom', // End the animation when the bottom of the trigger element hits the bottom of the viewport
      scrub: 0.5,
      ease: 'power1.inOut' // Smoothly animate the changes based on scroll position
    }
  });

  // Add animation to the big text container
  tl.to(bigText, {
    y: '-30%', // Move the big text container up by 20% of its height
    opacity: 0.8 // Reduce opacity to 0.8
  });
});


//ANIMATION - MOTION 

inView('.recent-work h2', () => {
  animate('.recent-work h2', {
    opacity: [0, 1],
    translateX: [-100, 0]
  }, {
    duration: 1,
    delay: 1,
  })

  inView('.work-card', () => {
    animate('.work-card', {
      opacity: [0, 1],
      translateY: [100, 0]
    }, {
      duration: 1,
      delay: stagger(1)
     })
    })
})

inView('.footer-grid', () => {
  animate('.footer-grid', {
    opacity: [0, 1],
    translateY: [-200, 0]
  }, {
    duration: 1,
    delay: 1
  })
})