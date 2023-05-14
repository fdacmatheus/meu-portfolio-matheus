const imagem = document.getElementById('img-matheus');

imagem.addEventListener('mouseover', () => {
  imagem.src = './assets/img/foto-matheus-hover.png';
});

imagem.addEventListener('mouseout', () => {
  imagem.src = './assets/img/foto-matheus.png';
});
