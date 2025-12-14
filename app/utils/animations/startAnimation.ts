import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export function textSwapAnimation(
  selector: string,
  texts: string[],
  options?: {
    duration?: number;
    delay?: number;
    loop?: boolean;
    scrollTrigger?: boolean;
    trigger?: string;
  }
) {
  const el = document.querySelector(selector);
  if (!el) return;

  const tl = gsap.timeline({
    repeat: options?.loop ? -1 : 0,
    repeatDelay: 0,
    scrollTrigger: options?.scrollTrigger
      ? {
          trigger: options.trigger || el,
          start: "top 10%",
        }
      : undefined,
  });

  texts.forEach((text) => {
    tl.to(el, {
      text: text,
      duration: options?.duration || 1,
      ease: "none",
    }).to({}, { duration: options?.delay || 0.8 });
  });

  return tl;
}
