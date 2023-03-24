// EFEITO BOTÃO VOLTAR TOPO

function topo(){
  window.scrollTo(
    {
      top: 0,
      left: 0,
      behavior: 'smooth' 
    }
  )
};


//validação de login

function login(){
  var logado = 0;
  var usurario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if(usurario == 'admin' && senha == '123456'){
    window.location ="index.html";
  }

  else if(logado == 0){
    alert("Acesso negado. Dados incorretos.")
  }
};

// efeito cadastrar



$(document).ready(function(){

  $("#btn-cadastro").click(function(){

    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    $("#btn-cadastro").hide();
    
  });
});



// Alerta no botão cadastrar

function cadastro(){
  alert("Cadastro realizado com sucesso!");
  window.location.href ="index.html";

  
}