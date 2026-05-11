let selectedParameter = 'interchange';

function setup() {
  createCanvas(600, 400);
  fill(0);

  const selectElement = document.getElementById('parameters');
  selectedParameter = selectElement.value;
  selectElement.addEventListener('change', (event) => {
    selectedParameter = event.target.value;
  });
}

function draw() {
  background(240);
  translate(50, height - 20);

  let maxX = 0;
  let maxY = 0;

  for (let r of resultados) {
    if (r[selectedParameter] > maxX) maxX = r[selectedParameter];
    if (r.maximo_retorno_obtido > maxY) maxY = r.maximo_retorno_obtido;
  }

  maxX = (maxX * 1.1) || 10;
  maxY = (maxY * 1.1) || 10;

  drawGrid(maxX, maxY);
  drawBars(maxX, maxY);
}

function drawGrid(maxX, maxY) {
  let stepX = maxX / 10;
  let stepY = maxY / 10;

  let gWidth = width - 70;
  let gHeight = height - 40;

  for (let i = 0; i <= 10; i++) {
    let valX = i * stepX;
    let x = map(valX, 0, maxX, 0, gWidth);

    stroke(200);
    line(x, 0, x, -gHeight);

    noStroke();
    fill(120);
    textAlign(CENTER);
    text(valX.toFixed(1), x, 15);
  }

  for (let i = 0; i <= 10; i++) {
    let valY = i * stepY;
    let y = map(valY, 0, maxY, 0, -gHeight);

    stroke(200);
    line(0, y, gWidth, y);

    noStroke();
    fill(120);
    textAlign(RIGHT);
    text(valY.toFixed(1), -8, y + 4);
  }
}

function drawBars(maxX, maxY) {
  fill(0, 102, 204, 150);
  stroke(0, 51, 102);
  strokeWeight(1);

  let gWidth = width - 70;
  let gHeight = height - 40;

  for (let r of resultados) {
    let valX = r[selectedParameter];
    let valY = r.maximo_retorno_obtido;

    let x = map(valX, 0, maxX, 0, gWidth);
    let y = map(valY, 0, maxY, 0, -gHeight);

    rect(x - 10, 0, 20, y);
  }
}