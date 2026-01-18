import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;

  const tl = gsap.timeline({
    repeat: options?.loop ? -1 : 0,
    scrollTrigger: options?.scrollTrigger
      ? {
          trigger: options.trigger || el,
          start: "top 80%",
        }
      : undefined,
  });

  texts.forEach((text) => {
    tl
      // set teks di bawah (hidden)
      .set(el, {
        textContent: text,
        yPercent: 100,
        opacity: 0,
      })

      // masuk dari bawah
      .to(el, {
        yPercent: 0,
        opacity: 1,
        duration: options?.duration || 0.5,
        ease: "power2.out",
      })

      // tahan sebentar
      .to({}, { duration: options?.delay || 1 })

      // keluar ke atas
      .to(el, {
        yPercent: -100,
        opacity: 0,
        duration: options?.duration || 0.4,
        ease: "power2.in",
      });
  });

  return tl;
}
