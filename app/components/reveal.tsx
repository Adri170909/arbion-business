"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as: "section" | "article" | "div";
  className?: string;
  id?: string;
  delay?: number;
  children: ReactNode;
};

export default function Reveal({ as, className = "", delay = 0, children, id }: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    document.documentElement.classList.add("has-scroll-reveal");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return createElement(as, {
    ref: elementRef,
    id,
    className: `reveal ${className}`.trim(),
    "data-reveal": "",
    style,
  }, children);
}
