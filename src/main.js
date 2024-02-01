
import {filterBy, sortBy, computeStats } from './dataFunctions.js';

import { renderItems, renderListClassification } from './view.js';


import data from './data/dataset.js';

let dadosExibidos = data;

const listaCartao = document.querySelector('#root');

document.addEventListener("DOMContentLoaded", () => {
  listaCartao.appendChild(renderItems(data))
})

// filtrar os dados
const botaoFiltra = document.getElementById('streaming');

botaoFiltra.addEventListener('change', (event) => {

  const valorFiltro = event.target.value;

  dadosExibidos = filterBy(data, 'streaming', valorFiltro)
  listaCartao.innerHTML = ""
  listaCartao.appendChild(renderItems(dadosExibidos))
})

// limpar  area filtrada
const limparBotao = document.getElementById('button-clear');

limparBotao.addEventListener('click', () => {
  listaCartao.innerHTML = "";
  ordenacao.value = "";
  botaoFiltra.value = "";
  listaCartao.appendChild(renderItems(data))
})

// codigo de ordenação

const ordenacao = document.getElementById('ordenacao');

ordenacao.addEventListener('change', (event) => {
  const valorOrdenacao = event.target.value;
  const valorOrdenado = sortBy(dadosExibidos,'name',valorOrdenacao)
  listaCartao.innerHTML = ""
  listaCartao.appendChild(renderItems(valorOrdenado))
  
})

//estatistica
const classificationList = document.querySelector('.estatisticas');
classificationList.appendChild(renderListClassification(computeStats(data)));


//modal
window.openModal = (id) => {
  const modal = document.querySelector("#modal-" + id);
  modal.style.display = "block";
}

window.closeModal = (id) => {
  const modal = document.querySelector("#modal-" + id);
  modal.style.display = "none";
}

