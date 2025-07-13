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

const mbtiToSociotypeMappings = {
    'ENFP': ['IEE', 'EIE', 'ILE'], 
    'ENTP': ['ILE', 'EIE', 'LIE', 'IEE'],
    'INFP': ['EII', 'ESI', 'IEI', 'SEI'], 
    'INTP': ['LII', 'ILI', 'ILE', 'LSI'],
    'ENFJ': ['EIE', 'ESE', 'IEE'], 
    'ENTJ': ['LIE', 'LSE', 'SLE', 'LSI'],
    'INFJ': ['IEI', 'EII', 'ILI'], 
    'INTJ': ['ILI', 'LII', 'LSI'],
    'ESFP': ['SEE', 'ESE', 'SLE'], 
    'ESTP': ['SLE', 'SEE'],
    'ISFP': ['ESI', 'EII', 'SEI'], 
    'ISTP': ['LSI', 'SLI'],
    'ESFJ': ['ESE', 'EIE'], 
    'ESTJ': ['LSE', 'LIE', 'LSI', 'SLE'],
    'ISFJ': ['SEI', 'EII', 'ESI'], 
    'ISTJ': ['SLI', 'LSI', 'LII']
};

const mbtiToEnneagramMappings = {
    'INTJ': ['SP5', 'SO5', 'SX5', 'SO1', 'SP6', 'SP1', 'SX1', 'SO4', 'SP4'],
    'INTP': ['SO5', 'SP5', 'SP6', 'SO6', 'SO1', 'SP1', 'SP9', 'SX5'],
    'ENTJ': ['SP3', 'SO3', 'SO1', 'SP7', 'SO8', 'SX1', 'SX6', 'SP8'],
    'ENTP': ['SP7', 'SO7', 'SO5', 'SX7', 'SO3', 'SP3', 'SX6', 'SO9', 'SP9', 'SP5'],
    'INFJ': ['SO4', 'SX5', 'SP6', 'SP4', 'SX4', 'SO9', 'SP9', 'SO2', 'SP5'],
    'INFP': ['SP4', 'SO4', 'SP6', 'SO9', 'SP9', 'SO6', 'SP1', 'SO2', 'SX4', 'SP5'],
    'ENFJ': ['SO2', 'SX2', 'SO3', 'SX4', 'SO7', 'SO1', 'SX1', 'SP2', 'SX7'],
    'ENFP': ['SX7', 'SO7', 'SP7', 'SO2', 'SX2', 'SO4', 'SX4', 'SP2', 'SO9', 'SO3'],
    'ISTJ': ['SP9', 'SO6', 'SP6', 'SP1', 'SX6', 'SO9', 'SP5'],
    'ISFJ': ['SP9', 'SO9', 'SP2', 'SO2', 'SP6', 'SO6', 'SX9', 'SP1', 'SO1'],
    'ESTJ': ['SO1', 'SP3', 'SP1', 'SO3', 'SO8', 'SX1', 'SP8', 'SO6', 'SP6'],
    'ESFJ': ['SO2', 'SP2', 'SO9', 'SP9', 'SO3', 'SX2', 'SX3', 'SO1', 'SP1', 'SO7'],
    'ISTP': ['SX6', 'SP5', 'SO6', 'SP9', 'SO1', 'SX1', 'SP1', 'SP8', 'SX5', 'SO5'],
    'ISFP': ['SP4', 'SX6', 'SP1', 'SO6', 'SP6', 'SX4', 'SO4', 'SP9', 'SX9', 'SP2'],
    'ESTP': ['SX6', 'SP8', 'SO8', 'SX8', 'SP7', 'SO3', 'SP3', 'SO7', 'SX1'],
    'ESFP': ['SX2', 'SO8', 'SP7', 'SX8', 'SO3', 'SP3', 'SO7', 'SX7', 'SP2', 'SP8', 'SX4']
};

const mbtiToPsychosophyMappings = {
    'INTP': ['LVEF', 'LVFE', 'LEVF', 'LEFV', 'LFVE', 'LFEV', 'VLEF', 'VLFE', 'ELVF', 'ELFV', 'FLVE', 'FLEV'],
    'ENTP': ['VLEF', 'VLFE', 'LVEF', 'LVFE', 'LEVF', 'LEFV', 'LFVE', 'LFEV', 'VELF', 'VEFL', 'ELVF', 'ELFV', 'FLVE', 'FLEV'],
    'INTJ': ['LVEF', 'LVFE', 'VLEF', 'VLFE', 'LEVF', 'LEFV', 'LFVE', 'LFEV', 'VFLE', 'VFEL', 'FLVE', 'FLEV'],
    'ENTJ': ['VLEF', 'VLFE', 'VFLE', 'VFEL', 'LVEF', 'LVFE', 'LEVF', 'LEFV', 'LFVE', 'LFEV', 'VELF', 'VEFL'],
    'INFP': ['VELF', 'EVLF', 'ELVF', 'LVFE', 'LEVF', 'LEFV', 'VLFE', 'VEFL', 'EVFL', 'ELFV', 'EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV'],
    'ENFP': ['VELF', 'VLEF', 'EVLF', 'EVFL', 'ELVF', 'ELFV', 'LEVF', 'LEFV', 'VEFL', 'EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV'],
    'INFJ': ['VELF', 'VLEF', 'EVLF', 'EVFL', 'ELVF', 'ELFV', 'LEVF', 'LEFV', 'VEFL', 'EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV'],
    'ENFJ': ['VELF', 'VLEF', 'EVLF', 'EVFL', 'ELVF', 'ELFV', 'LEVF', 'LEFV', 'VEFL', 'EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV'],
    'ISTP': ['LFVE', 'LFEV', 'FVEL', 'FVLE', 'FLVE', 'FLEV', 'LVEF', 'LVFE', 'VLEF', 'VLFE', 'VFLE', 'VFEL'],
    'ESTP': ['VFLE', 'VFEL', 'FVEL', 'FVLE', 'LFVE', 'LFEV', 'VLEF', 'VLFE', 'VEFL', 'EVFL', 'EFVL', 'EFLV', 'FLVE', 'FLEV'],
    'ISFP': ['EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV', 'VELF', 'VEFL', 'EVLF', 'EVFL', 'ELFV'],
    'ESFP': ['VEFL', 'EVFL', 'EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV', 'VELF', 'VFLE', 'VFEL', 'EVLF', 'ELFV'],
    'ISTJ': ['LFVE', 'LFEV', 'FVEL', 'FVLE', 'FLVE', 'FLEV', 'LVEF', 'LVFE', 'EFVL', 'EFLV'],
    'ESTJ': ['LFVE', 'LFEV', 'FVEL', 'FVLE', 'FLVE', 'FLEV', 'LVEF', 'LVFE', 'VLEF', 'VLFE', 'VFLE', 'VFEL'],
    'ISFJ': ['EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV', 'LFVE', 'LFEV', 'VELF', 'VEFL', 'EVLF', 'EVFL', 'ELFV'],
    'ESFJ': ['EFVL', 'EFLV', 'FVEL', 'FVLE', 'FEVL', 'FELV', 'VELF', 'VEFL', 'EVLF', 'EVFL', 'ELFV']
};

