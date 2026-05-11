const resultados = [];

for (let i = 0; i < 50; i++) {
  resultados.push({
    id: i + 1,
    interchange: parseFloat((Math.random() * 100).toFixed(2)),
    taxa_utilizacao_media: parseFloat((Math.random() * 100).toFixed(2)),
    loss_given_default: parseFloat((Math.random() * 100).toFixed(2)),
    inadimplencia_fisica_maxima: parseFloat((Math.random() * 100).toFixed(2)),
    inadimplencia_financeira_maxima: parseFloat((Math.random() * 100).toFixed(2)),
    limite_maximo_concedivel: parseFloat((Math.random() * 50000).toFixed(2)),
    multiplicador_maximo_alavancagem: parseFloat((Math.random() * 5).toFixed(2)),
    maximo_retorno_obtido: parseFloat((Math.random() * 1000).toFixed(2))
  });
}
