const imagem = document.getElementById('img-matheus');

imagem.addEventListener('mouseover', () => {
    setTimeout(() => {
        imagem.src = './assets/img/foto-matheus-hover.png';
    }, 500);
});

imagem.addEventListener('mouseout', () => {
    setTimeout(() => {
        imagem.src = './assets/img/foto-matheus.png';
    }, 500)
});
const arrow = document.querySelector(".seta");
const botao = document.getElementById("botao");

//animacao imagem


// animacao icone botao
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


// fade in effect site
const sections = document.querySelectorAll('.animacao');
console.log(sections)

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

sections.forEach(el => {
    observer.observe(el);
  });