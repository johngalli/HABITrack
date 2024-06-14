/* POP-UP de Login e Registro */
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const bthPopup = document.querySelector(".bthLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => wrapper.classList.add("active"));
loginLink.addEventListener("click", () => wrapper.classList.remove("active"));
bthPopup.addEventListener("click", () => wrapper.classList.add("active-popup"));
iconClose.addEventListener("click", () =>
  wrapper.classList.remove("active-popup")
);

/* Login e Registro Banco de Dados */
function criarCadastro() {
  var nome = document.getElementById("criarNome").value;
  var email = document.getElementById("criarEmail").value;
  var senha = document.getElementById("criarSenha").value;

  const bodyPost = JSON.stringify({ nome, email, senha });

  fetch("http://localhost:8080/usuarios", {
    method: "POST",
    headers: {
    'Content-Type': 'application/json', 'charset': 'utf-8'
    
    },
    body: bodyPost,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na criação do cadastro");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      alert("Cadastro realizado com sucesso!");
      location.href = "/habitos";
    })

    .catch((error) => alert(error.message));
}
function logar() {
  var email = document.getElementById("emailLogin").value;
  var senha = document.getElementById("senhaLogin").value;

  const bodyPost = JSON.stringify({ email, senha });

  fetch("http://localhost:8080/usuarios", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, /",
      "Content-Type": "application/json",
    },
    body: bodyPost,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      } else {
        throw new Error("Usuário ou senha incorretos");
      }
    })
    .then((data) => {
      alert(data);
      if (data === "Login bem-sucedido") {
        location.href = "/habitos";
      }
    })
    .catch((error) => alert(error.message));
}