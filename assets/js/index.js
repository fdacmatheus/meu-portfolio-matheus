const imagem = document.getElementById('img-matheus');

imagem.addEventListener('mouseover', () => {
  imagem.src = './assets/img/foto-matheus-hover.png';
});

imagem.addEventListener('mouseout', () => {
  imagem.src = './assets/img/foto-matheus.png';
});
const arrow = document.querySelector(".seta");
const botao = document.getElementById("botao");

botao.addEventListener("mouseover", () => {
  arrow.classList.toggle("active");
});

botao.addEventListener("mouseout", () => {
  arrow.classList.toggle("active");
});

botao.addEventListener("click", () => {
  arrow.classList.add("active");
  setTimeout(() => {
    arrow.classList.remove("active");
  }, 1000);
});


  