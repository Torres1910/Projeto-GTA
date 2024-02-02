/* 
Obj. 1: Quando o usuário clicar no botão de seleção de plataformas, deve abrir uma caixa com os botões de seleçao de plataforma. 

  Passo 1 - Pegar o botão de seleção de plataformas no js, para poder verificar quando o usuário clicar em cima dele.
  Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado.
  Passo 3 - Pegar o clique do usuário no js.
  Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plafarmas, dentro do botão para que o conteúdo apareça.

Obj. 2: Caso a lista de botões de plataformas já estejam aparecendo e o usuário clicar em cima do botão, o conteúdo deverá ser escondido.

  Passo 1 - Verificar se o botão já está aberto, se sim, deverá ser removido a clase ativo, para que ele esconda o conteúdo novamente.  
  */

  // Obj. 1: Passo 1.
  const botao = document.querySelector(".btn-plataforma");
 
 const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
 
 botao.addEventListener("click", () => {

    elementoPlataformas.classList.toggle("ativo");    
 });




