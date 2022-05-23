//on selectionne tous les elements du dom qu'on vanutiliser
const form=document.querySelector("form")
const btnStart=document.querySelector(".btn-start")
const btnNext=document.querySelector(".btn-next")
const btnQuit=document.querySelector(".btn-quit")
const playerName=document.querySelector(".player-name")
const playerMail=document.querySelector(".player-mail")
const home=document.querySelector(".container-start")
const questionContainer=document.querySelector(".container-questions")
const result=document.querySelector(".container-result")
const quiz=document.querySelector(".quiz")
const formReponses=document.querySelector(".reponses")
const choixReponse=document.querySelector(".answer-group")
let errors=0;
let nomError=document.querySelector(".error-name")
let mailError=document.querySelector(".error-mail")


// on cree une fonction pour la validation des mail et du nom

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

// on soumet le formulaire et 
form.addEventListener("submit", function(e){ 
    e.preventDefault();
    const nom=form.querySelector("#name").value
    const mail=document.querySelector("#mail").value
    validation(nom , mail);

    //s'il n'ya pas d'erreur on affiche le conteneur des question
    if(errors==false){
        home.style.display="none"
        questionContainer.style.display="grid"
        questionContainer.style.opacity="1"
        playerName.textContent=nom
        playerName.textContent=mail

        // quand on quite le quiz , 
        btnQuit.addEventListener('click', function(e){
            e.preventDefault();
            home.style.display="grid"
            questionContainer.style.display="none"
            questionContainer.style.opacity="0"
            form.reset()
        })

        let count=0;
        
        quiz.textContent=questions[count].question
        let choix=questions[count].choix
          
        for(let i=0; i<choix.length; i++){
            console.log(i+1);
             choixReponse
             form.appendChild(choixReponse)

        }

        for(let i=0; i<questions.length ; i++){
            count ++
        console.log(questions[i].question);
        }

        console.log(nom);
        console.log(mail);
        console.log( home);

    }
return
})