let inputEmail = document.getElementById("input-email")
let formValid = document.getElementById("valid")
let textError = document.querySelector(".erorr-text")
let submitButton = document.getElementById('submit')
let emailText = document.querySelector("span")
let div = document.querySelector(".thank")
let divMain = document.querySelector(".main")


formValid.addEventListener('submit', function(event){
    event.preventDefault()
    if(!inputEmail.value){
        inputEmail.classList.add("input-error")
        textError.hidden = false
    }
    else if(inputEmail.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)){
     
        inputEmail.classList.remove("input-error")
        textError.hidden = true

        divMain.remove()
        div.classList.remove("hidden")
        div.hidden = true
      let resultEmail =  inputEmail.value
      emailText.innerHTML = resultEmail 
    }
    else{
        inputEmail.classList.add("input-error")
        textError.hidden = false
    }
})
  let end = document.querySelector("button")
  end.addEventListener("click", function(event){
    document.location.reload()
  })