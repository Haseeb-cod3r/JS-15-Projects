const nameError = document.getElementById("name-error")
const phoneError = document.getElementById("phone-error")
const emailError = document.getElementById("email-error")
const messageError = document.getElementById("message-error")
const submitError = document.getElementById("submit-error")


const nameInput = document.getElementById("contact-name")
const number = document.getElementById("number")
const emailBox = document.getElementById("email")
const textarea = document.getElementById("textarea")
const submitBtn = document.getElementById("submitBtn")
const form = document.getElementById("form")




function validateName(){
   let name = nameInput.value

    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        nameInput.style.borderColor = "red"
        return false
    }
    if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameError.innerHTML = "Write full name"
        nameInput.style.borderColor = "red"
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    nameInput.style.borderColor = "#2575fc"
    return true;


}




function validatePhone (){
  let phone = number.value
  
  if(phone.length == 0){
    phoneError.innerHTML = "Phone no is required"
    number.style.borderColor = "red"
    return false;
  }
  if(phone.length !== 11){
    phoneError.innerHTML = "Phone no should be 11 digits"
    number.style.borderColor = "red"
    return false;
  }
  if(!phone.match(/^[0-9]{11}$/)){
    phoneError.innerHTML = "Only digits please"
    number.style.borderColor = "red"
    return false;
  }

  phoneError.innerHTML =  '<i class="fa-regular fa-circle-check"></i>'
  number.style.borderColor = "#2575fc"
  return true;
}




function validateEmail() {
    let email = emailBox.value

    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        emailBox.style.borderColor = "red"
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid"
        emailBox.style.borderColor = "red"
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
      emailBox.style.borderColor = "#2575fc"
    return true;
}





function validateMessage() {
    let message = textarea.value
    let required = 30
    let left = required - message.length;


    if(left > 0){
        messageError.innerHTML = left + " more characters required"
        textarea.style.borderColor = "red"
        return false;
    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    textarea.style.borderColor = "#2575fc"
    return true;
}





function validateForm(){
    if(!validateName() || !validatePhone || !validateEmail || !validateMessage){
        submitError.style.display = "block"
        submitError.innerHTML = "Please fix error to submit"
        setTimeout(() => {
           submitError.style.display = "none"
        }, 3000);
        return false;

    }   
}









nameInput.addEventListener("keyup", ()=>{
  validateName()
})
number.addEventListener("keyup", ()=>{
    validatePhone()
})
email.addEventListener("keyup", ()=>{
    validateEmail()
})
textarea.addEventListener("keyup", ()=>{
    validateMessage()
})
submitBtn.addEventListener("click", ()=>{
    validateForm()
})
form.addEventListener("submit", (e)=>{
  e.preventDefault()
})