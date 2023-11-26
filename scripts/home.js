const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("h1").onmouseover = event => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if(index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

      if(iterations >= 15)
        clearInterval(interval);

      iterations += 1;

  }, 50);

}