let yourVoteFor = document.querySelector('.split-1-1 span');
let role = document.querySelector('.split-1-2 span');
let description = document.querySelector('.split-1-4');
let warning = document.querySelector('.split-2');
let sideview = document.querySelector('.split-1-right');
let numbers = document.querySelector('.split-1-3');

let currentStep = 0;
let numberCandidate = '';

function startStep() {
  let step = etapas[currentStep];

  let numberHtml = '';

  for(let i = 0; i < step.numeros; i++) {
    if (i === 0) {
      numberHtml += '<div class="number focus"></div>';
    } else { 
      numberHtml += '<div class="number"></div>';
    }
  }

  yourVoteFor.style.display = 'none';
  role.innerHTML = step.titulo;
  description.innerHTML = '';
  warning.style.display = 'none';
  sideview.innerHTML = '';
  numbers.innerHTML = numberHtml;
}

function updateInterface() {
  let step = etapas[currentStep];

  let candidate = step.candidatos.filter((item) => {
    if (item.numero === numberCandidate) {
      return true;
    } else {
      return false;
    }
  });

  if (candidate.length > 0) {
    candidate = candidate[0];

    yourVoteFor.style.display = 'block';
    warning.style.display = 'block';
    description.innerHTML = `Nome: ${candidate.nome}<br/>Partido: ${candidate.partido}`;

    let photosHtml = '';
    for (i in candidate.fotos) {
      photosHtml += `          
      <div class="split-1-image">
        <img src="images/${candidate.fotos[i].url}" alt="candidato">
        ${candidate.fotos[i].legenda}
      </div>`
    }

    sideview.innerHTML = photosHtml;
  }
}

function clickNumberButton(n) {
  let elNumber = document.querySelector('.number.focus');
  if (elNumber !== null) {
    elNumber.innerHTML = n;
    numberCandidate = `${numberCandidate}${n}`;

    elNumber.classList.remove('focus');
    if (elNumber.nextElementSibling !== null) {
      elNumber.nextElementSibling.classList.add('focus');
    } else {
      updateInterface();
    }
  }
}

function voteWhite() {
  alert('branco')
}

function voteCorrects() {
  alert('corrige')
}

function voteConfirm() {
  alert('confirma')
}

startStep();