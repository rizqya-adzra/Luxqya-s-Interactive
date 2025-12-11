export default defineNuxtPlugin(() => {
  if (process.server) return;

  const pawContainer = document.createElement("div");
  Object.assign(pawContainer.style, {
    position: "fixed",
    inset: "0",
    pointerEvents: "none",
    zIndex: "999999",
  });
  document.body.appendChild(pawContainer);

  function getBackgroundColorAtPoint(x: number, y: number) {
    const el = document.elementFromPoint(x, y) as HTMLElement;
    if (!el) return null;

    const styles = window.getComputedStyle(el);
    let bg = styles.backgroundColor;

    if (bg === "rgba(0, 0, 0, 0)" || bg === "transparent") {
      return "rgb(255,255,255)";
    }

    return bg;
  }

  function createPaw(x: number, y: number) {
    const img = document.createElement("img");
    img.src = pawImage;

    const bgColor = getBackgroundColorAtPoint(x, y);

    const angle = Math.random() * 60 - 30;

    Object.assign(img.style, {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      width: "70px",
      pointerEvents: "none",
      opacity: "0",
      transform: `translate(-50%, -50%) scale(0.3) rotate(${angle}deg)`,

      filter: `drop-shadow(0 0 6px ${bgColor}) drop-shadow(0 0 12px ${bgColor})`,
      mixBlendMode: "screen",

      transition:
        "transform 0.35s cubic-bezier(.2,1.4,.4,1), opacity 0.4s ease-out",
    });

    pawContainer.appendChild(img);

    requestAnimationFrame(() => {
      img.style.opacity = "1";
      img.style.transform = `translate(-50%, -60%) scale(1) rotate(${angle}deg)`;
    });

    setTimeout(() => {
      const exitAngle = angle + (Math.random() * 40 - 20);
      img.style.transform = `translate(-50%, -80%) scale(0.8) rotate(${exitAngle}deg)`;
      img.style.opacity = "0";
    }, 300);

    setTimeout(() => img.remove(), 650);
  }

  window.addEventListener("click", (e) => {
    createPaw(e.clientX, e.clientY);
  });
});

const pawImage = new URL("~/assets/effects/paw.png", import.meta.url).href;
