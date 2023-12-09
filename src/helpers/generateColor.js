export function generateColor() {
  let randomColor = '#';
  for (let i = 0; i < 4; i++) {
    randomColor += (Math.random() * 10).toFixed(0);
  }

  return randomColor;
}
