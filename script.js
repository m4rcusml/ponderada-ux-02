let selectedParameter = 'interchange';

function setup() {
  createCanvas(600, 400);
  fill(0);

  const selectElement = document.getElementById('parameters');
  selectedParameter = selectElement.value;
  updateBestResultText();

  selectElement.addEventListener('change', (event) => {
    selectedParameter = event.target.value;
    updateBestResultText();
  });
}

function updateBestResultText() {
  let maxValY = Math.max(...resultados.map(r => r.maximo_retorno_obtido));
  let bestResult = resultados.find(r => r.maximo_retorno_obtido === maxValY);
  
  let resultDiv = document.getElementById('resultText');
  if (resultDiv && bestResult) {
    let paramSelect = document.getElementById('parameters');
    let paramName = paramSelect.options[paramSelect.selectedIndex].text;
    
    resultDiv.innerHTML = `
      <table border="1" style="border-collapse: collapse; text-align: left; width: 100%; max-width: 500px; margin-top: 10px;">
        <tr>
          <th style="padding: 8px; background-color: #f0f0f0;">Maior retorno obtido</th>
          <td style="padding: 8px;">${bestResult.maximo_retorno_obtido}</td>
        </tr>
        <tr>
          <th style="padding: 8px; background-color: #f0f0f0;">Valor de "${paramName}"</th>
          <td style="padding: 8px;">${bestResult[selectedParameter]}</td>
        </tr>
      </table>
    `;
  }
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
  stroke(0, 51, 102);
  strokeWeight(1);

  let gWidth = width - 70;
  let gHeight = height - 40;

  let maxValY = Math.max(...resultados.map(r => r.maximo_retorno_obtido));

  for (let r of resultados) {
    let valX = r[selectedParameter];
    let valY = r.maximo_retorno_obtido;

    let x = map(valX, 0, maxX, 0, gWidth);
    let y = map(valY, 0, maxY, 0, -gHeight);

    if (valY === maxValY) {
      fill('#00A4E8'); // Azul Pan
    } else {
      fill('#4169E1'); // Azul Royal
    }

    rect(x - 10, 0, 20, y);
  }
}