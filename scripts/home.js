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

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function displayPopup(nickname, points, starplayer, showdown, normalgame, powerleague, role) {
  var popup = document.getElementById('popup');
  popup.style.display = 'grid';

  adicionaValorNoID('nickname', nickname);
  adicionaValorNoID('role', role);
  adicionaValorNoID('points', points);
  adicionaValorNoID('starplayer', starplayer);
  adicionaValorNoID('showdown', firularAApresentacao(showdown), true);
  adicionaValorNoID('normalgame', firularAApresentacao(normalgame), true);
  adicionaValorNoID('powerleague', firularAApresentacao(powerleague), true);
}

function adicionaValorNoID(id, value, addComportamentoDeLinha) {
  document.getElementById(id).innerHTML = value;
  if(addComportamentoDeLinha)
    document.getElementById(id).classList.add('line');
}

function firularAApresentacao(valor) {
  var partes = valor.split('/');
  return '<p style="color:green">'+partes[0]+'</p><p>&nbsp;/&nbsp;</p><p style="color:red">'+partes[1]+'</p>'
}

function marcarLinksNaCelulaNickname() {
  var cells = document.querySelectorAll('#ranking td:nth-child(3)');
  cells.forEach(function(cell) {
      cell.addEventListener('click', function() {
        document.getElementById('popup').style.display = 'grid';
      });
  });
}


document.addEventListener("DOMContentLoaded", function() {
  setInterval(embaralharLetras, 4000);

  var rows = document.querySelectorAll('#ranking tbody tr');

  rows.forEach(function(row) {
      var nickCell = row.cells[2];
      nickCell.addEventListener('click', function() {
          var nickname = row.cells[2].textContent;
          var points = row.cells[3].textContent;
          var starplayer = row.cells[4].textContent;
          var showdown = row.cells[5].textContent;
          var normalgame = row.cells[6].textContent;
          var powerleague = row.cells[7].textContent;
          var role = row.cells[8].textContent;
          displayPopup(nickname, points, starplayer, showdown, normalgame, powerleague, role);
      });
  });

});

embaralharLetras();
// marcarLinksNaCelulaNickname();