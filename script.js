let texto = document.getElementsByClassName("text_field");
let imagem = document.getElementsByClassName("img_container");
let noMsgContainer = document.getElementsByClassName("no_msg_text");
let h2Text = document.getElementsByClassName("no_msg_text_h2");
let pText = document.getElementsByClassName("no_msg_text_p");
let copyButton = document.getElementsByClassName("btn_copy");
let column2 = document.getElementsByClassName("column2");
let pNew = document.getElementsByClassName("p_style");

const copyButtonActive = document.getElementById("btn_copy");
const pCopy = document.getElementById("p_new");
//FUNÇÃO COPIAR
copyButtonActive.addEventListener("click", () => {
  navigator.clipboard.writeText(pCopy.textContent);
});

limpar();

//função para impedir caracteres proibidos
function digitar() {
  let texto = document.getElementsByClassName("text_field")[0];

  texto.addEventListener("input", function (event) {
    // Remover caracteres proibidos
    let newValue = "";
    for (let i = 0; i < texto.value.length; i++) {
      let charCode = texto.value.charCodeAt(i);
      // Verifica se o caractere é uma letra minúscula
      if ((charCode >= 97 && charCode <= 122) || charCode === 32) {
        newValue += texto.value[i];
      }
    }
    texto.value = newValue;
  });
}

function limpar() {
  texto[0].value = "";
  texto[0].focus();
}

//e=element; c=class; i=index
function addClass(e, c, i) {
  return e[i].classList.add(c);
}

function criptografar() {
  let newText = texto[0].value;

  if (newText !== "") {
    newText = newText.replace(/a|e|i|o|u/g, (caractere) => {
      switch (caractere) {
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
      }
    });

    addClass(imagem, "hide", 0);
    addClass(h2Text, "hide", 0);
    addClass(pText, "hide", 0);
    addClass(pNew, "pNew_style", 0);

    pNew[0].innerHTML = newText;
    copyButton[0].style.display = "block";
    column2[0].style.gap = "150px";
    noMsgContainer[0].style.overflow = "auto";
    limpar();
  }
}

function descriptografar() {
  let newText = texto[0].value;

  if (newText !== "") {
    newText = newText.replace(/ai|enter|imes|ober|ufat/g, (caractere) => {
      switch (caractere) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
      }
    });

    addClass(imagem, "hide", 0);
    addClass(h2Text, "hide", 0);
    addClass(pText, "hide", 0);
    addClass(pNew, "pNew_style", 0);

    pNew[0].innerHTML = newText;
    copyButton[0].style.display = "block";
    column2[0].style.gap = "150px";
    noMsgContainer[0].style.overflow = "auto";
    limpar();
  }
}
