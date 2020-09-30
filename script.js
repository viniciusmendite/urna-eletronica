let yourVoteFor = document.querySelector('.split-1-1 span');
let role = document.querySelector('.split-1-2 span');
let description = document.querySelector('.split-1-4');
let warning = document.querySelector('.split-2');
let sideview = document.querySelector('.split-1-right');
let numbers = document.querySelector('.split-1-3');

let currentStep = 0;

function startStep() {
  let step = etapas[currentStep];

  let numberHtml = '';

  for(let i = 0; i < step.numeros; i++) {
    numberHtml += '<div class="number"></div>';
  }

  yourVoteFor.style.display = 'none';
  role.innerHTML = step.titulo;
  description.style.display = 'none';
  warning.style.display = 'none';
  sideview.innerHTML = '';
  numbers.innerHTML = numberHtml;
}

function clickNumberButton(number) {
  alert('clicou em' + number)
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