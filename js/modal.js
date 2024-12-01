var modal_teste_ingles = document.querySelector("#modal_teste_ingles");
var btn_teste_ingles = document.querySelector("#btn_teste_ingles");
var modal_ingles_fechar = document.querySelector("#game-container");
var close_modal_ingles = document.querySelector("#close_modal_ingles");
// var modal_teste_portugues = document.querySelector("#modal_teste_portugues");
// var btn_teste_portugues = document.querySelector("#btn_teste_portugues");
// var modal_portugues_fechar = document.querySelector("#game-container");

btn_teste_ingles.onclick = () => {
  modal_teste_ingles.style.display = "flex";
}


close_modal_ingles.onclick = () => {
  modal_teste_ingles.style.display = "none";
}


// btn_teste_portugues.onclick = () => {
//     modal_teste_portugues.style.display = "flex";
// }

window.onclick = e => {
  if (e.target === modal_teste_ingles) {
    modal_teste_ingles.style.display = "none";
  }
//   if (e.target === modal_portugues_fechar) {
//     modal_teste_portugues.style.display = "none";
//   }
}