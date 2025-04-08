const bola = document.getElementById('bola');

let size = 100;
let hue = 0;

bola.addEventListener('click', () => {
  size += 15;
  hue = (hue + 20) % 360;

  bola.style.width = `${size}px`;
  bola.style.height = `${size}px`;
  bola.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  bola.style.boxShadow = `0 0 25px hsl(${hue}, 100%, 50%)`;
});
