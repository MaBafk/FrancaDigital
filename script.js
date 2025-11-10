const titulo = document.getElementById('texto').innerText;
console.log(titulo);
alert("O texto do paragráfo é: " + titulo)

const camponome = document.getElementById("campo-nome");
camponome.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const caixa = document.getElementById("caixa");
//caixa.innerHTML = "<h2>Conteúdo Adicionado via JavaScript</h2><p>Este conteúdo foi inserido dinamicamente.</p>";

const botao = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", (e) => {
    const valor = campoNome.value;
    mensagem.textContent = "Olá, " + valor;
});
