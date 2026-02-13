// hooks/useGSAPAnimation.ts
import { useEffect, useRef } from 'react';
import { animateOnScroll, staggeredList, animateTextSplit, fadeIn } from '@/utils/gsapAnimations';

const useGSAPAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Animation for single element on scroll
  const animateElementOnScroll = (triggerElement?: HTMLElement) => {
    useEffect(() => {
      if (elementRef.current) {
        animateOnScroll(elementRef.current, triggerElement);
      }
    }, []);
  };

  // Staggered animation for list items
  const animateStaggeredList = (selector: string) => {
    useEffect(() => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(selector) as NodeListOf<HTMLElement>;
        staggeredList(Array.from(elements));
      }
    }, []);
  };

  // Text split and animate
  const animateText = () => {
    useEffect(() => {
      if (elementRef.current) {
        animateTextSplit(elementRef.current);
      }
    }, []);
  };

  // Fade in animation
  const animateFadeIn = () => {
    useEffect(() => {
      if (elementRef.current) {
        fadeIn(elementRef.current);
      }
    }, []);
  };

  return {
    elementRef,
    containerRef,
    animateElementOnScroll,
    animateStaggeredList,
    animateText,
    animateFadeIn
  };
};

export default useGSAPAnimation;