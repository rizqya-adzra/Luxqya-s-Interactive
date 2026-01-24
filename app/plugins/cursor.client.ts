export default defineNuxtPlugin(() => {
  if (process.server) return;

  const container = document.createElement("div");
  Object.assign(container.style, {
    position: "fixed",
    inset: "0",
    pointerEvents: "none",
    zIndex: "999999",
  });
  document.body.appendChild(container);

  function createSlash(x: number, y: number) {
    const wrap = document.createElement("div");
    Object.assign(wrap.style, {
      position: "absolute",
      left: `${x}px`,
      top: `${y - 30}px`,
      width: "40px",
      height: "30px",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    });

    const offsets = [-40, -10, 20];
    const angles = [-45, -10, 25];

    offsets.forEach((offset, i) => {
      const line = document.createElement("div");
      Object.assign(line.style, {
        position: "absolute",
        left: `calc(50% + ${offset}px)`,
        top: "0",
        width: "5px",
        height: "35px",
        background: "#84cc16", 
        borderRadius: "4px",
        transform: `translateX(-50%) rotate(${angles[i]}deg) scaleY(0)`,
        opacity: "0",
        transition:
          "transform .10s cubic-bezier(.0,0.5,.10,1), opacity .20s ease",
      });

      wrap.appendChild(line);

      requestAnimationFrame(() => {
        line.style.opacity = "1";
        line.style.transform = `translateX(-50%) rotate(${angles[i]}deg) scaleY(1)`;
      });

      setTimeout(() => {
        line.style.transform = `translateX(-50%) rotate(${angles[i]}deg) translateY(-10px) scaleY(0.4)`;
        line.style.opacity = "0";
      }, 230);
    });

    container.appendChild(wrap);

    setTimeout(() => wrap.remove(), 550);
  }

  window.addEventListener("click", (e) => {
    createSlash(e.clientX, e.clientY);
  });
});