function embaralharLetras() {

  let iterations = 0;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const interval = setInterval(() => {

    document.getElementById('title').innerText = "BRAZILIAN STORM".split("")
      .map((letter, index) => {
        if(index < iterations) {
          return document.getElementById('title').dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

      if(iterations >= 15) {
        clearInterval(interval);
        document.getElementById('title').innerHTML = "<span class='blink'>B</span><span class='blink'>R</span>A<span class='blink'>Z</span>ILIAN STORM"
      }

      iterations += 1;

  }, 50);

}

function mostrarEsconderPlacarGeral(element) {
  if (document.querySelector('.content').style.display == 'none') {
    document.querySelector('.content').style.display = 'inline flow-root list-item';
    document.querySelector('.content').classList.remove('fade-out');
    document.querySelector('.content').classList.add('reveal-effect');
  }
  else {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.content').classList.remove('reveal-effect');
    document.querySelector('.content').classList.add('fade-out');
  }
}

function marcarItem(element) {
    // Remove a classe 'active' de todos os itens
    var items = document.querySelectorAll('.menu li');
    items.forEach(function(item) {
        item.classList.remove('active');
    });

    // Adiciona a classe 'active' ao item clicado
    element.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(embaralharLetras, 4000);
});

embaralharLetras();