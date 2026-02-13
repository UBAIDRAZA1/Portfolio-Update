// utils/gsapAnimations.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in animation
export const fadeIn = (element: HTMLElement, duration: number = 1) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration, ease: 'power3.out' }
  );
};

// Slide in from left
export const slideInFromLeft = (element: HTMLElement, duration: number = 1) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration, ease: 'power3.out' }
  );
};

// Slide in from right
export const slideInFromRight = (element: HTMLElement, duration: number = 1) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration, ease: 'power3.out' }
  );
};

// Staggered animation for multiple elements
export const staggeredList = (elements: HTMLElement[], duration: number = 0.5, stagger: number = 0.1) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration, 
      stagger, 
      ease: 'power3.out' 
    }
  );
};

// Scroll-triggered animation
export const animateOnScroll = (element: HTMLElement, triggerElement?: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: triggerElement || element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Text split and animate
export const animateTextSplit = (element: HTMLElement) => {
  const text = element.textContent || '';
  element.innerHTML = text.replace(/\S/g, "<span class='inline-block'>$&</span>");
  
  const spans = element.querySelectorAll('span');
  gsap.fromTo(
    spans,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power3.out',
    }
  );
};

// Progress bar animation
export const animateProgressBar = (element: HTMLElement, targetWidth: number) => {
  gsap.to(element, {
    width: `${targetWidth}%`,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};