const resultados = [];

for (let i = 0; i < 10; i++) {
  resultados.push({
    id: i + 1,
    interchange: parseFloat((i * 10 + Math.random() * 5).toFixed(2)),
    taxa_utilizacao_media: parseFloat((i * 10 + Math.random() * 5).toFixed(2)),
    loss_given_default: parseFloat((i * 10 + Math.random() * 5).toFixed(2)),
    inadimplencia_fisica_maxima: parseFloat((i * 10 + Math.random() * 5).toFixed(2)),
    inadimplencia_financeira_maxima: parseFloat((i * 10 + Math.random() * 5).toFixed(2)),
    limite_maximo_concedivel: parseFloat((i * 5000 + Math.random() * 2000).toFixed(2)),
    multiplicador_maximo_alavancagem: parseFloat((i * 0.5 + Math.random() * 0.2).toFixed(2)),
    maximo_retorno_obtido: parseFloat((Math.random() * 1000).toFixed(2))
  });
}
