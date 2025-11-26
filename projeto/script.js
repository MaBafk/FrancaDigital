const seletorCorFundo = document.getElementById("seletorCor");
const btnAplicarCor = document.getElementById("btnAplicarCor");

btnAplicarCor.addEventListener("click", (e) => {
    const cor=seletorCorFundo.value;
    document.documentElement.style.setProperty("--cor-fundo", cor);

});


const chips = document.querySelectorAll(".chip");
const imagemDestaque = document.getElementById("galeriaHero");

if (chips.length > 0) {
    const imagemInicial = chips[0].dataset.image;
    imagemDestaque.style.backgroundImage = `url(${imagemInicial})`;
}

//forEach para cada objeto (repitir)
chips.forEach((chip) => {
   chip.addEventListener("click", () => {
    imagemDestaque.classList.add("ativa");
    imagemDestaque.style.backgroundImage = `url(${chip.dataset.image})`;

   })
}); 