const enneagramToSocioMappings = {
    'ILE': ['SO5', 'SP7', 'SO7'], 
    'SEI': ['SP6', 'SO9', 'SX9'],
    'ESE': ['SP2', 'SX2', 'SX3', 'SO9'], 
    'LII': ['SO5', 'SO6', 'SP5'],
    'EIE': ['SO2', 'SO3', 'SX4', 'SO7'], 
    'LSI': ['SO1', 'SX1', 'SO6', 'SX6'],
    'SLE': ['SO3', 'SP8', 'SO8', 'SX8'], 
    'IEI': ['SO4', 'SX5', 'SP6'],
    'SEE': ['SX2', 'SO3', 'SP7', 'SO8', 'SX8'], 
    'ILI': ['SP5', 'SO5', 'SX5'],
    'LIE': ['SP3', 'SO3', 'SO1', 'SP7', 'SO7'], 
    'ESI': ['SP1', 'SP4', 'SX4'],
    'LSE': ['SP1', 'SX1', 'SO1', 'SP3', 'SP8'], 
    'EII': ['SP4', 'SO4', 'SP6'],
    'IEE': ['SX7', 'SO9'], 'SLI': ['SP5', 'SP9']
};

const enneagramToPsychosophyMappings = {
    'sp1': ['LVFE', 'EVFL', 'VLFE', 'VFEL', 'LVEF'], 'so1': ['LVFE', 'VLFE'],
    'sx1': ['VLFE', 'VFLE', 'VFEL'], 'sp2': ['EFVL', 'EFLV', 'FELV', 'FEVL'],
    'so2': ['VEFL', 'VELF'], 'sx2': ['EFVL', 'FEVL'],
    'sp3': ['FVLE', 'VLFE', 'VFLE'], 'so3': ['FVLE', 'FLVE', 'VFLE', 'VFEL', 'FEVL'],
    'sx3': ['FELV', 'FEVL'], 'sp4': ['EVFL', 'EFLV', 'VFEL', 'FVEL'],
    'so4': ['EVLF', 'ELVF', 'EVFL'], 'sx4': ['ELVF', 'EFVL'],
    'sp5': ['LFEV', 'LVEF', 'LEVF', 'FLEV'], 'so5': ['VLEF', 'LVEF', 'LEVF'],
    'sx5': ['LFEV', 'LEFV', 'LVEF', 'LEVF'], 'sp6': ['LEFV'],
    'so6': ['LVFE', 'LFVE', 'LVEF'], 'sx6': ['FLVE', 'LFVE'],
    'sp7': ['FVLE', 'FLVE', 'VLFE', 'FLEV'], 'so7': ['EVLF', 'VLEF', 'VELF'],
    'sx7': ['EVLF', 'ELVF', 'ELFV'], 'sp8': ['FVLE', 'FVEL'],
    'so8': ['FVLE', 'FVEL'], 'sx8': ['FVLE', 'FVEL'],
    'sp9': ['FLEV', 'FELV', 'FVEL'], 'so9': ['EVFL', 'EFLV', 'FELV'],
    'sx9': ['EFLV', 'FELV']
};

const headers = { mbti: "Select your MBTI type", socionics: "Select your Socionics type", enneagram: "Select your Enneagram subtype", psychosophy: "Select your Psychosophy type" };
const allSystems = { mbti: mbtiTypes, socionics: socioTypes, enneagram: enneagramSubtypes, psychosophy: psychosophyTypes };
let canonicalOrder = ['mbti', 'socionics', 'enneagram', 'psychosophy'];
let selections = {};
const buttonContainer = document.getElementById('button-container');
const resultContainer = document.getElementById('result-container');
const finalResultDisplay = document.getElementById('final-result');
const restartButton = document.getElementById('restart-button');
const header = document.getElementById('header');
const typologySwitchContainer = document.getElementById('typology-switch-container');
const typologySwitchButtons = document.querySelectorAll('.typology-switch-button');

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

restartButton.addEventListener('click', restart);
typologySwitchButtons.forEach(btn => btn.addEventListener('click', handleTypologySwitch));
showSelectionView();
