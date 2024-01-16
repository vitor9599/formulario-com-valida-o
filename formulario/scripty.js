const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordTnput =document.querySelector("#password")
const jobSelector = document.querySelector("#job")
const menssageTextarea = document.querySelector("#mensagem")
/*submit event quando for eviar formulario */
 form.addEventListener("submit",(ev)=>{
    ev.preventdefault();/*serve para evitar de mandar antes da validacao */
     /*verifica se nome esta vazio"" 1*/
     if(nameInput.value === "") {
        alert("Por favor, preencha seu nome");
        return;
     }

     /*validar email 2*/
     if(emailInput.value === ""||!isEmailValid(emailInput.value)){
        alert("Por favor, preencha seu email");
        return;
     }
     /*verifica se esta preenchida */
     if(!validatePassword(passwordTnput.value, 8)){
      alert("A senha precisa de no minimo 8 digitos");
      return;
     }
     /*verifica se a situacao foi preenchida */
     if(jobSelector.value === ""){
      alert("Por favor, selecione a sua situação");
        return;
     }
     /*verificar se a mensagem esta preenchida */
     if(menssageTextarea.value ===""){
      alert("Por favor,escreva uma mensagem ");
      return;
     }

     /*se todos campos estiverem corretamente preechidos */
     form.submit()
     

 });
 /*funcao valida email 2 */
 function isEmailValid(email){
    /*criar regex pra validar email */
    const emailRegex = newRegExp(
        /*usuario12@host.com.br */
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );
    if(emailRegex.text(email)){
      return true;
    }
    return false;

 }
 /*funcao pra validar a senha */
 function validatePassword(password,minDigits){
   if(password.length >=miniDigits){
      return true
   }
   return false
 }

 