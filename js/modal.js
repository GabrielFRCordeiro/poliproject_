const modal_teste_ingles = document.querySelector("#modal_teste_ingles");
const btn_teste_ingles = document.querySelector("#btn_teste_ingles");
const modal_ingles_fechar = document.querySelector("#game-container");
const close_modal_ingles = document.querySelector("#close_modal_ingles");

const modal_teste_portugues = document.querySelector("#modal_teste_portugues");
const btn_teste_portugues = document.querySelector("#btn_teste_portugues");
const modal_portugues_fechar = document.querySelector("#teste_portugues");
const close_modal_portugues = document.querySelector("#close_modal_portugues");

btn_teste_ingles.onclick = () => {
    modal_teste_ingles.style.display = "flex";
}


close_modal_ingles.onclick = () => {
    fechar_modal(modal_teste_ingles)
}


btn_teste_portugues.onclick = () => {
    modal_teste_portugues.style.display = "flex";
}

close_modal_portugues.onclick = () => {
    fechar_modal(modal_teste_portugues)
}

window.onclick = e => {
  if (e.target === modal_teste_ingles) {
    fechar_modal(modal_teste_ingles)
  }
  if (e.target === modal_teste_portugues) {
    fechar_modal(modal_teste_portugues);
  }
}

function fechar_modal(modal) {
    modal.style.display = 'none';
};
