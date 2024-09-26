
  // Pegando a div usando a root //:
const divRoot = document.getElementById("root");
      //Imprimindo a div no console //
console.log(divRoot)
const valor1 = 10;
const valor2 = 20;
      //Criando o elemento de Titulo //
const resultado = document.createElement("h1");
      //Retornando a soma de valor1 e valor2 na h1
resultado.textContent = (valor1+valor2);
divRoot.appendChild(resultado);
      // criando outra div //
const divValores = document.createElement("div");

divValores.setAttribute("id", "valores");
divRoot.appendChild(divValores);



const h2Valor1 = document.createElement("h2");

h2Valor1.textContent = valor1;

divValores.appendChild(h2Valor1);