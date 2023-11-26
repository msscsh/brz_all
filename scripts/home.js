function onPageLoad() {
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