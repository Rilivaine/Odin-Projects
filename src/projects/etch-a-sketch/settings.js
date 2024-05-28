import { setCanvasSize } from './canvas.js';

export function createSettingsSection() {
  const settingsSection = document.createElement('div');
  settingsSection.setAttribute('id', 'settings-section');

  const settingsTitle = document.createElement('h3');
  settingsTitle.textContent = 'Settings';

  const { checkboxContainer, checkbox } = createCheckbox('Click\'n\'Drag Mode', 'drag-mode');
  checkbox.checked = false;
  settingsSection.append(checkboxContainer);

  const { rangeInputContainer } = createRangeInput('Canvas Size', 'canvas-size', 8, 128, 1);
  rangeInputContainer.append(createCanvasSizeButton());
  settingsSection.append(rangeInputContainer);

  return settingsSection;
}

function createCheckbox(text, id) {
  const checkboxContainer = document.createElement('div');
  checkboxContainer.classList.add('setting', 'checkbox-container');

  const label = document.createElement('span');
  label.textContent = text;

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', id);

  checkboxContainer.append(label, checkbox);

  return { checkboxContainer, checkbox };
}

function createRangeInput(text, id, min, max, step) {
  const rangeInputContainer = document.createElement('div');
  rangeInputContainer.classList.add('setting', 'range-input-container');

  const label = document.createElement('span');
  label.textContent = text;

  const rangeInput = document.createElement('input');
  rangeInput.setAttribute('type', 'range');
  rangeInput.setAttribute('id', id);
  rangeInput.setAttribute('min', min);
  rangeInput.setAttribute('max', max);
  rangeInput.setAttribute('step', step);

  rangeInput.addEventListener('input', () => {
    label.textContent = `${text} (${rangeInput.value})`;
  });

  rangeInputContainer.append(label, rangeInput);

  return { rangeInputContainer, rangeInput };
}

function createCanvasSizeButton() {
  const canvasSizeButton = document.createElement('button');
  canvasSizeButton.setAttribute('id', 'canvas-size-button');
  canvasSizeButton.textContent = 'Set Canvas Size';

  canvasSizeButton.addEventListener('click', () => {
    const canvasSize = getRangeSetting('canvas-size');
    setCanvasSize(canvasSize);
  });

  return canvasSizeButton;
}

export function getCheckboxSetting(id) {
  return document.getElementById(id)?.checked;
}

export function getRangeSetting(id) {
  return document.getElementById(id)?.value;
}
