const mbtiTypes = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

const socioTypes = [
    'ILE', 'SEI', 'ESE', 'LII',
    'EIE', 'LSI', 'SLE', 'IEI',
    'SEE', 'ILI', 'LIE', 'ESI',
    'LSE', 'EII', 'IEE', 'SLI'
];

const enneagramSubtypes = [
    'SP1', 'SO1', 'SX1', 'SP2', 'SO2', 'SX2',
    'SP3', 'SO3', 'SX3', 'SP4', 'SO4', 'SX4',
    'SP5', 'SO5', 'SX5', 'SP6', 'SO6', 'SX6',
    'SP7', 'SO7', 'SX7', 'SP8', 'SO8', 'SX8',
    'SP9', 'SO9', 'SX9'
];

const psychosophyTypes = [
    'LVEF', 'LVFE', 'LEVF', 'LEFV', 'LFVE', 'LFEV',
    'VLEF', 'VLFE', 'VELF', 'VEFL', 'VFLE', 'VFEL',
    'ELVF', 'ELFV', 'EVLF', 'EVFL', 'EFLV', 'EFVL',
    'FLVE', 'FLEV', 'FVEL', 'FVLE', 'FELV', 'FEVL'
];

const headers = { mbti: "Select your MBTI type", socionics: "Select your Socionics type", enneagram: "Select your Enneagram subtype", psychosophy: "Select your Psychosophy type" };
const allSystems = { mbti: mbtiTypes, socionics: socioTypes, enneagram: enneagramSubtypes, psychosophy: psychosophyTypes };
let canonicalOrder = ['mbti', 'socionics', 'enneagram', 'psychosophy'];
let selections = {};

let buttonContainer, resultContainer, finalResultDisplay, restartButton, header, typologySwitchContainer, typologySwitchButtons;

function getPotentialTypes(currentSelections) {
  let p = {
    mbti: currentSelections.mbti ? [currentSelections.mbti] : [...mbtiTypes],
    socionics: currentSelections.socionics ? [currentSelections.socionics] : [...socioTypes],
    enneagram: currentSelections.enneagram ? [currentSelections.enneagram] : [...enneagramSubtypes],
    psychosophy: currentSelections.psychosophy ? [currentSelections.psychosophy] : [...psychosophyTypes]
  };
  let hasChanged = true;
  while (hasChanged) {
    hasChanged = false;
    const counts = { mbti: p.mbti.length, socionics: p.socionics.length, enneagram: p.enneagram.length, psychosophy: p.psychosophy.length };
    
    p.mbti = p.mbti.filter(m => {
      const compatibleWithSocio = p.socionics.some(s => (mbtiToSociotypeMappings[m] || []).includes(s));
      const compatibleWithEnneagram = p.enneagram.some(e => (mbtiToEnneagramMappings[m] || []).includes(e));
      const compatibleWithPsychosophy = p.psychosophy.some(ps => (mbtiToPsychosophyMappings[m] || []).includes(ps));
      return compatibleWithSocio && compatibleWithEnneagram && compatibleWithPsychosophy;
    });

    p.socionics = p.socionics.filter(s => {
      const compatibleWithMbti = p.mbti.some(m => (mbtiToSociotypeMappings[m] || []).includes(s));
      const compatibleWithEnneagram = p.enneagram.some(e => (enneagramToSocioMappings[s] || []).includes(e));
      return compatibleWithMbti && compatibleWithEnneagram;
    });

    p.enneagram = p.enneagram.filter(e => {
      const eLower = e.toLowerCase();
      const compatibleWithMbti = p.mbti.some(m => (mbtiToEnneagramMappings[m] || []).includes(e));
      const compatibleWithSocio = p.socionics.some(s => (enneagramToSocioMappings[s] || []).includes(e));
      const compatibleWithPsychosophy = p.psychosophy.some(ps => (enneagramToPsychosophyMappings[eLower] || []).includes(ps));
      return compatibleWithMbti && compatibleWithSocio && compatibleWithPsychosophy;
    });

    p.psychosophy = p.psychosophy.filter(ps => {
      const compatibleWithMbti = p.mbti.some(m => (mbtiToPsychosophyMappings[m] || []).includes(ps));
      const compatibleWithEnneagram = p.enneagram.some(e => (enneagramToPsychosophyMappings[e.toLowerCase()] || []).includes(ps));
      return compatibleWithMbti && compatibleWithEnneagram;
    });

    if (p.mbti.length < counts.mbti || p.socionics.length < counts.socionics || p.enneagram.length < counts.enneagram || p.psychosophy.length < counts.psychosophy) {
      hasChanged = true;
    }
  }
  return p;
}

