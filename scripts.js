$(document).ready(function() {
  var ajustaLarguraMapa = function() {
    var larguraTela = document.body.clientWidth;
    if (larguraTela < 1000) {
      $('#mapa').removeClass('col-7');
      $('#mapa').css("padding-top", 15);
    } else if (larguraTela >= 1001) {
      $('#mapa').addClass('col-7');
    };
  };
  $(window).resize(function(){
    ajustaLarguraMapa();
  });
  //Fire it when the page first loads:
  ajustaLarguraMapa();

  var posicaoScrollAnterior = window.pageYOffset;
  window.onscroll = function() {
  var atualPosicaoScroll = window.pageYOffset;
    if (posicaoScrollAnterior > atualPosicaoScroll) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
    posicaoScrollAnterior = atualPosicaoScroll;
  }
});
