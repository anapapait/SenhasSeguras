const numeroSenha = document.querySelector ('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
  tamanhoSenha = tamanhoSenha-1;
  numeroSenha.textContent = tamanhoSenha;

numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
function aumentaTamanho(){
  if (tamanhoSenha < 20){
    tamanhoSenha++;
  }
  numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbook = document.querySelectorAll('.checlbox');

for (i=0; i < checkbox.length;i++){
  checkbox[i].onclick = geraSenha
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolo = '!@%*?'

geraSenha();


function geraSenha(){
  let alfabeto ='';
  if (checkbox[0].checkbox){
    alfabeto = alfabeto + letrasMaiusculas;
  } 
  f (checkbox[1].checkbox){
    alfabeto = alfabeto + letrasMaiusculas;
  } 
  f (checkbox[2].checkbox){
    alfabeto = alfabeto + numeros;
  } 
  f (checkbox[3].checkbox){
    alfabeto = alfabeto + simbolos;
  } 
  console.log(alfabeto);
  let senha = '';
  for (let i=0; <tamanhoSenha;i++){
  let numeroAleatorio = Math.random()*letrasMaiusculas.length;
  numeroAleatorio = Math.floor(numeroAleatorio);
  senha = senha + letrasMaiusculas[numeroAleatorio];
}
campoSenha.value = senha;
}