function isPathValid(system, type) {
  const tempSelections = { ...selections, [system]: type };
  const potentials = getPotentialTypes(tempSelections);
  const remaining = canonicalOrder.filter(s => !tempSelections[s]);
  return remaining.every(sys => potentials[sys].length > 0);
}

function showSelectionView() {
  resultContainer.style.display = 'none';
  restartButton.style.display = 'none';
  typologySwitchContainer.style.display = 'flex';
  header.style.display = 'block';
  buttonContainer.style.display = 'flex';
  renderButtons();
}

function showResultView() {
  typologySwitchContainer.style.display = 'none';
  header.style.display = 'none';
  buttonContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  restartButton.style.display = 'inline-block';
  const finalOrder = ['mbti', 'socionics', 'enneagram', 'psychosophy'];
  finalResultDisplay.textContent = finalOrder.map(sys => selections[sys]).join(' - ');
}

function renderButtons() {
  const remaining = canonicalOrder.filter(s => !selections[s]);
  if (!remaining.length) return showResultView();
  const currentSystem = remaining[0];
  buttonContainer.innerHTML = '';
  header.textContent = headers[currentSystem];
  updateTypologyButtonStyles();
  const options = getPotentialTypes(selections)[currentSystem];
  allSystems[currentSystem].forEach(type => {
    const button = document.createElement('button');
    button.className = 'type-button';
    button.textContent = type;
    button.dataset.type = type;
    if (options.includes(type) && isPathValid(currentSystem, type)) {
      button.addEventListener('click', handleButtonClick);
    } else {
      button.disabled = true;
    }
    buttonContainer.appendChild(button);
  });
}

function handleButtonClick(e) {
  const btn = e.target;
  const selected = btn.dataset.type;
  const currentSystem = canonicalOrder.find(s => !selections[s]);
  btn.classList.add('clicked');
  document.querySelectorAll('.type-button').forEach(b => b.disabled = true);
  setTimeout(() => {
    selections[currentSystem] = selected;
    renderButtons();
  }, 250);
}

function updateTypologyButtonStyles() {
  const current = canonicalOrder.find(s => !selections[s]);
  typologySwitchButtons.forEach(button => {
    const system = button.dataset.system;
    button.classList.remove('hollow', 'plain-selected');
    button.disabled = !!selections[system];
    if (selections[system]) button.classList.add('plain-selected');
    else if (system === current) button.classList.add('hollow');
  });
}

function handleTypologySwitch(e) {
  const selectedSystem = e.target.dataset.system;
  if (!selectedSystem || e.target.disabled) return;
  const currentSystem = canonicalOrder.find(s => !selections[s]);
  const i1 = canonicalOrder.indexOf(currentSystem);
  const i2 = canonicalOrder.indexOf(selectedSystem);
  [canonicalOrder[i1], canonicalOrder[i2]] = [canonicalOrder[i2], canonicalOrder[i1]];
  renderButtons();
}

function restart() {
  selections = {};
  canonicalOrder = ['mbti', 'socionics', 'enneagram', 'psychosophy'];
  showSelectionView();
}

document.addEventListener('DOMContentLoaded', () => {
  buttonContainer = document.getElementById('button-container');
  resultContainer = document.getElementById('result-container');
  finalResultDisplay = document.getElementById('final-result');
  restartButton = document.getElementById('restart-button');
  header = document.getElementById('header');
  typologySwitchContainer = document.getElementById('typology-switch-container');
  typologySwitchButtons = document.querySelectorAll('.typology-switch-button');

  restartButton.addEventListener('click', restart);
  typologySwitchButtons.forEach(btn => btn.addEventListener('click', handleTypologySwitch));
  
  showSelectionView();
});

