$(document).ready(function() {

  var resize1000px = function() {
    let larguraTela = document.body.clientWidth;
    if (larguraTela < 1000) {
      $('#texto-capa').removeClass('col-5');
      $('#carrossel').removeClass('col-7');
      $('#mapa').removeClass('col-7');
      $('#mapa').css("padding-top", 15);
      $('#primeira-secao-conhecendo-manoel').removeClass('col-8');
      $('#primeira-secao-conhecendo-manoel').addClass('col-12');
      $('#txt-primeira-secao-conhecendo-manoel').removeClass('col-4');
      $('#txt-primeira-secao-conhecendo-manoel').addClass('col-12');
      $('#segunda-secao-conhecendo-manoel').removeClass('col-6');
      $('#segunda-secao-conhecendo-manoel').addClass('col-12');
      $('#txt-segunda-secao-conhecendo-manoel').removeClass('col-6');
      $('#txt-segunda-secao-conhecendo-manoel').addClass('col-12');
      $('#txt-primeira-secao-conhecendo-manoel').css("padding-top", 10);
    } else if (larguraTela >= 1001) {
      $('#texto-capa').addClass('col-5');
      $('#carrossel').addClass('col-7');
      $('#mapa').addClass('col-7');
      $('#mapa').css("padding-top", 0);
      $('#primeira-secao-conhecendo-manoel').removeClass('col-12');
      $('#primeira-secao-conhecendo-manoel').addClass('col-8');
      $('#txt-primeira-secao-conhecendo-manoel').removeClass('col-12');
      $('#txt-primeira-secao-conhecendo-manoel').addClass('col-4');
      $('#txt-primeira-secao-conhecendo-manoel').css("padding-top", 0);
      $('#segunda-secao-conhecendo-manoel').removeClass('col-12');
      $('#segunda-secao-conhecendo-manoel').addClass('col-6');
      $('#txt-segunda-secao-conhecendo-manoel').removeClass('col-12');
      $('#txt-segunda-secao-conhecendo-manoel').addClass('col-6');
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
      document.getElementById("barra-navegacao").style.top = "0";
    } else {
      document.getElementById("barra-navegacao").style.top = "-60px";
    }
    posicaoScrollAnterior = atualPosicaoScroll;
  }

  var iterador = 0;
  var texto = 'Laboratório de Linguagens do Pantanal';
  var velocidade = 50;

  function escreveTexto() {
    if (iterador < texto.length) {
      document.getElementById("titulo").innerHTML += texto.charAt(iterador);
      iterador++;
      setTimeout(escreveTexto, velocidade);
    }
  }
  escreveTexto();
});
