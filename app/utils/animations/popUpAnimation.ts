import gsap from "gsap";

export function popupEnter(el: HTMLElement) {
  gsap.fromTo(
    el,
    { y: 1000, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    }
  );
}

export function popupLeave(
  el: HTMLElement,
  onComplete?: () => void
) {
  gsap.to(el, {
    y: 1000,
    opacity: 0,
    duration: 0.6,
    ease: "power2.in",
    onComplete,
  });
}
