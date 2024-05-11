import { createCanvas } from './canvas.js';
import { createSettingsSection } from './settings.js';

export function buildPage() {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  container.appendChild(createCanvas());
  container.appendChild(createSettingsSection());
  document.body.appendChild(container);
}
