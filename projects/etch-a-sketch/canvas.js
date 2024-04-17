import { isMobile } from '../../common.js';
import { getCheckboxSetting } from './settings.js';

export function createCanvas() {
  const canvasContainer = document.createElement('div');
  canvasContainer.setAttribute('id', 'canvas-container');

  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'canvas');
  canvas.height = 16;
  canvas.width = 16;

  const drawPixelBasedOnEvent = (event) => {
    const x = Math.floor(event.offsetX * canvas.width / canvas.clientWidth);
    const y = Math.floor(event.offsetY * canvas.height / canvas.clientHeight);
    drawPixel(x, y);
  };

  if (isMobile()) {
    canvas.addEventListener('touchstart', (e) => {
      if (!getCheckboxSetting('drag-mode')) return;

      e.preventDefault();
      drawPixelBasedOnEvent(e);
    });
    canvas.addEventListener('touchmove', (e) => {
      if (getCheckboxSetting('drag-mode')) return;

      e.preventDefault();
      drawPixelBasedOnEvent(e);
    });
  } else {
    canvas.addEventListener('click', (e) => {
      if (getCheckboxSetting('drag-mode')) return;

      e.preventDefault();
      drawPixelBasedOnEvent(e);
    });
    canvas.addEventListener('mousemove', (e) => {
      if (e.buttons !== 1) return;
      if (!getCheckboxSetting('drag-mode')) return;

      e.preventDefault();
      drawPixelBasedOnEvent(e);
    });

  }

  canvasContainer.appendChild(canvas);
  return canvasContainer;
}

export function setCanvasSize(size) {
  /** @type {HTMLCanvasElement} */
  const canvas = getCanvas();
  canvas.width = size;
  canvas.height = size;
}

export function drawPixel(x, y) {
  /** @type {HTMLCanvasElement} */
  const canvas = getCanvas();
  const ctx = canvas.getContext('2d');
  ctx.fillRect(x, y, 1, 1);
}

function getCanvas() {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('canvas');

  return canvas;
}

export function setColor(color) {
  /** @type {HTMLCanvasElement} */
  const canvas = getCanvas();
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
}

export function clearCanvas() {
  /** @type {HTMLCanvasElement} */
  const canvas = getCanvas();
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
