$(document).ready(function() {

  var resize1000px = function() {
    let larguraTela = document.body.clientWidth;
    if (larguraTela < 1000) {
      $('#texto-capa').removeClass('col-5');
      $('#carrossel').removeClass('col-7');
      $('#mapa').removeClass('col-7');
      $('#mapa').css("padding-top", 15);
    } else if (larguraTela >= 1001) {
      $('#texto-capa').addClass('col-5');
      $('#carrossel').addClass('col-7');
      $('#mapa').addClass('col-7');
    };
  };

  var resize520px = function() {
    let larguraResize520 = document.body.clientWidth;
    if (larguraResize520 < 520) {
      $('.icones-rodape').removeClass("col-6");
      $('.rodape-texto').removeClass("col-6");
    } else if (larguraResize520 >= 521) {
      $('.icones-rodape').addClass("col-6");
      $('.rodape-texto').addClass("col-6");
    };
  };

  $(window).resize(function(){
    resize1000px();
    resize520px();
  });
  //Fire it when the page first loads:
  resize1000px();
  resize520px();

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
