function tocaSom(seletorDeAudio) {
  const som = document.querySelector(seletorDeAudio);

  if (som != null && som.localName === 'audio') {
    som.play();
  } else {
    alert("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let c = 0; c < listaDeTeclas.length; c++) {
  const tecla = listaDeTeclas[c];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');

  }


}


