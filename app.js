const form=document.querySelector("form")
const btnStart=document.querySelector(".btn-start")
const playerName=document.querySelector(".player-name")
const playerMail=document.querySelector(".player-mail")
const home=document.querySelector(".container-start")
const question=document.querySelector(".container-questions")
const result=document.querySelector(".container-result")
let errors=0;
let nomError=document.querySelector(".error-name")
let mailError=document.querySelector(".error-mail")




function validation(name , email){
    if(name===""){
        errors=true
          nomError.textContent="N’oubliez pas de renseigner votre nom avant de commencer le Quiz"
    }else{
        nomError.textContent=" "
        errors=false
    }
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailformat)){
    mailError.textContent=" "
    errors =false
  }else{
      errors=true
       mailError.textContent="Vueillez  renseigner un  email valide avant de commencer le Quiz"
  }
  return 
}

form.addEventListener("submit", function(e){ 
    e.preventDefault();
    const nom=form.querySelector("#name").value
    const mail=document.querySelector("#mail").value
    validation(nom , mail);
    if(errors==false){
        home.style.display="none"
        question.style.display="grid"
        question.style.opacity="1"
        playerName.textContent=nom
        playerName.textContent=mail

        console.log(nom);
        console.log(mail);
        console.log( home);
    }
        

       
    
  

return
})