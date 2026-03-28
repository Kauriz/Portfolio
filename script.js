document.addEventListener("DOMContentLoaded", function () {

  const isTouchDevice = isMobile(); 
  const blocks = document.querySelectorAll('.block');

  blocks.forEach(block => {
    const id = block.dataset.projetId;

    if (isTouchDevice) {
      block.addEventListener('click', () => {
        block.classList.toggle('visible');
        block.classList.contains('visible') ? rendreVisible(id) : rendreInvisible(id);
      });
    } else {
      block.addEventListener('mouseover', () => rendreVisible(id));
      block.addEventListener('mouseout', () => rendreInvisible(id));
    }
  });
});



function isMobile() {
  return window.matchMedia("(pointer: coarse)").matches;
}



function rendreVisible(idEtiquette) {
    document.getElementById("animation" + idEtiquette).style.display = "flex";
}

function rendreInvisible(idEtiquette) {
    document.getElementById("animation" + idEtiquette).style.display = "none";
}

function developperMenu() {
    if (document.getElementById("sidebar").style.width == 250) {
        document.getElementById("sidebar").style.width = 30;
        document.querySelector("aside h3").style.display = "none";
        const a = document.querySelector("aside a");
        a.style.display = "none";
    }
    else {
        document.getElementById("sidebar").style.width = 250;
        document.querySelector("aside h3").style.display = "block";
        const a = document.querySelector("aside a");
        a.style.display = "block";
    }
}

let zoomer = false;
let currentZoom = 1;

function zoomPage(id) {
  if (!isMobile())
  {
    let steps = 150;
    let delay = 7;
    let posX, posY;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const baseWidth = 1920;
    const baseHeight = 1080;

    const ratioW = vw / baseWidth;
    const ratioH = vh / baseHeight;

    let targetZoom = 3 * Math.min(ratioW, ratioH);
    if (targetZoom < 1) {
      targetZoom = 1;
    }

    switch (id) {
      case 4:
        posX = vw * 0.83;
        posY = vh * 0.25;
        break;
      case 3:
        posX = vw * 0.83;
        posY = vh * 0.87;
        break;
      case 2:
        posX = vw * 0.08;
        posY = vh * 0.20;
        break;
      case 1:
        posX = vw * 0.095;
        posY = vh * 0.87;
        break;
      default:
        posX = 0;
        posY = 0;
        break;
    }

    if (!zoomer) {
      let zoom = 1;
      const increment = (targetZoom - zoom) / steps;

      for (let i = 0; i < steps; i++) {
        setTimeout(() => {
          zoom += increment;
          document.body.style.transform = `scale(${zoom.toFixed(3)})`;
          document.body.style.transformOrigin = `${posX}px ${posY}px`;
          
          // ✅ Mettre à jour currentZoom à chaque étape
          currentZoom = zoom;
        }, i * delay);
      }
      
      // ✅ S'assurer que la valeur finale est exacte
      setTimeout(() => {
        currentZoom = targetZoom;
        document.body.style.transform = `scale(${targetZoom})`;
      }, steps * delay);

      zoomer = true;

      const btn = document.getElementById("boutonRetour" + id);
      setTimeout(() => {
        btn.style.display = "block";
      }, steps * delay);

      const panel = document.getElementById("panel" + id);
      panel.classList.remove('panelA');
      panel.classList.add('panelB');
    }
  }
}

function dezoomPage(id) {
  let steps = 150;
  let delay = 7;

  if (!isMobile())
  {
    if (zoomer) {
      // ✅ Utiliser currentZoom comme point de départ
      let zoom = currentZoom;
      const decrement = (currentZoom - 1) / steps;

      for (let i = 0; i < steps; i++) {
        setTimeout(() => {
          zoom -= decrement;
          document.body.style.transform = `scale(${zoom.toFixed(3)})`;
        }, i * delay);
      }

      // ✅ S'assurer de finir exactement à scale(1)
      setTimeout(() => {
        document.body.style.transform = 'scale(1)';
        currentZoom = 1;
        zoomer = false;
      }, steps * delay);

      const btn = document.getElementById("boutonRetour" + id);
      btn.style.display = "none";

      const panel = document.getElementById("panel" + id);
      panel.classList.replace('panelB', 'panelA');
    }
  }
}

