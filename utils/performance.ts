// utils/performance.ts

// Lazy load images and components
export const lazyLoadImage = (imageSrc: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imageSrc;
  });
};

// Debounce function to limit the rate at which a function can fire
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(this: any, ...args: Parameters<T>): void {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function to ensure a function is called at most once per interval
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function throttledFunction(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Memoize function to cache results of expensive function calls
export const memoize = <T extends (...args: any[]) => any>(func: T): T => {
  const cache = new Map<string, ReturnType<T>>();
  return function (this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  } as T;
};

// Virtual scroll helper for large lists
export interface VirtualScrollOptions {
  itemHeight: number;
  containerHeight: number;
  itemCount: number;
}

export const getVisibleRange = (
  scrollTop: number,
  options: VirtualScrollOptions
): { start: number; end: number } => {
  const { itemHeight, containerHeight, itemCount } = options;
  const itemsPerScreen = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
  const endIndex = Math.min(itemCount - 1, startIndex + itemsPerScreen + 5); // buffer of 5 items

  return { start: startIndex, end: endIndex };
};

// Intersection Observer helper for lazy loading
export const observeVisibility = (
  element: Element,
  callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry, obs);
        }
      });
    },
    options || { threshold: 0.1 }
  );

  observer.observe(element);
  return observer;
};

// Cleanup function for observers
export const cleanupObserver = (observer: IntersectionObserver | null) => {
  if (observer) {
    observer.disconnect();
  }
};